import Image from 'next/image'
import styles from '../../page.module.css'

export default function Settings() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Settings
        </h1>
      </main>
    </div>
  )
}