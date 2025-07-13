'use client';

import posthog from 'posthog-js';
import {
  PostHogProvider as OGPostHogProvider,
  usePostHog,
} from 'posthog-js/react';
import { useEffect } from 'react';

const PH_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (typeof window !== 'undefined' && PH_KEY) {
  posthog.init(PH_KEY, {
    api_host: 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return <OGPostHogProvider client={posthog}>{children}</OGPostHogProvider>;
}

export function PostHogIdentify({
  userId,
  organizationId,
}: {
  userId: string;
  organizationId: string;
}) {
  const _posthog = usePostHog();

  useEffect(() => {
    if (userId) {
      _posthog?.identify(userId);
      _posthog?.group('team', organizationId);
    }
  }, [_posthog, userId, organizationId]);

  return null;
}
