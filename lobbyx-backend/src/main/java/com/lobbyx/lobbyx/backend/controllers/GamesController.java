package com.lobbyx.lobbyx.backend.controllers;

import com.lobbyx.lobbyx.backend.dtos.SuggestionDTO;
import com.lobbyx.lobbyx.backend.entities.Game;
import com.lobbyx.lobbyx.backend.repositories.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class GamesController {
    private final GameRepository gameRepository;

    @GetMapping("/suggestion/{suggestContent}")
    public ResponseEntity<List<SuggestionDTO>> suggest(@PathVariable String suggestContent){
        if(suggestContent.length()<3)
            return ResponseEntity.ok(new ArrayList<>());
        List<Game> games = gameRepository.findAllByNameContains(suggestContent);
        List<SuggestionDTO> suggestionDTOS =games.stream().map(game -> new SuggestionDTO(game.getId(), game.getName())).toList();
        return  ResponseEntity.ok(suggestionDTOS);
    }

}
