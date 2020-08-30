import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >

                <h1 className={styles.title}></h1>
                <div className={styles.loginContainerContainer}>
                    <div className={styles.rcorners1}>
                        <h1>Register</h1>
                        <label >Email</label>
                        <input className={styles.inputstyle} ></input>
                        <label >Username</label>
                        <input className={styles.inputstyle}></input>
                        <label >Password</label>
                        <input className={styles.inputstyle} type="password"></input>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}