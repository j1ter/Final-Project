import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import styles from './filter.module.css';

const Filter = () => {
  const { filter, setFilter } = useContext(GlobalContext);

  function handleRemove(item) {
    setFilter(filter.filter(value => value !== item))
  }

  function handleClear() {
    setFilter([]);
  }

  return (
    <div className={styles.filter}>
      <ul className={styles.tags}>
        {filter !== '' && filter.map(item => <li key={item}>{item}<div className={styles.remove} onClick={() => handleRemove(item)}>
          <img src="../../images/icon-remove.svg" alt="" />
        </div></li>)}
      </ul>
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Filter;