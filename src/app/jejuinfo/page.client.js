"use client";

import { useRef } from "react";
import Script from "next/script";
import Info from "@/components/Info";
import Item from "@/components/Item";

export default function JejuInfo() {
  const scrollRef = useRef([]);
  
  return (
      <>
        <Script src="https://kit.fontawesome.com/e3c9b0d316.js" crossorigin="anonymous"></Script>
        <div className="font-NanumGothic p-5" ref={(el) => {
          scrollRef.current[0] = el
        }}>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-center">목차</span>
            <ol className="flex justify-evenly content-center pt-3">
              <li>
                <button onClick={() => {
                  scrollRef.current[1].scrollIntoView({behavior: "smooth"});
                }}><i class="fa-solid fa-volcano"></i>제주도 소개
                </button>
              </li>
              <li>
                <button onClick={() => {
                  scrollRef.current[2].scrollIntoView({behavior: "smooth"});
                }}><i class="fa-solid fa-gift"></i>제주도 특산물&기념품
                </button>
              </li>
            </ol>
          </div>

          <hr className="my-10"/>

          <article id="top" className="font-NanumGothic">
            <h1 className="text-3xl text-center pb-5" ref={(el) => {
              scrollRef.current[1] = el
            }}>제주도 소개</h1>
            <div className="grid grid-cols-1 justify-items-center">
              <Info title="화산섬 제주도" id="화산섬">
                <p>
                  제주도는 세계에서 보기 드물게 움직이지 않는 대륙 지각판 위 열점에 생성된 대규모 순상 화산체이다.
                  2007년 6월 27일 용암동굴과 함께 유네스코 세계자연유산으로 등재되었다.
                </p>
              </Info>

              <Info title="삼다도 & 삼무도" id="삼다삼무도" ref={(el) => (scrollRef.current[2] = el)}>
                <p>
                  바람,여자,돌이 많다는 의미로 삼다도라 불리기도 한다.
                  <br/>
                  대한민국 최남단이라 타 지역보다 태풍의 피해를 많이 입어서 바람
                  <br/>
                  남자들이 바닷일을 하다가 죽는일이 많아 성비가 불균형나서 여자
                  <br/>
                  화산섬이라 자연스레 돌이 많이 생겨서 돌
                  <br/>
                  이렇게 세 가지이다.
                </p>

                <p>
                  한편, 도둑,거지,대문이 없다는 의미로 삼무도라 불리기도 한다.
                  외부와 교류가 많지 않아서 주민끼리 대부분 한 다리 건너 아는 사이기 때문에 세 가지가 자연스레 없어졌다.
                  <br/>
                </p>
              </Info>

              <Info title="독특한 제사 음식" id="제사음식"
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMDJfMjE4%2FMDAxNjQzODAxNDM5NzI1.DqD0OlQdciP1Amhnf8evnjQpem6GnbsuINsl9YpQVLQg.z6BthhTzNYG3VekJ_BrPUMRc7THFyNaLJmCiWui_BOIg.JPEG.gonlog%2F20220201%25A3%25DF102549.jpg&type=sc960_832"
                    ref={(el) => (scrollRef.current[3] = el)}>
                <p>
                  제주도는 육지와 분리되어 있어 특별한 제사 문화를 보인다. 이는 특히 독특한 제사 음식으로서 나타난다.
                  <br/>
                  제주도의 특색 있는 제사 음식들은 다음과 같다.
                  <ol>
                    <li><big>빵</big> - 제주도는 현무암 지대이므로 쌀을 재배하기 어려워 재배할 수 있는 밀을 사용한 빵이 올라간다.</li>
                    <li><big>과일</big> - 아열대 기후를 띠는 제주도는 귤과 열대 과일(바나나, 애플망고, 파인애플 등)이 자라기 쉬워 자연스레 제사상에 올라가게 되었다</li>
                    <li><big>옥돔</big> - 옥돔이라는 생선을 굽거나 탕으로 하여, 또는 말려서 올렸다고 한다.</li>
                    <li><big>이색 술</big> - 과거에는 감주를 만들어서 올렸지만, 요즘에는 귤 주스를 사용하기도 한다.</li>
                  </ol>
                </p>
              </Info>

              <Info title="제주도 요괴" id="요괴"
                    image="https://search.pstatic.net/sunny/?src=https%3A%2F%2Ftimg.humoruniv.com%2Fthumb_crop_resize.php%3Furl%3Dhttps%3A%2F%2Fdown.humoruniv.com%2F%2Fhwiparambbs%2Fdata%2Feditor%2Ffear%2Fe_scd2e34002_2a9987691002565588518127a3e4e2079f7075d8.png%3FSIZE%3D680x685&type=a340"
                    ref={(el) => (scrollRef.current[4] = el)}>
                <p>
                  이름은 그슴새라고 한다. 옳지 못하다는 말을 뜻하는 그름과 비슷한 그슴과, 불길하고 악독한 기운을 뜻하는 새를 합친 것이다.
                  그슴새는 비바람을 조정하는 능력이 있어서 출몰할 때 먹구름이 끼고 비가 온다고 한다. 영혼을 홀려 정신이 나가게 하고 공포심을 증가시켜 스스로 죽게 만든다고 한다.
                  낮과 밤 상관없이 혼자있는 사람에게 간다고 한다.
                  그슴새는 제주도 전통 우비인 주젱이를 입고있다.
                  <br/>
                  과거에 살인범들에게 주젱이를 씌웠는데, 살인범이 죽고 악귀가 되어 그슴새가 되었다고 한다.
                </p>
              </Info>

              <Info title="돌하르방" id="돌하르방"
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEyMTlfODAg%2FMDAxNzAyOTEyODQ1MzM3.9wgcrpzE0meVlZq9Q96fzXnlXouBBDM7mFu-Lv5I3b4g.DFzUs-IP68Ua21hLo6O6TGD6I4tmjJpPMctGdy3pmtIg.PNG.cpgja0012%2FIMG_7919.PNG&type=a340"
                    ref={(el) => (scrollRef.current[5] = el)}>
                <p>
                  돌하르방은 손의 위치에 따라 상징하는 인물이 달라진다.
                  <br/>
                  오른손이 왼손보다 위에 놓인 돌하르방은 문인을 상징한다.
                  <br/>
                  왼손이 위에 놓인 돌하르방은 무인을 상징한다.
                  <br/>
                  양손이 평등한 돌하르방은 평민을 상징하거나 또는 근래에 만들어진 것이다.
                </p>
              </Info>

              <Info title="제주도 사투리" id="사투리"
                    image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjFfMTM0%2FMDAxNjc5MzI3NzkyNDc1.OaSiAyKu2x12izDjAnaqmzBnBRrrN6ZV7ndUBiMMRVUg.05YJtsGsuE3mbZ2J7dQomJvSEiDKGVOGAhuMraa8Pk8g.JPEG.sayloveme12%2FIMG_1318.JPG&type=sc960_832"
                    ref={(el) => (scrollRef.current[6] = el)}>
                <p>
                  제주 사투리는 타 지역에서는 볼 수 없는 중세 한국어 모습을 많이 유지하고 있다.
                  동시에 제주도만의 고유한 문법적 특징을 갖고 있어서 별개의 언어처럼 여겨진다.
                </p>
              </Info>
            </div>
          </article>

          <hr className="my-10"/>

          <article className="flex flex-col font-NanumGothic" ref={(el) => {
            scrollRef.current[2] = el
          }}>
            <h1 className="text-3xl p-5 text-center">특산물 & 기념품</h1>
            <div className="grid grid-cols-1 justify-items-center">
              <Item title="제주 감귤" image="/관광상품/제주 감귤.jpg">
                <p>
                  제주도하면 딱 귤이 떠오르는 사람들이 있을 것이다. 유명한 감귤류로는 귤 이외에도 한라봉, 천혜향, 레드향 등이 있는데 이의 차이점을 알아보자.
                  <br/>
                  레드향은 껍질의 빛이 붉어 레드향이라고 이름 붙여졌다. 껍질이 두껍고 울퉁불퉁하다는 특징이 있다. 제철은 1월~3월이다.
                  천혜향은 향이 천리를 간다고 하여 천혜향이라고 이름 붙여졌다. 껍질이 얇은 편이라는 특징이 있다. 제철은 1월~4월이다.
                  한라봉은 톡 튀어나온 꼭지 부분이 한라산을 닮아 한라봉이라고 이름 붙여졌다.
                  껍질이 두껍고, 레드향 및 천혜향 대비 아삭한 과육과 풍부한 과즙을 가지고 있다는 특징이 있다. 제철은 12월~3월이다
                </p>
              </Item>
              <Item title="흑돼지" image="/관광상품/흑돼지.jpg">
                <p>
                  제주 흑돼지의 기원은 2세기~5세기 경 야생 멧돼지를 잡아 키운 것이 기원이며 현재 대한민국 천연기념물 제550호로 지정되어 있다.
                  과거에는 돔베고기라고 불리는 제주도식 수육을 멜젓에 찍어먹는 방식이 유행하였으나 현재는 주로 구이를 많이 먹는다.
                  돼지 껍데기가 있는 제주 흑돼지 삼겹살이 서울로 진출하며 '오겹살'의 원조가 되었다.
                  제주 흑돼지는 체질이 강건하고 질병저항성이 강한 특성을 가지고 있으며
                  현재는 260여마리를 제주축산진흥원에서 보존관리 중이다.
                </p>
              </Item>
              <Item title="말고기" image="/관광상품/말고기.jpg">
                <p>
                  제주 말고기는 대표적인 조선시대 진상품 중 하나였다.
                  현재 제주도에는 40~50곳의 말고기 음식점이 있으며 이마트에서도 말고기를 구할 수 있다.
                  제주 중문에 있는 한 말고기 음식점은 미슐랭 가이드에도 소개된 적이 있다.
                  말고기는 육회, 찜, 구이 등 다양한 형태로 먹을 수 있으며 대체적으로 소고기로 만드는 모든 요리가 말고기로도 가능하고 한다.
                </p>
              </Item>
              <Item title="제주 초콜릿" image="/관광상품/제주 초콜릿.jpg">
                <p>
                  제주도에 다녀오면 어김없이 꼭 사오는 기념품 중 하나가 한라봉, 녹차 등 제주도 특산물이 들어간 초콜릿이다.
                  종류가 많기에 아래에서는 '제주 초콜릿'으로 통칭하겠다.
                  제주 초콜릿의 역사는 2001년으로 거슬러 올라가야 한다.
                  이 당시 감귤 농사가 풍년을 이루어 감귤 가격 폭락을 막기 위해 제주도에서 감귤 농축액 공장을 설립하였고 이곳에 초콜릿을 만드는 민간기업을 유치하였다.
                  그 결과 처음 감귤초콜릿이 만들어졌으며 현재는 다양한 회사에서 감귤뿐 아니라 한라봉, 녹차, 백년초 등 다양한 제주도 특산물을 활용하여 초콜릿을 만들고 있다.
                </p>
              </Item>
            </div>
          </article>
        </div>
        <button className="fixed bottom-5 right-5 rounded-full border-2 bg-slate-5 w-10 h-10" onClick={() => {
          if (!scrollRef.current) return;
          scrollRef.current[0].scrollIntoView({behavior: "smooth"});
        }}><i className="fa-solid fa-angles-up"></i>
        </button>
      </>
  );
}