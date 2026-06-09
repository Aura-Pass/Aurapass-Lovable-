// Placeholder hook — auth wiring will be added in a later module.
export function useAuth() {
  return {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    signIn: async (_email: string, _password: string) => {},
    signOut: async () => {},
  };
}
