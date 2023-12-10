import Heroes from './Heroes';
import Navbar from './Navbar';
import Footer from './Footer';
import Classe from './Classes';
import Asset from './Asset'
import '../css/style.css'
import Teacher from './Teacher';
import LogoUniversitas from './LogoUniversitas'

export default function Home () {
    return (
        <>
        <Navbar />
        <Heroes />
        <Asset/>
        <Teacher/>
        <LogoUniversitas/>
        <Classe />
        <Footer />
        </>
    )
}
