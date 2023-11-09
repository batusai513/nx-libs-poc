import { LibX } from '@myorg/lib-x';
import styles from './lib-y.module.scss';

/* eslint-disable-next-line */
export interface LibYProps {}

export function LibY(props: LibYProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibY!</h1>
      <LibX />
    </div>
  );
}

export default LibY;
