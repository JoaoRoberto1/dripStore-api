import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // Carregar variáveis do arquivo .env

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'API rodando com dotenv!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
