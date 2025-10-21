const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');

const app = express();
const PORT = 3000;

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/usercrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch(err => console.error('🔴 Erro ao conectar no MongoDB:', err));

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send();
});

app.put('/users/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send();
});

app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send();
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
