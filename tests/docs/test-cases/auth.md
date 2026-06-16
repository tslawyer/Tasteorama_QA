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

## AUTH-003

### Title

Registration with password length less than 8 characters

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass valid email
4. Pass password with length less than 8 characters

### Expected Result

400 Bad Request

---

## AUTH-004

### Title

Registration with password length equal to 128 characters

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass valid email
4. Pass password with length equal to 128 characters

### Expected Result

201 Created

---

## AUTH-005

### Title

Registration with password length greater than 128 characters

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass valid email
4. Pass password with length greater than 128 characters

### Expected Result

400 Bad Request

---

## AUTH-006

### Title

Registration with password length equal to 8 characters

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass valid email
4. Pass password with length equal to 8 characters

### Expected Result

201 Created

---

## AUTH-007

### Title

Registration with null values in all fields

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass null as name
3. Pass null as email
4. Pass null as password

### Expected Result

400 Bad Request

---

## AUTH-008

### Title

Registration with invalid email format

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/register
2. Pass valid name
3. Pass invalid email format
4. Pass valid password

### Expected Result

400 Bad Request

---

## AUTH-009

### Title

Successful login

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system

### Steps

1. Send POST /api/auth/login
2. Pass valid email
3. Pass valid password

### Expected Result

200 OK <br>
Response contains accessToken

---

## AUTH-010

### Title

Login with invalid credentials

### Preconditions

API: https://cook-api-dtdl.onrender.com <br>
User exists in system

### Steps

1. Send POST /api/auth/login
2. Pass valid email
3. Pass invalid password

### Expected Result

401 Unauthorized

---

## AUTH-011

### Title

Login with null values

### Preconditions

API: https://cook-api-dtdl.onrender.com

### Steps

1. Send POST /api/auth/login
2. Pass null as email
3. Pass null as password

### Expected Result

400 Bad Request
