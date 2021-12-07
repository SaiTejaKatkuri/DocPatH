
// import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    // <div classNameName="top">
    //   <div classNameName="topLeft">
    //     <h2>imgur</h2>
    //   </div>
    //   <div classNameName="topCenter">
    //     <ul classNameName="topList">
    //       <li classNameName="topListItem">
    //         <Link classNameName="link">
    //           HOME
    //         </Link>
    //       </li>
          
    //     </ul>
    //   </div>
    //   <div classNameName="topRight">
        
    //     (
    //       <ul classNameName="topList">
    //         <li classNameName="topListItem">
    //           <Link classNameName="link">
    //             <h4>Sign in</h4>
    //           </Link>
    //         </li>
    //         <li classNameName="topListItem">
    //           <Link classNameName="link">
    //             <button classNameName="btn btn-md btn-success">Sign up</button>
    //           </Link>
    //         </li>
    //       </ul>
    //     )
    //     <i classNameName="topSearchIcon fas fa-search"></i>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">DocPath</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>    
      </ul>
     
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="nav justify-content-end"> 
                
                <li className="nav-item"> 
                    <a className="nav-link" href="/register">
                        <h3>SignUp</h3>
                    </a> 
                </li>
             </ul>
      <ul className="nav justify-content-end"> 
                
                <li className="nav-item"> 
                    <a className="nav-link" href="/about">
                        <h3>Contact-us</h3>
                    </a> 
                </li>
             </ul>
    </div>
  </div>
</nav>
  );
}
