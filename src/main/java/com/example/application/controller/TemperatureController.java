package com.example.application.controller;

import com.example.application.entity.PronosticoExtendido;
import org.springframework.stereotype.Service;

@Service
public class TemperatureController {
    public void setTemperaturaFahrenheitToClima(PronosticoExtendido pronosticoExtendido){
        double temperaturaCelcius = pronosticoExtendido.getPrincipal().getTemperatura();
        pronosticoExtendido.getPrincipal().setTemperatura(celsiusToFahrenheit(temperaturaCelcius));
    }
    private static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9.0 / 5.0) + 32;
    }
}
