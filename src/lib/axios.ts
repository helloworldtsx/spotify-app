import ax from 'axios'
import { API_URL, CLIENT_ID, CLIENT_SECRET } from '@/config'
import { storage } from '@/utils/storage'

export const axios = ax.create({
   baseURL: API_URL,
})

axios.interceptors.request.use((config) => {
   const token = storage.getToken()

   if (token) {
      return {
         ...config,
         headers: {
            Authorization: `Bearer ${token}`,
         },
      }
   }

   return {
      ...config,
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         Authorization: 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
   }
})
