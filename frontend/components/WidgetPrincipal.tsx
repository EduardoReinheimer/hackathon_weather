import { Button } from "@hilla/react-components/Button.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import icon from "../../src/main/resources/META-INF/resources/images/weather.png";
import { Icon } from "@hilla/react-components/Icon.js";
import styles from "./Styles.module.css";

export default function WidgetPrincipal() {
  return (
    <>
      <div className={styles.container}>
        <VerticalLayout theme="spacing padding" style={{ alignItems: "start" }}>
          <HorizontalLayout>
            <img
              src={icon}
              width={20}
              height={20}
              //TODO: alinear
            ></img>
            -<span>Asuncion</span>
            <span>,</span>
            <span>Central</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>HOY</span>
            <span>,</span>
            <span>Sábado</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>11 de Mayo 2024</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>26 °C</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>Estado del Tiempo</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>Óptimo</span>
          </HorizontalLayout>
          <HorizontalLayout>
            {/* Viento */}
            <img src={icon} width={20} height={20}></img>
            <span>Viento</span>
            <span>10km/h</span>
            <span>|</span>
            {/* Humedad */}
            <img src={icon} width={20} height={20}></img>
            <span>Humedad</span>
            <span>{``}</span>
            <span>|</span>
          </HorizontalLayout>
        </VerticalLayout>
      </div>
    </>
  );
}
