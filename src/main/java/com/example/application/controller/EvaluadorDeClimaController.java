package com.example.application.controller;

import com.example.application.entity.TiposSituacionClima;
import org.springframework.stereotype.Service;

@Service
public class EvaluadorDeClimaController {

    public TiposSituacionClima getAlertType(ParametrosClima parametrosClima) {
        // Evaluar el viento
        if (parametrosClima.getVientoVelocidad() > 75) {
            return TiposSituacionClima.PELIGRO;
        } else if (parametrosClima.getVientoVelocidad() > 50) {
            return TiposSituacionClima.PRECAUCION;
        }

        // Evaluar la visibilidad
        if (parametrosClima.getVisibilidad() < 1000) {
            return TiposSituacionClima.PELIGRO;
        } else if (parametrosClima.getVisibilidad() < 5000) {
            return TiposSituacionClima.PRECAUCION;
        }

        // Evaluar precipitación
        if (parametrosClima.getPrecipitacionProbabilidad() > 0.8 || parametrosClima.getLluvia() > 50) {
            return TiposSituacionClima.PELIGRO;
        } else if (parametrosClima.getPrecipitacionProbabilidad() > 0.5 || parametrosClima.getLluvia() > 30) {
            return TiposSituacionClima.PRECAUCION;
        }

        // Consideraciones de temperatura
        if (parametrosClima.getTemperatura() < -10 || parametrosClima.getTemperatura() > 40) {
            return TiposSituacionClima.PELIGRO;
        } else if (parametrosClima.getTemperatura() < 0 || parametrosClima.getTemperatura() > 35) {
            return TiposSituacionClima.PRECAUCION;
        }

        // Consideraciones de temperatura estimadas
        if (parametrosClima.getTemperaturaMinima() < -10 || parametrosClima.getTemperaturaMaxima() > 40) {
            return TiposSituacionClima.PELIGRO;
        } else if (parametrosClima.getTemperaturaMinima() < 0 || parametrosClima.getTemperaturaMaxima() > 35) {
            return TiposSituacionClima.PRECAUCION;
        }

        // Consideraciones de humedad
        if (parametrosClima.getHumedad() > 95) {
            return TiposSituacionClima.PRECAUCION;
        }

        return TiposSituacionClima.OPTIMO;
    }
}
