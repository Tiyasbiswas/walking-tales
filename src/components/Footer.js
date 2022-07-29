import SocialFollow from './SocialFollow';

export default function footer() {
    return (
        <>
        <br />
            <div className="footer text-center" >
                <div className="row">
                    <div className="col-md-15 pt-2 mt-3 pb-2 mb-3">
                            <a href="#!">Home</a>
                            <a href="#!">About </a>
                            <a href="#!">Contact </a>
                            <a href="#!">Feedback</a>
                        
                    </div>
                    <SocialFollow />
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a style={{ color:"black" }} href="https://walking-tales.com/"> walking-tales.com</a>
            </div>




        </>
    )
}

