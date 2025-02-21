const TOKEN_KEY = "Token";

// Utility to safely check localStorage when in a browser environment
const getLocalStorageItem = (key: string): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}; 

// Check if the token is expired
const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true; // If token doesn't exist, consider it expired
  const expiration = getLocalStorageItem("expiration");
  return Date.now() > (expiration ? parseInt(expiration) : 0);
};

// Check if the access token is expired
const isAccessTokenExpired = (token: string | null): boolean =>
  isTokenExpired(token);

const isLoggedIn = async (): Promise<boolean> => {
  // Ensure we are in a browser environment before accessing localStorage
  if (typeof window === "undefined") {
    return false; // Assume not logged in if we're server-side rendering
  }

  // Check if the user is logged in
  const token = getLocalStorageItem(TOKEN_KEY);

  // You might want to add logic here to check if the token is expired
  // For example:
  // if (isTokenExpired(token)) {
  //   // Token is expired, handle refresh or return false
  // }

  // Token is present and not expired, user is considered logged in
  return !!token;
};

export { isLoggedIn, isAccessTokenExpired };
