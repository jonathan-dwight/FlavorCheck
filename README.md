# FlavorCheck

## Overview

Inspired by Untappd, FlavorCheck is a social networking application that allows its users to post reviews as they eat burgers from specific burger joints, share these reviews with the global feed, and follow specific users to just see their post.

Link to Live App: [FlavorCheck](https://flavorcheck.herokuapp.com/#/)

## Technologies

**Frontend**

* React/Redux

* JavaScript

* HTML/CSS

**Backend**

* Ruby on Rails

* PostgreSQL

* AWS S3 (Connected Rails backend to AWS S3 to host all project images in order to reduce page load and improve server performance, ensuring content security with AWS IAM)

## Features

### Login

* Secure User Authorization using BCrypt hashing
* User Authorization errors are displayed in the form
* Demo-Login for users who want to test the website

[![Image from Gyazo](https://i.gyazo.com/39ada824315bd3c4a8139c77cc7831b5.gif)](https://gyazo.com/39ada824315bd3c4a8139c77cc7831b5)

### Navigation Bar

* Allows users to navigate to different pages within the site
* FlavorCheck redirects to home/following page
* FlavorTown redirects to the global page 
* Profile redirects to the profile page
* Logout signs out users and redirects back to the splash

### Following Feed Page

* Shows the posts of the people a user is following or if this user is not following anyone shows a description to follow users
* User can follow and unfollow from the post or from the User's Following Tab
* Following Tab automatically populates with the usernames of who the user is following 

[![Image from Gyazo](https://i.gyazo.com/75d23d185b7d3a9356e1d3c715900a2a.gif)](https://gyazo.com/75d23d185b7d3a9356e1d3c715900a2a)

### Global Feed Page

* Shows the global feed for all the post and users can decide if they want to follow that user
* Users can see all the burger joints they can review


### Add a Flavor Form 

* A modal opens and allows a user to add a post for a burger joint
* A user is allowed to add an optional photo or description to the post
* Rating is a dynamic hover and click and allows the user to set the rating or change it
* Post will display in the global, following, and profile page of a user

[![Image from Gyazo](https://i.gyazo.com/d800a64bad544a973baa5c1ef5807daf.gif)](https://gyazo.com/d800a64bad544a973baa5c1ef5807daf)


## Delete a Flavor

* A modal opens up and confirms if you want to delete the post
* Post is removed in all pages it would be displayed on


## Profile Page

* Displays all the post the user created and the restaurants they have reviewed
* Shows the number of followers
* User is allowed to change profile picture

[![Image from Gyazo](https://i.gyazo.com/e593e68fed73ea223edaf4d140d07299.gif)](https://gyazo.com/e593e68fed73ea223edaf4d140d07299)
