import * as React from 'react';
import Header from '../Header';

import styles from './styles.css';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => (
  <main>
    <Header />
    <div className={styles.content}>{props.children}</div>
  </main>
);

export default Layout;
