import React, { ReactChild } from 'react';
import { Helmet } from 'react-helmet';
import { Page, Site } from '../types/data';

interface PageWrapperProps {
  children?: ReactChild[] | ReactChild;
  page?: Page;
  title?: string;
  site?: Site;
}

interface NavLinkProps {
  currentUrl?: string;
  targetUrl: string;
  children: ReactChild;
  noParent?: boolean;
}

function NavLink({ currentUrl, targetUrl, children, noParent = false }: NavLinkProps) {
  const currentProps: any = {};

  if (currentUrl === targetUrl) {
    currentProps['aria-current'] = 'page';
    currentProps.className = 'current';
  } else if (currentUrl?.startsWith(targetUrl) && !noParent) {
    currentProps.className = 'parent';
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={targetUrl} {...currentProps}>
      {children}
    </a>
  );
}

export default function PageWrapper({ children, page, title, site }: PageWrapperProps) {
  const header = page?.url !== '/' && (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink targetUrl="/" noParent currentUrl={page?.url}>
              Daniel Favand
            </NavLink>
          </li>
          <li>
            <NavLink targetUrl="/posts/" currentUrl={page?.url}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title || page?.fileSlug || ''}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div>
        {header}
        <main>{children}</main>
      </div>
      <footer>
        <div>
          {site?.builtWith?.title}{' '}
          {site?.builtWith?.featuredTopics?.map((topic, index, list) => (
            <>
              <a href={topic.url}>{topic.title}</a>
              {index !== list.length - 1 && ', '}
              {index === list.length - 2 && 'and '}
            </>
          ))}
        </div>
        <address>
          <a href="mailto:daniel@favand.net">daniel@favand.net</a>
        </address>
        <div>&copy; 2020 Daniel Favand</div>
      </footer>
    </>
  );
}
