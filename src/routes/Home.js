import React from "react";
import "../assets/style/font.scss";
import "../assets/style/reset.scss";
import "../assets/style/template.scss";
import thum1 from "../assets/images/img/img-thum-1.png";
import thum2 from "../assets/images/img/img-thum-2.png";
import thum3 from "../assets/images/img/img-thum-3.png";
import thum4 from "../assets/images/img/img-thum-4.png";
import thum5 from "../assets/images/img/img-thum-5.png";
import thum6 from "../assets/images/img/img-thum-6.png";
import thum7 from "../assets/images/img/img-thum-7.png";
import Board from "../component/Board";

import styled from "styled-components";
import {motion} from "framer-motion";
// import Section0 from "../component/Section0";

const Section = styled(motion.section)`
    width:100%; heigh:auto;
    transform:translateY(50px);
`;

class Home extends React.Component {

    state = {
        id: 1,
        isHover: false
    }

    handleThum = (id) => {
        this.setState({id});
        this.setState({isHover:true});
    }

    render(){
        return(
            <div className="page">
                <div className="wrap">

                    <Section id="sec_0" className="sec_posi_rltv" initial={{y: '60px', opacity:0}} animate={{ y: '0px', opacity: 1 }} transition={{duration:0.8}}>
                        <div className="sec_inner maxwid">
                            <div className="txt_bg_frame posi_absol z_-1">
                                <div className="txt_bg">
                                    <p className="">DESIGN,</p>
                                    <p className="">PUBLISHING,</p>
                                    <p className="">FRONTEND</p>
                                    <p className="">DEVELOPMENT</p>
                                </div>
                            </div>
                            <div className="txt_frame">
                                <h2 className="txt txt_visual">오뚜기처럼 열심히<b className="en c_red">,</b><br/>일하고 배우는<br/>김다애 입니다<b className="c_red">.</b></h2>
                                <div className="blank_box_15"></div>
                                <p className="txt size_24 c_9b weight_m">UI/UX Design <b className="c_red">+</b> Publishing <b className="c_red">+</b> Frontend Development</p>
                            </div>
                        </div>
                    </Section>

                    <Section id="sec_1" className="sec pd_sec posi_rltv" initial={{y: '60px', opacity:0}} animate={{ y: '0px', opacity: 1 }} transition={{duration:0.8}}>>
                        <div className="txt_bg_frame posi_absol z_-1">
                            <div className="txt_bg">
                                <p className="">INTRO</p>
                            </div>
                        </div>
                        <motion.div className="sec_inner maxwid flex flex_row" >
                            <div className="left lay_3_1">
                                <div className="txt_frame">
                                    <h3 className="txt txt_sectitle">반가워요!<br/>저는요<b className="en c_red">,</b></h3>
                                </div>
                            </div>
                            <div className="right flex flex_gflex_row_1">
                                <div className="txt_frame">
                                    <p className="txt txt_cont">
                                    디자인과 프론트엔드 개발을 하는 김다애 입니다.
                                    저는 사용자의 편의성과 고객의 니즈를 정확히 파악하여 직관적이고 흥미롭게 풀어낸 디자인을 좋아하며, ‘만약에 이렇게 되면 어떡하지?’, ‘만약 이런 식으로 대비했을 때에 저런 문제가 발생하면 어떡하지?’ 굳이 사서 걱정하는 습관과 상상력을 꼼꼼하고 탄탄한 코드를 짜기 위해 활용합니다.
                                    <br/> <br/>
                                    늘 힘들지 않은 일은 없지만 끝내 해냈을 때의 성취감을 즐기며 일합니다. 모르는 것보다 나를 무지한 상태로 방치하는 것을 더 창피하다고 생각하기 때문에 자기개발을 중요하게 생각하며, 할 수 있는 일은 잘하고, 못하는 것은 열심히 합니다.
                                    <br/> <br/>
                                    또한 나와 다른 의견을 존중하고 수용하며 더 좋은 결과물을 함께 만들어내는 것을 즐거워 합니다.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </Section>

                    <Section id="sec_2" className="sec pd_sec posi_rltv" initial={{y: '60px', opacity:0}} animate={{ y: '0px', opacity: 1 }} transition={{duration:0.8}}>>
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
                    </Section>

                    <Section id="sec_3" className="sec pd_sec posi_rltv" initial={{y: '60px', opacity:0}} animate={{ y: '0px', opacity: 1 }} transition={{duration:0.8}}>>
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
                            <Board id={this.state.id} pfNum={`pf${this.state.id}`}/>
                            <div className="blank_box_30"></div>
                            <div className="blank_box_30"></div>
                            <div className="lay_1 maxwid">
                                <ul className="lay_1 flex flex_row flex_wrap">
                                    {/* 반복 */}
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(1)}>
                                        <div className={`square ${this.state.id===1?'act':''}`} >
                                            <div className="inner">
                                                {/* 썸네일 이미지 */}
                                                <div className="img_frame"><img src={thum1} alt="" /></div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 반복 끝 */}

                                    {/* 반복구간 */}
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(2)}><div className={`square ${this.state.id===2?'act':''}`} ><div className="inner"><div className="img_frame"><img src={thum2} alt="" /></div></div></div></li>
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(3)}><div className={`square ${this.state.id===3?'act':''}`} ><div className="inner"><div className="img_frame"><img src={thum3} alt="" /></div></div></div></li>
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(4)}><div className={`square ${this.state.id===4?'act':''}`} ><div className="inner"><div className="img_frame"><img src={thum4} alt="" /></div></div></div></li>
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(5)}><div className={`square ${this.state.id===5?'act':''}`} ><div className="inner"><div className="img_frame"><img src={thum5} alt="" /></div></div></div></li>
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(6)}><div className={`square ${this.state.id===6?'act':''}`} ><div className="inner"><div className="img_frame"><img src={thum6} alt="" /></div></div></div></li>
                                    <li className="lay_7_1 posi_rltv" onMouseEnter={()=>this.handleThum(7)}><div className={`square ${this.state.id===7?'act':''}`} ><div className="inner"><div className="img_frame"><img src={thum7} alt="" /></div></div></div></li>
                                    {/* 반복구간 끝 */}
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Section id="sec_4" className="sec pd_sec posi_rltv" initial={{y: '60px', opacity:0}} animate={{ y: '0px', opacity: 1 }} transition={{duration:0.8}}>>
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
                                        <button type="submit" className="btn txt txt_cont"><b className="size_24">✉️</b> daae0214@naver.com <i className="ico ico_arr"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Section>

                </div>
            </div>
        );
    }
}

export default Home;