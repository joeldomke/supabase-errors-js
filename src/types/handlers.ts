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
}

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

// type TestErrorConfig =
//   | {
//       code: 'error-1';
//       types: '4XX';
//     }
//   | {
//       code: 'error-2';
//       types: '5XX' | 'TypeScriptSafe';
//     }
//   | {
//       code: 'error-3';
//       types: '4XX' | '5XX';
//     }
//   | {
//       code: 'error-4';
//     };

// type T = ErrorHandlerType<TestErrorConfig, { combineInternalErrors: false; excludeTypes: [] }>;

// type TT = CodeWithErrorType<TestErrorConfig, 'TypeScriptSafe'>;

// const h = {} as T;

export type HandlerName<C extends string> = `on${KebabToPascalCase<C>}`;
