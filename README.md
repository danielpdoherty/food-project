DineTuning
==========
By Erik, Rene, Komal, and Dan.


The purpose of this app is to solve the age-old problem, of 'what's for dinner?'

The app attempts to allows users to make a decision based on their food-preferences or for indecisive users,
makes the decision for them.

It then allows the users to browse corresponding restaurants in the area, see reviews, ratings, adn distance.

User Stories
============
I am a diner looking for a place to eat.
  *User would navigate to the search / or maps page.*

I can't make a decision about what to eat!
  *User would make use of Choose For Me function on omnivore or vegetarian page.*

I am a vegetarian and I like Tofu, where can I get it?
  *User would choose I'm A Vegetarian option and choose Tofu from available choices, leading to the results  page.*

I am a crazy person and I only eat brussels sprouts.
  *User has gone too far.*

User Flow
==========
                                      
                        Choose For Me ----> Random Choice ---> Search Map
                                            
                      /
            Omnivore
                      \ 
                        I Know Already ----> Search/Map
          /
    Home
          \               Choose For Me ----> Random Choice ---> Search Map
                       /
            Vegetarian 
                       \
                          I Know Already ----> Search/Map

Technologies Used
=================
HTML5/CSS/JS 
React JS  
React-Router - This was needed to route a single page application dynamically.
Firebase - Creating a database of food items is a scalable way of dynamically generating choices for the user.
Google Maps API - Implemented as an inital search function and map results.
Yahoo API - Used to provide search results, ratings, reviews and distance.
Foursquare API - Used to simplify the google map search queries.
Git - Used for version control.
