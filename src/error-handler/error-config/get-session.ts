import { ErrorMap } from '../../types/error-config';

export type GetSessionErrorConfig = never;

export type GetSessionErrorCode = GetSessionErrorConfig['code'];

export const getSessionErrorMap: ErrorMap<GetSessionErrorConfig> = {};
