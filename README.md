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

The main purpose of FlavorCheck was to be able to clone a website, not only for appearance but by its core features and functionality as well. This single page web application was designed and developed within a two-week time period. Below are all the main features I was able to implememnt and some future features I plan to have running on the website.

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

![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/navbar.png)

### Following Feed Page

* Shows the posts of the people a user is following or if this user is not following anyone shows a description to follow users
* User can follow and unfollow from the post or from the user's following tab
* Following tab automatically populates with the usernames of who the user is following 

[![Image from Gyazo](https://i.gyazo.com/75d23d185b7d3a9356e1d3c715900a2a.gif)](https://gyazo.com/75d23d185b7d3a9356e1d3c715900a2a)

### Global Feed Page

* Shows the global feed for all the post and users can decide if they want to follow that user
* Users can see all the burger joints they can review

![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/global-profile.png)

### Add a Flavor Form 

* A modal opens and allows a user to add a post for a burger joint
* A user is allowed to add an optional photo or description to the post
* Rating is a dynamic hover and click and allows the user to set the rating or change it
* Post will display in the global, following, and profile page of a user

[![Image from Gyazo](https://i.gyazo.com/d800a64bad544a973baa5c1ef5807daf.gif)](https://gyazo.com/d800a64bad544a973baa5c1ef5807daf)


### Delete a Flavor

* A modal opens up and confirms if you want to delete the post
* Post is removed in all pages it would be displayed on

![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/Delete-pic.png)

### Profile Page

* Displays all the post the user created and the restaurants they have reviewed
* Shows the number of followers
* User is allowed to change profile picture

![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/profile-page.gif)

## Future Features

* Show the number of followers a user has and who they are
* Restaurant show page where users can see all the burgers that have been reviewed there
* Allow users to add restaurants they want to review
* Search functionality for restaurants and users


## Code Snippets

### Profile Pic Code

![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/code-snippet-profile-pic.png)


### Star Rating Code 


![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/star-ratingsnippet.png)
