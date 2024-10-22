export const ROUTES = {
  home: '/',
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    recoverPassword: '/auth/recover-password',
    socialCallback: '/api/auth/social-callback',
  },
  register: {
    onboarding: '/register/onboarding',
    profile: {
      user: '/register/profile/user',
      social: '/register/profile/social',
      about: '/register/profile/about',
      address: '/register/profile/address',
      gameStyles: '/register/profile/game-styles',
      gameProfile: '/register/profile/game-profile',
      success: '/register/profile/success',
    },
  },
  dashboard: {
    overview: '/dashboard',
  },
  user: {
    profile: '/user/profile',
  },
}
