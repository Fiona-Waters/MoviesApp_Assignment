
# ICT Skills 2 Assignment.

Name: Fiona Waters

## Overview.
A React.js Web Application allowing anyone to view popular and up to date movies and tv shows as well as actors. Movies and TV shows can be favourited and/or added to a must watch list. A logged-in user can access the Fantasy Movie feature, favourites and must watch list.

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
    + react-multi-date-picker for Release Date in My Fantasy Movie Feature.
    + multiselect-react-dropdown for Drop Down Menus in My Fantasy Movie Feature.
    + react-firebase-hooks for authentication.


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
![tvshows](https://user-images.githubusercontent.com/76408967/185810238-ad56eebe-6ed2-4565-bd17-eb26992b61a3.jpg)

> TV Series Details Page including Cast Details (with hyperlinking to the actor bio page)
![tvshowdetails](https://user-images.githubusercontent.com/76408967/185810352-96584487-2ad8-4de1-9c1d-3c221b6f3e44.jpg)

> Actor Page - lists actors from the popular actor API endpoint. Link to actor bio and actor movies on actor card.
![actorPage](https://user-images.githubusercontent.com/76408967/185810421-6f6440fc-709e-478e-b45f-5eac1d5f9663.jpg)

> Actor Bio Page - (with link to actors movies.)
![actorBioPage](https://user-images.githubusercontent.com/76408967/185810455-ff9340c6-9dc8-4bf3-a281-041557af3aea.jpg)

> Actor Movies Page -  listing movies using the people Get Movie Credits API endpoint. You can view more info about the movie as on all other movie/tv/actor cards.
![actorMovies](https://user-images.githubusercontent.com/76408967/185810526-7420f97f-3684-477a-ad6c-d95815cf4ad2.jpg)

> Fantasy Movie - showing a list of fantasy movies, and a form to add a fantasy movie. 
![fantasyMovieEmpty](https://user-images.githubusercontent.com/76408967/185810668-e2644597-61c0-4b34-8da8-6df86eba1eaf.jpg)

> Adding fantasy movie details. Multiple genres and actors can be added. A calendar date picking will pop up when release date is clicked. 

![fantasyMovieFormDetails1](https://user-images.githubusercontent.com/76408967/185810763-323bc724-71d0-4829-a801-8252ce5bba07.jpg)

![datePickCalendar](https://user-images.githubusercontent.com/76408967/185810884-5aa768fc-8c34-46fd-81f8-39550a6e948c.jpg)


> With fantasy movie added, saved and loaded from Firebase Firestore Database.


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.



## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc


## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

