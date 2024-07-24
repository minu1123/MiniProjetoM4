
import { encryptText } from '../services/encryptionService.js';

export function encrypt(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'O parâmetro de consulta "text" é obrigatório' });
  }

  if (typeof text !== 'string') {
    return res.status(400).json({ error: 'O parâmetro de consulta "text" deve ser uma string' });
  }

  try {
    const encrypted = encryptText(text);
    return res.json(encrypted);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criptografar o texto: ' + error.message });
  }
}
