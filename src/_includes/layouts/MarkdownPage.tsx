import React from "react";
import PageWrapper from '../components/PageWrapper';
import Counter from "../components/Counter";
import { withHydration } from 'eleventy-plugin-react/utils'

export default function MarkdownPage(props: { content: any; }) {
  const { content } = props;

  console.log(props)

  const HydratedCounter = withHydration(Counter)

  return (
    <PageWrapper>
      Hello
      {/* This allows us to render markdown HTML */}
      <HydratedCounter />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PageWrapper>
  );
}
