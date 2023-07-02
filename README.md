# `supabase-errors`

An error handling library for the [Supabase JS](https://github.com/supabase/supabase-js) and [GoTrue JS](https://github.com/supabase/gotrue-js) auth clients. 

The GoTrue API, which is also used by Supabase, does not return unique error codes. It does however return a descriptive error message. This package maps these error messages to more usable unique error codes. There is an error handler for every JS client function that calls the API. 

## Quick start

Install

```bash
npm install --save supabase-errors
```

Usage

```ts
import { handleSignInWithPasswordError, type SignInWitPasswordErrorCode } from 'supabase-errors';

const { data, error } = await supabase.auth.signInWithPassword({...});

// Implement error handlers
handleSignInWithPasswordError(error, {
    onEmailLoginDisabled: () => console.log('Email logins are disabled'),
    onUnhandledError: (errorCode) => console.log('Unhandled error code: ', errorCode),
    onUnknownError: (error) => console.log('Unhandled auth error: ', error), 
});

// Create error mappings
const userErrorToMessage: Record<SignInWitPasswordErrorCode, string>  = {
  'email-login-disabled': 'Email logins are not supported',
}
```

## Documentation

This package is currently work in progress. Below is a list with all functions that need an error handler and there current development status.

| Status | Description |
|--------|-------------|
| ![Static Badge](https://img.shields.io/badge/Full%20Coverage-08c355) | Can handle the complete list of erros |
| ![Static Badge](https://img.shields.io/badge/Bad%20Requests-222cfd) |  Can handle the complete list of bad request errors  |
| ![Static Badge](https://img.shields.io/badge/Partial%20Coverage-ffcc00) | Can handle some errors |
| ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) | Only `onUnknownError` is implemented |

Errors that occure due to a misconfiguration, e.g. an unvalid weebhook url, are currently not included in the full coverage.

### Error handlers

| Method | Status |
|--------|--------|
| signup | ![Static Badge](https://img.shields.io/badge/Bad%20Requests-222cfd) |
| signinWithPassword | ![Static Badge](https://img.shields.io/badge/Bad%20Requests-222cfd) |
| signInWithOtp |![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| signInWithOAuth | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| signInWithSSO | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| signOut | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| resetPasswordForEmail | ![Static Badge](https://img.shields.io/badge/Partial%20Coverage-ffcc00) |
| verifyOtp | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| getSession | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| refreshSession | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| getUser | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| updateUser | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| reauthenticate | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| resend | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| setSession | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| exchangeCodeForSession | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| getUserById | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| listUsers | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| createUser | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| deleteUser | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| inviteUserByEmail | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
| generateLink | ![Static Badge](https://img.shields.io/badge/Partial%20Coverage-ffcc00) |
| updateUserById | ![Static Badge](https://img.shields.io/badge/No%20Coverage-eb1a00) |
