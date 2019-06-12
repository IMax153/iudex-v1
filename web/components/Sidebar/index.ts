import dynamic from 'next/dynamic';

const Sidebar = dynamic(
  // @ts-ignore
  import('./Sidebar').then(mod => mod.Sidebar),
  { ssr: false },
);

export { Sidebar };
