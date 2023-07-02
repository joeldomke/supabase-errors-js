import { ErrorMap } from '../../types/error-config';

export type ListUsersErrorConfig = never;

export type ListUsersErrorCode = ListUsersErrorConfig['code'];

export const listUsersErrorMap: ErrorMap<ListUsersErrorConfig> = {};
