import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

                <h1 className={styles.title}></h1>
                
                <div className={styles.chatcontainer}>

                <div className={styles.messagescontainer}>
                    <div id="ingoingMessage">
                        <p className={styles.user}>Login</p>
                        <div className={styles.ingoingmessage}>
                            <img className={styles.avatar} src="https://cdn.discordapp.com/attachments/696332325457231897/749733699595141170/32708c6077b3c9341b825d619351d417.png">

                            </img>
                            <div className={styles.tablebreak}>
                                <p className={styles.message}>Hello there anakin!</p>
                            </div>
                        </div>
                        <p className={styles.timestamp}>00:00 am</p>   
                    </div>
                        <div id="ingoingMessage">
                            <p className={styles.user}>Login</p>
                            <div className={styles.ingoingmessage}>
                                <img className={styles.avatar} src="https://cdn.discordapp.com/attachments/696332325457231897/749733699595141170/32708c6077b3c9341b825d619351d417.png">

                                </img>
                                <div className={styles.tablebreak}>
                                    <p className={styles.message}>Hello there anakin!asd dd dd d dd  d d dd d dd d d dddd dd d d ddd</p>
                                </div>
                            </div>
                            <p className={styles.timestamp}>00:00 am</p>
                        </div>
                </div>




                <div className={styles.textmessagecontainer}>
                    <input className={styles.textbox}></input>
                </div>
                </div>
                
            </main>
        </div>
    )
}