import { promotionService, GoLiveRequestRead } from '@/services/promotion.service';
import { useAsyncResource } from './use-async-resource';

export function usePromotionStatus(enabled: boolean = true) {
  return useAsyncResource<GoLiveRequestRead | null>(
    () => promotionService.getGoLiveRequest(),
    JSON.stringify([]),
    { enabled, label: 'promotion status' },
  );
}
