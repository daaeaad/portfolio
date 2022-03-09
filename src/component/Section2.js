import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextAnimation from "./TextAnimation";
import SubtitAnimation from "./SubtitAnimation";


const Section2 = () => {
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
        <motion.section id="sec_2" className="sec pd_sec posi_rltv"
            initial={{x:'100vw', opacity:0}}
            animate={animationControl}>
            <div className="txt_bg_frame posi_absol z_-1">
                <div className="txt_bg">
                    <TextAnimation txt="STRENGTH" />
                </div>
            </div>
            <div className="sec_inner maxwid flex flex_col">
                <div className="left lay_3_1">
                    <div className="txt_frame">
                        <h3 className="txt txt_sectitle">이런 걸<br/>좀 <b className="c_red"><SubtitAnimation txt='잘' isEn={false} /></b>해요.</h3>
                    </div>
                </div>
                <div className="blank_box_50"></div>
                <div className="lay_1">
                    <ul className="lay_1 flex flex_row flex_justi_between">
                        <motion.li className="item lay_2_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_b size_20">
                                    <b className="weight_b c_red underline">새로운 것</b>에 거부감이 없어요.
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_16">
                                새로운 프레임워크나 라이브러리를 사용해야 해서 학습을 병행해야 하는 경우에 대한 거부감이 없습니다. 이미 학습되어 있거나 익숙한 기술을 사용하면 그만큼 작업하는데 필요한 비용과 부담이 상대적으로 적어서 좋지만, 새로운 기술이 필요할 경우, 왜 도입해야 되는지에 대한 이유가 충족이 되면 동기부여가 되어 학습과 동시에 실무에서 경험함을 통해 내 역량이 확장되는 것으로 여기고 즐거움을 느낍니다. 따라서 이런 상황에 대한 거부감이 없고, 이런 점이 개인 역량 성장에 대한 긍정적 영향을 끼치는 것 같습니다.
                                </p>
                            </div>
                        </motion.li>
                        <li className="blank_box_30"></li>
                        <motion.li className="item lay_2_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_b size_20">
                                    <b className="weight_b c_red underline">능동적인 태도</b>로 일합니다.
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_16">
                                능동적인 태도로 일합니다. 내 일과 내 일이 아닌 것을 구분하기 보다, 결국 다 함께 하나의 프로덕트를 만드는 일을 하고 있고, 수동적으로 일을 진행하면서 개선하지 못하거나 이해하지 못하고 진행한 문제점들은 결국 언제든 다시 돌아오게 되어 있다고 생각하기 때문에 주어진 시안과 기획서를 보면서 수동적인 태도로 일을 진행하기 보다는 능동적 태도로 생각하고 궁금한 것이나 개선점이 발생하면 의견을 나누고 물어보며 작업을 진행 합니다.
                                </p>
                            </div>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </motion.section>
        </div>
    );
}



export default Section2;