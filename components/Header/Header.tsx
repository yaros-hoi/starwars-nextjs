import * as React from 'react';
import Link from 'next/link';

import styles from './styles.css';

const Header: React.FunctionComponent = () => (
  <header className={styles.header}>
    <Link href="/">
      <a className={styles.link}>
        <img src="/static/logo.svg" className={styles.logo} alt="Star Wars" />
      </a>
    </Link>
    <Link href="/">
      <a className={styles.link}>Home</a>
    </Link>
    <Link href="/about" prefetch>
      <a className={styles.link}>About</a>
    </Link>
  </header>
);

export default Header;
