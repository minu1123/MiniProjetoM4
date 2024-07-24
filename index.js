import express from 'express';
import codeRoutes from './src/routes/code.routes.js';
import encryptionRoutes from './src/routes/encryption.routes.js';
import booksRoutes from './src/routes/books.routes.js';
import educationGapRoutes from './src/routes/educationGap.routes.js';

const app = express();
const port = 3000;

app.use('/api/code', codeRoutes);
app.use('/api/encryption', encryptionRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/education-gap', educationGapRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
