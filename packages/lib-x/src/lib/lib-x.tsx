import styles from './lib-x.module.scss';

/* eslint-disable-next-line */
export interface LibXProps {}

export function LibX(props: LibXProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibX!</h1>
    </div>
  );
}

export default LibX;
