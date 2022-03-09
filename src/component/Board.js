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
            pfimg: pf3, 
            client: "공주대학교", 
            title: "공주대학교 현장실습 홈페이지", 
            url: "https://intern.kongju.ac.kr/",
            tag: "#웹, #반응형", 
            viewImg: pfdetail3,
            description: {
                team: ['디자인 1명', '마크업/프론트엔드 2명', '백엔드 1명'],
                contribute: ['디자인(100%)', '프론트엔드(50%)', '유지보수(70%)'],
                lang: ['HTML', 'CSS', 'Javascript', 'PHP'],
                work: ['홈페이지 디자인', '오류/버그 수정 및 추가 기능 구현 목적의 유지보수 진행']
            }
        },
        2: {
            pfimg: pf4, 
            client: "프로이드", 
            title: "프로이드 반응형 홈페이지", 
            url: "http://proid.co.kr/",
            tag: "#웹, #반응형, #심리검사시스템", 
            viewImg: pfdetail4,
            description: {
                team: ['디자인 1명', '마크업/프론트엔드 2명', '백엔드 1명'],
                contribute: ['디자인(100%)', '마크업 개발(100%)', '프론트엔드(40%)'],
                lang: ['HTML', 'CSS', 'Javascript', 'PHP'],
                work: ['홈페이지의 전반적 UI 디자인', '그누보드5와 영카트5 커스터마이징 및 전반적 마크업 개발 진행', '심리 검사 결과지 - 결과 수치 그래프화 작업']
            }
           
        },
        3: {
            pfimg: pf6, client: "금산군", title: "금산 스마트 통합정보 발송시스템 관리자 페이지", tag: "#웹 #관리자페이지, #반응형", viewImg: pfdetail6,
            description: {
                team: ['디자인 1명', '마크업/프론트엔드 2명', '백엔드 1명'],
                contribute: ['디자인(100%)', '프론트엔드(30%)'],
                lang: ['HTML', 'CSS', 'Javascript', 'jQuery'],
                work: ['홈페이지 디자인', '홈페이지 마크업 개발', '차트 플러그인을 사용하여 데이터 시각화']
            }  
        },
        4: {
            pfimg: pf5, client: "충남어촌특화지원센터", title: "충남어촌특화지원센터 반응형 홈페이지", url: "http://www.cnfv.or.kr/", tag: "#웹, #반응형, #소개/홍보", viewImg: pfdetail5, 
            description: {
                team: ['디자인 1명', '마크업/프론트엔드 2명', '백엔드 1명'],
                contribute: ['디자인(100%)', '웹접근성 개선 목적의 유지보수(100%)'],
                lang: ['HTML', 'CSS', 'Javascript'],
                work: ['홈페이지 디자인', '웹접근성 개선 목적의 추가 요구사항 반영']
            }
        },
        5: {
            pfimg: pf1, 
            client: "후지제록스",
            title: "PhotoMeter 업로드 및 문자서비스 관리자 홈페이지/사용자 모바일", 
            tag: "#웹, #모바일, #관리자, #반응형", 
            viewImg: pfdetail1,
            description: {
                team: ['디자인/마크업 개발 1명', '백엔드/프론트엔드 개발 1명'],
                contribute: ['디자인(100%)', '마크업 개발(100%)'],
                lang: ['HTML', 'CSS', 'Javascript', 'jQuery'],
                work: ['관리자 페이지 디자인', '사용자 모바일 화면 디자인', '관리자 페이지 마크업 개발', '사용자 모바일 화면 마크업 개발']
            }
        },
        6: {
           pfimg: pf2, 
           client: "현대ICT", 
           title: "나비서 관리자 홈페이지", 
           tag: "#웹, #관리자페이지, #반응형", 
           viewImg: pfdetail2,
           description: {
               team: ['디자인/마크업 개발 1명', '백엔드/프론트엔드 개발 1명'],
               contribute: ['디자인(100%)', '마크업 개발(100%)'],
               lang: ['HTML', 'CSS', 'Javascript', 'jQuery'],
               work: ['관리자 페이지 디자인', '마크업 개발']
            }
        },
        7: {
            pfimg: pf7, client: "이비엠센터", title: "이비엠센터 어플리케이션", tag: "#앱, #모바일", viewImg: pfdetail7,
            description: {
                team: ['디자인 1명'],
                contribute: ['디자인(100%)'],
                lang: ['Sketch', 'Zeplin'],
                work: ['어플리케이션의 전반적 UI 디자인']
            }
        }
    };
    
    const animationControl = useAnimation();

    let isChange = true;
    
    if(isChange) {
        animationControl.start(ani);
    }

    function openModal() {
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }

    const arrStringRender = (arr) => {
        const result = arr.map((el, index) => {
            return index <= 0 ? el : `, ${el}`;
        });

        return result;
    }

    const arrListRender = (arr) => {
        const result = arr.map((el, index) => {
            return <li className="txt_list" key={el.pfimg}>{el}</li>;
        });

        return result;
    }


    return(

        <>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}
        style={{ 
            overlay: {backgroundColor:'rgba(0, 0, 0, 0.5)', zIndex:150},
            content: {
                outline:'none',border:'0',background:'#fff',boxShadow:'0 0 14px 0 rgba(0, 0, 0, 0.2)', padding:'3.125rem', borderRadius:'30px'
            } 
        }}
        ariaHideApp={false}
        >
            <div className="modal_cont posi_rltv">
                <button type="button" className="btn btn_close" onClick={closeModal}><i className="ico ico_close"></i></button>

                <div className="txt_frame flex flex_col flex_justi_end">
                    <p className="txt size_30 weight_thin">{data[id].client}</p>
                    <p className="txt size_30 weight_b">
                        {data[id].title}
                    </p>
                    <div className="blank_box_10"></div>

                    {data[id].url ? <a href={data[id].url} target="blank" className="txt size_14">{data[id].url}</a> : ''}

                    <div className="blank_box_15"></div>

                    <p className="txt size_14 weight_r">{data[id].tag}</p>
                </div>

                <div className="blank_box_30"></div>

                <div className="txt_frame flex flex_col">
                    <div className="flex flex_col">
                        <p className="txt size_14 weight_b">
                            Team
                        </p>
                        <div className="blank_box_10"></div>
                        <p className="txt size_14 weight_r">
                        {arrStringRender(data[id].description.team)}
                        </p>
                    </div>

                    <div className="blank_box_30"></div>

                    <div className="flex flex_col">
                        <p className="txt size_14 weight_b">
                            Contribute
                        </p>
                        <div className="blank_box_10"></div>
                        <p className="txt size_14 weight_r">
                        {arrStringRender(data[id].description.contribute)}
                        </p>
                    </div>

                    <div className="blank_box_30"></div>

                    <div className="flex flex_col">
                        <p className="txt size_14 weight_b">
                            Language, Framework/Library
                        </p>
                        <div className="blank_box_10"></div>
                        <p className="txt size_14 weight_r">
                        {arrStringRender(data[id].description.lang)}
                        </p>
                    </div>

                    <div className="blank_box_30"></div>

                    <div className="flex flex_col">
                        <p className="txt size_14 weight_b">
                            Work
                        </p>
                        <div className="blank_box_10"></div>
                        <ul className="txt size_14 weight_r">
                        {arrListRender(data[id].description.work)}
                        </ul>
                    </div>
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