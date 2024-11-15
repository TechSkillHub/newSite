export interface OAuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: Date;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type?: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface OAuthProviderData {
  provider: 'google' | 'facebook' | 'linkedin';
  accessToken: string;
  refreshToken?: string;
}
