import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";




const mappingTxt = (text) => {
    const textArr = text.split('');
    return textArr.map((item, idx) => (<span key={idx}>{item}</span>));
}


const SubtitAnimation = (obj) => {

    console.log('txt:::: ',obj.txt);
    console.log('isEn:::: ',obj.isEn);

    const { txt, isEn } = obj;

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
        <VisualText className={ isEn ? 'en' : '' }>
            { mappingTxt(txt) }
        </VisualText>
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
const VisualText = styled(motion.span)`
    span {
        display: inline-block;
        font-family: inherit;
        color: inherit;
        animation-name: ${animationTxt};
        animation-duration: 2.4s;
        animation-fill-mode: forward;
        animation-iteration-count: infinite;
    }
    span:nth-child(1) {
        animation-delay: 0.1s;
    }
    span:nth-child(2) {
        animation-delay: 0.15s;
    }
    span:nth-child(3) {
        animation-delay: 0.16s;
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


export default SubtitAnimation;