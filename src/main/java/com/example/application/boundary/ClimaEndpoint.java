package com.example.application.boundary;

import com.example.application.client.ClimaInfoClient;
import com.example.application.entity.ClimaRespuesta;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

@Endpoint
public class ClimaEndpoint {
    @Autowired
    ClimaInfoClient climaInfoClient;
    @AnonymousAllowed
    public ClimaRespuesta getPronostico(){
        return climaInfoClient.getClimaInfoFromApi();
    }
}
