import { get, post } from "@/lib/api/client";

export interface DeviceInfo {
  browser?: string;
  os?: string;
  ip?: string;
  isp?: string;
  geo?: string;
  lastSeen?: string;
  [key: string]: any;
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
  customers: any[];
  transactions: any[];
  timeline: any[];
  [key: string]: any;
}

export const devicesService = {
  listDevices: async (params?: Record<string, any>) => {
    return get<any>('/devices', params);
  },

  getDeviceDetail: async (deviceId: string) => {
    return get<any>(`/devices/${deviceId}`);
  },

  getDeviceTimeline: async (deviceId: string, params?: Record<string, any>) => {
    return get<any>(`/devices/${deviceId}/timeline`, params);
  },

  trustDevice: async (deviceId: string, reason: string) => {
    return post<any>(`/devices/${deviceId}/trust`, { reason });
  },

  blockDevice: async (deviceId: string, reason: string) => {
    return post<any>(`/devices/${deviceId}/block`, { reason });
  },
  
  getLinkedCustomers: async (deviceId: string, params?: Record<string, any>) => {
    return get<any>(`/devices/${deviceId}/customers`, params);
  },
};
