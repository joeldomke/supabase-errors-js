import { ErrorMap } from '../../types/error-config';

export type ExchangeCodeForSessionErrorConfig = never;

export type ExchangeCodeForSessionErrorCode = ExchangeCodeForSessionErrorConfig['code'];

export const exchangeCodeForSessionErrorMap: ErrorMap<ExchangeCodeForSessionErrorConfig> = {};
