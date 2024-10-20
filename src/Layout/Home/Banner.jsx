import React from "react";

function Banner(){
    return(
        <>
            <div className="banner">
                <div className="banner-left">
                    <img src="image/left-banner.jpg" alt="" />
                    <h1 style={{fontSize:55,color:"white",marginTop:-350,fontWeight:"bold"}}>We Are Hexashop</h1>
                    <h4 style={{fontSize:18,color:"white",marginTop:10,fontStyle:"italic"}}>Awesome, clean & creative HTML5 Template</h4>
                    <button>Purchase Now!</button>
                </div>
                <div className="banner-right">
                    <div className="row1">
                        <div className="poster">
                            <div className="hidden">
                                <h1 style={{fontSize:35,color:"white",paddingTop:50}}>Women</h1>
                                <p style={{fontSize:16,color:"white"}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                <button>Discover More</button>
                            </div>
                            <img src="image/baner-right-image-01.jpg" alt="" />
                            <h3 style={{fontSize:30,marginTop:-170,color:"white",fontWeight:"bold"}}>Women</h3>
                            <p style={{fontSize:18,marginTop:10,color:"white",fontWeight:"italic",fontWeight:400}}>Best Clothes For Women</p>
                        </div>
                        <div className="poster">
                        <div className="hidden">
                                <h1 style={{fontSize:35,color:"white",paddingTop:50}}>Men</h1>
                                <p style={{fontSize:16,color:"white"}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                <button>Discover More</button>
                            </div>
                            <img src="image/baner-right-image-02.jpg" alt="" />
                            <h3 style={{fontSize:30,marginTop:-170,color:"white",fontWeight:"bold"}}>Men</h3>
                            <p style={{fontSize:18,marginTop:10,color:"white",fontWeight:"italic",fontWeight:400}}>Best Clothes For Men</p>
                        </div>
                    </div>
                    <div className="row1 mt-5">
                    <div className="poster">
                        <div className="hidden">
                            <h1 style={{fontSize:35,color:"white",paddingTop:50}}>Kids</h1>
                            <p style={{fontSize:16,color:"white"}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <button>Discover More</button>
                        </div>
                        <img src="image/baner-right-image-03.jpg" alt="" />
                        <h3 style={{fontSize:30,marginTop:-170,color:"white",fontWeight:"bold"}}>Kids</h3>
                            <p style={{fontSize:18,marginTop:10,color:"white",fontWeight:"italic",fontWeight:400}}>Best Clothes For Kids</p>
                    </div>
                    <div className="poster">
                    <div className="hidden">
                                <h1 style={{fontSize:35,color:"white",paddingTop:50}}>Accessories</h1>
                                <p style={{fontSize:16,color:"white"}}>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                <button>Discover More</button>
                            </div>
                        <img src="image/baner-right-image-04.jpg" alt="" />
                        <h3 style={{fontSize:30,marginTop:-170,color:"white",fontWeight:"bold"}}>Accessories</h3>
                            <p style={{fontSize:18,marginTop:10,color:"white",fontWeight:"italic",fontWeight:400}}>Best Trend Accessories</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;