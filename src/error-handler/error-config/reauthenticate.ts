import { ErrorMap } from '../../types/error-config';

export type ReauthenticateErrorConfig = never;

export type ReauthenticateErrorCode = ReauthenticateErrorConfig['code'];

export const reauthenticateErrorMap: ErrorMap<ReauthenticateErrorConfig> = {};
