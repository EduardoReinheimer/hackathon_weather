import { MessageList } from "@hilla/react-components/MessageList.js";
import { useEffect, useState } from "react";
import { ListObjects } from "../../components/ListObjetcts";
import SearchBar from "Frontend/components/SearchBar";
import WidgetPrincipal from "../../components/WidgetPrincipal";
import Departamento from "Frontend/generated/com/example/application/entity/Departamento";
import WidgetAllDepartments from "Frontend/components/WidgetAllDepartments";
import typeTemperature from "Frontend/generated/com/example/application/entity/TypeTemperature";
import TypeTemperature from "Frontend/generated/com/example/application/entity/TypeTemperature";

export default function WeatherPage() {
  const [climaInfo, setClimaInfo] = useState<Departamento>();
  const [typeTemperature, setTypeTemperature] = useState(
    TypeTemperature.CELSIUS
  );
  function updateClimaInfo(climaDepartamento: Departamento) {
    setClimaInfo(climaDepartamento);
  }
  return (
    <>
      <div className="weather-container" style={{ padding: "15px" }}>
        <SearchBar setClima={updateClimaInfo} />
        {climaInfo ? <WidgetPrincipal obj={climaInfo} /> : null}
        {/* <ListObjects items={items} /> */}

        <WidgetAllDepartments typeTemperature={typeTemperature} />
      </div>
    </>
  );
}
