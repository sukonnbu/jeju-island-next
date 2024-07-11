import Link from "next/link";
import "../globals.css";

export const metadata = {
  title: {
    template: "%s | 소규모테마여행 to 제주도",
    default: "홈 | 소규모테마여행 to 제주도"
  },
  description:
      "2024 경희고등학교 소규모테마여행을 대비하여 제작한 제주도 여행 안내 웹사이트." +
      "made by)소규모테마형교육여행연계활동 개발부",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body>
        <nav className="font-NanumSquare bg-jeju-banner bg-cover p-3 z-10">
          <div>
            <Link href="/" className="flex justify-center">
              <h1 className="text-4xl text-end text-emerald-900">소규모테마형</h1>
              <h1 className="text-4xl text-start text-emerald-500">교육여행</h1>
            </Link>
          </div>
          <div className="m-1">
            <ul className="flex flex-row justify-center indent-4 text-white space-x-5 divide-x-4">
              <li className="text-xl"><Link href="/">홈</Link></li>
              <li className="text-xl"><Link href="/jejuinfo">제주도 소개</Link></li>
              <li className="text-xl"><Link href="/placeinfo">관광지 소개</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="flex flex-col justify-center text-center font-NanumGothic bg-slate-100 p-3">
          <span className="text-base text-slate-700">제작하신 분들</span>
          <div className="flex flex-row justify-center text-slate-500">
            <CreditSection title="자료 조사 및 교정">
              <span>20107 민경조</span>
              <span>20321 유현우</span>
              <span>20322 이재영</span>
              <span>20429 최현석</span>
              <span>20808 김범수</span>
            </CreditSection>
            <CreditSection title="팜플렛 제작">
              <span>송요한 선생님</span>
              <span>20203 김강석</span>
            </CreditSection>
            <CreditSection title="웹페이지 제작">
              <span>20628 최지완</span>
              <span>20730 최현우</span>
              <span>20823 정승용</span>
              <span>20829 탁준호</span>
            </CreditSection>
            <CreditSection title="지도교사">
              <span>송요한 선생님</span>
              <span>황승근 선생님</span>
              <span>민동훈 선생님</span>
            </CreditSection>
          </div>
        </footer>
      </body>
    </html>
  );
}

function CreditSection({children, title}) {
  return <div className="w-32">
    <span className="text-sm">{title}</span>
    <div className="text-xs flex flex-col">
      {children}
    </div>
  </div>
}
