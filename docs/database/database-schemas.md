#### UserSignin
|Field|Type|Description|Additional Information|
|-----|----|-----------|----------------------|
|user_id|uuid|The ID of the user|primary key|
|signup_strategy_type|enum|The strategy that was used to sign up (discord or google)|N/A|
|created_time|timestamp|The timestamp at which the user has signed up for the first time|N/A|
|modified_time|timestamp|The time at which the account was modified at|N/A|
|refresh_token|string|The refresh token of the account|N/A
|linked_profile_id|uuid|The profile thats linked to this user|[linked to](tmp)|