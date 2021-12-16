import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Modal = () => {
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
        <div ref={ref}>
        <motion.section id="modal" className="sec pd_sec posi_rltv"
            initial={{y:'100vw', opacity:0}}
            animate={animationControl}>
            <div className="txt_bg_frame posi_absol z_-1">
                <div className="txt_bg">
                    <p className="">CONTACT</p>
                </div>
            </div>
            <div className="sec_inner maxwid flex flex_row">
                <div className="left lay_3_1">
                    <div className="txt_frame">
                        <h3 className="txt txt_sectitle">관심 있으시면<br/>연락 주세요 <b className="en c_red">:)</b></h3>
                    </div>
                </div>
                <div className="lay_1 ">
                    {/* <div className="btn_frame">
                    <button type="submit" className="btn txt txt_cont"><b className="ani_txt">📝</b> 작성한 내용 직접 보내기 <i className="ico ico_arr"></i></button>
                    </div> */}
                    {/* <div className="blank_box_30"></div> */}
                    <p className="txt txt_cont">포트폴리오를 확인해주셔서 감사합니다 :)<br/>아래로 메일을 보내주시면 평일 기준 이틀내로 최대한 빠르게 답변하도록 하겠습니다 <b className="size_24"> 🏃‍♀️</b>=3</p>
                    <div className="blank_box_20"></div>
                    <form method="get" action="mailto:daae0214@naver.com">
                        <div className="input_frame">
                            <input type="text" name="subject" placeholder="제목" className="txt txt_cont" />
                        </div>
                        {/* <div className="input_frame">
                            <input type="text" name="phone" placeholder="답변 받으실 연락처" className="txt txt_cont" />
                        </div> */}
                        <div className="input_frame">
                            <textarea name="body" placeholder="남기실 내용" className="txt txt_cont" />
                        </div>
                        <div className="blank_box_20"></div>
                        <div className="btn_frame">
                            <motion.button type="submit" className="btn txt txt_cont"><b className="size_24">✉️</b> daae0214@naver.com <i className="ico ico_arr"></i></motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>
        </div>
    );
}



export default Modal;