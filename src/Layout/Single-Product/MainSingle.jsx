import Header from "../Components/Header";
import SingleProduct from '../Single-Product/SingleProduct'; 
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";


function MainSingle(){
    return(
        <>
            <Header />
            <SingleProduct />
            <Footer />
        </>
    )
}

export default MainSingle;