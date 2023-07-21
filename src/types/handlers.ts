import { AuthError } from '@supabase/gotrue-js';
import {
  AuthErrorConfig,
  AuthErrorType,
  CodeWithErrorType,
  ConfigWithAuthErrorType as ConfigWithErrorType,
  ConfigWithoutAuthErrorType as ConfigWithoutErrorType,
} from './error-config';
import { KebabToPascalCase } from './utility';

export interface ErrorHandlerConfig {
  combineInternalErrors: boolean;
  excludeTypes: AuthErrorType[];
  disableLogging: boolean;
}

export type ErrorHandlerConfigWithDefaults<P extends Partial<ErrorHandlerConfig> | undefined> = {
  combineInternalErrors: P extends { combineInternalErrors: boolean } ? P['combineInternalErrors'] : false;
  excludeTypes: P extends { excludeTypes: ErrorHandlerConfig['excludeTypes'] } ? P['excludeTypes'] : never[];
  disableLogging: P extends { disableLogging: boolean } ? P['disableLogging'] : false;
};

export type ConstructorFromConfig<T extends ErrorHandlerConfig> = Omit<T, 'excludeTypes'> & {
  excludeTypes: T['excludeTypes'][];
};

export type ErrorHandlerType<EC extends AuthErrorConfig, HC extends ErrorHandlerConfig> = {
  onUnhandledError?: (errorCode: EC['code']) => void;
  onUnknownError?: (error: AuthError) => void;
} & MaybeCombineInternalErrorHandlers<ConfigWithoutErrorType<EC, HC['excludeTypes'][number]>, HC>;

export type MaybeCombineInternalErrorHandlers<EC extends AuthErrorConfig, HC extends ErrorHandlerConfig> = HC extends {
  combineInternalErrors: true;
}
  ? MaybeInternalErrorHandler<EC> & {
      [Code in Exclude<EC['code'], ConfigWithErrorType<EC, '5XX'>['code']> as HandlerName<Code>]?: () => void;
    }
  : {
      [Code in EC['code'] as HandlerName<Code>]?: () => void;
    };

export type MaybeInternalErrorHandler<EC extends AuthErrorConfig> = CodeWithErrorType<EC, '5XX'> extends never
  ? {}
  : {
      onInternalError?: (errorCode: CodeWithErrorType<EC, '5XX'>) => void;
    };

export type HandlerName<C extends string> = `on${KebabToPascalCase<C>}`;
