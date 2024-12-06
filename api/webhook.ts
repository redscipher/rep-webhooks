// importacoes
// import type { NextApiRequest, NextApiResponse } from 'next';
import { VercelRequest, VercelResponse } from '@vercel/node';

// exporta manipulador
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // cria credenciais
  const token = req.headers['x-vercel-token'];
  const tokenEsperado = 'secreto';
  // valida os tokens
  if (token === tokenEsperado) {
     // verifica tipo de requisicao: POST
    if (req.method === 'POST') {
      // acoes p/ posts
      console.log('Dados recebidos do Webhook POST:');
      res.status(200).json({ message: 'Webhook recebido com sucesso!' });
    } else if (req.method === 'GET') {
      // GET
      console.log('Consultando dados do Webhook GET:');
      res.status(200).json({ message: 'Webhook recebido com sucesso!' });
    } else {
      // erro
      res.status(405).json({ message: 'Método não permitido' });
    }
  } else {
    res.status(401).json({ error: 'Não autorizado.' });
    return;
  }
}