export type AuthErrorCode = AuthErrorConfig['code'];

export type AuthErrorType = '4XX' | '5XX' | 'TypeScriptSafe';

export type ConfigWithAuthErrorType<C extends AuthErrorConfig, T extends string> = C extends { types: infer U }
  ? U & T extends never
    ? never
    : C
  : never;

export type ConfigWithoutAuthErrorType<C extends AuthErrorConfig, T extends string> = C extends {
  types: infer U;
}
  ? U & T extends never
    ? C
    : never
  : C;

export interface AuthErrorConfig {
  code: string;
  types?: AuthErrorType;
}

export type ErrorMap<EC extends AuthErrorConfig> = {
  // [ECC in EC as ECC['code']]: { message: Array<string | RegExp>; types: { [T in NonNullable<ECC['types']>]: true } };
  [C in EC['code']]: {
    message: Array<string | RegExp>;
    types: { [T in NonNullable<(EC & { code: C })['types']>]: true };
  };
};

export type CodeWithErrorType<C extends AuthErrorConfig, T extends AuthErrorType> = ConfigWithAuthErrorType<
  C,
  T
>['code'];

export type CodeWithoutErrorType<C extends AuthErrorConfig, T extends AuthErrorType> = ConfigWithoutAuthErrorType<
  C,
  T
>['code'];
