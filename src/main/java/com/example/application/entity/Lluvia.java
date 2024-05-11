package com.example.application.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Lluvia {
    @JsonProperty("volumen_1h")
    private double volumen1h;

    // Getters y Setters
}
