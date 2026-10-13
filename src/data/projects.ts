export type ProjectStatus = 'live' | 'wip' | 'coming soon'

export interface Project {
  title: string
  description: string
  status: ProjectStatus
  tech: string[]
  url?: string
}

// Edite/adicione seus projetos aqui, na ordem em que devem aparecer.
// Se tiver `url`, o item vira link.
export const projects: Project[] = [
  {
    title: 'Pipizza',
    description:
      'Meu primeiro site feito profissionalmente em HTML, CSS e JS. Fiz em 2023 e, em 2025, voltei nele e adicionei a funcionalidade de carrinho (sem checkout). Foi o projeto que mais me orgulhei e sinto que foi um dos melhores, mesmo sendo só para testar minhas habilidades com as tecnologias.',
    status: 'live',
    tech: ['html', 'css', 'js'],
    url: 'https://pipizza.vercel.app/',
  },
  {
    title: 'Ópera Rio',
    description:
      'Saltando para 2025, depois de treinar diversas tecnologias, criei este site para um concurso da Dell sobre criar uma empresa fictícia que pudesse dar lucro no futuro. Esse projeto é especial pra mim porque fiz em menos de 4 dias, completamente sozinho, além da funcionalidade de doação, que ficou bem legal.',
    status: 'live',
    tech: ['react', 'vite', 'mysql', 'prisma', 'typescript', 'tailwindcss'],
    url: 'https://opera-rio.vercel.app/',
  },
  {
    title: 'Família Imports',
    description:
      'Aplicativo de vendas de roupas, com painel admin completo: criação de pedidos e produtos, exclusão, edição e mais.',
    status: 'live',
    tech: ['react', 'vite', 'mysql', 'prisma', 'typescript', 'tailwindcss'],
    url: 'https://familiaimports.vercel.app/',
  },
  {
    title: 'Zuuuno Store',
    description:
      'Meu site mais profissional até o momento. Revenda de serviços sociais com painel administrativo e scripts locais que ajudam na criação de serviços e produtos, além da alteração de preços feita em Python, rodando em produção.',
    status: 'live',
    tech: ['react', 'vite', 'mysql', 'prisma', 'typescript', 'css', 'python'],
    url: 'https://zuuunostore.vercel.app/',
  },
]