import { ErrorMap } from '../../types/error-config';

export type SignOutErrorConfig = never;

export type SignOutErrorCode = SignOutErrorConfig['code'];

export const signOutErrorMap: ErrorMap<SignOutErrorConfig> = {};
