import React from "react";

interface DetailsProps {
  dt: string;
  dd: string | number | JSX.Element;
}

/**
 * Renders a details component with a term and description.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.dt - The term to be displayed.
 * @param {string} props.dd - The description to be displayed.
 * @returns {JSX.Element} The rendered Details component.
 */
const Details: React.FC<DetailsProps> = ({ dt, dd }) => {
  return (
    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-bold text-white">{dt}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
        {dd}
      </dd>
    </div>
  );
};

export default Details;
