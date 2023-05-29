import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function BlueButton({ _name, onClick }) {
  // const [name, setName] = useState(_name);

  useEffect(() => {
    console.log(onClick);
  }, [onClick]);
  return (
    <Button
      onClick={() => {
        onClick("test");
      }}
      variant="outline"
      colorScheme="yellow"
      size={"lg"}
    >
      {_name}
    </Button>
  );
}

export function BlueButton2(props) {
  return (
    <>
      <Button variant="outline" colorScheme="yellow" size={"lg"}>
        {props.name}
      </Button>
      <p>{props.detail}</p>
      <br />
    </>
  );
}

export function BlueXsButton({ _name }) {
  return (
    <Button colorScheme="blue" size="xs">
      {_name}
    </Button>
  );
}

export function BlueSmButton({ _name }) {
  return (
    <Button colorScheme="blue" size="sm">
      {_name}
    </Button>
  );
}
