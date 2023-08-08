import { CLIENT_ID } from '@/config'
import { queryString } from '@/utils/queryString'
import { axios } from '@/lib/axios'

export const login = () => {
   const base_url = 'https://accounts.spotify.com/authorize?'
   const redirect_uri = window.location.origin
   const state = Math.random().toString()

   const params = {
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: `${redirect_uri}`,
      scope: 'user-read-recently-played user-top-read',
      state,
      show_dialog: true,
   }

   const url = base_url + queryString(params)
   const win: Window = window
   win.location = url
}

export const getToken = async (code: string) => {
   const url = 'https://accounts.spotify.com/api/token'
   const redirect_uri = window.location.origin

   const body = {
      grant_type: 'authorization_code',
      code,
      redirect_uri,
   }

   const { data } = await axios.post(url, queryString(body))
   return `${data.access_token}`
}
