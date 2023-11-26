package com.lobbyx.lobbyx.backend.repositories;

import com.lobbyx.lobbyx.backend.entities.GamesMetadata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GamesMetadataRepository extends JpaRepository<GamesMetadata, Integer> {
}