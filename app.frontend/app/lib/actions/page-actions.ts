import { apiServerFetch } from '@/app/lib/api-server';

async function parseJsonResponse(res: Response, label: string) {
  if (!res.ok) {
    const errorText = await res.text();
    console.error(`${label} failed: ${res.status}\n${errorText}`);
    throw new Error(`${label} returned status ${res.status}`);
  }
  return res.json();
}

export async function getPageIdBySlugOrDomain(slug: string, domain: string) {
  const res = await apiServerFetch(
    `/pages/internal/slug-or-domain?slug=${slug}&domain=${domain}`,
    {
      method: 'GET',
      headers: {
        'x-api-key': process.env.INTERNAL_API_KEY as string,
      },
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `getPageIdBySlugOrDomain failed: ${res.status}\n${errorText}`
    );
    //return null;
  }

  return res.json();
}

export async function getPageLoadData(pageId: string) {
  const res = await apiServerFetch(`/pages/${pageId}/internal/load`, {
    method: 'GET',
    headers: {
      'x-api-key': process.env.INTERNAL_API_KEY as string,
    },
  });

  return parseJsonResponse(res, 'getPageLoadData');
}

export async function getPageTheme(pageId: string) {
  const res = await apiServerFetch(`/pages/${pageId}/theme`, {
    method: 'GET',
  });

  return parseJsonResponse(res, 'getPageTheme');
}

export async function getPageLayout(pageId: string) {
  const res = await apiServerFetch(`/pages/${pageId}/layout`, {
    method: 'GET',
  });

  return parseJsonResponse(res, 'getPageLayout');
}

export async function getPageSettings(pageId: string) {
  const res = await apiServerFetch(`/pages/${pageId}/settings`, {
    method: 'GET',
  });

  return parseJsonResponse(res, 'getPageSettings');
}

export async function getPageBlocks(pageId: string) {
  const res = await apiServerFetch(`/pages/${pageId}/blocks`, {
    method: 'GET',
  });

  return parseJsonResponse(res, 'getPageBlocks');
}
