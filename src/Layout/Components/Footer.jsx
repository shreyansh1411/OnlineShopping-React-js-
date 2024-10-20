import React from "react";

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-col1">
                    <div className="footer-col1-row1">
                        <img src="image/white-logo.png" alt="" />
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>16501 collins Ave,Sunny lsles Beach,<br/>FL 33160,United States</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>hexashop@company.com</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>010-020-0340</p>
                    </div>
                    <div className="footer-col1-row2">
                        <h3 style={{color:"white",fontSize:20,fontWeight:"bold"}}>Shopping & Categories</h3>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Men's Shopping</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Women's Shopping</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Kid's Shopping</p>
                    </div>
                    <div className="footer-col1-row3">
                        <h3 style={{color:"white",fontSize:20,fontWeight:"bold"}}>Useful Links</h3>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Homepage</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>About Us</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Help</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Contact Us</p>
                    </div>
                    <div className="footer-col1-row4">
                        <h3 style={{color:"white",fontSize:20,fontWeight:"bold"}}>Help & Information</h3>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Help</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>FAQ's</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Shipping</p>
                        <p style={{color:"white",fontSize:18,fontWeight:400}}>Tracking ID</p>
                    </div>
                </div>
                <div className="footer-col2">
                    <h3>Copyright 2022 HexaShop Co.,Ltd. All Rights Reserved</h3>
                    <p>Design:Tem<span style={{color:"#CCFFFF"}}>plateMo</span></p>
                    <p>Distributed By:<span style={{color:"#CCFFFF"}}>ThemeWagon</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer;