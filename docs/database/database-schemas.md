#### UserSignin
|Field|Type|Description|Additional Information|
|-----|----|-----------|----------------------|
|user_id|uuid|The ID of the user|primary key|
|signup_strategy_type|enum|The strategy that was used to sign up (discord or google)|N/A|
|created_time|timestamp|The timestamp at which the user has signed up for the first time|N/A|
|modified_time|timestamp|The time at which the account was modified at|N/A|
|refresh_token|string|The refresh token of the account|N/A
|linked_profile_id|uuid|The profile thats linked to this user|[linked to](#userprofiles)|

---

#### UserProfiles
|Field|Type|Description|Additional Information|
|-----|----|-----------|----------------------|
|profile_id|uuid|The profile ID (different from UserId)|primary key|
|user_name|string|The name of the user|N/A|
|user_slug|string|A unique @tag the user can set|N/A|
|profile_icon_media_id|string|The media ID of the profile icon|[linked to]()|
|created_at|timestamp|The timestamp at which the profile was created|N/A|
|modified_at|timestamp|The timestamp at which the profile was last modified|N/A|

---

#### Blogs
|Field|Type|Description|Additional Information|
|-----|----|-----------|----------------------|
|blog_id|uuid|The ID of the blog|primary key|
|author_id|uuid|The ID of the profile that posted the blog|[linked to](#userprofiles)|
|title|string|The title of the blog|N/A|
|content|string|The content of the blog|N/A|
|tags|string[]|A list of tags set for the blog|N/A|
|thumbnail_media_id|string|The media ID of the thumbnail|[linked to](#)|
|created_at|timestamp|The timestamp at which the blog was created at|N/A|
|modified_at|timestamp|The timestamp at which the blog was last modified at|N/A|

---