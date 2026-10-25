# Nova Landing Page

O **Nova** faz parte do programa **Startup One da FIAP**, uma iniciativa acadêmica em que os alunos desenvolvem uma startup desde a concepção da ideia até a validação do negócio.

O projeto consiste em uma landing page de pré-lançamento para apresentar a proposta de uma plataforma SaaS voltada para oficinas mecânicas, com foco na recuperação de orçamentos sem resposta e na organização do acompanhamento de clientes.

A página tem como objetivo explicar a proposta de valor do produto e captar interessados por meio de uma lista de espera, contribuindo para validar o interesse do mercado antes do desenvolvimento completo da plataforma.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Desenvolvimento

```sh
npm install
npm run dev
```

## Build de produção

```sh
npm run build
npm run preview
```

## Lista de espera (demonstração local)

O formulário salva os cadastros no `localStorage` do navegador atual. Os dados
não são enviados para um servidor nem ficam disponíveis para a equipe da Nova.
Essa implementação serve apenas para demonstração e deve ser substituída por
uma integração com backend antes de publicar o formulário em produção.

## Bibliotecas instaladas

- React e React DOM para a interface.
- Vite para desenvolvimento e build.
- Tailwind CSS v4 integrado ao Vite.
- Motion for React (`motion`) para animações; importe de `motion/react`.
- Three.js, React Three Fiber e Drei para renderização 3D.