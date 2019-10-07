import * as React from 'react';

import PageHead from '../components/PageHead';
import Layout from '../components/Layout';

const AboutPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <PageHead>
        <title>About Page</title>
      </PageHead>
      <Layout>
        <h2>Introduction</h2>
        <p>
          Welcome to the swapi, the Star Wars API! This documentation should
          help you familiarise yourself with the resources available and how to
          consume them with HTTP requests. If you&#39;re after a native helper
          library then I suggest you scroll down and check out what&#39;s
          available. Read through the getting started section before you dive
          in. Most of your problems should be solved just by reading through it.
        </p>
      </Layout>
    </React.Fragment>
  );
};

export default AboutPage;
