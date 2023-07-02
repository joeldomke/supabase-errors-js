import { ErrorMap } from '../../types/error-config';

export type CreateUserErrorConfig = never;

export type CreateUserErrorCode = CreateUserErrorConfig['code'];

export const createUserErrorMap: ErrorMap<CreateUserErrorConfig> = {};
