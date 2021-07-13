import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilsStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Yuri Galvão'
export const siteTitle = 'next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/flavicon.icon" />
                <meta
                    name="Description"
                />
            </Head>
        </div>
    )
}
