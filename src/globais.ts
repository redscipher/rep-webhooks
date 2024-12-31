//constantes
export const mensagemRecebida: RetMensagens[] = [];
export const porta: number = 3000   //porta em que o servidor rodara
export const tokenParam: string = 'x-vercel-token'    //nome do parametro que devera ser passado nas requisicoes do webhook
export const tokenEsperado: string = 'secreto';   //token p/ autorizar metodos webhook

// tipos
export type RetMensagens = {
    isStatusReply: boolean,
    chatLid: string,
    connectedPhone: string,
    waitingMessage: boolean,
    isEdit: boolean,
    isGroup: boolean,
    isNewsletter: boolean,
    instanceId: string,
    messageId: string,
    phone: string,
    fromMe: boolean,
    momment: string,
    status: string,
    chatName: string,
    senderPhoto: string,
    senderName: string,
    photo: string,
    broadcast: boolean,
    participantId: string,
    forwarded: boolean,
    type: string,
    fromApi: boolean,
    text: PropsMensangens
}

type PropsMensangens = {
  message: string
}