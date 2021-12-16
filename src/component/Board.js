import React, {useState} from "react";
import propTypes from "prop-types";
import Modal from "react-modal";

// 임시
import pf1 from "../assets/images/img/img-pf-1.png";
import pf2 from "../assets/images/img/img-pf-2.png";
import pf3 from "../assets/images/img/img-pf-3.png";
import pf4 from "../assets/images/img/img-pf-4.png";
import pf5 from "../assets/images/img/img-pf-5.png";
import pf6 from "../assets/images/img/img-pf-6.png";
import pf7 from "../assets/images/img/img-pf-7.png";
import pfdetail1 from "../assets/images/img/img-pf-1-d.png";
import pfdetail2 from "../assets/images/img/img-pf-2-d.png";
import pfdetail3 from "../assets/images/img/img-pf-3-d.png";
import pfdetail4 from "../assets/images/img/img-pf-4-d.png";
import pfdetail5 from "../assets/images/img/img-pf-5-d.png";
import pfdetail6 from "../assets/images/img/img-pf-6-d.png";
import pfdetail7 from "../assets/images/img/img-pf-7-d.png";

import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import useInView from "react-intersection-observer";




function Board( {id, pfNum, ani} ) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 이부분 나중에 nodejs 서버 연결하면 실제 api 요청하는걸로 수정하기
    const data = {
        1: {
            pfimg: pf1, client: "후지제록스", title: "PhotoMeter 업로드 및 문자서비스 관리자 홈페이지/사용자 모바일", tag: "#웹, #모바일, #관리자, #반응형", viewImg: pfdetail1
        },
        2: {
           pfimg: pf2, client: "현대ICT", title: "나비서 관리자 홈페이지", tag: "#웹, #관리자페이지, #반응형", viewImg: pfdetail2
        },
        3: {
            pfimg: pf3, client: "공주대학교", title: "공주대학교 현장실습 홈페이지", tag: "#웹, #반응형", viewImg: pfdetail3
        },
        4: {
            pfimg: pf4, client: "프로이드", title: "프로이드 반응형 홈페이지", tag: "#웹, #반응형, #심리검사시스템", viewImg: pfdetail4
        },
        5: {
            pfimg: pf5, client: "충남어촌특화지원센터", title: "충남어촌특화지원센터 반응형 홈페이지", tag: "#웹, #반응형, #소개/홍보", viewImg: pfdetail5
        },
        6: {
            pfimg: pf6, client: "금산군", title: "금산 스마트 통합정보 발송시스템 관리자 페이지", tag: "#웹 #관리자페이지, #반응형", viewImg: pfdetail6
        },
        7: {
            pfimg: pf7, client: "이비엠센터", title: "이비엠센터 어플리케이션", tag: "#앱, #모바일", viewImg: pfdetail7
        }
    };
    
    const animationControl = useAnimation();

    let isChange = true;
    // isChange=true;
    if(isChange) {
        animationControl.start(ani);
    }

    function openModal() {
        setIsModalOpen(true);
        console.log('openModal:::', isModalOpen);
    }
    function closeModal() {
        setIsModalOpen(false);
        console.log('closeModal:::', isModalOpen);
    }

    return(

        <>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}
        style={{ 
            overlay: {backgroundColor:'rgba(0, 0, 0, 0.5)', zIndex:150},
            content: {
                outline:'none',border:'0',background:'#fff',boxShadow:'0 0 14px 0 rgba(0, 0, 0, 0.2)', padding:'3.125rem', borderRadius:'30px'
            } 
        }}>
            <div className="modal_cont posi_rltv">
                <button type="button" className="btn btn_close" onClick={closeModal}><i className="ico ico_close"></i></button>

                <div className="txt_frame flex flex_col flex_justi_end">
                    <p className="txt size_30 weight_thin">{data[id].client}</p>
                    <p className="txt size_30 weight_b">
                        {data[id].title}
                    </p>
                    <div className="blank_box_20"></div>
                    <p className="txt size_14 weight_r">{data[id].tag}</p>
                </div>
                <div className="blank_box_50"></div>
                <div className="img_frame"><img src={data[id].viewImg}/></div>
            </div>
        </Modal>


        <motion.div className="pf_visual_box posi_rltv lay_1" 
        initial={{opacity:0, x:1000}}
        animate={animationControl}
        >
            <div className="img_box posi_absol">
                <div className="img_frame"><img src={data[id].pfimg} alt={id} /></div>
            </div>
            <div className="lay_1 maxwid flex flex_row flex_justi_start">
                <div className="lay_3_1">
                    <div className="txt_frame flex flex_col flex_justi_end">
                        <p className="txt size_20 weight_l">{data[id].client}</p>
                        <p className="txt size_20 weight_b">
                            {data[id].title}
                        </p>
                        <div className="blank_box_10"></div>
                        <p className="txt size_14 weight_r">{data[id].tag}</p>
                    </div>
                    <div className="blank_box_30"></div>
                    <div className="btn_frame">
                        <button type="button" className="btn txt txt_cont" onClick={openModal}><b className="ani_txt">🔍👀</b> 자세히 볼까요 <i className="ico ico_arr"></i></button>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    );
}

export default Board;