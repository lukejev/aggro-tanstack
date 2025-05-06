import { convexQuery } from '@convex-dev/react-query';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { api } from 'convex/_generated/api';

export const Route = createFileRoute('/settings')({
  component: Settings,
})

function Settings() {
  const { data } = useSuspenseQuery(convexQuery(api.feeds.getFeeds, {}));

  console.log({ data })
  return <div>Hello "/settings"!</div>
}
