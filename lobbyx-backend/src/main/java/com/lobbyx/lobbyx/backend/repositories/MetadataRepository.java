package com.lobbyx.lobbyx.backend.repositories;

import com.lobbyx.lobbyx.backend.entities.Metadata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MetadataRepository extends JpaRepository<Metadata, Integer> {
}