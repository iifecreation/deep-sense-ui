import { get, post } from '@/lib/api/client';

export type JsonObject = Record<string, unknown>;
export type Signal = {
  id?: string;
  signal_id?: string;
  signal_type: string;
  severity: string;
  score?: number;
  confidence?: number;
  created_at: string;
};

export const deepfakeService = {
  check: (data: { image_url?: string; video_url?: string; check_type?: string }) =>
    post<JsonObject>('/biometrics/deepfake-check', data),
  uploadCheck: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return post<JsonObject>('/biometrics/deepfake-check/upload', formData);
  },
  getCheck: (checkId: string) => get<JsonObject>(`/biometrics/deepfake-checks/${checkId}`),
  listChecks: (params?: { limit?: number; offset?: number }) =>
    get<JsonObject>('/biometrics/deepfake-checks', { params }),
  getModelStatus: () => get<JsonObject>('/biometrics/deepfake-model/status'),
};

export const syntheticAdvancedService = {
  check: (data: {
    customer_id: string;
    attributes: Record<string, string>;
    device_id?: string;
    ip_address?: string;
  }) => post<JsonObject>('/identity-risk/check', data),
  getProfile: (customerId: string) =>
    get<JsonObject>(`/identity-risk/profiles/${customerId}`),
  listSignals: (params?: { customer_id?: string }) =>
    get<Signal[]>('/identity-risk/signals', { params }),
  runProviderCheck: (data: {
    customer_id: string;
    provider_name: string;
    attributes: Record<string, string>;
  }) => post<JsonObject>('/identity-risk/provider-checks', data),
};

export const friendlyFraudAdvancedService = {
  submitDispute: (data: JsonObject) => post<JsonObject>('/friendly-fraud/disputes', data),
  submitRefund: (data: JsonObject) => post<JsonObject>('/friendly-fraud/refunds', data),
  submitReturn: (data: JsonObject) => post<JsonObject>('/friendly-fraud/returns', data),
  submitDeliveryEvidence: (data: JsonObject) =>
    post<JsonObject>('/friendly-fraud/delivery-evidence', data),
  getCustomerRisk: (customerId: string) =>
    get<JsonObject>(`/friendly-fraud/customers/${customerId}/risk`),
  listSignals: (params?: {
    customer_id?: string;
    transaction_id?: string;
    signal_type?: string;
    severity?: string;
    limit?: number;
  }) => get<Signal[]>('/friendly-fraud/signals', { params }),
};

export const cnpAdvancedService = {
  ingestTransaction: (data: JsonObject) => post<JsonObject>('/cnp/transactions', data),
  recordCheckoutEvent: (data: {
    session_id: string;
    event_type: string;
    metadata?: JsonObject;
  }) => post<JsonObject>('/cnp/checkout-events', data),
  score: (data: JsonObject) => post<JsonObject>('/cnp/score', data),
  listSignals: (params?: { session_id?: string; limit?: number }) =>
    get<Signal[]>('/cnp/signals', { params }),
  getPaymentInstrumentRisk: (id: string) =>
    get<JsonObject>(`/cnp/payment-instruments/${id}/risk`),
};

export const appScamsService = {
  scorePayment: (data: {
    transaction_id: string;
    beneficiary_identifier: string;
    beneficiary_type?: string;
    narrative?: string;
    context?: JsonObject;
  }) => post<JsonObject>('/app-scams/score-payment', data),
  listSignals: (params?: { transaction_id?: string }) =>
    get<Signal[]>('/app-scams/signals', { params }),
  getBeneficiaryRisk: (identifier: string) =>
    get<JsonObject>(`/app-scams/beneficiaries/${encodeURIComponent(identifier)}/risk`),
  createIntervention: (transactionId: string, decision: string) =>
    post<JsonObject>('/app-scams/interventions', undefined, {
      params: { transaction_id: transactionId, decision },
    }),
  completeIntervention: (interventionId: string, customerResponse: string) =>
    post<JsonObject>(`/app-scams/interventions/${interventionId}/complete`, {
      customer_response: customerResponse,
    }),
};

export const atoService = {
  ingestLoginEvent: (data: JsonObject) => post<JsonObject>('/ato/login-event', data),
  ingestSessionEvent: (data: JsonObject) => post<JsonObject>('/ato/session-event', data),
  getRisk: (accountId: string) => get<JsonObject>(`/ato/risk/${accountId}`),
  listSignals: (params?: { limit?: number; offset?: number }) =>
    get<Signal[]>('/ato/signals', { params }),
};

export const botDetectionService = {
  ingestEvent: (data: JsonObject) => post<JsonObject>('/bot/events', data),
  getSessionRisk: (sessionId: string) =>
    get<JsonObject>(`/bot/sessions/${sessionId}/risk`),
  listSignals: (params?: { session_id?: string; severity?: string; limit?: number }) =>
    get<Signal[]>('/bot/signals', { params }),
  getEntityRisk: (entityType: 'customer' | 'ip_address' | 'device', entityId: string) =>
    get<JsonObject>(`/bot/entities/${entityType}/${encodeURIComponent(entityId)}/risk`),
};

export const uebaService = {
  listEvents: (params?: JsonObject) => get<JsonObject>('/ueba/events', { params }),
  listAnomalies: (params?: JsonObject) => get<JsonObject>('/ueba/anomalies', { params }),
  dashboard: () => get<JsonObject>('/ueba/dashboard'),
  computeBaseline: (data: JsonObject) => post<JsonObject>('/ueba/baselines/compute', data),
};

export const consortiumService = {
  optIn: () => post<JsonObject>('/consortium/opt-in'),
  shareSignal: (data: JsonObject) => post<JsonObject>('/consortium/share-signal', data),
  query: (data: JsonObject) => post<JsonObject>('/consortium/query', data),
  getMatches: (params?: { page?: number; page_size?: number }) =>
    get<JsonObject>('/consortium/matches', { params }),
  getAudit: () => get<JsonObject>('/consortium/audit'),
  optOut: () => post<JsonObject>('/consortium/opt-out'),
};
