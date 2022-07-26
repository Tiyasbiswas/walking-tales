import SocialFollow from './SocialFollow';
import Geolocation from './Geolocation';


export default function footer() {
    return (
        <>

            <div className="container-fluid text-center text-md-left" >
                <img src="./Images/FOOTER.png" alt="banner logo" />
                <div className="row">


                    <div className="col-md-3 pt-2 mt-3">
                        <ul className="list-unstyled pt-3 text-bottom .text-white">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About </a></li>
                            <li><a href="#!">Contact </a></li>
                            <li><a href="#!">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://walking-tales.com/"> walking-tales.com</a>
            </div>




        </>
    )
}