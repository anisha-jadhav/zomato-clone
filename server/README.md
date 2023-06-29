# API Planning
- Auth (for authorization of user, generate unique jwt token for each user logged in)
- Food (food items and their details)
- Restaurant (restaurant and their details)
- Menu (menu and its details)
- Order (order and its details)
- Image (storing all the images related to the project)
- Review (storing all the list of reviews i.e dinning or delivery)
- User (user related details, username, email, password)

# Routers 

## Authorization
 1. `/auth/signup`
   - method : POST
   - create an new user account nd generate a specific jwt token for user
   - parameters : none
   - body params : email, phone
   - access : Private

2. `/auth/signin`
   - method : POST
   - generate a specific jwt token for user
   - parameters : none
   - body params : email, password
   - access : Private

## Food 
 1. /food/:id
    - method : GET
    - get food based on id
    - params : food id
    - access : Public

 2. /food/r/:id
    - method : GET
    - get all food based on particular restaurant id
    - params : restaurant id
    - access : Public

 3. /food/c/:id
    - method : GET
    - get all food based on particular category
    - params : category
    - access : Public
## user
 1. /user/    
    - method : GET
    - authorize the user
    - parameters : none
    - access : Private

 2. /user/:id  
    - method : GET
    - get user data based on id
    - parameter : id
    - access : Public

 3. /user/update/:id  
    - method : PUT  
    - edit or update user data
    - parameter : id
    - body : updatable fields
    - access : Private
## Order
 1. /order/:id
    - method : GET
    - get all orders of a specific user based on user id
    - parameter : user id
    - access : Public

 2.  /order/new
    - method : PUT
    - update or add a new order for a user
    - parameters : none
    - access : private

## Review
 1. /review/:id
    - method : GET
    - get reviews of particular restaurant
    - parameter : restaurant id
    - access : Public 

 2. /review/new
    - method : PUT
    - add new food or restaurant review
    - parameter : none
    - body : complete review to add
    - access : Private 

 3. /review/delete/:id
    - method : DELETE
    - delete my own review
    - parameter : review id
    - access : Private

## Menu
 1. /menu/list/:id
    - method : GET
    - get all menu list of particular restaurant
    - parameter : restaurant id
    - access : Public

 2. /menu/images/:id
    - method : GET
    - get all images of particular menu
    - parameter : menuImage id
    - access : Public

## Restaurants
 1. /restaurant/:city
    - method : GET
    - get all restaurant in city
    - parameter : city
    - access : Public

 2. /restaurant/:id
    - method : GET
    - get particular restaurant based on id
    - parameter : restaurant id
    - access : Public

 3. /restaurant/search/:searchString
    - method : GET
    - get restaurant based on name as search string
    - parameter : search string (restaurant name)
    - access : Public
