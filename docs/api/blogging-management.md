#### Creating a blog
POST /blogs/create

Body:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|title|string|The title of the blog|Yes|
|content|string|The content of the blog|Yes|
|thumbnail|string|The service URL to a media file used as a thumbnail for the blog|No|
|tags|string[]|A list of searchable tags, for example the topic|No

---

#### Editing a blog
PUT /blogs/edit/:blogId

Body:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|title|string|The title of the blog|Yes|
|content|string|The content of the blog|Yes|
|thumbnail|string|The service URL to a media file used as a thumbnail for the blog|Yes|
|tags|string[]|A list of searchable tags, for example the topic|Yes|

---

#### Deleting a blog

