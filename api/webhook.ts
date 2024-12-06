// importacoes
import express from 'express';
import type { NextApiRequest, NextApiResponse } from 'next';

// tipos
type RetMensagens = {
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

// variaveis globais
let mensagemRecebida: RetMensagens[] = [];
// constantes
const app = express();

//configura app p/ receber .json 
app.use(express.json());

// exporta manipulador
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  // cria credenciais
  const token = req.headers['x-vercel-token'];
  const tokenEsperado = 'secreto';
  // verificacao 
  if (req.method === 'POST') {
    // acoes p/ posts
    mensagemRecebida.push(req.body)
    // retorno p/ quem chamou API
    return res.status(200).json({ mensagemRecebida });
  } else {
    // valida os tokens
    if (token === tokenEsperado) {
      // verifica tipo de requisicao: POST
      if (req.method === 'GET') {
        // GET
        return res.status(200).json({ mensagemRecebida });
      } else {
        // erro
        return res.status(405).json({ message: 'Método não permitido' });
      }
    } else {
      // token incorreto
      return res.status(401).json({ error: 'Não autorizado!' });
    }
  }
}

// coloca o servidor p/ rodar
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});