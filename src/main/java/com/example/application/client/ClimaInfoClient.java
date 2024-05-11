package com.example.application.client;


import com.example.application.entity.ClimaRespuesta;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ClimaInfoClient {
    private static final String URL = "https://excelsisdev.github.io/desafiocode/db.json";

    public ClimaRespuesta getClimaInfoFromApi(){
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<ClimaRespuesta> response = restTemplate.getForEntity(URL, ClimaRespuesta.class);
            return response.getBody();
    }

}
