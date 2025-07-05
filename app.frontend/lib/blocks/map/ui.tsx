'use client';

import { BlockProps } from '../ui';
import { Props as DynamicMapboxMapProps } from './ui-client';
import { CoreBlock } from '@/components/CoreBlock';
import { MapBlockConfig } from '@taptree-co/blocks';
import { internalApiFetcher } from '@taptree-co/common';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

// Dynamically import MapboxMap
const DynamicMapboxMap = dynamic<DynamicMapboxMapProps>(
  () =>
    import('./ui-client').then((mod) => ({
      default: mod.MapboxMap,
    })),
  { ssr: false }
);

export function Map(props: BlockProps) {
  const { data } = useSWR<{ blockData: MapBlockConfig }>(
    `/blocks/${props.blockId}`,
    internalApiFetcher
  );

  const { blockData } = data || {};

  if (!blockData?.coords) return null;

  return (
    <CoreBlock className="relative !p-0 overflow-hidden" {...props}>
      <DynamicMapboxMap
        className="absolute w-full h-full object-cover"
        coords={blockData?.coords}
        mapTheme={blockData?.mapTheme}
      />
    </CoreBlock>
  );
}
