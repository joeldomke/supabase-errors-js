import { AuthError } from '@supabase/gotrue-js';
import { ErrorHandlerType } from '../../../src/types/handlers';
import * as sinon from 'sinon';
import * as chai from 'chai';
import { expect } from 'chai';
import * as sinonChai from 'sinon-chai';
import { ErrorHandler } from '../../../src/error-handler/error-handler';
import {
  SignInWithPasswordErrorCode,
  SignInWithPasswordErrorConfig,
} from '../../../src/error-handler/error-config/sign-in-with-password';

chai.should();
chai.use(sinonChai);

const authErrorDatabaseError = new AuthError('Database error querying schema');
const authErrorUnknown = new AuthError('Some error message');

const databaseErrorHandler = () => {};
const emailLoginDisabledHandler = () => {};
const unhandledErrorHandler = (errorCode: SignInWithPasswordErrorCode) => {};
const unknownErrorHandler = (error: AuthError) => {};

const databaseErrorSpy = sinon.spy(databaseErrorHandler);
const emailLoginDisabledSpy = sinon.spy(emailLoginDisabledHandler);
const unhandledErrorSpy = sinon.spy(unhandledErrorHandler);
const unknownErrorSpy = sinon.spy(unknownErrorHandler);

const defaultErrorHandler = new ErrorHandler({
  combineInternalErrors: false,
  excludeTypes: [],
});

const combinedErrorHandler = new ErrorHandler({
  combineInternalErrors: true,
  excludeTypes: [],
});

describe('', () => {
  describe('Default error handler', () => {
    beforeEach(() => {
      sinon.reset();
    });

    describe('should on existing handler', () => {
      const error = authErrorDatabaseError;
      const handlers: ErrorHandlerType<
        SignInWithPasswordErrorConfig,
        { combineInternalErrors: false; excludeTypes: never }
      > = {
        onDatabaseError: databaseErrorSpy,
        onEmailLoginDisabled: emailLoginDisabledSpy,
        onUnhandledError: unhandledErrorSpy,
        onUnknownError: unknownErrorSpy,
      };

      it('call correct handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(databaseErrorSpy).to.have.been.calledOnce;
      });

      it('not call other handlers', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(emailLoginDisabledSpy).to.not.have.been.called;
      });

      it('not call unhandled error handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(unhandledErrorSpy).to.not.have.been.called;
      });

      it('not call unknown error handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(unknownErrorSpy).to.not.have.been.called;
      });
    });

    describe('should on missing handler', () => {
      const error = authErrorDatabaseError;
      const handlers: ErrorHandlerType<
        SignInWithPasswordErrorConfig,
        { combineInternalErrors: false; excludeTypes: never }
      > = {
        onEmailLoginDisabled: emailLoginDisabledSpy,
        onUnhandledError: unhandledErrorSpy,
        onUnknownError: unknownErrorSpy,
      };

      it('not call other handlers', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(emailLoginDisabledSpy).to.not.have.been.called;
      });

      it('call unhandled error handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(unhandledErrorSpy).to.have.been.calledOnceWithExactly('database-error');
      });

      it('not call unknown error handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(unknownErrorSpy).to.not.have.been.called;
      });
    });

    describe('should on unknown error', () => {
      const error = authErrorUnknown;
      const handlers: ErrorHandlerType<
        SignInWithPasswordErrorConfig,
        { combineInternalErrors: false; excludeTypes: never }
      > = {
        onEmailLoginDisabled: emailLoginDisabledSpy,
        onUnhandledError: unhandledErrorSpy,
        onUnknownError: unknownErrorSpy,
      };

      it('not call other handlers', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(emailLoginDisabledSpy).to.not.have.been.called;
      });

      it('not call unhandled error handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(unhandledErrorSpy).to.not.have.been.called;
      });

      it('call unknown error handler', () => {
        defaultErrorHandler.handleSignInWithPasswordError(error, handlers);
        expect(unknownErrorSpy).to.have.been.calledOnceWithExactly(error);
      });
    });
  });
});
