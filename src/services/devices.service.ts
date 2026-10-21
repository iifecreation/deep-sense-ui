import { get, post } from "@/lib/api/client";
import type {
  DeviceDetail as ApiDeviceDetail,
  DeviceMutationResponse,
  PaginatedDeviceListItem,
  PaginatedDeviceTimelineEvent,
  PaginatedLinkedCustomerItem,
} from "@/lib/api-client/api";

export interface DeviceInfo {
  browser?: string;
  os?: string;
  ip?: string;
  isp?: string;
  geo?: string;
  lastSeen?: string;
  [key: string]: unknown;
}

export interface DeviceSignal {
  name: string;
  status: string;
  detail: string;
  risk?: string;
}

export interface DeviceListItem {
  id: string;
  model: string;
  platform: string;
  riskScore: number;
  accounts: number;
  lastSeen: string;
  risk: string;
}

export interface DeviceDetail {
  id: string;
  riskScore: number;
  status: string;
  info: DeviceInfo;
  signals: DeviceSignal[];
  customers: unknown[];
  transactions: unknown[];
  timeline: unknown[];
  [key: string]: unknown;
}

export const devicesService = {
  listDevices: async (params?: Record<string, unknown>) => {
    return get<PaginatedDeviceListItem>('/devices', { params });
  },

  getDeviceDetail: async (deviceId: string) => {
    return get<ApiDeviceDetail>(`/devices/${deviceId}`);
  },

  getDeviceTimeline: async (deviceId: string, params?: Record<string, unknown>) => {
    return get<PaginatedDeviceTimelineEvent>(`/devices/${deviceId}/timeline`, { params });
  },

  trustDevice: async (deviceId: string, reason: string) => {
    return post<DeviceMutationResponse>(`/devices/${deviceId}/trust`, { reason });
  },

  blockDevice: async (deviceId: string, reason: string) => {
    return post<DeviceMutationResponse>(`/devices/${deviceId}/block`, { reason });
  },

  getLinkedCustomers: async (deviceId: string, params?: Record<string, unknown>) => {
    return get<PaginatedLinkedCustomerItem>(`/devices/${deviceId}/customers`, { params });
  },
};
