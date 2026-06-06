import { useState, useEffect, useCallback } from 'react';
import { auditService } from '@/services/audit.service';

export function useAuditEvents(params?: Record<string, any>) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await auditService.listEvents(params);
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch audit events:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [JSON.stringify(params)]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { data, isLoading, isError, refetch: fetchEvents };
}

export function useAuditEvent(eventId: string) {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchEvent = useCallback(async () => {
    if (!eventId) return;
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await auditService.getEventDetail(eventId);
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch audit event details:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [eventId]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  return { data, isLoading, isError, refetch: fetchEvent };
}

export function useAuditSummary() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchSummary = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await auditService.getSummary();
      setData(res.data);
    } catch (err) {
      console.error('Failed to fetch audit summary:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  return { data, isLoading, isError, refetch: fetchSummary };
}
