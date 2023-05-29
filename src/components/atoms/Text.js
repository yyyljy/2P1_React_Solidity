import { Text, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function TextOrange(props) {
  return (
    <div>
      <Text color={"orange.400"} fontWeight={"600"} fontSize={"35px"}>
        {props.text}
      </Text>
    </div>
  );
}

export function TextMsgArea(props) {
  const [msg, setMsg] = useState();

  useEffect(() => {
    if (props.msg) {
      setMsg(props.msg);
    } else {
      setMsg(`
      To Do - Atomic Design을 활용하여
      
      본 박스 아래에 메시지 전송 칸을 만들어주세요
      
      Hint : <Input> , <Button>

      ----------------------------------------
      다음 시간에는 onClick Example을 참고해서
      
      전송 버튼을 누르면 입력칸에 적은 메세지가
      
      새로운 줄에 추가되는 걸 해볼 예정입니다.
      ----------------------------------------
      그 후에는 블록체인에 메세지를 저장하고
      
      저장된 모든 메세지를 읽어와서
      
      서로 메세지를 주고 받을 수 있는
      
      메신저를 만들어 봅시다
      ----------------------------------------
      `);
    }
  }, [props]);
  return (
    <div>
      <Textarea
        width={"500px"}
        height={"500px"}
        border={"inset orange 10px"}
        placeholder="이 곳에 직접 텍스트 입력도 가능합니다."
        value={msg}
      ></Textarea>
    </div>
  );
}
