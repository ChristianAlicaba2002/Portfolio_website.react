import "./forStyling/Footer.css";
export function Footer(){

    return(
        <>
            <main>
                <div className="footer">
                    <div className="phone">
                        <h3>Phone</h3><br />
                        <label htmlFor="">0956-537-6522</label>
                    </div>
                    <div className="email">
                        <h3 className="emailh3">Email</h3><br />
                        <label htmlFor="">christiandave120702@gmail.com</label>
                    </div>
                    <div className="FollowMe">
                    <h3>Follow Me</h3><br />
                    <a href="https://www.facebook.com/" target="_isblank">
                    <i className="fa-brands fa-facebook class_facebook"></i></a>
                    </div>
                    <div className="moreInfo">
                        <p>&copy; 2024 By Christian Dave <br /> Powered and Secured by Mobile legends</p>
                    </div>
                </div>
            </main>
        </>
    )
}