import { AuthError } from '@supabase/gotrue-js';
import { AuthErrorCode, ErrorMap } from '../../types/error-config';
import { ErrorHandler, HandlerName } from '../../types/handlers';

export function errorCodeToHandlerName<C extends AuthErrorCode>(code: C): HandlerName<C> {
  return ('on' +
    code
      .split('-')
      .map((p) => p[0].toUpperCase() + p.slice(1))
      .join('')) as HandlerName<C>;
}

export function getErrorCode<C extends AuthErrorCode>(error: AuthError, errorMap: ErrorMap<C>): C | undefined {
  const errorMessage = error.message;
  for (const code of Object.keys(errorMap) as C[]) {
    const matchers = errorMap[code];
    if (matchers.some((m) => errorMessage.match(m))) {
      return code;
    }
  }
}

export function handleError<C extends AuthErrorCode>(
  error: AuthError,
  handlers: ErrorHandler<C>,
  errorMap: ErrorMap<C>,
) {
  const errorCode = getErrorCode(error, errorMap);
  if (errorCode) {
    const handlerName = errorCodeToHandlerName(errorCode);
    const handler = handlers[handlerName];
    if (handler) {
      (handler as () => void)();
      return;
    }
    if (handlers.onUnhandledError) {
      handlers.onUnhandledError(errorCode);
      return;
    }
  }
  if (handlers.onUnknownError) {
    handlers.onUnknownError(error);
    return;
  }
  console.warn(
    'Unknown error message: ',
    error.message,
    '\n\nPlease consider creating a new issue here: https://github.com/joeldomke/supabase-errors-js/issues/new',
  );
}
