import React from "react"
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";
import Logo from "./Netflix-Logo.png";

// import "bootstrap"


const App = () => {
    return(
        <>
            <div className="Header_Style">
                <div>
                    <img className='Logo' src={Logo} alt="Netflix-log"></img>
                    <h4 className='heading_style'> Watch Top 5 Series  <button className="btn btn-outline-success" type="submit">Search</button> </h4></div>
                </div>

                    <div className="container">
                        <div className="row">
                            {Sdata.map((val, index) => {
                            console.log(index);
                            return (
                                <div className="col-lg-4">
                                <Card
                                imgsrc={val.imgsrc}
                                title={val.title}
                                sname={val.sname}
                                link={val.link} /></div>
                            )
                            })
                }
                </div>
            </div>
                <footer
                 className="footer_Style">
                    <p>Movies123@Netflix.com</p>
            
                </footer>

        </>
    )
}

export default App;
 
   