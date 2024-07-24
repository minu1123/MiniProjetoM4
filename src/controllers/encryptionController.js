
import { encryptText } from '../services/encryptionService.js';

export function encrypt(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Text query parameter is required' });
  }

  try {
    const encrypted = encryptText(text);
    return res.json(encrypted);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
