import Image from'next/image';
import lots from '../styles/lots.module.css'

function Details() {
    return (
        <>
            {/* browser tab name */}
            <title>Nethken Parking</title>
            
            {/* sidebar */}
            <div className={lots.sidebar}>
                <a className='active' href='/'>Home</a>
                <a href='/lots'>Available Parking</a>
                <a href='/stats'>Parking Statistics</a>
                <a href='/help'>Help</a>
            </div>
        
            {/* title */}
            <div className={lots.navbar}>
                <h2>Nethken Lot</h2>
            </div>

            {/* page content */}
            <div className={lots.content}>
                <p>501 Dan Reneau Drive | Ruston, LA 71270</p>
                <Image
                    src="/parking-lot.jpg"
                    height={250}
                    width={440}
                    alt="Nethken Parking Lot Map"
                />

                <h2>Available Parking</h2>
                <form>
                    <label className={lots.timeLabel}>
                        Last updated at
                    </label>
                    <input type="time"
                            value="08:00:00"
                            className={lots.timeBox}
                            readOnly/>
                </form>
                <br/>

                <div className={lots.readonly}>
                <form>
                    <input type="text"
                            value="1/16"
                            className={lots.spaceBox}
                            readOnly/>
                    <label className={lots.spaceLabel}>
                        Student
                    </label>
                </form>
                <form>
                    <input type="text"
                            value="2/8"
                            className={lots.spaceBox}
                            readOnly/>
                    <label className={lots.spaceLabel}>
                        Faculty
                    </label>
                </form>
                <form>
                    <input type="text"
                            value="0/2"
                            className={lots.spaceBox}
                            readOnly/>
                    <label className={lots.spaceLabel}>
                        Handicapped
                    </label>
                </form>
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


        {/* <section className={utilStyles.headingLg}>
            <h1>Nethken Lot</h1>
            <p>501 Dan Reneau Drive | Ruston, LA 71270</p>
            <Image
                src="/parking-lot.jpg"
                height={244}
                width={244}
                alt="Nethken Parking Lot Map"
            />
        </section>
        <section className={utilStyles.headingMd}>
            <h2>Available Parking</h2>
            <p>Last updated: 00:00:00</p>
            <h3>Student</h3>
            <h3>Faculty</h3>
            <h3>Visitor</h3>
            <h3>Handicapped</h3>
        </section> */}
        
        {/* <div className="Details" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <h1>Parking Lot Details</h1>
                <h2>Look at the details of this parking lot!</h2>
            </div>
        </div> */}
        </>
    );
}

export default Details;