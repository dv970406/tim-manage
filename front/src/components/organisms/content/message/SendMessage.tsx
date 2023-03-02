import { faMessage } from "@fortawesome/pro-solid-svg-icons";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSendMessage } from "../../../../client/message/SendMessage.client";
import { theme } from "../../../../css/theme";
import { RowBox } from "../../../atomics/boxes/Boxes";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { SubText } from "../../../atomics/typographys/texts";
import { EndSubmitButton } from "../../../molecules/buttons/Buttons";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ISendMessageForm {
  message: string;
}
interface ISendMessage {
  roomId?: string;
  listenerId?: string;
}
const SendMessage = ({ roomId, listenerId }: ISendMessage) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ISendMessageForm>();
  const { sendMessageMutation, sendMessageLoading } = useSendMessage();

  const onSubmit: SubmitHandler<ISendMessageForm> = ({ message }) => {
    if (sendMessageLoading) return;

    sendMessageMutation({
      message,
      ...(roomId && { roomId }),
      ...(listenerId && { listenerId }),
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <RowBox>
        <TextInput
          register={register("message", {
            required: {
              value: true,
              message: "메시지는 필수입니다.",
            },

            maxLength: {
              value: 100,
              message: "한번에 보낼 수 있는 메시지는 100자 이하입니다.",
            },
          })}
          errorMessage={errors.message && errors.message.message}
          placeholder="메시지를 입력하세요."
          icon={faMessage}
        />
        <SubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={sendMessageLoading}
          style={{
            width: "20%",
            padding: theme.spacing.sm,
          }}
        >
          <SubText>전송</SubText>
        </SubmitButton>
      </RowBox>
    </Form>
  );
};

export default SendMessage;
