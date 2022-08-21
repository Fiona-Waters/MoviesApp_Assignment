
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
+ run `npm run start to run application on local host 3000`
+ run `npm run storybook to run storybook on local host 6006`

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

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

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

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png