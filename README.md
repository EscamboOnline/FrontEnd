# FrontEnd

*Estrutura*

A estrutura está assim(backend obviamente nao está nesse repositorio,mas o deixei citado abaixo para que não estranhem a estrutura um pouco diferente do que o jacques fez até então):


```
my-app/
├── backend/                  # ← Backend (API Express, conexão Firebase, etc.)
│   ├── src/                  # Código-fonte do backend
│   │   ├── controllers/      # Funções que lidam com as requisições (ex: login, cadastro)
│   │   ├── routes/           # Define os endpoints da API (ex: POST /login)
│   │   ├── services/         # Lógica de negócio e integração com Firebase ou outros serviços
│   │   └── index.js          # Ponto de entrada do servidor Express (app.listen etc.)
│   ├── Dockerfile            # Define como criar a imagem Docker do backend
│   ├── .env                  # Variáveis de ambiente do backend (ex: PORT, chaves do Firebase)
│   └── package.json          # Dependências e scripts do backend (ex: express, firebase-admin)
│
├── src/                      # Frontend React Native
│   ├── assets/               # Imagens, fontes, ícones usados no app
│   ├── components/           # Componentes reutilizáveis (botões, inputs, cards, etc.)
│   ├── constants/            # Cores, tamanhos de fonte, textos fixos, etc.
│   ├── hooks/                # Hooks customizados (ex: useAuth, useFetch)
│   ├── navigation/           # Navegação do app (ex: stacks, tabs, etc.)
│   ├── pages/                # Telas do app, organizadas por funcionalidade
│   │   ├── Home/             # Página/tela inicial
│   │   ├── SignIn/           # Página de login
│   │   └── SignUp/           # Página de cadastro
│   ├── services/             # Integração com APIs (ex: api.js com axios, auth.js com Firebase)
│   ├── store/                # Estado global (ex: Redux, Zustand, Context API)
│   └── utils/                # Funções auxiliares (ex: validações, formatadores)
│
├── .env                      # Variáveis de ambiente do frontend (ex: URL da API)
├── App.js                    # Arquivo principal que inicia o app React Native
├── package.json              # Dependências e scripts do frontend
└── babel.config.js           # Configuração do Babel para transformar código moderno JS
