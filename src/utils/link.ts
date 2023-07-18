import { t } from "i18next";

export const linkTargets = {
  '.NET': 'https://dotnet.microsoft.com/en-us/',
  'Adobe Flex': 'https://helpx.adobe.com/security/products/flex.html',
  'React Native': 'https://reactnative.dev/',
  'SQL Server': 'https://www.microsoft.com/sql-server',
  Android: 'https://www.android.com/',
  Apollo: 'https://apollographql.com/',
  AWS: 'https://aws.amazon.com/',
  CodeIgniter: 'https://www.codeigniter.com/',
  CRDT: 'https://crdt.tech/',
  Drupal: 'https://www.drupal.org/',
  Fastify: 'https://fastify.dev/',
  Graphql: 'https://graphql.org/',
  Hypercore: 'https://github.com/holepunchto/hypercore',
  Javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  Laravel: 'https://laravel.com/',
  MySQL: 'https://www.mysql.com/',
  Neo4j: 'https://neo4j.com/',
  'Node.js': 'https://nodejs.org/',
  OpenLaszlo: 'https://www.openlaszlo.org/',
  PHP: 'https://php.net/',
  PostgreSQL: 'https://postgresql.org/',
  React: 'https://react.dev/',
  SST: 'https://sst.dev/',
  Symfony: 'https://symfony.com/',
  WebRTC: 'https://webrtc.org/',
  Yjs: 'https://github.com/yjs/yjs',
};

export const socials = [
  {
    name: 'Mail',
    href: `mailto:esteban.primost@gmail.com`,
    linkTitle: `Mail`,
    active: true,
    icon: 'tabler:mail',
  },
  {
    name: 'Github',
    href: 'https://github.com/estebanprimost',
    linkTitle: `Github`,
    active: true,
    icon: 'tabler:brand-github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/estebanprimost',
    linkTitle: `LinkedIn`,
    active: true,
    icon: 'tabler:brand-linkedin',
  },
  {
    name: 'Discord',
    href: 'https://discordapp.com/users/600736334403076126',
    linkTitle: `Discord`,
    active: true,
    icon: 'tabler:brand-discord',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/estebanprimost',
    linkTitle: `Twitter`,
    active: true,
    icon: 'tabler:brand-twitter',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/estebanprimost',
    linkTitle: `Instagram`,
    active: true,
    icon: 'tabler:brand-instagram',
  }
];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
