import { MessageList } from "@hilla/react-components/MessageList.js";
import { useEffect, useState } from "react";
import { ListObjects } from "../../components/ListObjetcts";
import SearchBar from "Frontend/components/SearchBar";
import WidgetPrincipal from "../../components/WidgetPrincipal";
import Departamento from "Frontend/generated/com/example/application/entity/Departamento";

export default function WeatherPage() {
    const [climaInfo, setClimaInfo] = useState<Departamento>()
    function updateClimaInfo(climaDepartamento: Departamento){
        setClimaInfo(climaDepartamento)
    }
  return (
    <>
      <div className="weather-container" style={{ padding: "15px" }}>
        <SearchBar setClima={updateClimaInfo}/>
        <WidgetPrincipal />
        {/* <ListObjects items={items} /> */}
      </div>
    </>
  );
}
