#### Get recently posted blogs
GET /blogs/recent

Query:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|index|number|The index of where you want to start to fetch the blogs|No|
|count|number|The amount of blogs you want to fetch|No|

---

#### Search for blogs
GET /blogs/search

Query:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|query|string|The query string you want to look for|Yes|

---

#### Getting a users profile
GET /users/:userId

---

#### Getting a users blogs
GET /users/:userId/blogs

Query:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|index|number|The index where you want to start fetching blogs from|No|
|count|number|The amount of blogs you want to fetch|No|