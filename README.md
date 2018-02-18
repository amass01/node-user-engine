# node-user-engine

An Express.js authentication seed server, written on top of mongo database.

###### Local dev:

 - Simply clone the source code and run `npm run start` to start the app on port `9191`

##### Endpoints:

 - `/` - main route, welcome message (not authenticated)
   - Method: GET
   - Not authenticated - can be reached without token
 - `/api/user` - list all users
   - Method: GET
   - Authenticated
 - `/api/user/create` - creates new user
   - Method: POST
   - Authenticated
   - Payload: ` { name: string, password: string, isAdmin: boolean} `
   - Response: `{ success: boolean } `
 - `/api/authenticate` - verify user's password against db and return token on success.
    - Method: POST
    - Not authenticated - can be reached without token
    - Payload: ` { name: string, password: string, isAdmin: boolean} `
    - Response: `{ success: boolean, token: string } `