import * as React from 'react';
import { connect } from 'react-redux';

import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import { loadPlanet } from '../store/actions';
import { Store } from '../store/with-redux-store';

interface Query {
  planetId: string;
}

export interface Planet {
  name: string;
  url: string;
  terrain: string;
  population: string;
  climate: string;
  diameter: string;
  gravity: string;
}

interface Props {
  query: Query;
  planet: Planet;
  loadPlanet(string): () => void;
}

interface InitialProps {
  query: Query;
  reduxStore: Store;
}

class PlanetPage extends React.PureComponent<Props> {
  static async getInitialProps({ query, reduxStore }: InitialProps) {
    const { planetId } = query;

    return await reduxStore.dispatch(loadPlanet(planetId))
  }

  render() {
    const { planet } = this.props;

    return (
      <React.Fragment>
        <PageHead>
          <title>{planet.name} Page</title>
        </PageHead>
        <Layout>
          <h1>Planet</h1>
          <h2>{planet.name}</h2>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Climate: {planet.climate}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Gravity: {planet.gravity}</p>
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  planet: state.planet.data
});

export default connect(
  mapStateToProps,
  null
)(PlanetPage);
