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

                
                
                <div className={styles.chatcontainer}>
                    {/** 
                     * the box outline of the chat window
                    */}
                <div className={styles.messagescontainer}>
                        {/**
                         * The top window of the chat window
                         */}
                    <div id="ingoingMessage">
                            {/**
                             * Example of an ingoing message
                             */}
                            <p className={styles.user}>Login</p>{/**Username*/}
                            
                        <div className={styles.ingoingmessage}>
                            <img className={styles.avatar} src="https://cdn.discordapp.com/attachments/696332325457231897/749733699595141170/32708c6077b3c9341b825d619351d417.png">

                                </img>{/**Avatr*/}
                            <div className={styles.tablebreak}>
                                    <p className={styles.imessage}>Hello there anakin!</p> {/**Example message*/}
                            </div>
                        </div>
                            <p className={styles.timestamp}>00:00 am</p>  {/**Timestamp*/} 
                </div>


                        <div id="outgoingmessage">
                            {/**
                             * This is for outgoing messages sent by the user
                             * Here, the timestamps and avatar are rotated to ensure the best possible symetry
                             */}
                            <div className={styles.outgoingmessage}>
                                
                                
                                <p className={styles.timestamp2}>00:00 am</p>
                                <br></br>{/**dont ask why pls */}
                                <div className={styles.tablebreak2}>

                                    <p className={styles.omessage}>Example dasa ssa ddsa d a das asd aas asa s </p>{/**Example of ingoing message*/}

                                </div>
                                <img className={styles.avatar2} src="https://cdn.discordapp.com/attachments/696332325457231897/749733699595141170/32708c6077b3c9341b825d619351d417.png">

                                </img>
                                <p className={styles.user2}>Login</p>
                                
                                
                            </div>
                           
                        </div>
                        
                        
                </div>



                    {/**
                     * Bottom box of the chat window
                     * Used for sending text
                    */}
                <div className={styles.textmessagecontainer}>
                        <input className={styles.textbox}></input>{/**Actual input field*/}
                </div>
                </div>
                
            </main>
        </div>
    )
}
