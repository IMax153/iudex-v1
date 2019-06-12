import dynamic from 'next/dynamic';

const Modal = dynamic(
  // @ts-ignore
  import('./Modal').then(mod => mod.Modal),
  { ssr: false },
);

const ModalHeader = dynamic(
  // @ts-ignore
  import('./ModalHeader').then(mod => mod.ModalHeader),
  { ssr: false },
);

const ModalSection = dynamic(
  // @ts-ignore
  import('./ModalSection').then(mod => mod.ModalSection),
  { ssr: false },
);

const ModalFooter = dynamic(
  // @ts-ignore
  import('./ModalFooter').then(mod => mod.ModalFooter),
  { ssr: false },
);

export { Modal, ModalHeader, ModalSection, ModalFooter };
