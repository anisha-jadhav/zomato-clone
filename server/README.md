# API Planning
- Food (food items and their details)
- Restaurant (restaurant and their details)
- Menu (menu and its details)
- Order (order and its details)
- Image (storing all the images related to the project)
- Review (storing all the list of reviews i.e dinning or delivery)
- User (user related details, username, email, password)

# Routers 

# user
 1. /user/    (private)
    - authorize the user
    - parameters : none

 2. /user/:id  
    - get user data based on id
    - parameter : id

 3. /user/update/:id    (private)
    - edit or update user data
    - parameter : id
    - body : updatable fields
