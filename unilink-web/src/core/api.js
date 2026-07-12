import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Mais tarde, a Dev 1 vai adicionar aqui a lógica de injetar o Token JWT automaticamente!