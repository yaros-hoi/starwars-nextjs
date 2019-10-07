import { http } from '../../api/http';

export const LOAD_FILMS = 'LOAD_FILMS';
export const LOAD_FILMS_SUCCESS = 'LOAD_FILMS_SUCCESS';
export const LOAD_FILMS_FAILURE = 'LOAD_FILMS_FAILURE';

function getFilmList() {
  return response =>
    http
      .request({
        method: 'get',
        url: 'films/'
      })
      .then(({ data }) => data)
      .then(data => response({ type: LOAD_FILMS_SUCCESS, data }))
      .catch(error => {
        response({ type: LOAD_FILMS_FAILURE, error });
      });
}

export const loadFilms = () => dispatch => {
  dispatch({ type: LOAD_FILMS });

  return dispatch(getFilmList());
};

export const LOAD_FILM = 'LOAD_FILM';
export const LOAD_FILM_SUCCESS = 'LOAD_FILM_SUCCESS';
export const LOAD_FILM_FAILURE = 'LOAD_FILM_FAILURE';

function getFilmById(id: string) {
  return response =>
    http
      .request({
        method: 'get',
        url: `films/${id}`
      })
      .then(({ data }) => data)
      .then(data => response({ type: LOAD_FILM_SUCCESS, data }))
      .catch(error => {
        response({ type: LOAD_FILM_FAILURE, error });
      });
}

export const loadFilm = (id: string) => dispatch => {
  dispatch({ type: LOAD_FILM });

  return dispatch(getFilmById(id));
};

export const LOAD_CHARACTER = 'LOAD_CHARACTER';
export const LOAD_CHARACTER_SUCCESS = 'LOAD_CHARACTER_SUCCESS';
export const LOAD_CHARACTER_FAILURE = 'LOAD_CHARACTER_FAILURE';

function getCharacterById(id: string) {
  return response =>
    http
      .request({
        method: 'get',
        url: `people/${id}`
      })
      .then(({ data }) => data)
      .then(data => response({ type: LOAD_CHARACTER_SUCCESS, data }))
      .catch(error => {
        response({ type: LOAD_CHARACTER_FAILURE, error });
      });
}

export const loadCharacter = (id: string) => dispatch => {
  dispatch({ type: LOAD_CHARACTER });

  return dispatch(getCharacterById(id));
};

export const LOAD_PLANET = 'LOAD_PLANET';
export const LOAD_PLANET_SUCCESS = 'LOAD_PLANET_SUCCESS';
export const LOAD_PLANET_FAILURE = 'LOAD_PLANET_FAILURE';

function getPlanetById(id: string) {
  return response =>
    http
      .request({
        method: 'get',
        url: `planets/${id}`
      })
      .then(({ data }) => data)
      .then(data => response({ type: LOAD_PLANET_SUCCESS, data }))
      .catch(error => {
        response({ type: LOAD_PLANET_FAILURE, error });
      });
}

export const loadPlanet = (id: string) => dispatch => {
  dispatch({ type: LOAD_PLANET });

  return dispatch(getPlanetById(id));
};
