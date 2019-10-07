import * as React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import { loadCharacter, loadFilm } from '../store/actions';
import { getIdFromUrl } from '../utils';

import { Character } from './character';
import { Film } from './index';
import styles from './styles.css';
import { Store } from '../store/with-redux-store';

interface Props {
  query: Query;
  film: Film;
  characters: Character[];
  loadCharacter(string): () => void;
}

interface Query {
  filmId: string;
}

interface InitialProps {
  query: Query;
  reduxStore: Store;
}

function getCharacterIds(film: Film): string[] {
  return film.characters.map(character => {
    return getIdFromUrl(character);
  });
}

class FilmPage extends React.PureComponent<Props> {
  static async getInitialProps({ query, reduxStore }: InitialProps) {
    const { filmId } = query;

    return await reduxStore.dispatch(loadFilm(filmId));
  }

  componentDidMount() {
    const { loadCharacter, film } = this.props;
    const ids = getCharacterIds(film);

    for (let id of ids) {
      loadCharacter(id);
    }
  }

  render() {
    const {
      query: { filmId },
      film,
      characters
    } = this.props;

    return (
      <React.Fragment>
        <PageHead>
          <title>{film.title} Page</title>
        </PageHead>
        <Layout>
          <h1>{film.title}</h1>
          <h3>{film.opening_crawl}</h3>
          <h2>Characters</h2>

          {characters.map(item => {
            const characterId = getIdFromUrl(item.url);

            return (
              <div key={characterId}>
                <Link
                  as={`/${filmId}/characters/${characterId}`}
                  href={{
                    pathname: '/character',
                    query: { ...this.props.query, characterId }
                  }}
                >
                  <a className={styles.name}>{item.name}</a>
                </Link>
              </div>
            );
          })}
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.character.data,
  film: state.film.data
});

const mapActionsToProps = {
  loadCharacter
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FilmPage);
