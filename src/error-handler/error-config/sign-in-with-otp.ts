import { ErrorMap } from '../../types/error-config';

export type SignInWithOtpErrorConfig = never;

export type SignInWithOtpErrorCode = SignInWithOtpErrorConfig['code'];

export const signInWithOtpErrorMap: ErrorMap<SignInWithOtpErrorConfig> = {};
