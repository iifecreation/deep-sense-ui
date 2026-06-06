import { useState, useEffect, useCallback } from 'react';
import { devicesService } from '@/services/devices.service';

export function useDevices(params?: Record<string, any>) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchDevices = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await devicesService.listDevices(params);
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch devices:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  return { data, isLoading, isError, refetch: fetchDevices };
}

export function useDevice(deviceId: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchDevice = useCallback(async () => {
    if (!deviceId) return;
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await devicesService.getDeviceDetail(deviceId);
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch device details:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [deviceId]);

  useEffect(() => {
    fetchDevice();
  }, [fetchDevice]);

  return { data, isLoading, isError, refetch: fetchDevice };
}
