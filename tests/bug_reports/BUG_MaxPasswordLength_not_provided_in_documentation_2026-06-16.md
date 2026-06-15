# BUG-002

## Title

Password maximum length restriction is not documented

## Environment

API: https://cook-api-dtdl.onrender.com

Endpoint: POST /api/auth/register

## Steps to Reproduce

1. Send POST request to /api/auth/register
2. Provide valid registration data
3. Use password longer than supported limit
4. Check response

## Expected Result

Password length requirements are documented in API specification.

## Actual Result

Request fails due to password length restriction, but maximum length is not documented in Swagger.

## Severity

Low / Minor

## Notes

The API enforces a password length limit that is not described in the documentation.
