import * as React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import { loadFilms } from '../store/actions';
import { getIdFromUrl } from '../utils';

import styles from './styles.css';

interface Query {
  filmId: string;
}

export interface Film {
  episode_id: number;
  title: string;
  characters: string[];
  opening_crawl: string;
  url: string;
}

interface Props {
  query: Query;
  films: Film[];
}

class IndexPage extends React.PureComponent<Props> {
  static async getInitialProps({ reduxStore }) {
    return await reduxStore.dispatch(loadFilms());
  }

  render() {
    const { films } = this.props;

    return (
      <React.Fragment>
        <PageHead>
          <title>Home Page</title>
        </PageHead>
        <Layout>
          <h1>The Star Wars API</h1>
          <nav>
            <ul className={styles.menu}>
              {films.map(item => {
                const filmId = getIdFromUrl(item.url);

                return (
                  <li key={filmId} className={styles.menuItem}>
                    <Link
                      as={`/film/${filmId}`}
                      href={{ pathname: '/film', query: { filmId } }}
                    >
                      <a className={styles.name}>{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  films: state.films.data
});

export default connect(
  mapStateToProps,
  null
)(IndexPage);
