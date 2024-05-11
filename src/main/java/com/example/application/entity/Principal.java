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
public class Principal {
    @JsonProperty("temp")
    private double temperatura;
    @JsonProperty("temp_min")
    private double minima;
    @JsonProperty("temp_max")
    private double maxima;
    private int humedad;
}
