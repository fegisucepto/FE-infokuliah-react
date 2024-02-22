// import Heroes from './Heroes';
import Bagianatas from './bagianatas'
// import Navbar from './Navbar';
import Header from './Header'
// import Footer from './Footer';
import FooterNew from './FooterNew';
// import Classe from './Classes';
import ListProgram from './ListProgram'
// import Asset from './Asset'
import '../css/style.css'
// import Tutor from './Tutor'
import TutorNew from './TutorNew';
// import LogoUniversitas from './LogoUniversitas'
import LogoNew from './LogoNew'
import TestimoniNew from './TestimoniNew'
import ListFaqs from './ListFaqs'
// import ListBlogs from './ListBlogs'

export default function Home () {
    return (
        <>
        <Header />
        <Bagianatas />
        <ListProgram />
        <LogoNew/>
        <TutorNew/>
        <TestimoniNew/>
        {/* <ListBlogs/> */}
        <ListFaqs/>
        <FooterNew />
        </>
    )
}
