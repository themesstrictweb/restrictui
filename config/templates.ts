import { Icons } from '@/components/icons';

type Template = {
  title: string;
  previewUrl: string;
  purchaseUrl?: string;
  description: string;
  popular?: boolean;
  stack?: (keyof typeof Icons)[];
  new?: boolean;
  thumbnail?: string;
  price?: string;
  free?: boolean;
  market?: string;
};

export const templates: Template[] = [
  {
    title: 'Maxstrict',
    purchaseUrl: 'https://1.envato.market/Vm7VRE',
    previewUrl:
      'https://themes.strict-web.com/maxstrict?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=maxstrict',
    description:
      'Maxstrict is a premium admin template used by 118,000 developers that is built with React, Next.js, TypeScript, Supabase, Prisma ORM and Tailwind CSS.',
    stack: ['react', 'nextjs', 'tailwind', 'motion', 'restrictui', 'shadcn', 'radix', 'supabase', 'prisma'],
    thumbnail: 'maxstrict-1.png',
    price: '$49',
    market: 'Themeforest',
  },
  {
    title: 'Summit',
    purchaseUrl:
      'https://themes.strict-web.com/products/summit-nextjs?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=summit',
    previewUrl:
      'https://summit-nextjs.themes.strict-web.com?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=summit',
    description:
      'Summit is a premium admin template built with React, Next.js, TypeScript and Tailwind CSS using ReStrictUI & shadcn/ui components.',
    stack: ['react', 'nextjs', 'tailwind', 'restrictui', 'shadcn', 'radix'],
    thumbnail: 'summit.png',
    price: '$99',
    market: 'Themesstrictweb',
  },
  {
    title: 'SaaSify',
    previewUrl:
      'https://themes.strict-web.com/products/saasify?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=saasify',
    description:
      'SaaSify is a premium landing page template for marketing and product showcase built with React, Next.js, TypeScript, Motion and Tailwind CSS.',
    price: '$59',
    stack: ['react', 'nextjs', 'tailwind', 'shadcn', 'restrictui', 'radix', 'motion'],
    thumbnail: 'saasify-1.png',
    market: 'Themesstrictweb',
  },
  {
    title: 'Storely',
    previewUrl:
      'https://themes.strict-web.com/products/storely?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=storely',
    description:
      'Storely is a premium ecommerce template built with React, Next.js, TypeScript, Prisma ORM and Tailwind CSS.',
    price: '$99',
    stack: ['react', 'nextjs', 'tailwind', 'shadcn', 'restrictui', 'radix', 'prisma'],
    thumbnail: 'storely-1.png',
    market: 'Themesstrictweb',
  },
  {
    title: 'Shoplit',
    previewUrl:
      'https://themes.strict-web.com/products/shoplit?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=shoplit',
    description:
      'Shoplit is a premium admin template for eCommerce backend management built with React, Next.js, TypeScript, Prisma ORM and Tailwind CSS.',
    thumbnail: 'shoplit-1.png',
    stack: ['react', 'nextjs', 'tailwind', 'shadcn', 'restrictui', 'radix', 'prisma'],
    price: '$99',
    market: 'Themesstrictweb',
  },
  {
    title: 'Supastart',
    previewUrl:
      'https://themes.strict-web.com/products/supastart?utm_source=restrictui_website&utm_medium=menu&utm_campaign=product_link&utm_content=supastart',
    description:
      'Supastart is a premium admin template for eCommerce backend management built with React, Next.js, TypeScript, Supabase and Tailwind CSS.',
    thumbnail: 'supastart-1.png',
    stack: ['react', 'nextjs', 'tailwind', 'shadcn', 'restrictui', 'radix', 'supabase'],
    price: '$99',
    market: 'Themesstrictweb',
  },
];
