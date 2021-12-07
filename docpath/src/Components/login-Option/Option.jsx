import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import DocpathLogo from "./Docpath.jpeg";
import patp from './Docpathp.jpg'
import docd from './Docpathd.jpg'
import hosh from './Docpathh.jpg'
import "./Option.css";
function Header(){
    return(
        <>
        <Navbar />
        <div className="container-fluid">
            <div className="row" id="row3">
                <div className="row" id="row3">
                
                <div className="col">
                    <img src={DocpathLogo} className="img-fluid w-30 " src="Docpath.jpeg" alt="" />
                </div>
                <div className="col">
                    <div className="column">
                    <a href="/login">
                   <img src={hosh} class="test rounded-circle" alt="Cinque Terre"></img>
                   </a>
                   <a href="/login">
                   <img src={docd} class="test rounded-circle" alt="Cinque Terre"></img>
                   </a>
                   <a href="/login">
                   <img src={patp} class="test rounded-circle" alt="Cinque Terre"></img>
                   </a>
                    </div>
                    
                </div>
            </div>
            </div>
        
        <Footer />

        </div>
        </>
    )
}
export default Header;

