import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";


const Section0 = () => {
    const { entry, inView, ref } = useInView();
    const animationControl = useAnimation();

    if(inView) {
        animationControl.start({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.1,
                duration: 0.8
            }
        });
    }

    return(
        <div ref={ref}>
        <motion.section id="sec_0" className="sec posi_rltv"
            initial={{y: '20vw', opacity: 0}}
            animate={animationControl}>
            <div className="sec_inner maxwid">
                <div className="txt_bg_frame posi_absol z_-1">
                    <div className="txt_bg">
                        <p className="">DESIGN,</p>
                        <p className="">PUBLISHING,</p>
                        <p className="">FRONTEND</p>
                        <p className="">DEVELOPMENT</p>
                    </div>
                </div>
                <div className="txt_frame">
                    <h2 className="txt txt_visual">오뚜기처럼 열심히<b className="en c_red">,</b><br/>일하고 배우는<br/>김다애 입니다<b className="c_red">.</b></h2>
                    <div className="blank_box_15"></div>
                    <p className="txt size_24 c_9b weight_m">UI/UX Design <b className="c_red">+</b> Publishing <b className="c_red">+</b> Frontend Development</p>
                </div>
            </div>
        </motion.section>
        </div>
    );
}

const Section = styled(motion.div)`
    width:100%; height:auto;
`;


export default Section0;