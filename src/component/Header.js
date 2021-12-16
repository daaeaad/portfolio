import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import logo from "../assets/images/img/img-logo.png";


const Header = () => {

    const {ref, inView, entry} = useInView();
    const animationControl = useAnimation();
    // console.log('inView ::: ', inView);

    if(inView) {
        animationControl.start({
            y:0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 1.2
            }
        });
    }

    return(
        <header className="header" id="hd">
            <div className="lay_1 flex flex_row flex_align_center flex_justi_between">
                <h1 className="logo posi_rltv">
                    <VisualText className="img_frame"><img src={logo} alt="로고 이미지" /></VisualText>
                    <div className="txt_frame flex row flex_justi_center flex_align_center"><p className="txt en">Daae's Portfolio</p></div>
                </h1>
                <div className="email">
                    <p className="txt en">daae0214@naver.com</p>
                </div>
            </div>
        </header>
    );
}

const animationTxt = keyframes`
    0% { transform: translateY(-15px) skewY(0deg) skewX(0deg) rotateZ(10deg); }
    10% { transform: translateY(-15px) skewY(0deg) skewX(0deg) rotateZ(-6deg); }
    15% { transform: translateY(-15px) skewY(0deg) skewX(0deg) rotateZ(-10deg); }
    25% { transform: translateY(-15px) skewY(0deg) skewX(0deg) rotateZ(-6deg); }
    35% { transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); }
    65% { transform: translateY(-8px) skewY(0deg) skewX(0deg) rotateZ(0deg); }
    85% { transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); }
    95% { transform: translateY(-15px) skewY(0deg) skewX(0deg) rotateZ(-6deg); }
    100% { transform: translateY(-15px) skewY(0deg) skewX(0deg) rotateZ(10deg); }
`;
const VisualText = styled(motion.div)`
    img {
        display: inline-block;
        font-family: inherit;
        color: inherit;
        animation-name: ${animationTxt};
        animation-duration: 2.4s;
        animation-fill-mode: forward;
        animation-iteration-count: infinite;
    }
    div:nth-child(1) {
        animation-delay: 0.1s;
    }
    div:nth-child(2) {
        animation-delay: 0.15s;
    }
    div:nth-child(3) {
        animation-delay: 0.16s;
    }
    div:nth-child(4) {
        animation-delay: 0.8s;
    }
    div:nth-child(5) {
        animation-delay: 1s;
    }
    div:nth-child(6) {
        animation-delay: 1.2s;
    }
    div:nth-child(7) {
        animation-delay: 1.4s;
    }
    div:nth-child(8) {
        animation-delay: 1.5s;
    }
    div:nth-child(9) {
        animation-delay: 1.6s;
    }
    div:nth-child(10) {
        animation-delay: 1.8s;
    }
    div:nth-child(11) {
        animation-delay: 1.9s;
    }
    div:nth-child(12) {
        animation-delay: 2.1s;
    }
`;

export default Header;