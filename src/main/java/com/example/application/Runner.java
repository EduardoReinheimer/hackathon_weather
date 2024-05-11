package com.example.application;

//import com.example.application.client.ClimaInfoClient;
//import jakarta.annotation.PostConstruct;
//import org.springframework.beans.factory.annotation.Autowired;
import com.example.application.client.ClimaInfoClient;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Runner {
    @Autowired
    ClimaInfoClient climaInfoClient;
    @PostConstruct
    void init(){
        System.out.println(climaInfoClient.getClimaInfoFromApi());
    }
}
