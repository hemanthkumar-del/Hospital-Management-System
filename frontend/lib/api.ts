/**
 * API Client - Utility functions for communicating with the backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ApiRequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

/**
 * Helper function to make API requests
 */
export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;

  // Build URL with query parameters
  let url = `${API_URL}${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    url += `?${searchParams.toString()}`;
  }

  // Set default headers
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...fetchOptions.headers,
  };

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      credentials: "include", // Include cookies in requests
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request failed:", error);
    throw error;
  }
}

/**
 * Health check - Test if backend is connected
 */
export async function healthCheck() {
  return apiRequest("/");
}

// Auth endpoints
export const authAPI = {
  register: (data: unknown) =>
    apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  login: (data: unknown) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  logout: () =>
    apiRequest("/auth/logout", {
      method: "POST",
    }),
  getProfile: () => apiRequest("/auth/profile"),
};

// Users endpoints
export const usersAPI = {
  getAll: () => apiRequest("/users"),
  getById: (id: string) => apiRequest(`/users/${id}`),
  update: (id: string, data: unknown) =>
    apiRequest(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    apiRequest(`/users/${id}`, {
      method: "DELETE",
    }),
};

// Doctors endpoints
export const doctorsAPI = {
  getAll: () => apiRequest("/doctors"),
  getById: (id: string) => apiRequest(`/doctors/${id}`),
  create: (data: unknown) =>
    apiRequest("/doctors", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: unknown) =>
    apiRequest(`/doctors/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    apiRequest(`/doctors/${id}`, {
      method: "DELETE",
    }),
};

// Patients endpoints
export const patientsAPI = {
  getAll: () => apiRequest("/patients"),
  getById: (id: string) => apiRequest(`/patients/${id}`),
  create: (data: unknown) =>
    apiRequest("/patients", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: unknown) =>
    apiRequest(`/patients/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    apiRequest(`/patients/${id}`, {
      method: "DELETE",
    }),
};

// Appointments endpoints
export const appointmentsAPI = {
  getAll: () => apiRequest("/appointments"),
  getById: (id: string) => apiRequest(`/appointments/${id}`),
  create: (data: unknown) =>
    apiRequest("/appointments", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  update: (id: string, data: unknown) =>
    apiRequest(`/appointments/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  delete: (id: string) =>
    apiRequest(`/appointments/${id}`, {
      method: "DELETE",
    }),
  updateStatus: (id: string, status: string) =>
    apiRequest(`/appointments/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
