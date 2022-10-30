import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {

  const gitHubProfile = await (await fetch('https://api.github.com/users/shawnmcmahon')).json();
  console.log(gitHubProfile);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {gitHubProfile.name}
        </h1>
      </main>
    </div>
  )
}
