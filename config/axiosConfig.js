import axios from "axios";

export const token = process.env.NEXT_OAKS_MEDIA_KEY;

export const baseUrl = `https://media-space-api-93ae1a0c4354.herokuapp.com/api/v1/`;

export const mediaSpace = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjY1YjQwNDJjYmI2NjYzY2I2Y2FmODczNCIsImlhdCI6MTcwNjI5ODY1NX0.u0yNW3zJ8bxi2dDf1EqnvzHRcvTY4CIqL6sRokfQzN0`,
  },
});

export const setToken = (tk) => localStorage.setItem("token", tk);

export const getToken = () => localStorage.getItem("token");

export const checkAuth = () => localStorage.getItem("token") ?? false;
