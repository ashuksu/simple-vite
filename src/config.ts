export const API_URL = import.meta.env.VITE_API_URL || '';
export const API_KEY = import.meta.env.VITE_API_KEY || '';

if (!API_URL) {
    throw new Error("VITE_API_URL is missing in environment variables!");
}

if (!API_KEY) {
    throw new Error("VITE_API_KEY is missing in environment variables!");
}