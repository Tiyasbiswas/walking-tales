import Header from './Header';
import Footer from './Footer';
import Map from './Map';


export default function FindPartner() {
    return(
    <>
        <Header />
        <div className='map-details'>
        <Map />
        </div>
        <Footer />
    </>
    )
}