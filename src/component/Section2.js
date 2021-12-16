import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


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
                    <p className="">STRENGTH</p>
                </div>
            </div>
            <div className="sec_inner maxwid flex flex_col">
                <div className="left lay_3_1">
                    <div className="txt_frame">
                        <h3 className="txt txt_sectitle">이런 걸<br/>좀 <b className="c_red">잘</b>해요.</h3>
                    </div>
                </div>
                <div className="blank_box_50"></div>
                <div className="lay_1">
                    <ul className="lay_1 flex flex_row flex_justi_between">
                        <motion.li className="item lay_3_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_l c_bb size_20">
                                    for <b className="weight_b c_red underline">Design</b>
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_14">
                                직관적인 디자인에 위트 한방울을 섞는 것을 좋아합니다. 편하지 않으면 결국 사용하지 않게 되기 때문에 사용 편의성이 잘 고려되는 것을 중요하게 생각합니다.
                                </p>
                            </div>
                        </motion.li>
                        <li className="blank_box_30"></li>
                        <motion.li className="item lay_3_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_l c_bb size_20">
                                    for <b className="weight_b c_red underline">Development</b>
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_14">
                                웹 퍼블리싱을 이해하고 잘 다룹니다. 개발 단계와 유지보수를 고려한 코드를 작성하는 것과 기획자, 디자이너의 의도를 잘 이해해하는 것을 중요하게 생각합니다.
                                </p>
                            </div>
                        </motion.li>
                        <li className="blank_box_30"></li>
                        <motion.li className="item lay_3_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_l c_bb size_20">
                                    for <b className="weight_b c_red underline">Team</b>
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_14">
                                다양한 직군과의 원활한 협업을 이끌어내기 위해 노력합니다. 나와 다른 의견을 존중하고 이해하며 함께 작업했을 때에 더 좋은 결과물을 만들 수 있다고 생각합니다.
                                </p>
                            </div>
                        </motion.li>
                    </ul>
                    <div className="blank_box_30"></div>
                    <ul className="lay_1 flex flex_row flex_justi_between">
                        <motion.li className="item lay_3_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_l c_bb size_20">
                                    for <b className="weight_b c_red underline">Customers</b>
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_14">
                                초기에 고객의 요구사항을 정확히 파악하는 것을 중요하게 생각합니다. 좋은 결과물을 위해 때로는 고객의 의견을 무조건적으로 수용하는 것 보다 적절한 타협도 필요하다고 생각합니다.
                                </p>
                            </div>
                        </motion.li>
                        <li className="blank_box_30"></li>
                        <motion.li className="item lay_3_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_l c_bb size_20">
                                    for <b className="weight_b c_red underline">Users</b>
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_14">
                                사용하는 사람은 어떤 사람일지, 무엇을 가장 원할지 여러 케이스의 사용자를 상상하고 불편하지 않고 흥미로운 인터페이스와 경험을 제공하는 것을 중요하게 생각합니다. 
                                </p>
                            </div>
                        </motion.li>
                        <li className="blank_box_30"></li>
                        <motion.li className="item lay_3_1" whileHover={{scale:1.1}}>
                            <div className="txt_frame tit">
                                <h4 className="txt weight_l c_bb size_20">
                                    for <b className="weight_b c_red underline">Me</b>
                                </h4>
                            </div>
                            <div className="blank_box_10"></div>
                            <div className="txt_frame con">
                                <p className="txt size_14">
                                일을 꾸준히 하기 위해서 자기개발도 중요하지만 무엇보다 스스로의 멘탈을 잘 관리해야 한다고 생각합니다. 저는 스스로를 잘 알고 케어하며 번아웃을 대비하고 있습니다.
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