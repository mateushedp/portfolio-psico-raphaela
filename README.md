# Raphaela Andrades — Landing Page

**🔗 [Ver projeto ao vivo](https://portfolio-psico-raphaela.vercel.app/)**

Landing page profissional desenvolvida para a psicóloga Raphaela Andrades, com foco em clareza visual, acessibilidade e experiência do usuário.

## Stack

- **Next.js 15** (App Router) — SSG, roteamento e otimização de imagens
- **Tailwind CSS v4** — estilização com design tokens customizados
- **TypeScript** — tipagem estática
- **Zod** — validação do formulário de contato
- **Resend** — envio de e-mails a partir do formulário

## Funcionalidades

- Design responsivo (mobile e desktop)
- Navegação com detecção de seção ativa via IntersectionObserver
- Formulário de contato com validação e envio de e-mail
- Fontes otimizadas via `next/font` (Manrope + Headland One)

## Estrutura

```
src/
├── app/
│   ├── api/contact/      # Route handler para envio de e-mail
│   ├── layout.tsx        # Metadata, fontes globais
│   └── page.tsx          # Composição das sections
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Services, Contact
│   └── ui/               # Componentes reutilizáveis (FormField, ContactInfo, SectionHeading...)
└── lib/
    └── schemas/          # Schema de validação Zod
```

## Variáveis de ambiente

Cria um `.env.local` na raiz do projeto:

```
RESEND_API_KEY=sua_chave_aqui
TEST_MAIL=seu_email_aqui
```

## Rodando localmente

```
npm install
npm run dev
```

Acesse http://localhost:3000.

## Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com/). Basta conectar o repositório e adicionar as variáveis de ambiente nas configurações do projeto.
