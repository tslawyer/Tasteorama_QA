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
