"use client";
import React, { useState, useCallback } from "react";
import { Button, Spinner } from "@/components/atoms";
import { ToggleFilter } from "@/components/molecules";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredData } from "@/redux/reducers/filterSlice";
import { resetFilter } from "@/redux/reducers/filterSlice";
import type { AppDispatch, RootState } from "@/redux/store/store";

interface FilterProps {
  filters: Record<string, { id: string; title: string }[]>;
}

/**
 * Handles the click event for the filter button.
 * Retrieves the active filter IDs and dispatches an action to fetch filtered data.
 */
const FiltersContainer: React.FC<FilterProps> = ({ filters }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>(
    {}
  );
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);

  const handleToggle = useCallback((id: string, isActive: boolean) => {
    setActiveFilters((prevFilters) => ({ ...prevFilters, [id]: isActive }));
  }, []);

  const handleFilterClick = useCallback(() => {
    const activeFilterIds = Object.entries(activeFilters)
      .filter(([_, isActive]) => isActive)
      .map(([id]) => id);

    if (activeFilterIds.length) {
      setIsFilterActive(true);
      dispatch(fetchFilteredData({ metadataIds: activeFilterIds }));
    }
  }, [activeFilters, dispatch]);

  const handleClearFilter = useCallback(() => {
    setIsFilterActive(false);
    setActiveFilters({});
    dispatch(resetFilter());
  }, [dispatch]);

  const filterLoading = useSelector((state: RootState) => state.filter.loading);

  return (
    <div className="px-4 relative h-auto max-h-[calc(100vh-10rem)] overflow-auto bg-gray-900/40 pt-5 rounded-lg">
      {Object.entries(filters).map(([filterType, filterItems]) => (
        <section key={filterType}>
          <h3 className="text-md text-gray-400 mb-4">
            {filterType.toUpperCase()}:
          </h3>
          {filterItems.map((item) => (
            <ToggleFilter
              key={item.id}
              text={item.title}
              active={!!activeFilters[item.id]}
              onToggle={(isActive) => handleToggle(item.id, isActive)}
              disabled={isFilterActive}
            />
          ))}
        </section>
      ))}
      <div className="sticky bottom-0 w-full pt-4">
        {isFilterActive ? (
          <Button
            srText="Clear Filter"
            className={`${
              filterLoading ? "bg-red-300" : "bg-red-400"
            } w-full h-[56px] text-black mt-2`}
            onClick={handleClearFilter}
            disabled={filterLoading}
          >
            {filterLoading ? <Spinner /> : "Clear Filters"}
          </Button>
        ) : (
          <Button
            srText="Apply Filter"
            className="bg-lime-400 w-full py-4 text-black"
            onClick={handleFilterClick}
          >
            Apply Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default FiltersContainer;
