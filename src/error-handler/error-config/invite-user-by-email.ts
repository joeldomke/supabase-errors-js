import { ErrorMap } from '../../types/error-config';

export type InviteUserByEmailErrorConfig = never;

export type InviteUserByEmailErrorCode = InviteUserByEmailErrorConfig['code'];

export const inviteUserByEmailErrorMap: ErrorMap<InviteUserByEmailErrorConfig> = {};
