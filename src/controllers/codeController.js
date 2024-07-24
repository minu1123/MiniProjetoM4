import { generateCode } from '../utils/codeGenerator.js';

export const getCode = (req, res) => {
  const code = generateCode();
  res.json({ code });
};
