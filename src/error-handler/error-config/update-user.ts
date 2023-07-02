import { ErrorMap } from '../../types/error-config';

export type UpdateUserErrorConfig = never;

export type UpdateUserErrorCode = UpdateUserErrorConfig['code'];

export const updateUserErrorMap: ErrorMap<UpdateUserErrorConfig> = {};
