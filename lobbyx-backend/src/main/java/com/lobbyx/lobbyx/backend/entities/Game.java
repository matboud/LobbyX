package com.lobbyx.lobbyx.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "games", schema = "lobbyx")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "server_game_id", length = 1024)
    private String serverGameId;

    @Column(name = "extearnal_game_id", length = 1024)
    private String extearnalGameId;

    @Column(name = "front_game_id", length = 1024)
    private String frontGameId;

    @Column(name = "name", length = 1024)
    private String name;

    @Column(name = "title", length = 1024)
    private String title;

    @Column(name = "ratio", length = 1024)
    private String ratio;

    @Column(name = "status", length = 1024)
    private String status;

    @Column(name = "provider", length = 1024)
    private String provider;

    @Column(name = "show_as_provider", length = 1024)
    private String showAsProvider;

    @Column(name = "provider_title", length = 1024)
    private String providerTitle;

    @Column(name = "game_options", length = 1024)
    private String gameOptions;

    @Column(name = "blocked_countries", length = 1024)
    private String blockedCountries;

    @Column(name = "has_age_restriction")
    private Long hasAgeRestriction;

    @Column(name = "icon_2", length = 1024)
    private String icon2;

    @Column(name = "icon_3", length = 1024)
    private String icon3;

    @Column(name = "game_skin_id", length = 1024)
    private String gameSkinId;

    @Column(name = "background", length = 1024)
    private String background;

    @OneToMany(mappedBy = "game", fetch = FetchType.EAGER)
    private Set<GamesMetadata> gamesMetadata = new LinkedHashSet<>();

}