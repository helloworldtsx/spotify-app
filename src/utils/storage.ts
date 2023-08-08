const STORAGE_PREFIX = 'spotify_viewer_'

export const storage = {
   getToken: () =>
      window.sessionStorage.getItem(`${STORAGE_PREFIX}token`) as string,
   setToken: (token: string) =>
      window.sessionStorage.setItem(`${STORAGE_PREFIX}token`, token),
   clearToken: () => window.sessionStorage.removeItem(`${STORAGE_PREFIX}token`),
}
