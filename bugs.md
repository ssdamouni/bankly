- BUG #1: Duplicate username raises a 400 error but the auth register routes says it should raise a 401 according to documentation

- BUG #2: The getAll function of the user model is supposed to only return the basic user info (first name, last_name and username) but it also shows email and phone at the moment

- BUG #3: If user tries to get info for a non existent user and empty object is returned with a status of 200 instead of a 404 user not found error

- BUG #4: For the await keyword in the auth/login route which results in user.admin always being false

- BUG #5: Patch route for users has require requireAdmin in the middleware but that makes it so users can't update their own information unless they are an admin. Fix is just to remove the requireAdmin function from the middleware for this route

- BUG #6: Delete user route returns a 200 status code and { "message": "deleted" } even if the user can't be found. This is because the delete route doesn't have the await keyword before User.delete()

- BUG #7: Update user route should not accept admin or any made up fields. I added jsonschema to fix this

- BUG #8: The authUser function is not actually verifiying the token anywhere