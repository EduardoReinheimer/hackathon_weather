package com.example.application.boundary;

import com.example.application.client.ClimaInfoClient;
import com.example.application.controller.ClimaController;
import com.example.application.entity.ClimaRespuesta;
import com.example.application.entity.TypeTemperature;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

@Endpoint
public class ClimaEndpoint {
    @Autowired
    ClimaController climaController;
    @AnonymousAllowed
    public ClimaRespuesta getPronostico(TypeTemperature typeTemperature){
        return climaController.getClimaInfo(typeTemperature);
    }
}
