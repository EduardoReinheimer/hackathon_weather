import { Button } from "@hilla/react-components/Button.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import icon from "../../src/main/resources/META-INF/resources/images/weather.png";

export default function WidgetPrincipal() {
  return (
    <>
      <VerticalLayout theme="spacing padding" style={{ alignItems: "start" }}>
        <HorizontalLayout>
          <img
            src={icon}
            width={80}
            height={80}
            //TODO: alinear
          ></img>
        </HorizontalLayout>
        
      </VerticalLayout>
    </>
  );
}
