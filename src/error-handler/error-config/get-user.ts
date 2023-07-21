import { ErrorMap } from '../../types/error-config';

export type GetUserErrorConfig = never;

export type GetUserErrorCode = GetUserErrorConfig['code'];

export const getUserErrorMap: ErrorMap<GetUserErrorConfig> = {};
