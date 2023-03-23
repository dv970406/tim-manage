import { faMessage, faPaperPlane } from "@fortawesome/pro-solid-svg-icons";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSendMessage } from "../../../../client/message/SendMessage.client";
import { theme } from "../../../../css/theme";
import { RowBox } from "../../../atomics/boxes/Boxes";
import { SubmitButton } from "../../../atomics/buttons/buttons";
import { Form } from "../../../atomics/form/Form";
import { Icon } from "../../../atomics/icons/icons";
import { SubText } from "../../../atomics/typographys/texts";
import { TextInput } from "../../../molecules/inputs/TextInput";

interface ISendMessageForm {
  message: string;
}
interface ISendMessage {
  roomId?: string;
}
const SendMessage = ({ roomId }: ISendMessage) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    watch,
  } = useForm<ISendMessageForm>();
  const { sendMessageMutation, sendMessageLoading, sendMessageSuccess } =
    useSendMessage();

  const { message: watchMessage } = watch();
  const onSubmit: SubmitHandler<ISendMessageForm> = ({ message }) => {
    if (sendMessageLoading || !roomId) return;

    sendMessageMutation({
      message,
      roomId,
    });
  };

  useEffect(() => {
    if (sendMessageSuccess) reset();
  }, [sendMessageSuccess]);
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
          noError
          errorMessage={errors.message && errors.message.message}
          placeholder="메시지를 입력하세요."
          icon={faMessage}
        />
        <SubmitButton
          onClick={handleSubmit(onSubmit)}
          disabled={sendMessageLoading || !watchMessage || !!errors.message}
          style={{
            width: "10%",
            padding: theme.spacing.sm,
          }}
        >
          <Icon size="lg" icon={faPaperPlane} />
        </SubmitButton>
      </RowBox>
    </Form>
  );
};

export default SendMessage;
