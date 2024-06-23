import { MouseEvent, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

const Link = ({ children, className, href }: TProps) => {
  const onClick = (event: MouseEvent) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
