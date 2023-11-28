package com.lobbyx.lobbyx.backend.repositories;

import com.lobbyx.lobbyx.backend.entities.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<Type, Integer> {
}