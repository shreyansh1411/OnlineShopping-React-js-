import React from "react";

function SingleProduct(){
    return(
        <>
            <div className="singleproduct">
               <h1 style={{fontSize:60,color:"white",fontWeight:800}}>Single Product Page</h1>
               <p style={{fontSize:20,color:"white",fontWeight:400}}>Awesome & Creative HTML CSS layout by TemplateMo</p>
            </div>
            
            <div className="singleproduct-row">
            <div className="singleproduct-col-1 mt-5">
                <img src="image/single-product-01.jpg" alt="" />
            </div>
            <div className="singleproduct-col-2 mt-5">
                <h1 style={{fontSize:30,color:"#2a2a2a",fontWeight:700}}>New Green Jacket</h1>
                <p style={{fontSize:20,color:"#a1a1a1",fontWeight:600,borderBottom:"1px solid #eee",paddingBottom:20}}>$75.00</p>
                <h5 style={{fontSize:20,color:"#aaaaaa",fontWeight:400,marginTop:25}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod kon tempor<br/> incididunt ut labore.</h5>
                <h5 style={{fontSize:20,color:"#2a2a2a",fontWeight:500,borderBottom:"1px solid #eee",paddingBottom:20,marginTop:30}}>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiuski smod.</h5>
                <h3 style={{fontSize:25,color:"#aaaaaa",fontWeight:700,borderBottom:"1px solid #eee",paddingBottom:30,marginTop:20}}>No. of Orders
                </h3>
            </div>
            </div>

            <div className="singleproduct-row">
            <div className="singleproduct-col-1 mt-5">
                <img src="image/single-product-02.jpg" alt="" />
            </div>
            <div className="singleproduct-col-2 mt-5">
                <p style={{fontSize:30,color:"#a1a1a1",fontWeight:600}}>Total:$210.00<button>Add To Cart</button></p>
            </div>
            </div>
        
           
        </>
    )
}

export default SingleProduct;