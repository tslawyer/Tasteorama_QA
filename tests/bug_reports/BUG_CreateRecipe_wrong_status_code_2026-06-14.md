# BUG-001

## Title

Creating recipe returns 200 OK instead of 201 Created

## Environment

API: https://cook-api-dtdl.onrender.com

Endpoint: POST /api/recipes

## Steps to Reproduce

1. Send POST request to /api/recipes
2. Provide valid recipe payload
3. Check response status code

## Expected Result

Status code: 201 Created

## Actual Result

Status code: 200 OK

## Severity

Low / Minor

## Notes

According to REST conventions, successful resource creation should return 201 Created.
