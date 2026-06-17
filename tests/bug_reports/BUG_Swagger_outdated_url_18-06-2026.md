# BUG-003

## Title

Swagger UI uses outdated API base URL and cannot execute requests

## Environment

Swagger UI

API Documentation: https://cook-api-dtdl.onrender.com/api-docs

Affected endpoints:

- GET /api/categories
- POST /api/auth/login
- POST /api/auth/register
- POST /api/recipes
- Other documented endpoints

## Steps to Reproduce

1. Open Swagger UI.
2. Select any endpoint (e.g. GET /api/categories).
3. Click "Try it out".
4. Click "Execute".
5. Observe the generated request URL and response.

## Expected Result

Swagger UI sends requests to the currently deployed API host and displays the API response.

Example:

https://cook-api-dtdl.onrender.com/api/categories

## Actual Result

Swagger UI sends requests to an outdated host:

https://api.tasteorama.com/v1/api/categories

Requests fail and Swagger displays:

"Failed to fetch"

Network tab shows failed requests to the outdated domain.

## Severity

Medium

## Notes

The API itself is functional and responds correctly when requests are sent directly to the deployed API host.

The issue appears to be caused by an incorrect base URL (servers configuration) in the Swagger/OpenAPI documentation, making the interactive documentation unusable for testing API endpoints.
