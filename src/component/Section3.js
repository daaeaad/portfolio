import React, {useState} from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import thum1 from "../assets/images/img/img-thum-1.png";
import thum2 from "../assets/images/img/img-thum-2.png";
import thum3 from "../assets/images/img/img-thum-3.png";
import thum4 from "../assets/images/img/img-thum-4.png";
import thum5 from "../assets/images/img/img-thum-5.png";
import thum6 from "../assets/images/img/img-thum-6.png";
import thum7 from "../assets/images/img/img-thum-7.png";
// 임시
import pf1 from "../assets/images/img/img-pf-1.png";
import pf2 from "../assets/images/img/img-pf-2.png";
import pf3 from "../assets/images/img/img-pf-3.png";
import pf4 from "../assets/images/img/img-pf-4.png";
import pf5 from "../assets/images/img/img-pf-5.png";
import pf6 from "../assets/images/img/img-pf-6.png";
import pf7 from "../assets/images/img/img-pf-7.png";

import Board from "./Board";




const Section3 = () => {
    const {ref, inView, entry} = useInView();
    const animationControl = useAnimation();
    // console.log('inView ::: ', inView);

    const [number, setNumber] = useState(1);

    if(inView) {
        animationControl.start({
            x:0,
            opacity: 1,
            transition: {
                delay: 0.7,
                duration: 0.8
            }
        });
    }

    return(
        <div ref={ref}>
        <motion.section id="sec_3" className="sec pd_sec posi_rltv"
            initial={{x:'100vw', opacity:0}}
            animate={animationControl}>
            <div className="txt_bg_frame posi_absol z_-1">
                <div className="txt_bg">
                    <p className="">WORKS</p>
                </div>
            </div>
            <div className="sec_inner">
                <div className="left maxwid">
                    <div className="txt_frame">
                        <h3 className="txt txt_sectitle">이런 걸<br/>만들었어요<b className="en c_red">!</b></h3>
                    </div>
                </div>



                <Board id={number} pfNum={`pf${number}`} ani={{opacity:1, x:0, transition:{duration:0.4, delay:0.2}}}/>


                <div className="blank_box_30"></div>
                <div className="blank_box_30"></div>
                <div className="lay_1 maxwid">
                    <ul className="lay_1 flex flex_row flex_wrap">
                        {/* 반복 */}
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(1);
                            }}
                        >
                            <motion.div className={`square ${number===1?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum1} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        {/* 반복 끝 */}

                        {/* 반복구간 */}
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(2);
                            }}
                        >
                            <motion.div className={`square ${number===2?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum2} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(3);
                            }}
                        >
                            <motion.div className={`square ${number===3?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum3} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(4);
                            }}
                        >
                            <motion.div className={`square ${number===4?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum4} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(5);
                            }}
                        >
                            <motion.div className={`square ${number===5?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum5} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(6);
                            }}
                        >
                            <motion.div className={`square ${number===6?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum6} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        <motion.li className="lay_7_1 posi_rltv" 
                            onHoverStart={() => {
                                setNumber(7);
                            }}
                        >
                            <motion.div className={`square ${number===7?'act':''}`}>
                                <div className="inner">
                                    {/* 썸네일 이미지 */}
                                    <div className="img_frame"><img src={thum7} alt="" /></div>
                                </div>
                            </motion.div>
                        </motion.li>
                        {/* 반복구간 끝 */}
                    </ul>
                </div>
            </div>
        </motion.section>
        </div>
    );
}



export default Section3;