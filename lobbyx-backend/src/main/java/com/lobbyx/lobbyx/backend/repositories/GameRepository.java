package com.lobbyx.lobbyx.backend.repositories;

import com.lobbyx.lobbyx.backend.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Integer> {
    List<Game> findAllByNameContains(String name);
}