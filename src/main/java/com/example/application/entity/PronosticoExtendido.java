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
public class PronosticoExtendido {
    @JsonProperty("fecha_hora_txt")
    private String fechaHoraTexto;
    @JsonProperty("dia_text")
    private String diaNombre;
    @JsonProperty("main")
    private Principal principal;
    private List<Clima> clima;
    private Viento viento;
    private int visibilidad;
    @JsonProperty("probabilidad_precipitacion")
    private double probabilidadPrecipitacion;
    private Lluvia lluvia;
    private TiposSituacionClima tiposSituacionClima;
}
