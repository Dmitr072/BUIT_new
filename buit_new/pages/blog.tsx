import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Blog() {
    return (
        <div className={styles.container}>
            <Link href="/">
                Main
            </Link>

            <h1>Blog Page</h1>
        </div>

    )
}