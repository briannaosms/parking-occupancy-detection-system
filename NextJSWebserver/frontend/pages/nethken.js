import Image from'next/image'
import Head from 'next/head'

import lots from '../styles/lots.module.css'
import Sidebar from './sidebar';

function Details() {
    return (
        <>
			{/* browser tab title and icon */}
            <Head>
                <link rel="icon" href="/latech.ico"/>
                <title>Nethken Parking</title>
            </Head>


            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        

            {/* navbar title */}
            <div className={lots.navbar}>
                <h2>Nethken Lot</h2>
            </div>


            {/* page content */}
            <div className={lots.content}>
                {/* parking lot address */}
                <p>501 Dan Reneau Drive | Ruston, LA 71270</p>
                
                {/* parking lot image/map */}
                <Image
                    src="/parking-lot.jpg"
                    height={250}
                    width={250}
                    alt="Nethken Parking Lot Map"
                />


                {/* available parking & time update */}
                <h2>Available Parking</h2>
                <form>
                    <label className={lots.timeLabel}>
                        Last updated at
                    </label>
                    <input type="text"
                           value="8:30 AM"
                           className={lots.timeBox}
                           readOnly 
                    />
                </form>
                <br/>

                {/* available parking spaces & categories */}
                <div className={lots.readonly}>
                    {/* available student spaces */}
                    <form>
                        <input type="text"
                            value="1/16"
                            className={lots.spaceBox}
                            readOnly/>
                        <label className={lots.spaceLabel}>
                            Student
                        </label>
                    </form>

                    {/* available faculty spaces */}
                    <form>
                        <input type="text"
                            value="2/8"
                            className={lots.spaceBox}
                            readOnly/>
                        <label className={lots.spaceLabel}>
                            Faculty
                        </label>
                    </form>

                    {/* available handicapped spaces */}
                    <form>
                        <input type="text"
                            value="0/2"
                            className={lots.spaceBox}
                            readOnly/>
                        <label className={lots.spaceLabel}>
                            Handicapped
                        </label>
                    </form>

                    {/* available students spaces */}
                    <form>
                        <input type="text"
                                value="1/1"
                                className={lots.spaceBox}
                                readOnly/>
                        <label className={lots.spaceLabel}>
                            Visitor
                        </label>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Details;