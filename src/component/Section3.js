import React, {useState} from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import thum1 from "../assets/images/img/img-thum-1.png"; // 후지제록스
import thum2 from "../assets/images/img/img-thum-2.png"; // 나비서
import thum3 from "../assets/images/img/img-thum-3.png"; // 공주대학교
import thum4 from "../assets/images/img/img-thum-4.png"; // 프로이드
import thum5 from "../assets/images/img/img-thum-5.png"; // 충남어촌특화지원센터
import thum6 from "../assets/images/img/img-thum-6.png"; // 스마트통합발송
import thum7 from "../assets/images/img/img-thum-7.png"; // 이비엠앱

import Board from "./Board";
import TextAnimation from "./TextAnimation";
import SubtitAnimation from "./SubtitAnimation";





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

    const thumDatas = [
        { id: 1, img: thum3 }, // 공주대
        { id: 2, img: thum4 }, // 프로이드
        { id: 3, img: thum6 }, // 금산
        { id: 4, img: thum5 }, // 충남어촌
        { id: 5, img: thum1 }, // 후지제록스
        { id: 6, img: thum2 }, // 나비서
        { id: 7, img: thum7 }, // 이비엠
     ];

    return(
        <div ref={ref}>
        <motion.section id="sec_3" className="sec pd_sec posi_rltv"
            initial={{x:'100vw', opacity:0}}
            animate={animationControl}>
            <div className="txt_bg_frame posi_absol z_-1">
                <div className="txt_bg">
                    <TextAnimation txt="WORKS" />
                </div>
            </div>
            <div className="sec_inner">
                <div className="left maxwid">
                    <div className="txt_frame">
                        <h3 className="txt txt_sectitle">이런 걸<br/>만들었어요<b className="en c_red"><SubtitAnimation txt='!' isEn={true} /></b></h3>
                    </div>
                </div>


                <Board key={number} id={number} pfNum={`pf${number}`} ani={{opacity:1, x:0, transition:{duration:0.4, delay:0.2}}}/>


                <div className="blank_box_30"></div>
                <div className="blank_box_30"></div>
                <div className="lay_1 maxwid">
                    <ul className="lay_1 flex flex_row flex_wrap">
                        {/* 반복 */}
                        {
                        thumDatas.map((data) => {
                            return (
                                <motion.li className="lay_7_1 posi_rltv" key={data.id} onHoverStart={() => {setNumber(data.id);}} onClick={() => {setNumber(data.id);}}
                                >
                                    <motion.div className={`square ${number===data.id?'act':''}`}>
                                        <div className="inner">
                                            <div className="img_frame"><img src={data.img} alt="" /></div>
                                        </div>
                                    </motion.div>
                                </motion.li>
                            );
                        })
                        }
                        {/* 반복 끝 */}
                    </ul>
                </div>
            </div>
        </motion.section>
        </div>
    );
}



export default Section3;