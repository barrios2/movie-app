# FreSkyTime

Movie app built with React library. This is a project for HackYourFuture corresponding to the React module. This app displays popular movies on its main page. The app uses [TMDB](https://developer.themoviedb.org/docs/getting-started) free API to fetch all of the movie information. FreSkyTime contains the following features:

- A navigation bar showing all movie genres available for easy browsing.
- User can find a movie after entering a movie title in the search bar. When the title doesn't exist, error message is shown.
- User can add/remove movies as favorites and then check their favorite movies on a new page/route.
- Detailed movie information (title, poster, plot, release date and duration) is displayed on movie selection, directing users to a new page/route.
- The app is designed to be responsive across different devices.

## Demo

The deployed version of this app is available [here](https://freskytime.netlify.app/)

## Set up

To set up the app on your end just clone the repo and run 'npm i' to install all necessary dependencies

## Structure

```
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
├── src
│ └── assets
│ │ ├── freskytime.png
│ │ ├── heart-regular.svg
│ │ └── heart-solid.svg
│ ├── components
│ │ ├── Error.js
│ │ ├── Footer.js
│ │ ├── Genre.js
│ │ ├── GenreList.js
│ │ ├── Movie.js
│ │ ├── MovieList.js
│ │ ├── NavBar.js
│ │ ├── SearchBar.js
│ │ └── SearchResults.js
│ ├── context
│ │ └── MovieContext.js
│ ├── hooks
│ │ └── useFetch.js
│ ├── pages
│ │ ├── FavoritesPage.js
│ │ ├── HomePage.js
│ │ └── MovieDetailPage.js
│ ├── utils
│ │ └── constants.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ └── index.js
├── package-lock.json
├── package.json
└── README.md
```

## Author

[Fressia Barrios](https://github.com/barrios2)
