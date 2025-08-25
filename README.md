# 🎬 WillFlix

Um clone inspirado na Netflix, desenvolvido com **Next.js**, **React** e **TypeScript**.  
O projeto consome a API do [TMDB](https://www.themoviedb.org/) para exibir filmes em alta, mais bem avaliados e por categoria.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/)  
- ▲ [Next.js](https://nextjs.org/)  
- 📘 [TypeScript](https://www.typescriptlang.org/)  
- 💅 [Styled-components](https://styled-components.com/)  
- 🎥 [TMDB API](https://developers.themoviedb.org/)  
- 🔑 Variáveis de ambiente para segurança da API Key

---

## 📂 Estrutura do Projeto
willflix/
├── src/
│ ├── app/ # Páginas (Next.js App Router)
│ ├── components/ # Componentes reutilizáveis (Banner, Row, Header, etc)
│ ├── context/ # Context API (AllMoviesProvider, MyListProvider)
│ ├── lib/ # Funções auxiliares (fetch TMDB, requests)
│ ├── utils/ # Tipagens e mocks
│ └── styles/ # Estilização global
├── public/ # Assets estáticos
├── .env # Chaves de API (NEXT_PUBLIC_TMDB_API_KEY)
└── next.config.js # Configuração do Next.js

---

## ⚙️ Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/willflix.git
   cd willflix
2. npm install
3. Crie o arquivo .env na raiz do projeto: NEXT_PUBLIC_TMDB_API_KEY= SUA_CHAVE_DA_TMDB
4. npm run dev
5. Acesse em: Localhost:3000

---
📌 Funcionalidades

🔍 Listagem de filmes em alta, mais bem avaliados e por gênero

🖼️ Banner interativo com destaque para um filme

📋 Minha Lista (adicionar/remover filmes favoritos)

📱 Layout responsivo para mobile e desktop

🎞️ Modal individual de detalhes de filmes/séries

🎭 Skeletons para carregamento suave

---

🛠️ Melhorias Futuras

🔑 Autenticação de usuários

❤️ Lista personalizada por usuário

🌍 Internacionalização (i18n)

---

👨‍💻 Autor

Desenvolvido por William Gomes 💻
