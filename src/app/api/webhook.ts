// importacoes
import type { NextApiRequest, NextApiResponse } from 'next';

// exporta manipulador
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // validacoes
  if (req.method === 'POST') {
    // acoes p/ posts
    console.log('Dados recebidos do Webhook:', req.body);
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
  } else if (req.method === 'GET') {
    // acoes p/ gets
    console.log('Consultando dados do Webhook');
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
  } else {
    // retorno de erro
    res.status(405).json({ message: 'Método não permitido' });
  }
}
