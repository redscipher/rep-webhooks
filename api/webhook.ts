// importacoes
import type { NextApiRequest, NextApiResponse } from 'next';

// exporta manipulador
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // cria credenciais
  const token = req.headers['x-vercel-token'];
  const tokenEsperado = 'secreto';
  // valida os tokens
  if (token === tokenEsperado) {
     // verifica tipo de requisicao: POST
    if (req.method === 'POST') {
      // acoes p/ posts
      console.log('Dados recebidos do Webhook POST:' + req.body);
      res.status(200).json({ message: `Webhook recebido com sucesso! ${req.body}` });
    } else if (req.method === 'GET') {
      // GET
      console.log('Consultando dados do Webhook GET:' + req.query);
      res.status(200).json({ message: `Webhook recebido com sucesso! ${req.query}` });
    } else {
      // erro
      res.status(405).json({ message: 'Método não permitido' });
    }
  } else {
    res.status(401).json({ error: 'Não autorizado.' });
    return;
  }
}