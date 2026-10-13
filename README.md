# iwardean

Portfólio em React + TypeScript + Tailwind CSS (Vite).

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção em dist/
```

## Onde editar

- `src/data/socials.ts` — links e handles das redes sociais (variáveis no topo), nome, cargo, e-mail e foto
- `src/data/projects.ts` — lista de projetos da página Projects
- `public/avatar.jpg` — sua foto (opcional; sem ela aparece um placeholder)
- `src/components/Footer.tsx` — coordenadas com efeito de digitação
- `src/components/Loader.tsx` — lista de fontes da animação de carregamento

## Páginas

- `/` home · `/videos` (só "coming soon") · `/projects` · `/about`
- Blog abre um pop-up animado "In development"

> Em hospedagem estática (ex.: GitHub Pages), configure o fallback para `index.html`
> por causa das rotas do `react-router`.
