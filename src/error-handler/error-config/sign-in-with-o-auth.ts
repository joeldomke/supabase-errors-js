import { ErrorMap } from '../../types/error-config';

export type SignInWithOAuthErrorConfig = never;

export type SignInWithOAuthErrorCode = SignInWithOAuthErrorConfig['code'];

export const signInWithOAuthErrorMap: ErrorMap<SignInWithOAuthErrorConfig> = {};
