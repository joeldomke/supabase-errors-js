import { ErrorMap } from '../../types/error-config';

export type GetUserByIDErrorConfig = never;

export type GetUserByIDErrorCode = GetUserByIDErrorConfig['code'];

export const getUserByIDErrorMap: ErrorMap<GetUserByIDErrorConfig> = {};
