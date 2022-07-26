import SocialFollow from './SocialFollow';




export default function footer() {
    return (
        <>

            <div className="container-fluid text-center text-md-left " style={{ color: "white", background: "#073648" }}  >
                <div className="row">
                    <div className="img-fluid ">
                        <img src="./images/footImage.png" alt="map image" />
                    </div>

                    <div className="col-md-3 pt-2 mt-3">
                        <ul className="list-unstyled pt-3 text-bottom .text-white">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About </a></li>
                            <li><a href="#!">Contact </a></li>
                            <li><a href="#!">Feedback</a></li>
                        </ul>
                    </div>


                    <SocialFollow />
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://walking-tales.com/"> walking-tales.com</a>
            </div>




        </>
    )
}

