import { Button } from "@hilla/react-components/Button.js";
import { FormLayout } from "@hilla/react-components/FormLayout.js";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { Icon } from "@hilla/react-components/Icon.js";
import { TextField } from "@hilla/react-components/TextField.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { useState } from "react";
import icon from "../../src/main/resources/META-INF/resources/images/weather.png";

enum CheckTypeTemperature {
  Fahrenheit,
  Celsius,
}

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [checked, setChecked] = useState(false);
  const [typeTemperatureType, setTypeTemperatureType] =
    useState<CheckTypeTemperature>(CheckTypeTemperature.Celsius);
  const handleTemperatureChange = (newType: CheckTypeTemperature) => {
    setTypeTemperatureType(newType);
  };

  //   function handleSubmit(event: Clic) {
  //     const message = event.detail.value;
  //     console.log(message);
  //   }
  return (
    <div className="search-bar" style={{ padding: "15px" }}>
      <VerticalLayout theme="spacing" style={{ alignItems: "start" }}>
        <FormLayout responsiveSteps={[{ columns: 7 }]}>
          {/* Icon */}
          <img
            src={icon}
            width={80}
            height={80}
            //TODO: alinear
          ></img>
          {/* Search Text */}
          <TextField
            {...{ colspan: 4 }}
            style={{ alignSelf: "center" }}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Search Button */}
          <Button theme="primary" style={{ alignSelf: "center" }}>
            Buscar
          </Button>

          {/* CheckTemperature */}
          <HorizontalLayout
            style={{ alignItems: "stretch", alignSelf: "center" }}
          >
            <Button
              theme={
                typeTemperatureType === CheckTypeTemperature.Celsius
                  ? "primary"
                  : "secondary"
              }
              onClick={() =>
                handleTemperatureChange(CheckTypeTemperature.Celsius)
              }
            >
              C
            </Button>
            <Button
              theme={
                typeTemperatureType === CheckTypeTemperature.Fahrenheit
                  ? "primary"
                  : "secondary"
              }
              onClick={() =>
                handleTemperatureChange(CheckTypeTemperature.Fahrenheit)
              }
            >
              F
            </Button>
          </HorizontalLayout>
        </FormLayout>
      </VerticalLayout>
    </div>
  );
}
