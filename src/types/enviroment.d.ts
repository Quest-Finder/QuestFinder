import { z } from 'zod'

const envVariables = z.object({
  NEXT_PUBLIC_API_CIDADES_URL: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
  NEXT_PUBLIC_BASE_URL: z.string(),
  REACT_APP_REGISTRATION_PLAYER_PROFILE_TYPE: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
