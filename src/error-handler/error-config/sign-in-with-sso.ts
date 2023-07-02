import { ErrorMap } from '../../types/error-config';

export type SignInWithSSOErrorConfig = never;

export type SignInWithSSOErrorCode = SignInWithSSOErrorConfig['code'];

export const signInWithSSOErrorMap: ErrorMap<SignInWithSSOErrorConfig> = {};
