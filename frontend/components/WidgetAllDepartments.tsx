import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout.js";
import styles from "./Styles.module.css";
import {Grid} from "@hilla/react-components/Grid";
import {useState} from "react";
import Departamento from "Frontend/generated/com/example/application/entity/Departamento";

export default function WidgetAllDepartments() {
    const [climaDepartamentos, setClimaDepartamentos] = useState<Departamento[]>([])
    return(
        <>
            <HorizontalLayout className={styles.container} style={{backgroundColor:"#cfd4fe"}}>
                <Grid items={climaDepartamentos}>
                    <></>
                </Grid>
            </HorizontalLayout>
        </>
    )
}
