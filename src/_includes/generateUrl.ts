import { Topic } from './types/data';

const topicKindMapping = {
  tool: 'uses',
  does: 'does',
};

// eslint-disable-next-line import/prefer-default-export
export function generateTopicUrl(topic: Topic) {
  const base = topic.kind ? `/${topicKindMapping[topic.kind]}` : '';
  return `${base}/${topic.slug}`;
}
