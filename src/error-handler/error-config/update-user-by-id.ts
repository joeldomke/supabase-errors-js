import { ErrorMap } from '../../types/error-config';

export type UpdateUserByIDErrorConfig = never;

export type UpdateUserByIDErrorCode = UpdateUserByIDErrorConfig['code'];

export const updateUserByIDErrorMap: ErrorMap<UpdateUserByIDErrorConfig> = {};
