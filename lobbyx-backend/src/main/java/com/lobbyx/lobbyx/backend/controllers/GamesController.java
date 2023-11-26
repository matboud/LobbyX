package com.lobbyx.lobbyx.backend.controllers;

import com.lobbyx.lobbyx.backend.dtos.GameDto;
import com.lobbyx.lobbyx.backend.dtos.SuggestionDTO;
import com.lobbyx.lobbyx.backend.entities.Game;
import com.lobbyx.lobbyx.backend.repositories.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
        List<SuggestionDTO> suggestionDTOS =games.stream().map(game -> new SuggestionDTO(game.getId(), game.getName(), game.getIcon2())).toList();
        return  ResponseEntity.ok(suggestionDTOS);
    }
    @GetMapping("/search/byid/{id}")
    public ResponseEntity<GameDto> searchById(@PathVariable Integer id){
        Optional<Game> gameOptional = gameRepository.findById(id);
        if (gameOptional.isEmpty())
            return (ResponseEntity<GameDto>) ResponseEntity.status(404);
        return ResponseEntity.ok(gameToGameDTO(gameOptional.get()));
    }

    @GetMapping("/all/{page}/{size}")
    ResponseEntity<List<GameDto>> getAll(@PathVariable Integer page, @PathVariable Integer size) {
        List<GameDto> gameDtos = gameRepository.findAll(PageRequest.of(page, size)).map(this::gameToGameDTO).toList();
        return ResponseEntity.ok(gameDtos);
    }

    GameDto gameToGameDTO(Game game) {
        return new GameDto(
                game.getId(),
                game.getServerGameId(),
                game.getExtearnalGameId(),
                game.getFrontGameId(),
                game.getName(),
                game.getTitle(),
                game.getRatio(),
                game.getStatus(),
                game.getProvider(),
                game.getShowAsProvider(),
                game.getProviderTitle(),
                game.getGameOptions(),
                game.getBlockedCountries(),
                game.getHasAgeRestriction(),
                game.getIcon2(),
                game.getIcon3(),
                game.getGameSkinId(),
                game.getBackground()
        );
    }
}
