import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";




const mappingTxt = (text) => {
    const textArr = text.split('');
    return textArr.map((item, idx) => (<span key={idx}>{item}</span>));
}


const TextAnimation = (txt) => {

    // console.log('txt:::: ',txt);

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
        <VisualText className="">
            { mappingTxt(txt.txt) }
        </VisualText>
    );
}


const animationTxt = keyframes`
    0% { opacity: 0; transform: translateY(-100px) skewY(-10deg) skewX(-10deg) rotateZ(-30deg); filter: blur(10px); }
    25% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    75% { opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px); }
    100% { opacity: 0; transform: translateY(-100px) skewY(-10deg) skewX(-10deg) rotateZ(-30deg); filter: blur(10px); }
`;
const VisualText = styled(motion.p)`
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animationTxt};
        animation-duration: 6s;
        animation-fill-mode: forward;
        animation-iteration-count: infinite;
    }
    span:nth-child(1) {
        animation-delay: 0.1s;
    }
    span:nth-child(2) {
        animation-delay: 0.3s;
    }
    span:nth-child(3) {
        animation-delay: 0.6s;
    }
    span:nth-child(4) {
        animation-delay: 0.8s;
    }
    span:nth-child(5) {
        animation-delay: 1s;
    }
    span:nth-child(6) {
        animation-delay: 1.2s;
    }
    span:nth-child(7) {
        animation-delay: 1.4s;
    }
    span:nth-child(8) {
        animation-delay: 1.5s;
    }
    span:nth-child(9) {
        animation-delay: 1.6s;
    }
    span:nth-child(10) {
        animation-delay: 1.8s;
    }
    span:nth-child(11) {
        animation-delay: 1.9s;
    }
    span:nth-child(12) {
        animation-delay: 2.1s;
    }
`;


export default TextAnimation;