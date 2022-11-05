//import styles from '../../followers/[name]/page.module.css'
import styles from './page.module.css'
import { Counter } from '../../../components/test'

export default async function Home({ params }: { params: { name: string } }) {
  const name = "shawnmcmahon"
  const gitHubProfile = await (await fetch('https://api.github.com/users/' + params.name)).json();
  console.log(gitHubProfile);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {gitHubProfile.name} 
          <h3>Company: {gitHubProfile.company}</h3>
        </h1>
        <Counter />
      </main>
    </div>
  )
}
