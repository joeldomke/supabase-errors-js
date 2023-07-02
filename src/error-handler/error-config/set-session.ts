import { ErrorMap } from '../../types/error-config';

export type SetSessionErrorConfig = never;

export type SetSessionErrorCode = SetSessionErrorConfig['code'];

export const setSessionErrorMap: ErrorMap<SetSessionErrorConfig> = {};
