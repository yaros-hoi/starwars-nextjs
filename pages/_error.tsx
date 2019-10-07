import * as React from 'react';

import styles from './styles.css';

interface Props {
  statusCode?: string;
}

interface Error {
  res: {
    statusCode: string;
  };
  err: {
    statusCode: string;
  };
}

class ErrorPage extends React.PureComponent<Props> {
  static getInitialProps({ res, err }: Error) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <div className={styles.errorBlock}>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    );
  }
}

export default ErrorPage;
