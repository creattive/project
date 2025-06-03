import { PortfolioItem, Testimonial, TeamMember, Service } from '../utils/localStorage';
import { 
  Camera, Film, Video, MonitorPlay, Music, Mic, 
  Lightbulb, Clapperboard, Award, Users
} from 'lucide-react';

// Initial portfolio items
export const initialPortfolio: PortfolioItem[] = [
  {
    id: '1',
    title: 'Festival de Cinema Rio 2023',
    category: 'Eventos',
    image: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg',
    description: 'Cobertura completa do Festival de Cinema do Rio 2023, incluindo gravação multicâmera, streaming ao vivo e produção de conteúdo para redes sociais.',
    client: 'Festival do Rio',
    date: '2023-10-05'
  },
  {
    id: '2',
    title: 'Documentário "Vozes da Periferia"',
    category: 'Documentário',
    image: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg',
    description: 'Documentário sobre a cena cultural nas periferias do Rio de Janeiro, destacando artistas locais e movimentos culturais emergentes.',
    videoUrl: 'https://vimeo.com/example',
    date: '2023-05-20'
  },
  {
    id: '3',
    title: 'Show Ao Vivo - Maria Rita',
    category: 'Shows',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    description: 'Produção audiovisual completa para o show da cantora Maria Rita no Circo Voador, incluindo direção de imagem, captação e edição.',
    client: 'Produtora Musical Brasil',
    date: '2023-07-15'
  },
  {
    id: '4',
    title: 'Campanha Publicitária - Marca Sustentável',
    category: 'Publicidade',
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
    description: 'Produção de campanha publicitária para marca de produtos sustentáveis, incluindo filmagem, edição e finalização.',
    client: 'EcoVerde Produtos',
    date: '2023-02-10'
  },
  {
    id: '5',
    title: 'Websérie "Empreendedores do Futuro"',
    category: 'Série',
    image: 'https://images.pexels.com/photos/7691705/pexels-photo-7691705.jpeg',
    description: 'Websérie em 5 episódios sobre jovens empreendedores transformando suas comunidades através da tecnologia e inovação social.',
    videoUrl: 'https://youtube.com/example',
    client: 'Instituto Futuro',
    date: '2023-09-01'
  },
  {
    id: '6',
    title: 'Cobertura de Carnaval 2023',
    category: 'Eventos',
    image: 'https://images.pexels.com/photos/5256722/pexels-photo-5256722.jpeg',
    description: 'Cobertura completa do carnaval carioca, incluindo desfiles das escolas de samba, blocos de rua e festas tradicionais.',
    client: 'Secretaria de Cultura',
    date: '2023-02-21'
  }
];

// Initial testimonials
export const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Drummond',
    company: 'Festival do Rio',
    text: 'A Indevice transformou nosso evento com uma produção audiovisual impecável. Profissionalismo e criatividade de altíssimo nível!',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg'
  },
  {
    id: '2',
    name: 'Ana Luiza Santos',
    company: 'Produtora Musical Brasil',
    text: 'Trabalhar com a equipe da Indevice foi uma experiência incrível. Eles capturaram a essência do show com uma sensibilidade artística única.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
  },
  {
    id: '3',
    name: 'Ricardo Ferreira',
    company: 'EcoVerde Produtos',
    text: 'Nossa campanha publicitária ganhou vida nas mãos da Indevice. Resultados que superaram todas as expectativas!',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
  }
];

// Initial team members
export const initialTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Wagner Baiano',
    role: 'Fundador e Diretor Executivo',
    bio: 'Profissional com mais de 10 anos de experiência na TV Globo e no mercado de televisão, Wagner fundou a Indevice com a visão de criar produções audiovisuais inovadoras e de impacto social.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    social: {
      linkedin: 'https://linkedin.com/in/example',
      instagram: 'https://instagram.com/example'
    }
  },
  {
    id: '2',
    name: 'Juliana Martins',
    role: 'Diretora de Fotografia',
    bio: 'Especialista em direção de fotografia para cinema e TV, Juliana traz sua visão única e experiência internacional para cada projeto da Indevice.',
    image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg',
    social: {
      instagram: 'https://instagram.com/example'
    }
  },
  {
    id: '3',
    name: 'Rodrigo Alves',
    role: 'Diretor de Tecnologia',
    bio: 'Combinando conhecimento técnico e criatividade, Rodrigo lidera as inovações tecnológicas da Indevice, garantindo produções de alta qualidade técnica.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    social: {
      linkedin: 'https://linkedin.com/in/example'
    }
  }
];

// Initial services
export const initialServices: Service[] = [
  {
    id: '1',
    title: 'Produção Executiva',
    description: 'Gerenciamento completo de projetos audiovisuais, desde a concepção até a finalização, garantindo qualidade e cumprimento de prazos.',
    icon: 'Clapperboard',
    features: [
      'Planejamento e orçamento',
      'Gerenciamento de equipe',
      'Logística de produção',
      'Relatórios e prestação de contas'
    ]
  },
  {
    id: '2',
    title: 'Direção Técnica',
    description: 'Supervisão técnica para garantir a excelência na captação de imagem e som, utilizando equipamentos de última geração.',
    icon: 'Camera',
    features: [
      'Mapa técnico',
      'Direção de equipe técnica',
      'Supervisão de equipamentos',
      'Controle de qualidade'
    ]
  },
  {
    id: '3',
    title: 'Transmissão ao Vivo',
    description: 'Produção e transmissão de eventos ao vivo para diversas plataformas, com qualidade profissional e estabilidade.',
    icon: 'Video',
    features: [
      'Transmissão multicâmera',
      'Streaming para redes sociais',
      'Produção de conteúdo ao vivo',
      'Interação com audiência'
    ]
  },
  {
    id: '4',
    title: 'Captação e Edição',
    description: 'Serviços completos de filmagem e edição para diversos formatos, com equipe experiente e equipamentos profissionais.',
    icon: 'Film',
    features: [
      'Filmagem em 4K e 8K',
      'Edição profissional',
      'Correção de cor',
      'Finalização e entrega em diversos formatos'
    ]
  },
  {
    id: '5',
    title: 'Sonorização',
    description: 'Serviços de captação, edição e mixagem de áudio para garantir a qualidade sonora de produções audiovisuais e eventos.',
    icon: 'Music',
    features: [
      'Captação de áudio em campo',
      'Mixagem e masterização',
      'Sonorização de eventos',
      'Produção musical para conteúdo audiovisual'
    ]
  },
  {
    id: '6',
    title: 'Locação de Equipamentos',
    description: 'Aluguel de equipamentos audiovisuais profissionais para produções independentes, eventos corporativos e projetos culturais.',
    icon: 'MonitorPlay',
    features: [
      'Câmeras profissionais',
      'Equipamentos de iluminação',
      'Sistemas de áudio',
      'Acessórios e suportes'
    ]
  }
];

// Map service icon strings to components
export const getServiceIcon = (iconName: string) => {
  const iconMap = {
    Camera,
    Film,
    Video,
    MonitorPlay,
    Music,
    Mic,
    Lightbulb,
    Clapperboard,
    Award,
    Users
  };
  
  return iconMap[iconName as keyof typeof iconMap] || Clapperboard;
};