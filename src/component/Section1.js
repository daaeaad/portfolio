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
                <div className="right flex flex_gflex_row_1">
                    <div className="txt_frame">
                        <p className="txt txt_cont">
                        디자인과 프론트엔드 개발을 하는 김다애 입니다. 저는 사용자의 편의성과 고객의 니즈를 정확히 파악하여 직관적이고 흥미롭게 풀어낸 디자인을 좋아하며, ‘만약에 이렇게 되면 어떡하지?’, ‘만약 이런 식으로 대비했을 때에 저런 문제가 발생하면 어떡하지?’ 굳이 사서 걱정하는 습관과 풍부한 상상력을 사용자를 배려하는 디자인과 꼼꼼하고 탄탄한 코드를 짜기 위해 활용합니다.
                        <br/> <br/>
                        늘 힘들지 않은 일은 없지만 끝내 해냈을 때의 성취감을 즐기며 일합니다. 모르는 것보다 나를 무지한 상태로 방치하는 것을 더 창피하다고 생각하기 때문에 자기개발을 중요하게 생각하며, 할 수 있는 일은 잘하고, 못하는 것은 더욱 열심히 합니다.
                        <br/> <br/>
                        내가 혼자 잘 해내는 것보다 다양한 사람들과 의견을 나누어 함께 좋은 결과물을 만들어내는 것이 더욱 멋진 결과물을 가져온다고 믿습니다. 그렇기 때문에 나와 다른 의견을 존중하고 수용하며 더 좋은 결과물을 함께 만들어내는 것을 즐거워 합니다.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
        </div>
    );
}


export default Section1;