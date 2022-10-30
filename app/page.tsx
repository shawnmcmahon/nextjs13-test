import styles from './page.module.css'
import React from 'react'
import { Counter } from '../components/test'

export default async function Home() {
  const gitHubProfile = await (await fetch('https://api.github.com/users/shawnmcmahon')).json();
  console.log(gitHubProfile);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {gitHubProfile.name}
        </h1>
        <Counter />
      </main>
    </div>
  )
}
