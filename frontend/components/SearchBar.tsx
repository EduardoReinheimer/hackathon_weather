import {Button} from "@hilla/react-components/Button.js";
import {FormLayout} from "@hilla/react-components/FormLayout.js";
import {TextField} from "@hilla/react-components/TextField.js";
import {VerticalLayout} from "@hilla/react-components/VerticalLayout.js";
import {useState} from "react";
import icon from "../../src/main/resources/META-INF/resources/images/weather.png";
import ClimaRespuesta from "Frontend/generated/com/example/application/entity/ClimaRespuesta";
import {ClimaEndpoint} from "Frontend/generated/endpoints";
import TypeTemperature from "Frontend/generated/com/example/application/entity/TypeTemperature";
import {HorizontalLayout} from "@hilla/react-components/HorizontalLayout.js";


interface ParamsSearchBar{
  setClima: (clima: ClimaRespuesta) => {}
}

export default function SearchBar(params:ParamsSearchBar) {
  const [searchText, setSearchText] = useState("");
  const [checked, setChecked] = useState(false);
  const [typeTemperatureType, setTypeTemperatureType] =
    useState<TypeTemperature>(TypeTemperature.CELSIUS);
  const handleTemperatureChange = (newType: TypeTemperature) => {
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
          <Button theme="primary" style={{ alignSelf: "center" }} onClick={() =>{
            if(searchText)
            if(typeTemperatureType == TypeTemperature.FAHRENHEIT) {
              ClimaEndpoint.getPronostico(TypeTemperature.FAHRENHEIT).then((v) =>{
                params.setClima(v)
              })
            }else if(typeTemperatureType == TypeTemperature.CELSIUS) {
              ClimaEndpoint.getPronostico(TypeTemperature.CELSIUS).then((v) => {
                params.setClima(v)
              })
            }
          }}>
            Buscar
          </Button>

          {/* CheckTemperature */}
          <HorizontalLayout
            style={{ alignItems: "stretch", alignSelf: "center" }}
          >
            <Button
              theme={
                typeTemperatureType === TypeTemperature.CELSIUS
                  ? "primary"
                  : "secondary"
              }
              onClick={() =>
                handleTemperatureChange(TypeTemperature.CELSIUS)
              }
            >
              C
            </Button>
            <Button
              theme={
                typeTemperatureType === TypeTemperature.FAHRENHEIT
                  ? "primary"
                  : "secondary"
              }
              onClick={() =>
                handleTemperatureChange(TypeTemperature.FAHRENHEIT)
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
