package com.example.application.controller;


import com.example.application.entity.PronosticoExtendido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlertController {
    @Autowired
    EvaluadorDeClimaController evaluadorDeClimaController;
    public void setAlertToClima(PronosticoExtendido pronosticoExtendido){

//        Seteando datos necesarios para poder realizar el calculo de la Situacion climatica

        ParametrosClima parametrosClima = new ParametrosClima();
        parametrosClima.setTemperatura(pronosticoExtendido.getPrincipal().getTemperatura());
        parametrosClima.setTemperaturaMinima(pronosticoExtendido.getPrincipal().getMinima());
        parametrosClima.setTemperaturaMaxima(pronosticoExtendido.getPrincipal().getMaxima());
        parametrosClima.setHumedad(pronosticoExtendido.getPrincipal().getHumedad());
        parametrosClima.setVientoVelocidad(pronosticoExtendido.getViento().getVelocidad());
        parametrosClima.setVientoDireccion(pronosticoExtendido.getViento().getDireccion());
        parametrosClima.setLluvia((pronosticoExtendido.getLluvia().getVolumen1h()));
        parametrosClima.setVisibilidad(pronosticoExtendido.getVisibilidad());
        parametrosClima.setPrecipitacionProbabilidad(pronosticoExtendido.getProbabilidadPrecipitacion());

        pronosticoExtendido.setTiposSituacionClima(evaluadorDeClimaController.getAlertType(parametrosClima));
    }

}
