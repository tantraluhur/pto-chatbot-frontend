// import { useContext, useEffect } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../AuthContext';

// const API_URL = "http://be.localdomain.com:8000"

// const useApi = () => {
    
//     const headers = accessToken
//     ? {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       }
//     : {
//         "Content-Type": "application/json",
//       };
//     const api = axios.create({
//       baseURL: API_URL,
//       withCredentials: true,
//       headers
//     });

//     useEffect(() => {
//         const requestInterceptor = api.interceptors.request.use((config) => {
//             if (accessToken) {
//                 config.headers['Authorization'] = `Bearer ${accessToken}`;
//             }
//             config.withCredentials = true

//             return config;
//         });
//         const responseInterceptor = api.interceptors.response.use( response => response, async (error) => {
//             const status = error.response?.status
//             const detail = error.response?.data?.detail
//             if ((status === 403 && detail === "Authentication credentials were not provided.") || 
//             (status === 401 && detail === "Invalid header. Access Token Already Expired.")) {
//                 try {
//                   const response = await axios.get(`${API_URL}/api/v1/auth/refresh-token/`, {
//                     withCredentials: true,  
//                   });
                  
//                   setAccessToken(response.data['data']['access_token']);
//                   error.config.headers['Authorization'] = `Bearer ${response.data['data']['access_token']}`;
//                   console.log(response.data['data']['access_token'])
//                   return api(error.config);
//                 } catch (error) {
//                   return Promise.reject(error);
//                 }
//               }

//               return Promise.reject(error);
//         });

//         return () => {
//             api.interceptors.request.eject(requestInterceptor);
//             api.interceptors.response.eject(responseInterceptor);
//         };
//     }, [accessToken, setAccessToken])
    
//     return api;
// }

// export default useApi;