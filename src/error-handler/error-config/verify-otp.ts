import { ErrorMap } from '../../types/error-config';

export type VerifyOTPErrorConfig = never;

export type VerifyOTPErrorCode = VerifyOTPErrorConfig['code'];

export const verifyOTPErrorMap: ErrorMap<VerifyOTPErrorConfig> = {};
