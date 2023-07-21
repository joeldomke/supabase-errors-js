import { ErrorMap } from '../../types/error-config';

export type RefreshSessionErrorConfig = never;

export type RefreshSessionErrorCode = RefreshSessionErrorConfig['code'];

export const refreshSessionErrorMap: ErrorMap<RefreshSessionErrorConfig> = {};
