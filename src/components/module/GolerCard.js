import goler from '@/constants/goler'
import React from 'react'
import Card from './Card'
import styles from '@/components/module/Goler.module.css';

function GolerCard() {
  return (
    <>
      <h2>دروازه بان</h2>
      <div className={styles.container}>
        {goler.map((i) => (
          <Card key={i.name} data={i} />
        ))}
      </div>
    </>
  )
}

export default GolerCard