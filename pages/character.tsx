import * as React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import { loadCharacter, loadPlanet } from '../store/actions';
import { getIdFromUrl } from '../utils';
import { Planet } from './planet';
import styles from './styles.css';
import { Store } from '../store/with-redux-store';

export interface Character {
  homeworld: string;
  name: string;
  url: string;
}

interface Query {
  filmId: string;
  characterId: string;
}

interface Props {
  query: Query;
  character: Character;
  planet: Planet;
  loadPlanet(string): () => void;
}

interface InitialProps {
  query: Query;
  reduxStore: Store;
}

class CharacterPage extends React.PureComponent<Props> {
  static async getInitialProps({ query, reduxStore }: InitialProps) {
    const { characterId } = query;

    return await reduxStore.dispatch(loadCharacter(characterId));
  }

  componentDidMount() {
    const {
      query: { characterId },
      loadPlanet
    } = this.props;

    loadPlanet(characterId);
  }

  render() {
    const {
      query: { filmId, characterId },
      character,
      planet
    } = this.props;
    const planetId = getIdFromUrl(character.homeworld);

    return (
      <React.Fragment>
        <PageHead>
          <title>{character.name} Page</title>
        </PageHead>
        <Layout>
          <h1>{character.name}</h1>
          <h2>Planet</h2>
          <Link
            as={`/${filmId}/characters/${characterId}/planets/${planetId}`}
            href={{
              pathname: '/planet',
              query: { ...this.props.query, planetId }
            }}
          >
            <a className={styles.name}>{planet.name}</a>
          </Link>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  character: state.character.data[0],
  planet: state.planet.data
});

const mapActionsToProps = {
  loadPlanet
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CharacterPage);
