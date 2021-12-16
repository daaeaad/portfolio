import React from "react";
import propTypes from "prop-types";

// 임시
import pf1 from "../assets/images/img/img-pf-1.png";
import pf2 from "../assets/images/img/img-pf-2.png";
import pf3 from "../assets/images/img/img-pf-3.png";
import pf4 from "../assets/images/img/img-pf-4.png";
import pf5 from "../assets/images/img/img-pf-5.png";
import pf6 from "../assets/images/img/img-pf-6.png";
import pf7 from "../assets/images/img/img-pf-7.png";

import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import useInView from "react-intersection-observer";




function Board( {id, pfNum, ani} ) {
    // 이부분 나중에 nodejs 서버 연결하면 실제 api 요청하는걸로 수정하기
    const data = {
        1: {
            pfimg: pf1, client: "후지제록스", title: "PhotoMeter 업로드 및 문자서비스 관리자 홈페이지/사용자 모바일", tag: "#웹, #모바일, #관리자, #반응형"
        },
        2: {
           pfimg: pf2, client: "현대ICT", title: "나비서 관리자 홈페이지", tag: "#웹, #관리자페이지, #반응형"
        },
        3: {
            pfimg: pf3, client: "공주대학교", title: "공주대학교 현장실습 홈페이지", tag: "#웹, #반응형"
        },
        4: {
            pfimg: pf4, client: "프로이드", title: "프로이드 반응형 홈페이지", tag: "#웹, #반응형, #심리검사시스템"
        },
        5: {
            pfimg: pf5, client: "충남어촌특화지원센터", title: "충남어촌특화지원센터 반응형 홈페이지", tag: "#웹, #반응형, #소개/홍보"
        },
        6: {
            pfimg: pf6, client: "금산군", title: "금산 스마트 통합정보 발송시스템 관리자 페이지", tag: "#웹 #관리자페이지, #반응형"
        },
        7: {
            pfimg: pf7, client: "이비엠센터", title: "이비엠센터 어플리케이션", tag: "#앱, #모바일"
        }
    };
    
    const animationControl = useAnimation();

    let isChange = true;
    // isChange=true;
    if(isChange) {
        animationControl.start(ani);
    }

    return(

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
                    {/* <div className="blank_box_15"></div>
                    <div className="btn_frame">
                        <button type="button" className="btn txt txt_cont"><b className="ani_txt">🔍👀</b> 자세히 볼까요 <i className="ico ico_arr"></i></button>
                    </div> */}
                </div>
            </div>
        </motion.div>

    );
}

export default Board;