import { AuthError } from '@supabase/gotrue-js';
import { getErrorCode, handleError } from '../../../src/error-handlers/common/handlers';
import { AuthErrorCode, ErrorMap } from '../../../src/types/error-config';
import { ErrorHandler } from '../../../src/types/handlers';
import * as sinon from 'sinon';
import { handleSignInWithPasswordError } from '../../../src';
import * as chai from 'chai';
import { expect } from 'chai';
import * as sinonChai from 'sinon-chai';

chai.should();
chai.use(sinonChai);

type TestErrorCode = 'database-error' | 'missing-email';

const errorMap: ErrorMap<TestErrorCode> = {
  'database-error': ['Database error message'],
  'missing-email': ['Missing email message'],
};

const authErrorDatabaseError = new AuthError('Database error message');
const authErrorUnknown = new AuthError('Some error message');

const databaseErrorHandler = () => {};
const missingEmailHandler = () => {};
const unhandledErrorHandler = (errorCode: TestErrorCode) => {};
const unknownErrorHandler = (error: AuthError) => {};

const databaseErrorSpy = sinon.spy(databaseErrorHandler);
const missingEmailSpy = sinon.spy(missingEmailHandler);
const unhandledErrorSpy = sinon.spy(unhandledErrorHandler);
const unknownErrorSpy = sinon.spy(unknownErrorHandler);

describe('', () => {
  describe('Error code resolver', () => {
    it('should return correct error code', () => {
      const errorCode = getErrorCode(authErrorDatabaseError, errorMap);
      expect(errorCode).to.eq('database-error');
    });
    it('should return undefined if no message matches', () => {
      const errorCode = getErrorCode(authErrorUnknown, errorMap);
      expect(errorCode).to.be.undefined;
    });
  });

  describe('Error handler', () => {
    beforeEach(() => {
      sinon.reset();
    });

    describe('should on existing handler', () => {
      const error = authErrorDatabaseError;
      const handlers: ErrorHandler<TestErrorCode> = {
        onDatabaseError: databaseErrorSpy,
        onMissingEmail: missingEmailSpy,
        onUnhandledError: unhandledErrorSpy,
        onUnknownError: unknownErrorSpy,
      };

      it('call correct handler', () => {
        handleError(error, handlers, errorMap);
        expect(databaseErrorSpy).to.have.been.calledOnce;
      });

      it('not call other handlers', () => {
        handleError(error, handlers, errorMap);
        expect(missingEmailSpy).to.not.have.been.called;
      });

      it('not call unhandled error handler', () => {
        handleError(error, handlers, errorMap);
        expect(unhandledErrorSpy).to.not.have.been.called;
      });

      it('not call unknown error handler', () => {
        handleError(error, handlers, errorMap);
        expect(unknownErrorSpy).to.not.have.been.called;
      });
    });

    describe('should on missing handler', () => {
      const error = authErrorDatabaseError;
      const handlers: ErrorHandler<TestErrorCode> = {
        onMissingEmail: missingEmailSpy,
        onUnhandledError: unhandledErrorSpy,
        onUnknownError: unknownErrorSpy,
      };

      it('not call other handlers', () => {
        handleError(error, handlers, errorMap);
        expect(missingEmailSpy).to.not.have.been.called;
      });

      it('call unhandled error handler', () => {
        handleError(error, handlers, errorMap);
        expect(unhandledErrorSpy).to.have.been.calledOnceWithExactly('database-error');
      });

      it('not call unknown error handler', () => {
        handleError(error, handlers, errorMap);
        expect(unknownErrorSpy).to.not.have.been.called;
      });
    });

    describe('should on unknown error', () => {
      const error = authErrorUnknown;
      const handlers: ErrorHandler<TestErrorCode> = {
        onMissingEmail: missingEmailSpy,
        onUnhandledError: unhandledErrorSpy,
        onUnknownError: unknownErrorSpy,
      };

      it('not call other handlers', () => {
        handleError(error, handlers, errorMap);
        expect(missingEmailSpy).to.not.have.been.called;
      });

      it('not call unhandled error handler', () => {
        handleError(error, handlers, errorMap);
        expect(unhandledErrorSpy).to.not.have.been.called;
      });

      it('call unknown error handler', () => {
        handleError(error, handlers, errorMap);
        expect(unknownErrorSpy).to.have.been.calledOnceWithExactly(error);
      });
    });
  });
});
