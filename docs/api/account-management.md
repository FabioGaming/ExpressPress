#### Logging in to an account
**The Login is handled by PassportJS and therefore has no proper request/response documentation**

GET /account/auth/callback/discord|google

---

#### Logging out of an account
POST /account/auth/logout

---

#### Getting account information
GET /account/me

---

#### Editing the current profile
PUT /account/me

Body:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|userName|string|The new username that the user wants to apply|Yes|
|description|string|The profile description the user wants to apply|Yes|
|profileIcon|string|The service URL of a media file|Yes|

---

#### Deleting the current account
DELETE /account/me

---

#### Getting the current accounts posted Blogs
GET /account/me/blogs

Query:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|index|number|The start index where you want to fetch blogs from|No|
|count|number|The total amount of blogs you want to fetch|No|

---
