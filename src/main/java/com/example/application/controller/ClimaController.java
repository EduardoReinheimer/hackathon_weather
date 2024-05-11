package com.example.application.controller;

import com.example.application.client.ClimaInfoClient;
import com.example.application.entity.TypeTemperature;
import com.example.application.entity.ClimaRespuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClimaController {
    @Autowired
    AlertController alertController;
    @Autowired
    TemperatureController temperatureController;
    @Autowired
    ClimaInfoClient climaInfoClient;
    public ClimaRespuesta getClimaInfo(TypeTemperature typeTemperature){
        ClimaRespuesta climaToReturn = climaInfoClient.getClimaInfoFromApi();
        climaToReturn.getDepartamentos().forEach((d) ->
                    d.getPronosticoExtendidoList().forEach(p -> {
                        alertController.setAlertToClima(p);
                        if(TypeTemperature.FAHRENHEIT.equals(typeTemperature)){
                            temperatureController.setTemperaturaFahrenheitToClima(p);
                        }
                    })
                );
        return climaToReturn;
    }

}
