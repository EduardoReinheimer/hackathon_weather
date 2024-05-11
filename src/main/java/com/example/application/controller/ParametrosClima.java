package com.example.application.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
//@JsonIgnoreProperties()
public class ParametrosClima {
    private double temperatura;
    private int humedad;
    private double vientoVelocidad;
    private double vientoDireccion;
    private double lluvia;
    private double visibilidad;
    private double precipitacionProbabilidad;
    private double temperaturaMaxima;
    private double temperaturaMinima;

    // Getters y Setters
}
