# Broken App Issues

App.listen
- app.listen is in app.js -> moved to server.js
- app.listen did not contain a callback function to notify the user that server is running   on port xxxx

Variables
- changed LET & VAR declaration to CONST -> let should only be used if we are intending on reassigning variables.

Routes
- Separate the route out of app.js
- Refactored post route ('/')
- Changed callback function to a async to make use of AWAIT

Error handling
- add error handling