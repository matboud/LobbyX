package com.lobbyx.lobbyx.backend.repositories;

import com.lobbyx.lobbyx.backend.entities.GamesMetadata;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GamesMetadataRepository extends JpaRepository<GamesMetadata, Integer> {
    List<GamesMetadata> findByMetadataIdIn(List<Integer> metadataIds, Pageable pageable);
}