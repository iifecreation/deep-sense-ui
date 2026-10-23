import { useAsyncResource } from './use-async-resource';
import { devicesService } from '@/services/devices.service';

export function useDevices(params?: Record<string, unknown>) {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => devicesService.listDevices(params),
    JSON.stringify([params]),
    { label: 'devices' },
  );
  return { data, isLoading, isError, error, refetch };
}

export function useDevice(deviceId: string) {
  const { data, isLoading, isError, error, refetch } = useAsyncResource(
    () => devicesService.getDeviceDetail(deviceId),
    JSON.stringify([deviceId]),
    { enabled: !!deviceId, label: 'device details' },
  );
  return { data, isLoading, isError, error, refetch };
}
