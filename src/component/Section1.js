import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextAnimation from "./TextAnimation";
import SubtitAnimation from "./SubtitAnimation";


const Section1 = () => {
    const {ref, inView, entry} = useInView();
    const animationControl = useAnimation();
    // console.log('inView ::: ', inView);

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
        <motion.section id="sec_1" className="sec pd_sec posi_rltv"
            initial={{x:'100vw', opacity:0}}
            animate={animationControl}>
            <div className="txt_bg_frame posi_absol z_-1">
                <div className="txt_bg">
                    <TextAnimation txt="INTRO" />
                </div>
            </div>
            <div className="sec_inner maxwid flex flex_row" >
                <div className="left lay_3_1">
                    <div className="txt_frame">
                        <h3 className="txt txt_sectitle">
                            반가워요!<br/>저는요
                            <b className="en c_red"><SubtitAnimation txt=',' isEn={true} /></b>
                        </h3>
                    </div>
                </div>
                <div className="right flex flex_gflex_row_1 flex_col">
                    <div className="txt_frame">
                        <p className="txt txt_cont weight_b">이런 개발자가 되고 싶어요.</p>
                        <div className="blank_box_10"></div>
                        <p className="txt txt_cont">
                        다양한 경험을 통해 얻은 인사이트로 더 효율적인 작업을 위해 현재의 문제점을 찾고 해결해 나아가고, 사용자에게는 더 나은 서비스 환경을 제공하는 개발자가 되고 싶습니다.
                        </p>
                    </div>

                    <div className="blank_box_30"></div>

                    <div className="txt_frame">
                        <p className="txt txt_cont weight_b">지금은,</p>
                        <div className="blank_box_10"></div>
                        <p className="txt txt_cont">
                        일이든 공부든 늘 힘들지 않은 것이 없지만 끝내 해냈을 때의 성취감을 좋아합니다. 모르는 것보다 나를 무지한 상태로 방치하는 것이 더 부끄러운 것이라고 생각하기 때문에 자기개발을 중요하게 생각합니다. 할 수 있는 일은 잘하고, 못하는 것은 열심히 하자는 마음 가짐으로 목표한 방향을 향해 꾸준히 나아가고 있습니다.
                        </p>
                    </div>

                    <div className="blank_box_30"></div>

                    <div className="txt_frame">
                        <p className="txt txt_cont weight_b">사람들과 의견을 나누는 것을 좋아해요.</p>
                        <div className="blank_box_10"></div>
                        <p className="txt txt_cont">
                        다른 사람들의 의견을 존중하고 수용하는 것에 늘 상상 이상의 시너지가 있다고 믿습니다. 의견을 공유하며 내가 고려하지 못한 점을 발견하고 반영하는 과정을 통해 더 나은 결과물을 만들어 나갈 수 있기 때문 입니다.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
        </div>
    );
}


export default Section1;