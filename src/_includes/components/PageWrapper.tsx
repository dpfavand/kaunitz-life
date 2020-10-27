import React, { ReactChild } from 'react';
import { Helmet } from 'react-helmet';
import { Page } from '../types/Page';

interface PageWrapperProps {
  children?: ReactChild[];
  page?: Page;
  title?: string;
}

export default function PageWrapper({ children, page, title }: PageWrapperProps) {
  const header = page?.url !== '/' && (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Daniel Favand</a>
          </li>
        </ul>
      </nav>
    </header>
  );

  return (
    <>
      <Helmet>
        <title>{title || page?.fileSlug || ''}</title>
      </Helmet>
      {header}
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="/built-with">Built With</a>
            </li>
          </ul>
        </nav>
        <address>
          <a href="mailto:daniel@favand.net">daniel@favand.net</a>
        </address>
        <div>&copy; 2020 Daniel Favand</div>
      </footer>
    </>
  );
}
