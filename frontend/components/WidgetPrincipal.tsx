import { Button } from "@hilla/react-components/Button.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import icon from "../../src/main/resources/META-INF/resources/images/weather.png";
import { Icon } from "@hilla/react-components/Icon.js";
import styles from "./Styles.module.css";
import Departamento from "Frontend/generated/com/example/application/entity/Departamento";

interface props {
  obj?: Departamento;
}

export default function WidgetPrincipal({ obj }: props) {
  function formatDateText(dateText: string | undefined): string | null {
    if (!dateText) {
      console.warn("formatDateText: Date text is null or undefined.");
      return null;
    }

    try {
      // Extract date parts, handling potential invalid format
      const dateParts = dateText.split(" ");
      if (dateParts.length !== 2) {
        console.warn(
          "formatDateText: Invalid date format. Expected YYYY-MM-DD HH:mm:ss."
        );
        return null;
      }
      const [dateStr, timeStr] = dateParts;

      const [year, month, day] = dateStr.split("-").map(Number);
      const [hour, minute, second] = timeStr.split(":").map(Number);

      // Create Date object with extracted parts
      const date = new Date(year, month - 1, day, hour, minute, second);

      // Format date according to specified locale and options
      const formattedDate = new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);

      // Return formatted date in desired format
      return `${formattedDate.replace(/, /g, ",")}`;
    } catch (error) {
      console.error("formatDateText: Error formatting date:", error);
      return null;
    }
  }
  return (
    <>
      <div className={styles.container} style={{ backgroundColor: "#cfd4fe" }}>
        <VerticalLayout theme="spacing padding" style={{ alignItems: "start" }}>
          <HorizontalLayout>
            <img
              src={icon}
              width={20}
              height={20}
              //TODO: alinear
            ></img>
            -<span>{obj?.nombre ?? "Ciudad"}</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>
              {obj?.pronostico_extendido_list
                ? obj?.pronostico_extendido_list[0]?.dia_text
                : null}
            </span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>
              {obj?.pronostico_extendido_list
                ? formatDateText(
                    obj?.pronostico_extendido_list[0]?.fecha_hora_txt
                  )
                : null}
            </span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>
              {" "}
              {obj?.pronostico_extendido_list
                ? obj?.pronostico_extendido_list[0]?.main?.temp
                : null}{" "}
              °C
            </span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>Estado del Tiempo</span>
          </HorizontalLayout>
          <HorizontalLayout>
            <span>
              {obj?.pronostico_extendido_list
                ? obj?.pronostico_extendido_list[0]?.tiposSituacionClima
                : null}
            </span>
          </HorizontalLayout>
          <HorizontalLayout>
            {/* Viento */}
            <img src={icon} width={20} height={20}></img>
            <span>Viento</span>
            <span>
              {obj?.pronostico_extendido_list
                ? obj?.pronostico_extendido_list[0]?.viento?.velocidad
                : null}{" "}
              km/h
            </span>
            <span>|</span>
            {/* Humedad */}
            <img src={icon} width={20} height={20}></img>
            <span>Humedad</span>
            <span>
              {obj?.pronostico_extendido_list
                ? obj?.pronostico_extendido_list[0]?.main?.humedad
                : null}
              %
            </span>
            <span>|</span>
            {/* Precipitaciones */}
            <img src={icon} width={20} height={20}></img>
            <span>Precipitaciones</span>
            <span>
              <span>
                {obj?.pronostico_extendido_list
                  ? obj?.pronostico_extendido_list[0]
                      ?.probabilidad_precipitacion
                  : null}
                %
              </span>
            </span>
          </HorizontalLayout>
        </VerticalLayout>
      </div>
    </>
  );
}
