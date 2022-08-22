
# ICT Skills 2 Assignment.

Name: Fiona Waters

## Overview.
A React.js Web Application allowing anyone to view popular and up to date movies, tv shows and actors. Movies and TV shows can be favourited and/or added to a must watch list. A logged-in user can access the Fantasy Movie feature, favourites and must watch list.

* Test User Details
 `EMAIL: homer@simpson.com PASSWORD: secret`

Added Features
+ TV Series Page
    + TV Series Details Page with new Cast Details component.
    + Cast Name links to Actor's Bio page (hyperlinking).
+ Actors Page (hyperlinking)
    + Actor Bio Page
    + Actor Movies Page
+ Fantasy Movie Page
    + Fantasy Movie List
    + Fantasy Movie Form
+ Must Watch Page
+ Cast Details Component added to Movie Details Page (hyperlinking).
+ Use of 17 TMDB API Endpoints.
+ Routing - 9 static and 5 parameterised routes. 3 of these are protected routes.
+ Extended Filtering adding language and vote average.
+ Sorting by Title Alphabetical and by Release Date.
+ Full Caching
+ Firebase Authentication
+ Server-side persistence. User and My Fantasy Movie stored in Firebase Firestore Database.
+ Storybook Support
+ Third party components used: 
    + [react-multi-date-picker](https://www.npmjs.com/package/react-multi-date-picker) for Release Date in My Fantasy Movie Feature.
    + [multiselect-react-dropdown](https://github.com/srigar/multiselect-react-dropdown) for Drop Down Menus in My Fantasy Movie Feature.
    + [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks) for authentication.


## Setup requirements.
+ Clone this repo.
+ Open it in your IDE. 
+ run `npm install` 
+ sign up for a TMDB account [here](https://www.themoviedb.org/signup), go to settings and an API key. Add this to a .env file which you will add to the base folder of the application. Set `REACT_APP_TMDB_KEY=` variable to this value.
+ run `npm run start` to run application on local host 3000
+ run `npm run storybook` to run storybook on local host 6006

## App Design.

### Routing/Navigation.

Routes added:

+ /tv-series - lists popular tv series.
+ /tv_shows/:id - shows more details on selected tv show.
+ /actors - lists popular actors.
+ /actor/:id - shows more details on selected actor.
+ /actor/:id/movies - shows movies that selected actor stars in.
+ /must-watch - shows must watch list. (This is a protected route.)
+ /my-fantasy-movie - shows list of users fantasy movies if any, and a form to add a fantasy movie. (This is a protected route.)
+ /login - page rendered when non-loggedin user clicks on protected routes, allows user to log in with email and password.


### Views/Pages.

> Must Watch Page - Lists movies that user has added to must watch list. Items can be removed from list, user can write a review, or view more info on the movie. This movie list can also be filtered by title, genre, language and vote average. This list can be sorted by title alphabetically or by release date. All movie/tv list pages have this filter and sort functionality. It does not work for actors.

![mustWatchPage](https://user-images.githubusercontent.com/76408967/185810050-8fc4423e-5a97-4739-b506-50eb54c90d14.jpg)

>Filter - The movie list above can also be filtered by title, genre, language and vote average. (I attempted to filter by Certification but could get get the info in the correct manner from the API.) This list can be sorted by title alphabetically or by release date. All movie/tv list pages have this filter and sort functionality. It does not work for actors.

![filter](https://user-images.githubusercontent.com/76408967/185810114-f007f297-77cb-465f-b86d-695d8423af9b.jpg)

>TV Series Page - lists the TV Series from the popular TV API endpoint. A user can add a tv-show to their favourites, and view more info about the tv-show.
>
![tvshows](https://user-images.githubusercontent.com/76408967/185810238-ad56eebe-6ed2-4565-bd17-eb26992b61a3.jpg)

> TV Series Details Page including Cast Details (with hyperlinking to the actor bio page)
> 
![tvshowdetails](https://user-images.githubusercontent.com/76408967/185810352-96584487-2ad8-4de1-9c1d-3c221b6f3e44.jpg)

> Actor Page - lists actors from the popular actor API endpoint. Link to actor bio and actor movies on actor card.
> 
![actorPage](https://user-images.githubusercontent.com/76408967/185810421-6f6440fc-709e-478e-b45f-5eac1d5f9663.jpg)

> Actor Bio Page - (with link to actors movies.)
> 
![actorBioPage](https://user-images.githubusercontent.com/76408967/185810455-ff9340c6-9dc8-4bf3-a281-041557af3aea.jpg)

> Actor Movies Page -  listing movies using the people Get Movie Credits API endpoint. You can view more info about the movie as on all other movie/tv/actor cards.
> 
![actorMovies](https://user-images.githubusercontent.com/76408967/185810526-7420f97f-3684-477a-ad6c-d95815cf4ad2.jpg)

> Fantasy Movie - showing a list of fantasy movies, and a form to add a fantasy movie. 
> 
![fantasyMovieEmpty](https://user-images.githubusercontent.com/76408967/185810668-e2644597-61c0-4b34-8da8-6df86eba1eaf.jpg)

> Adding fantasy movie details. Multiple genres and actors can be added. A calendar date picker will pop up when release date is clicked. 
>
![fantasyMovieFormDetails1](https://user-images.githubusercontent.com/76408967/185810763-323bc724-71d0-4829-a801-8252ce5bba07.jpg)

> Date Picker
> 
![datePickCalendar](https://user-images.githubusercontent.com/76408967/185810884-5aa768fc-8c34-46fd-81f8-39550a6e948c.jpg)

> With fantasy movie added, saved and loaded from Firebase Firestore Database.
> 
![fantasyMovieList](https://user-images.githubusercontent.com/76408967/185811063-fe91fa4e-8601-4d28-9cf3-b14efa956b8f.jpg)


### Component catalogue.
>Storybook

![storybook](https://user-images.githubusercontent.com/76408967/185811160-eed18a32-7991-4300-ad22-9a7cb4b8c9f9.jpg)

## Caching.

+ Discover movies
+ Movie Details
+ Genres
+ Actors
+ Discover TV
+ Movie
+ Actor Movies
+ Actor Images
+ Actor Details (Bio)


![cache](https://user-images.githubusercontent.com/76408967/185811311-3a58161c-a973-4a83-aee5-a5efc8a64f20.jpg)

## Authentication

Firebase Authentication has been added.  2 Users added and allowed to sign in with email and password. Third party component [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks) was used, specifically the useAuthState, and useSignInWithEmailAndPassword hooks. These hooks are used through the login page, the fantasy movie form and protected routes. The [Firebase Authentication Documentation](https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0) was also used extensively.
Once a user clicks on one of the protected routes listed below they will be prompted to login via the login form. By providing a valid user email address and password this can be achieved.

Protected Routes:
+ /my-fantasy-movie
+ /movies/favourites
+ /must-watch

## Server-side persistence
Any movies added using the My Fantasy Movie feature are persisted to Firebase Firestore Database and retrieved from there on rendering of page as long as user is logged in. If not logged in the user will be prompted to do so. Third party component [react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks) was used, specifically the useCollectionData hook. The [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0#web-version-9_6) was also used extensively.
I would also like to include the users favourites and must watch list but unfortunately due to time constraints this was not achieved.

+ My Fantasy Movie data is persisted.
![firestoreDatabase](https://user-images.githubusercontent.com/76408967/185812047-77749fbf-47f7-423f-a280-0da00791bacb.jpg)

## Additional features
+ Filtering
    + This feature was extended so that the user can filter by Language and Vote Average.
    + Some time was spent on filtering movie data by Certification. Unfortunately it came to light that I could not get the data in the way that I wanted it from the available API endpoint. Code relating to this remains to show the work put it.  
+ Sorting
    + Data can be sorted alphabetically by title, and also by release date using checkboxes.
+ My Fantasy Movie - use of multiselect drop down menus using [multiselect-react-dropdown](https://github.com/srigar/multiselect-react-dropdown). 
    + This allows a user to choose multiple actors/genres from the list and can also search by typing in the 'choose genres/choose actors' fields. 


## Independent learning 
+ The addition of Firebase Authentication and Server-side persistence required a large amount of independent learning and research.
+ Independent learning and research also took place while using third party components in the 'My Fantasy Movie' form which included 
    +  [react-multi-date-picker](https://www.npmjs.com/package/react-multi-date-picker) and 
    +  [multiselect-react-dropdown](https://github.com/srigar/multiselect-react-dropdown) as well as further learning about 
    +  [react-hook-form](https://www.npmjs.com/package/react-hook-form) and 
    +  Material UI.



