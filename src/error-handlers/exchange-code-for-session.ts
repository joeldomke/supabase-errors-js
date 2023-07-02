import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type ExchangeCodeForSessionErrorCode = never;

const exchangeCodeForSessionErrorMap: ErrorMap<ExchangeCodeForSessionErrorCode> = {};

export function handleExchangeCodeForSessionError(
  error: AuthError,
  handlers: ErrorHandler<ExchangeCodeForSessionErrorCode>,
) {
  handleError(error, handlers, exchangeCodeForSessionErrorMap);
}