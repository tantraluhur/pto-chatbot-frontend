import { useEffect } from 'react';
import axios, { AxiosInstance } from 'axios';
import { useSession } from 'next-auth/react';
import { ExtendedUser } from '@/lib/authOptions';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

const API_URL = "http://127.0.0.1:8000"

export const Client = (): AxiosInstance => {
    const {data: session} = useSession()
    const user = session?.user as ExtendedUser;
    const accessToken = user?.access_token

    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
    }
    const api = axios.create({
      baseURL: API_URL,
      headers
    });

    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use((config) => {
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
        });
        const responseInterceptor = api.interceptors.response.use( response => response, async (error) => {
            const status = error.response?.status
            if  (status === 401) {
              setTimeout(() => {
                signOut({callbackUrl: '/', redirect:true})
              }, 1000)
            }

              return Promise.reject(error);
        });

        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [accessToken, session])
    
    return api;
}