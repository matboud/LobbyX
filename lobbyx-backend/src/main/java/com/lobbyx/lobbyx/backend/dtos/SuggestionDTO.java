package com.lobbyx.lobbyx.backend.dtos;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.lobbyx.lobbyx.backend.entities.Game}
 */
@Value
public class SuggestionDTO implements Serializable {
    Integer id;
    String name;
    String icon2;
    String background;
    Integer likesCount;
    String providerTitle;
}