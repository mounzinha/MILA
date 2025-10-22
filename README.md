📋 Projeto: Sistema de Cadastro de Usuários com Node.js e MongoDB
🧾 Descrição
Este projeto é um sistema simples de cadastro de usuários, desenvolvido como atividade prática para aplicar os conhecimentos em desenvolvimento web full stack. A aplicação permite cadastrar, listar, editar e excluir usuários, com dados armazenados em um banco de dados MongoDB local.

🚀 Funcionalidades
✅ Cadastrar novos usuários (nome e e-mail)

📄 Listar todos os usuários cadastrados

✏️ Editar dados de um usuário

❌ Excluir um usuário

💾 Persistência de dados com MongoDB

🛠️ Tecnologias Utilizadas
Camada	Tecnologia
Frontend	HTML, CSS, JavaScript puro
Backend	Node.js, Express
Banco de Dados	MongoDB (local), Mongoose
🗂️ Estrutura do Projeto
Código
user-crud-mongo/
├── models/
│   └── User.js           # Modelo do usuário (Mongoose)
├── public/
│   ├── index.html        # Interface do usuário
│   ├── style.css         # Estilo da página
│   └── script.js         # Lógica do frontend
├── server.js             # Servidor Express e rotas da API
└── package.json          # Dependências do projeto
⚙️ Como Executar Localmente
Clone o repositório:

bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:

bash
npm install
Inicie o MongoDB localmente:

No terminal:

bash
mongod
Execute o servidor:

bash
node server.js
Acesse no navegador:

Código
http://localhost:3000
🧠 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados conceitos fundamentais de:

Criação de APIs REST com Express

Manipulação de dados com Mongoose

Integração entre frontend e backend

Estruturação de projetos Node.js

Persistência de dados com MongoDB local

📌 Possíveis Melhorias Futuras
Adicionar autenticação de usuários

Conectar com MongoDB Atlas (nuvem)

Melhorar o design com Bootstrap ou Tailwind

Implementar validações de formulário e mensagens de erro

Criar uma API pública com documentação (Swagger)
