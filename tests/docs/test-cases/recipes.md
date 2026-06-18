# Recipes functionality

## RECIPES-001

### Title

Recipe creation without login

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/recipes
2. Pass valid recipe body

### Expected Result

401 Unauthorized

---

## RECIPES-002

### Title

Recipe creation after login

### Preconditions

API: https://cook-api-dtdl.onrender.com
<br>
User exists in system

### Steps

1. Authenticate via POST /api/auth/login with valid credentials
2. Save access token from response
3. Send POST /api/recipes with valid recipe data

### Expected Result

201 Created

---

## RECIPES-003

### Title

Get all recipes

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send GET /api/recipes

### Expected Result

200 OK

Response contains recipe collection

---

## RECIPES-004

### Title

Get recipe categories

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send GET /api/categories

### Expected Result

200 OK

Response contains available recipe categories

---

## RECIPES-005

### Title

Get available ingredients

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send GET /api/ingredients

### Expected Result

200 OK

Response contains available ingredients list

---

## RECIPES-006

### Title

Get recipe by valid id

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
Recipe exists in system

### Steps

1. Send GET /api/recipes/{id}

### Expected Result

200 OK

Recipe details are returned

---

## RECIPES-007

### Title

Add recipe to favorites without login

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/recipes/{id}/favorite

### Expected Result

401 Unauthorized

---

## RECIPES-008

### Title

Successfully add recipe to favorites

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system <br>
Recipe exists in system

### Steps

1. Authenticate via POST /api/auth/login
2. Save access token
3. Send POST /api/recipes/{id}/favorite

### Expected Result

200 OK

Recipe successfully added to favorites

---

## RECIPES-009

### Title

Add recipe to favorites with invalid recipe id

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system

### Steps

1. Authenticate via POST /api/auth/login
2. Send POST /api/recipes/{invalidId}/favorite

### Expected Result

404 Not Found

Message: Recipe not found

---

## RECIPES-010

### Title

Remove recipe from favorites with invalid recipe id

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system

### Steps

1. Authenticate via POST /api/auth/login
2. Send DELETE /api/recipes/{invalidId}/favorite

### Expected Result

404 Not Found

Message: Recipe not found

---

## RECIPES-011

### Title

Get my recipes without login

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send GET /api/recipes/my

### Expected Result

401 Unauthorized

---

## RECIPES-012

### Title

Get my recipes after login

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system

### Steps

1. Authenticate via POST /api/auth/login
2. Save access token
3. Send GET /api/recipes/my

### Expected Result

200 OK

Response contains current user's recipes

---

## RECIPES-013

### Title

Handling adding recipe to favorites twice

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system <br>
Recipe exists in system <br>
Recipe is not in favorites before test starts

### Steps

1. Authenticate via POST /api/auth/login with valid credentials
2. Save access token from response
3. Send POST /api/recipes/{id}/favorite
4. Send POST /api/recipes/{id}/favorite again

### Expected Result

409 Conflict

---
