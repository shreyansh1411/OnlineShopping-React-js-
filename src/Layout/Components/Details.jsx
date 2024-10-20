import { Button } from "bootstrap5/src/js/bootstrap.bundle.min";
import React from "react";

function Details(){
    return(
        <>
        <div className="details">
            <div className="details-row1">
                <h1>By Subscribing To Our Newsletter You<br/> Can Get 30% Off</h1>
                <p>Details to details is what makes Hexashop different from the other themes.</p>
               <input type="text" placeholder="Your Name"></input> <input type="text" placeholder="Your Email Address"></input>
            </div>
            <div className="details-row2">
                <h3>Store Location:</h3>
                <p>Sunny Isles Beach, FL<br/>33160, United States</p>
                
                <h3>Phone:</h3>
                <p>010-020-0340</p>
                
                <h3>Office Location:</h3>
                <p>North Miami Beach</p>
            </div>
            <div className="details-row2">
            <h3>Work Hours:</h3>
                <p>07:30 AM - 9:30 PM<br/> Daily</p>
                
                <h3>Email:</h3>
                <p>info@company.com</p>
                
                <h3>Social Media:</h3>
                <p>Facebook, Instagram,<br/>Behance, Linkedin</p>
            </div>
        </div>
        </>
    )
}

export default Details;