import { MessageList } from "@hilla/react-components/MessageList.js";
import { useEffect, useState } from "react";

interface ListProps {
  items?: Array<any>;
}
//Here we'll List the objects
//TODO: Add a type in items
export function ListObjects({ items }: ListProps) {
  const [person, setPerson] = useState([{}]);
  useEffect(() => {
    // obtener datos
  }, []);

  return <MessageList items={items} />;
}
