# node-user-engine

An Express.js authentication seed server, written on top of mongo database.

###### Local dev:

 - Simply clone the source code and run `npm run start` to start the app on port `9191`

##### Endpoints:

 - `/` - main route, welcome message (not authenticated)
   - Method: GET
 - `/api/user` - list all users
   - Method: GET
 - `/api/user/create` - creates new user
   - Method: POST
   - Payload: ` { name: string, password: string, isAdmin: boolean} `
   - response: `{ success: boolean } `
 - `/api/authenticate` - verify user's password against db and return token on success.
    - Method: POST
    - Payload: ` { name: string, password: string, isAdmin: boolean} `
    - response: `{ success: boolean, token: string } `