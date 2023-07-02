import { AuthError } from '@supabase/gotrue-js';
import { ErrorMap } from '../types/error-config';
import { ErrorHandler } from '../types/handlers';
import { handleError } from './common/handlers';

export type InviteUserByEmailErrorCode = never;

const inviteUserByEmailErrorMap: ErrorMap<InviteUserByEmailErrorCode> = {};

export function handleInviteUserByEmailError(error: AuthError, handlers: ErrorHandler<InviteUserByEmailErrorCode>) {
  handleError(error, handlers, inviteUserByEmailErrorMap);
}
