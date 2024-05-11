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
public class Departamento {
    private int id;
    private String nombre;
    @JsonProperty("población")
    private int poblacion; // Nota: Usar @JsonProperty para mapear correctamente si es necesario
    @JsonProperty("coord")
    private Coordenada coordenadas;
    @JsonProperty("pronostico_extendido_list")
    private List<PronosticoExtendido> pronosticoExtendidoList;
}
