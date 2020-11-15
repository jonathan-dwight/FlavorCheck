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

The main purpose of FlavorCheck was to be able to clone a website, not only for appearance but by its core features and functionality as well. This single page web application was designed and developed within a two-week time period. Below are all the main features I was able to implement and some future features I plan to have running soon.

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

### Star Rating Code 

I implemented a star rating for my add a flavor form. I faced many challenges for this feature. One was trying to account the hover and setting state with the actual rating desired. My first initial problem came with the value changing when hovered over. This required me to refactor and set a value to each star and making sure when I clicked it, the actual rating would change, and not when I just hover it. 

When I fixed this, more challenges came along and that the value would reset it when I hover and I would have to reclick the rating everytime. I was able to have this fixed by having a hovervalue and rating value in my set and creating three different functions to handle hover, setting, and mousing out. I made sure the return function had the right listners on them and used the proper function.

I was forced to think differently about how to approach this problem and think of new solutions on how to handle hover, click, and have the value persist until they hit submit.


![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/star-ratingsnippet.png)


### Profile Pic Code

I implemented the feature to allow a user to upload a profile picture and have it display on all the post that they write. This also allows you to update it in real time and see a preview of it prior to uploading. A button pops up when the image changes allowing to user to change their picture with a click. I faced challenges with this because I was having a hard time for the preview to come up and have the button only appear when they change the image. Another challenge was trying to get the button to disappear after the photo has been changed.

I was able to solve this solution by being more creative with how I used conditional logic to check my state.

![image](https://github.com/jonathan-dwight/FlavorCheck/blob/master/app/assets/images/code-snippet-profile-pic.png)
