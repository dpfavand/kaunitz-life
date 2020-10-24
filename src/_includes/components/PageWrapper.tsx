import React from "react";

interface PageWrapperProps {
  children?: any;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  // eslint-disable-next-line react/prop-types
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}
