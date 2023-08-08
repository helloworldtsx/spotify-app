
## How to set up:

1. Register in the official Spotify API: https://developer.spotify.com

2. Go to "dashboard" and configure a new app: https://developer.spotify.com/dashboard

3. Once you have successfully created a new app, go to "Basic Information" and copy Client ID and Client Secret

4. Clone the repository

5. Create a new .env file with the following environment variables:
   - VITE_API_URL="https://api.spotify.com/v1/"
   - VITE_CLIENT_SECRET = your spotify key
   - VITE_CLIENT_ID= your spotify client id

6. Run yarn and yarn dev



## Available scripts
   - dev: preview app in development mode
   - build: create a new build for production
   - preview: preview app in production mode
   - prettier: format code with .prettierrc config