import React from "react";
import { NavLink } from "react-router-dom";
import he from "../src/img/image.png";
const Common = (props) => {
    return (
        <>
        < section id="header"className="d-flex algin-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row"> 
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{}
                            <strong className="brand-name">KrishTechnical</strong>
                    </h1>
                    <h2 className="my-3">
                        We are the team of talented developer making websites
                    </h2>
                    <div className="mt-3">
                        <NavLink to="{props.vist}" className="btn-get-started">
                            {props.btnmae}
                        </NavLink>
                    </div>
                     </div>
                     <div className="col-lg-6 order-lg-2 header-img">
                        <img src={props.imgsrc} className="img-fluid-animated"alt="common img" />
                     </div>
                     </div>
                </div> 
            </div>
            </div>
        </section>
       
        </>
    )
}
export default Common;