import { MessageList } from "@hilla/react-components/MessageList.js";
import { useEffect, useState } from "react";
import { ListObjects } from "../../components/ListObjetcts";
import SearchBar from "Frontend/components/SearchBar";
import WidgetPrincipal from "../../components/WidgetPrincipal";
import ClimaRespuesta from "Frontend/generated/com/example/application/entity/ClimaRespuesta";

export default function WeatherPage() {
    const [climaInfo, setClimaInfo] = useState<ClimaRespuesta>()
  return (
    <>
      <div className="weather-container" style={{ padding: "15px" }}>
        <SearchBar />
        <WidgetPrincipal />
        {/* <ListObjects items={items} /> */}
      </div>
    </>
  );
}
