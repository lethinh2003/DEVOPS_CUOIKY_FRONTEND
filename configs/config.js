const env = process.env.NEXT_PUBLIC_ENV || "development";

const configs = {
  development: {
    endpointServer: process.env.NEXT_PUBLIC_ENDPOINT_SERVER,
    rapidURL: process.env.NEXT_PUBLIC_RAPID_API_URL,
    rapidApiKey: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    rapidApiHost: process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
  staging: {
    endpointServer: process.env.NEXT_PUBLIC_STAGING_ENDPOINT_SERVER,
    rapidURL: process.env.NEXT_PUBLIC_RAPID_API_URL,
    rapidApiKey: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    rapidApiHost: process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
  test: {
    endpointServer: process.env.NEXT_PUBLIC_STAGING_ENDPOINT_SERVER,
    rapidURL: process.env.NEXT_PUBLIC_RAPID_API_URL,
    rapidApiKey: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    rapidApiHost: process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
  production: {
    endpointServer: process.env.NEXT_PUBLIC_PRODUCTION_ENDPOINT_SERVER,
    rapidURL: process.env.NEXT_PUBLIC_RAPID_API_URL,
    rapidApiKey: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    rapidApiHost: process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
}[env];

export default configs;
