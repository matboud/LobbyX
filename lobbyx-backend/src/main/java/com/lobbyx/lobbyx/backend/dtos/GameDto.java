package com.lobbyx.lobbyx.backend.dtos;

import lombok.Value;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link com.lobbyx.lobbyx.backend.entities.Game}
 */
@Value
public class GameDto implements Serializable {
    Integer id;
    String serverGameId;
    String extearnalGameId;
    String frontGameId;
    String name;
    String title;
    String ratio;
    String status;
    String provider;
    String showAsProvider;
    String providerTitle;
    String gameOptions;
    String blockedCountries;
    Long hasAgeRestriction;
    String icon2;
    String icon3;
    String gameSkinId;
    String background;
    List<Integer> metadataIds;
}