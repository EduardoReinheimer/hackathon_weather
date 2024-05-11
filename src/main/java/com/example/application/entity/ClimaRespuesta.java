package com.example.application.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ClimaRespuesta {
    @JsonProperty("cod")
    private String codigo;
    @JsonProperty("message")
    private int mensaje;
    @JsonProperty("departamento_list")
    private List<Departamento> departamentos;
}
