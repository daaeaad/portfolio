import React from "react";
import "../assets/style/font.scss";
import "../assets/style/reset.scss";
import "../assets/style/template.scss";

import styled from "styled-components";
import { motion } from "framer-motion";

import Section0 from "../component/Section0";
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import Section3 from "../component/Section3";
import Section4 from "../component/Section4";



const Section = styled(motion.section)`
    width:100%; heigh:auto;
    transform:translateY(50px);
`;


class Home extends React.Component {

    state = {
        id: 1,
        isHover: false
    }

    handleThum = (id) => {
        this.setState({id});
        this.setState({isHover:true});
    }

    

    render(){
        return(
            <div className="page">
                <div className="wrap">

                    <Section0 />

                    <Section1 />

                    <Section2 />

                    <Section3 />

                    <Section4 />

                </div>
            </div>
        );
    }
}

export default Home;