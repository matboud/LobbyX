package com.lobbyx.lobbyx.backend.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "types", schema = "lobbyx")
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "real_mode", nullable = false)
    private Integer realMode;

    @Column(name = "fun_mode", nullable = false)
    private Integer funMode;

}