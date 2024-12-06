// importacoes
import type { NextApiRequest, NextApiResponse } from 'next';

// exporta manipulador
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // verifica tipo de requisicao: POST
  if (req.method === 'POST') {
    // acoes p/ posts
    console.log('Dados recebidos do Webhook:', req.body);
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
  } else if (req.method === 'GET') {
    // GET
    console.log('Consultando dados do Webhook');
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
  } else {
    // erro
    res.status(405).json({ message: 'Método não permitido' });
  }
}

// exportacao
export default handler