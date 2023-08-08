export const queryString = (params: object): string => {
   return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
      .replace(' ', '%20')
}
