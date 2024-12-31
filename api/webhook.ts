// importacoes
import express from 'express';
import type { NextApiRequest, NextApiResponse } from 'next';
//parametros
import { mensagemRecebida, porta, tokenEsperado, tokenParam } from '@/globais.js';

// constantes
const app = express();

//configura app p/ receber .json 
app.use(express.json());

// exporta manipulador
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<unknown> {
  //variaveis
  let codigo: number;
  let objResposta: unknown;
  // verificacao 
  switch (req.method) {
    case 'POST':
      // acoes p/ posts
      mensagemRecebida.push(req.body)
      // retorno p/ quem chamou API
      codigo = 200
      objResposta = { message: 'POST realizado!' }
    case 'GET':
      //cria credenciais
      const token = req.headers[tokenParam];
      //valida os tokens
      if (token === tokenEsperado) {
        codigo = 200
        objResposta = mensagemRecebida
      } else {
        //token incorreto
        codigo = 401
        objResposta = { message: 'Não autorizado!' }
      }
    default:
      //erro
      codigo = 405
      objResposta = { message: 'Método não permitido!' }
  }
  //def retorno
  return res.status(codigo).json({ objResposta });
}

// coloca o servidor p/ rodar
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});