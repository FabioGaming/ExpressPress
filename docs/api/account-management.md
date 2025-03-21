#### Logging in to an account
**The Login is handled by PassportJS and therefore has no proper request/response documentation**

GET /account/auth/callback/discord|google

---

#### Getting account information
GET /account/me

---

#### Deleting the current account
DELETE /account/me

---

#### Getting the current accounts posted Blogs
GET /account/me/blogs

Query:
|Name|Type|Description|Required|
|----|----|-----------|--------|
|start|number|The start index where you want to fetch blogs from|No|
|count|number|The total amount of blogs you want to fetch|No|

---
