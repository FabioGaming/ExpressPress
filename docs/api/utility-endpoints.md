#### Uploading media
POST /media/upload

Body:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|file|bytes|The byte data of the file you want to upload|Yes|

Query:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|type|string|The type of media you upload, example: profile, blog|Yes|
|target|string|The target object you want to upload the media for|Yes|

---

#### Getting a media file from ID
GET /media/:mediaId

Query:
|Field|Type|Description|Required|
|-----|----|-----------|--------|
|json|boolean|Decides if you want to fetch the actual media or just data about it|No|

---