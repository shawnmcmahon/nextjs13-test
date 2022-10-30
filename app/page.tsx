import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {

  const gitHubProfile = await fetch('https://api.github.com/users/shawnmcmahon');
  console.log(gitHubProfile);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World
        </h1>
      </main>
    </div>
  )
}
