"use client"

import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <h1> hello World</h1>
     <Link href="/userlist">Go to User Page</Link>
    </main>
  )
}
 