# README #

### Recent task break down ###

17.1. pass in browser default language

+ follow the design to skin everything.
1. we need to make function for api calls that take call type like "post, put," as parameter
2. then go back and work on change password page
1. needs to work on change password feature from the url.
1. implement recover email
1, add content to all headers,
1, now build form header first, cuz you need them soon.
2. All use account pages. -- while doing the form, please follow the class of dialog form.

-------------------------------------------------------
1. Now work on add course page, 
2. add more than one page of course and build the course listing page according to the design.
3. build single course page according to the design
23. you need to support multi-language, so in all the forms, you can only validate whether a string has invalid character, instead allow it only to be  alphabetic characters only.
24. for security, double check everything you receive user input!!!! we can do it later.
- need to work on account pages
- need to double check all action workflow when start building api
26. we should add a username field so that user can login with either his email address or username
27. create another file with all the const value of server error type, so that you can keep track of them.
29. solve svg issue and replace all the icon with svg icon
### How do I get set up? ###
1. clone the repo into local and go to that folder
2. npm install
3. npm start
4. go to http://localhost:8080/

### main components ###
1. server and domain setup
2. React Backend Rendering
3. Localization Ready
4. Forum component
5. Zendesk support
6. News and Blog Component
7. User Authentication (including login with google and login with facebook)
8. Instructor registration page

9. Course Categories
We only need 2 level category at the moment, but it should be expandable into 3, 4 levels deep.
10. Different Course Categories and Videos According to country setting
Common Categories and Videos that can be watched in any country setting.
All the category is country based, Some categories are allowed for certain country, global categories should be visible all over the world, however, user should be able to set their language or location themself and view other country’s content.
11. Single Category page, list all subcategories and all the courses
12. Search feature
13. Filters in search result page
14. breadcrumb
15. Display all my courses
16. Course rating - only who purchased this course can rate it.
17. Coupon
18. Shopping Cart
19. Discount in limited time
20. Notification for Instructor and student separately 
21. User Profile and user Setting.
22. Admin feature: admin can manage all the content in the website, freeze a user, disable any instructor’s course, send notification to all users. Also, able to manage all the static page, update news and 
Video Player, exactly like Udemy’s
23. 30-day Money Back Guarantee
24. Forum super star instructor section - pending for current version
25. Static content - like private policy 



### Who do I talk to? ###

Lu: kidder5142@gmail.com


Bugs FE: 
- Signup
password 123123123ABC is warned as invalid password.
- recover password
need to show the correct success call message.
- change password
change password is not secure enough, as it shows the token on url.

Bugs BE:
- Facebook Login
Failed to fetch user profile