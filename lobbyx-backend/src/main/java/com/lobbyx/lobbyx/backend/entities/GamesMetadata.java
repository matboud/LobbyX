package com.lobbyx.lobbyx.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "games_metadata", schema = "lobbyx")
public class GamesMetadata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "metadata_id", nullable = false, insertable = false, updatable = false)
    private Integer metadataId;

    @Column(name = "game_id", nullable = false, insertable = false, updatable = false)
    private Integer gameId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "game_id")
    private Game game;

}