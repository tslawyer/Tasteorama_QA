# Authentication

## AUTH-001

### Title

Successful registration

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass valid email
4. Pass valid password

### Expected Result

201 Created

---

## AUTH-002

### Title

Registration with email that already in use

### Preconditions

API: https://cook-api-dtdl.onrender.com
<br>
User exists in system

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass email that already exists in user database
4. Pass valid password

### Expected Result

409 Conflict

---
