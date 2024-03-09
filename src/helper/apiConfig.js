const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  FETCH_DATA: "/api/endpoint",
  POST_DATA: "/api/signup",
  // Add more endpoints as needed
};

export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;

export const fixAbbrivation = (abbr) => {
  return abbr.originString.match(/\(([^)]+)\)/)[1].toUpperCase();
};

export const formatDuration = (durationInMinutes) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}h ${minutes}m`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return `${minutes}m`;
  }
};
