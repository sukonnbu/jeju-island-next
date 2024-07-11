"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {Map, MapMarker, CustomOverlayMap, Polyline} from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = "//dapi.kakao.com/v2/maps/sdk.js?appkey=87b3271c7e60eceb21004825919db94d&libraries=services&autoload=false"

export default function Home() {
  const [team, setTeam] = useState("1"); // 1: A, 2: B, 3: C
  const mapRef = useRef();
  const scrollRef = useRef();

  const data = [
    {
      name: "제주국제공항",
      position: {
        lat: 33.5059364682672,
        lng: 126.495951277797
      },
      content: "공항"
    },
    {
      name: "WIND 1947",
      position: {
        lat: 33.2895183041826,
        lng: 126.588828203157
      },
      content: "한라산을 바라보며 즐기는 카트 레이싱"
    },
    {
      name: "외돌개",
      position: {
        lat: 33.240076867127,
        lng: 126.54566394415,
      },
      content: "올레길 7코스를 걸으며 즐기는 자연의 정취"
    },
    {
      name: "휴애리 자연휴양림",
      position: {
        lat: 33.3085347525753,
        lng: 126.634380832055
      },
      content: "한라산 풍경의 수국 꽃밭"
    },
    {
      name: "중문 제트보트",
      position: {
        lat: 33.244946442101,
        lng: 126.41891687589,
      },
      content: "주상절리를 따라 타는 빠른 제트보트"
    },
    {
      name: "제주 라프체험",
      position: {
        lat: 33.4869065606552,
        lng: 126.706132319352
      },
      content: "녹차밭 위를 가로지르는 짚라인"
    },
    {
      name: "제주 레일바이크",
      position: {
        lat: 33.4646225230584,
        lng: 126.836951495623
      },
      content: "철도를 따라 레일바이크를 타며 보는 목장과 오름의 풍경"
    },
    {
      name: "표선 민속촌",
      position: {
        lat: 33.3212871409308,
        lng: 126.843088213207
      },
      content: "제주도의 역사와 전통문화를 보여주는 민속촌"
    },
    {
      name: "넥슨 컴퓨터 박물관",
      position: {
        lat: 33.4721199545726,
        lng: 126.485799750022
      },
      content: "컴퓨터 인재 양성을 위한 체험형 박물관"
    },
    {
      name: "용두암",
      position: {
        lat: 33.5148035919525,
        lng: 126.511798046978
      },
      content: "용이 승천하는 형상의 현무암 구조물"
    },
    {
      name: "제주 동문시장",
      position: {
        lat: 33.5115902822492,
        lng: 126.526018218964
      },
      content: "제주도에서 가장 오래된 전통시장"
    },
    {
      name: "제주 알제이",
      position: {
        lat: 33.4292988686855,
        lng: 126.352722700715
      },
      content: "제주 자연의 재료를 토핑한 피자 만들기 체험"
    }
  ];
  const AData = [
    {
      name: "표선 해비치 해변",
      position: {
        lat: 33.3265291020204,
        lng: 126.828739926647
      },
      content: "백사장이 아름다운 해변"
    },
    {
      name: "신신호텔 제주오션",
          position: {
        lat: 33.2459572185083,
            lng: 126.562336279883
      },
      content: "A조 숙소. 방이 가장 넓고 즐기기 좋다고 한다."
    }
  ];
  const BData = [
    {
      name: "이호테우 해변",
      position: {
        lat: 33.4961965681116,
        lng: 126.455892860155
      },
      content: "조랑말 등대가 유명한 해변"
    },
    {
      name: "스위트메이호텔 서귀포",
      position: {
        lat: 33.2524815629392,
        lng: 126.507548268061
      },
      content: "B조 숙소. 조식 뷔페가 다양하고 맛있다는 소문이 있다."
    }
  ];
  const CData = [
    {
      name: "이호테우 해변",
      position: {
        lat: 33.4961965681116,
        lng: 126.455892860155
      },
      content: "조랑말 등대가 유명한 해변"
    },
    {
      name: "더퍼스트70호텔",
      position: {
        lat: 33.2472529671466,
        lng: 126.566847661689
      },
      content: "C조 숙소. 무난하다."
    }
  ];

  const AFirstLine = [
      { lat: 33.5059364682672, lng: 126.495951277797 },
      { lat: 33.5148035919525, lng: 126.511798046978 },
      { lat: 33.4292988686855, lng: 126.352722700715 },
      { lat: 33.244946442101, lng: 126.418916875895 },
      { lat: 33.240076867127, lng: 126.545663944153 },
      { lat: 33.2459572185083, lng: 126.562336279883 }
  ];
  const ASecondLine = [
      { lat: 33.2459572185083, lng: 126.562336279883 },
      { lat: 33.3265291020204, lng: 126.828739926647 },
      { lat: 33.3212871409308, lng: 126.843088213207 },
      { lat: 33.4646225230584, lng: 126.836951495623 },
      { lat: 33.4869065606552, lng: 126.706132319352 },
      { lat: 33.3085347525753, lng: 126.634380832055 },
      { lat: 33.2459572185083, lng: 126.562336279883 }
  ];
  const AThirdLine = [
      { lat: 33.2459572185083, lng: 126.562336279883 },
      { lat: 33.2895183041826, lng: 126.588828203157 },
      { lat: 33.5115902822492, lng: 126.526018218964 },
      { lat: 33.4721199545726, lng: 126.485799750022 },
      { lat: 33.5059364682672, lng: 126.495951277797 }
  ];
  const BFirstLine = [
      { lat: 33.5059364682672, lng: 126.495951277797 },
      { lat: 33.5148035919525, lng: 126.511798046978 },
      { lat: 33.5115902822492, lng: 126.526018218964 },
      { lat: 33.4869065606552, lng: 126.706132319352 },
      { lat: 33.3085347525753, lng: 126.634380832055 },
      { lat: 33.2524815629392, lng: 126.507548268061 }
  ];
  const BSecondLine = [
      { lat: 33.2524815629392, lng: 126.507548268061 },
      { lat: 33.244946442101, lng: 126.418916875895 },
      { lat: 33.4646225230584, lng: 126.836951495623 },
      { lat: 33.3212871409308, lng: 126.843088213207 },
      { lat: 33.2895183041826, lng: 126.588828203157 },
      { lat: 33.2524815629392, lng: 126.507548268061 },];
  const BThirdLine = [
    { lat: 33.2524815629392, lng: 126.507548268061 },
    { lat: 33.240076867127, lng: 126.545663944153 },
    { lat: 33.4292988686855, lng: 126.352722700715 },
    { lat: 33.4961965681116, lng: 126.455892860155 },
    { lat: 33.4721199545726, lng: 126.485799750022 },
    { lat: 33.5059364682672, lng: 126.495951277797 }
  ];
  const CFirstLine = [
    { lat: 33.5059364682672, lng: 126.495951277797 },
    { lat: 33.4961965681116, lng: 126.455892860155 },
    { lat: 33.5148035919525, lng: 126.511798046978 },
    { lat: 33.2895183041826, lng: 126.588828203157 },
    { lat: 33.240076867127, lng: 126.545663944153 },
    { lat: 33.2472529671466, lng: 126.566847661689 }
  ];
  const CSecondLine = [
    { lat: 33.2472529671466, lng: 126.566847661689 },
    { lat: 33.4869065606552, lng: 126.706132319352 },
    { lat: 33.4646225230584, lng: 126.836951495623 },
    { lat: 33.3212871409308, lng: 126.843088213207 },
    { lat: 33.3085347525753, lng: 126.634380832055 },
    { lat: 33.2472529671466, lng: 126.566847661689 }
  ];
  const CThirdLine = [
    { lat: 33.2472529671466, lng: 126.566847661689 },
    { lat: 33.244946442101, lng: 126.418916875895 },
    { lat: 33.5115902822492, lng: 126.526018218964 },
    { lat: 33.4292988686855, lng: 126.352722700715 },
    { lat: 33.4721199545726, lng: 126.485799750022 },
    { lat: 33.5059364682672, lng: 126.495951277797 }
  ];

  return (
      <div className="flex flex-col justify-center p-10">
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive"/>
        <Script src="https://kit.fontawesome.com/e3c9b0d316.js" crossorigin="anonymous"></Script>
        <div className="flex flex-col juistify-center">
          <div className="flex justify-center">
            <span className="text-slate-400">지도가 안보인다면?<i className="fa-solid fa-arrow-right m-1"></i>새로고침</span>
          </div>
          <div className="flex justify-center z-0">
            <Map
                ref={mapRef}
                center={{lat: 33.361427, lng: 126.529417}}
                style={{width: "350px", height: "350px"}}
                level={11}
            >
              {data.map(({name, position, content}, index) => {
                const [isVisible, setIsVisible] = useState(false)

                return (<>
                      <MapMarker
                          key={index}
                          position={position}
                          onClick={() => setIsVisible(!isVisible)}/>
                      {isVisible &&
                          <CustomOverlayMap
                              position={position}
                              yAnchor={1.1}
                          >
                            <div
                                className="flex flex-col justify-center w-52 bg-emerald-200 border-2 border-emerald-700">
                              <h3 className="text-xl text-center">
                                <Link href={"/placeinfo#" + name}>{name}</Link>
                              </h3>
                              <Image
                                  className="ml-0.5"
                                  src={"/지도이미지/" + name + ".jpg"}
                                  alt={name}
                                  width={200}
                                  height={200}
                              />
                              <span className="text-justify text-wrap p-1">{content}</span>
                            </div>
                          </CustomOverlayMap>}
                    </>
                );
              })}
              {team === "1" && <>
                {AData.map(({name, position, content}, index) => {
                  const [isVisible, setIsVisible] = useState(false)

                  return (<>
                        <MapMarker
                            key={index}
                            position={position}
                            onClick={() => setIsVisible(!isVisible)}/>
                        {isVisible &&
                            <CustomOverlayMap
                                position={position}
                                yAnchor={1.1}
                            >
                              <div
                                  className="flex flex-col justify-center w-52 bg-emerald-200 border-2 border-emerald-700">
                                <h3 className="text-xl text-center">
                                  <Link href={"/placeinfo#" + name}>{name}</Link>
                                </h3>
                                <Image
                                    className="ml-0.5"
                                    src={"/지도이미지/" + name + ".jpg"}
                                    alt={name}
                                    width={200}
                                    height={200}
                                />
                                <span className="text-justify text-wrap p-1">{content}</span>
                              </div>
                            </CustomOverlayMap>}
                      </>
                  );
                })}
                <Polyline path={AFirstLine} strokeWeight={5} strokeColor="#FF0000" opacity={0.5} endArrow={true}/>
                <Polyline path={ASecondLine} strokeWeight={5} strokeColor="#00FF00" opacity={0.5} endArrow={true}/>
                <Polyline path={AThirdLine} strokeWeight={5} strokeColor="#0000FF" opacity={0.5} endArrow={true}/>
              </>}
              {team === "2" && <>
                {BData.map(({name, position, content}, index) => {
                  const [isVisible, setIsVisible] = useState(false)

                  return (<>
                        <MapMarker
                            key={index}
                            position={position}
                            onClick={() => setIsVisible(!isVisible)}/>
                        {isVisible &&
                            <CustomOverlayMap
                                position={position}
                                yAnchor={1.1}
                            >
                              <div
                                  className="flex flex-col justify-center w-52 bg-emerald-200 border-2 border-emerald-700">
                                <h3 className="text-xl text-center">
                                  <Link href={"/placeinfo#" + name}>{name}</Link>
                                </h3>
                                <Image
                                    className="ml-0.5"
                                    src={"/지도이미지/" + name + ".jpg"}
                                    alt={name}
                                    width={200}
                                    height={200}
                                />
                                <span className="text-justify text-wrap p-1">{content}</span>
                              </div>
                            </CustomOverlayMap>}
                      </>
                  );
                })}
                <Polyline path={BFirstLine} strokeWeight={5} strokeColor="#FF0000" opacity={0.5} endArrow={true}/>
                <Polyline path={BSecondLine} strokeWeight={5} strokeColor="#00FF00" opacity={0.5} endArrow={true}/>
                <Polyline path={BThirdLine} strokeWeight={5} strokeColor="#0000FF" opacity={0.5} endArrow={true}/>
              </>}
              {team === "3" && <>
                {CData.map(({name, position, content}, index) => {
                  const [isVisible, setIsVisible] = useState(false)

                  return (<>
                        <MapMarker
                            key={index}
                            position={position}
                            onClick={() => setIsVisible(!isVisible)}/>
                        {isVisible &&
                            <CustomOverlayMap
                                position={position}
                                yAnchor={1.1}
                            >
                              <div
                                  className="flex flex-col justify-center w-52 bg-emerald-200 border-2 border-emerald-700">
                                <h3 className="text-xl text-center">
                                  <Link href={"/placeinfo#" + name}>{name}</Link>
                                </h3>
                                <Image
                                    className="ml-0.5"
                                    src={"/지도이미지/" + name + ".jpg"}
                                    alt={name}
                                    width={200}
                                    height={200}
                                />
                                <span className="text-justify text-wrap p-1">{content}</span>
                              </div>
                            </CustomOverlayMap>}
                      </>
                  );
                })}
                <Polyline path={CFirstLine} strokeWeight={5} strokeColor="#FF0000" opacity={0.5} endArrow={true}/>
                <Polyline path={CSecondLine} strokeWeight={5} strokeColor="#00FF00" opacity={0.5} endArrow={true}/>
                <Polyline path={CThirdLine} strokeWeight={5} strokeColor="#0000FF" opacity={0.5} endArrow={true}/>
              </>}
            </Map>
          </div>
          <div className="font-NanumGothic flex justify-between container py-2">
            <div>
              <button
                  onClick={() => {
                    mapRef.current.setLevel(11);
                  }}
              >
                지도 축척 초기화
              </button>
            </div>
            <div className="flex justify-end">
              <div>
                <button
                    onClick={() => {
                      if (scroll === undefined) return;
                      scrollRef.current.scrollIntoView({behavior: "smooth"});
                    }}
                >
                  <i className="fa-regular fa-calendar-days px-3 py-1"/>
                </button>
                <select value={team} onChange={function (event) {
                  setTeam(event.target.value)
                }} className="border-2 mr-2">
                  <option value="1">A팀</option>
                  <option value="2">B팀</option>
                  <option value="3">C팀</option>
                </select>
              </div>
              <div className="flex flex-col">
                <span>1일차: <i className="fa-solid fa-bus-simple" style={{color: "red"}}></i></span>
                <span>2일차: <i className="fa-solid fa-bus-simple" style={{color: "green"}}></i></span>
                <span>3일차: <i className="fa-solid fa-bus-simple" style={{color: "blue"}}></i></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center h-screen" ref={(el) => {
          scrollRef.current = el
        }}>
          {team === "1" && <Image src="/schedule/일정_A.jpg" alt="A조 일정" width={500} height={500}/>}
          {team === "2" && <Image src="/schedule/일정_B.jpg" alt="B조 일정" width={500} height={500}/>}
          {team === "3" && <Image src="/schedule/일정_C.jpg" alt="C조 일정" width={500} height={500}/>}
        </div>
      </div>
  );
}