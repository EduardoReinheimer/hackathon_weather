import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout.js";
import styles from "./Styles.module.css";
import {Grid} from "@hilla/react-components/Grid";
import {useEffect, useState} from "react";
import Departamento from "Frontend/generated/com/example/application/entity/Departamento";
import {GridColumn} from "@hilla/react-components/GridColumn";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout.js";
import {ClimaEndpoint} from "Frontend/generated/endpoints";
import TypeTemperature from "Frontend/generated/com/example/application/entity/TypeTemperature";

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
                <Grid items={climaDepartamentos}>
                    <GridColumn>
                        {({ item: departamento }) => {
                            return (
                                <HorizontalLayout>
                                    <VerticalLayout>
                                        <h2>
                                            {departamento.nombre}
                                        </h2>
                                        <h4>
                                            {departamento.pronostico_extendido_list[0].clima[0].description}
                                        </h4>
                                    </VerticalLayout>

                                    <h1>
                                        {departamento.pronostico_extendido_list[0].main.temp}
                                    </h1>
                                </HorizontalLayout>
                            )}}
                    </GridColumn>
                </Grid>
            </HorizontalLayout>
        </>
    )
}
