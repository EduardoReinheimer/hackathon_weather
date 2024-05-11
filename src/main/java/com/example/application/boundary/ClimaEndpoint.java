package com.example.application.boundary;

import com.example.application.client.ClimaInfoClient;
import com.example.application.controller.ClimaController;
import com.example.application.entity.ClimaRespuesta;
import com.example.application.entity.Departamento;
import com.example.application.entity.TypeTemperature;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Endpoint
public class ClimaEndpoint {
    @Autowired
    ClimaController climaController;
    @AnonymousAllowed
    public Departamento getPronostico(TypeTemperature typeTemperature){
        return climaController.getClimaInfo(typeTemperature).getDepartamentos().getFirst();
    }
    @AnonymousAllowed
    public List<Departamento> getPronoticoTodosLosDepartamentos(TypeTemperature typeTemperature){
        return climaController.getClimaInfo(typeTemperature).getDepartamentos();
    }
//    @AnonymousAllowed
//    public Departamento getPronostico(TypeTemperature typeTemperature){
//        return climaController.getClimaInfo(typeTemperature).getDepartamentos().getFirst();
//    }
}
