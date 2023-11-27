package com.lobbyx.lobbyx.backend.controllers;

import com.lobbyx.lobbyx.backend.dtos.GameDto;
import com.lobbyx.lobbyx.backend.dtos.SuggestionDTO;
import com.lobbyx.lobbyx.backend.entities.Game;
import com.lobbyx.lobbyx.backend.entities.GamesMetadata;
import com.lobbyx.lobbyx.backend.repositories.GameRepository;
import com.lobbyx.lobbyx.backend.repositories.GamesMetadataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class GamesController {
    private final GameRepository gameRepository;
    //private final MetadataRepository metadataRepository;
    private final GamesMetadataRepository gamesMetadataRepository;

    @GetMapping("/suggestion/{suggestContent}")
    public ResponseEntity<List<SuggestionDTO>> suggest(@PathVariable String suggestContent) {
        if (suggestContent.length() < 3)
            return ResponseEntity.ok(new ArrayList<>());
        List<Game> games = gameRepository.findAllByNameContains(suggestContent);
        games.forEach(game -> {
            Set<GamesMetadata> gamesMetadata = game.getGamesMetadata();
            gamesMetadata.forEach(gamesMetadata1 -> System.out.println(gamesMetadata1.getMetadataId()));
        });
        List<SuggestionDTO> suggestionDTOS = games.stream().map(game -> new SuggestionDTO(game.getId(), game.getName(), game.getIcon2())).toList();
        return ResponseEntity.ok(suggestionDTOS);
    }

    @GetMapping("/search/byid/{id}")
    public ResponseEntity<GameDto> searchById(@PathVariable Integer id) {
        Optional<Game> gameOptional = gameRepository.findById(id);
        return gameOptional.map(game -> ResponseEntity.ok(gameToGameDTO(game))).orElseGet(() ->ResponseEntity.badRequest().body(null));
    }

    @GetMapping("/filter/{page}/{size}")
    public ResponseEntity<List<GameDto>> searchById(
            @RequestParam("metadata-ids") List<Integer> metadataIds,
            @PathVariable Integer page,
            @PathVariable Integer size) {
        List<GamesMetadata> gamesMetadataList = gamesMetadataRepository.findByMetadataIdIn(metadataIds, PageRequest.of(page, size));
        List<Game> games = new ArrayList<>();
        gamesMetadataList.forEach(gamesMetadata -> {
            if (!games.contains(gamesMetadata.getGame()))
                games.add(gamesMetadata.getGame());
        });
        return ResponseEntity.ok(games.stream().map(this::gameToGameDTO).toList());
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
                game.getBackground(),
                game.getGamesMetadata().stream().map(GamesMetadata::getMetadataId).toList()
        );
    }
}
