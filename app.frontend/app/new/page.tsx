import { getSession } from '@/app/lib/auth';
import { NewPageDialog } from '@/components/NewPageDialog';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { captureException } from '@sentry/node';

export default async function NewPage() {
  const session = await getSession({
    fetchOptions: { headers: await headers() },
  });

  if (!session) {
    captureException(new Error('Unauthorized access at '));
    redirect('/');
  }

  return <NewPageDialog open={true} />;
}
