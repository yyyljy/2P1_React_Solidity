import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextOrange, { TextMsgArea } from "../atoms/Text";
import BlueButton from "../atoms/Button";

export default function MessageForm() {
  const [msg, setMsg] = useState();

  useEffect(() => {
    console.log(msg);
  }, [msg]);

  return (
    <Flex direction={"column"}>
      <BlueButton _name={"onClick Example"} onClick={setMsg} />
      <TextOrange text={"2P1 Blockchain Messenger"} />
      <TextMsgArea msg={msg} />
      [______메___세___지___입___력___칸______] [ 전_송_버_튼 ]
    </Flex>
  );
}
