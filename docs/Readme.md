# ExpressPress
This document contains an overview of the ExpressPress documentation

---

##### Database Schemas
- [Database schemas](./database/database-schemas.md)
  - [User Signins](./database/database-schemas.md#usersignin)
  - [User Profiles](./database/database-schemas.md#userprofiles)
  - [Blogs](./database/database-schemas.md#blogs)
  - [Media Data](./database/database-schemas.md#mediadata)

---

##### REST API
All endpoints are prefixed with /api/

- [Account Management](./api/account-management.md)
  - [Logging into an account](./api/account-management.md#logging-in-to-an-account)
  - [Logging out of an account](./api/account-management.md#logging-out-of-an-account)
  - [Getting information about the current account](./api/account-management.md#getting-account-information)
  - [Deleting the current account](./api/account-management.md#deleting-the-current-account)
  - [Getting Blogs of the current user](./api/account-management.md#getting-the-current-accounts-posted-blogs)
- [Blog Management](./api/blogging-management.md)
  - [Creating a blog](./api/blogging-management.md#creating-a-blog)
  - [Editing a blog](./api/blogging-management.md#editing-a-blog)
  - [Deleting a blog](./api/blogging-management.md#deleting-a-blog)
- [User Actions](./api/user-actions.md)
  - [Getting recent blogs](./api/user-actions.md#get-recently-posted-blogs)
  - [Searching for blogs](./api/user-actions.md#search-for-blogs)
  - [Getting a users profile](./api/user-actions.md#getting-a-users-profile)
  - [Getting a users blogs](./api/user-actions.md#getting-a-users-blogs)
- [Utility endpoints](./api/utility-endpoints.md)
  - [Uploading media to the server](./api/utility-endpoints.md#uploading-media)
  - [Fetching media](./api/utility-endpoints.md#getting-a-media-file-from-ID)