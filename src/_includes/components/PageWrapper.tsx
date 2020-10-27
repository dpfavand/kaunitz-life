import React, { ReactChild } from 'react';

interface PageWrapperProps {
  children?: ReactChild[];
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
