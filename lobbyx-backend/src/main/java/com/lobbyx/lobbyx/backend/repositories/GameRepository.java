package com.lobbyx.lobbyx.backend.repositories;

import com.lobbyx.lobbyx.backend.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Integer> {
    List<Game> findAllByNameContains(String name);
    Optional<Game> findById(Integer id);
}