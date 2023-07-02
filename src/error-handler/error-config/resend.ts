import { ErrorMap } from '../../types/error-config';

export type ResendErrorConfig = never;

export type ResendErrorCode = ResendErrorConfig['code'];

export const resendErrorMap: ErrorMap<ResendErrorConfig> = {};
