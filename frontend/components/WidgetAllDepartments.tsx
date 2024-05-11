import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout.js";
import styles from "./Styles.module.css";
import {Grid} from "@hilla/react-components/Grid";
import {useEffect, useState} from "react";
import Departamento from "Frontend/generated/com/example/application/entity/Departamento";
import {GridColumn} from "@hilla/react-components/GridColumn";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout.js";
import {ClimaEndpoint} from "Frontend/generated/endpoints";
import TypeTemperature from "Frontend/generated/com/example/application/entity/TypeTemperature";
import TiposSituacionClima from "Frontend/generated/com/example/application/entity/TiposSituacionClima";

interface  ParamsWidgetAllDepartments{
    typeTemperature: TypeTemperature;
}
export default function WidgetAllDepartments(params : ParamsWidgetAllDepartments) {
    const [climaDepartamentos, setClimaDepartamentos] = useState<Departamento[]>([])
    useEffect(() => {
        ClimaEndpoint.getPronoticoTodosLosDepartamentos(params.typeTemperature).then((v) => {
            setClimaDepartamentos(v)
        })
    }, []);
    return(
        <>
            <HorizontalLayout className={styles.container} style={{backgroundColor:"#cfd4fe"}}>
                <Grid items={climaDepartamentos} style={{backgroundColor:"#cfd4fe"}} allRowsVisible>
                    <GridColumn style={{backgroundColor:"#cfd4fe"}}>
                        {({ item: departamento }) => {
                            return (
                                <HorizontalLayout>
                                    {departamento.pronostico_extendido_list[0]?.tiposSituacionClima == TiposSituacionClima.OPTIMO &&
                                    <h4 style={{backgroundColor: 'green', borderRadius:'25%', marginRight: '0.5rem'}}>
                                    </h4>
                                        }
                                    {departamento.pronostico_extendido_list[0]?.tiposSituacionClima == TiposSituacionClima.PELIGRO &&
                                        <h4 style={{backgroundColor: 'red', borderRadius:'25%', marginRight: '0.5rem'}}>
                                        </h4>
                                    }
                                    {departamento.pronostico_extendido_list[0]?.tiposSituacionClima == TiposSituacionClima.PRECAUCION &&
                                        <h4 style={{backgroundColor: 'yellow', borderRadius:'25%', marginRight: '0.5rem'}}>
                                        </h4>
                                    }
                                    <VerticalLayout>
                                        <h2>
                                            {departamento.nombre}
                                        </h2>
                                        <h4>
                                            {departamento.pronostico_extendido_list[0].clima[0].description}
                                        </h4>
                                    </VerticalLayout>
                                    <h1 style={{marginLeft: 'auto', marginRight:'0'}}>
                                        {departamento.pronostico_extendido_list[0].main.temp} °C
                                    </h1>
                                </HorizontalLayout>
                            )}}
                    </GridColumn>
                </Grid>
            </HorizontalLayout>
        </>
    )
}
