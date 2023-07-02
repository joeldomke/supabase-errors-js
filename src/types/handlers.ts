import { AuthError } from '@supabase/gotrue-js';
import { AuthErrorCode } from './error-config';
import { KebabToPascalCase } from './utility';

export type ErrorHandler<C extends AuthErrorCode> = {
  onUnhandledError?: (errorCode: C) => void;
  onUnknownError?: (error: AuthError) => void;
} & {
  [Code in C as HandlerName<Code>]?: () => void;
};

export type HandlerName<C extends AuthErrorCode> = `on${KebabToPascalCase<C>}`;
