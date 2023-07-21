import { ErrorMap } from '../../types/error-config';

export type DeleteUserErrorConfig = never;

export type DeleteUserErrorCode = DeleteUserErrorConfig['code'];

export const deleteUserErrorMap: ErrorMap<DeleteUserErrorConfig> = {};
