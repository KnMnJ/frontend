/* ===================================================
   FRONTEND ROADMAP — app.js
   =================================================== */

"use strict";

console.info("[Frontend Roadmap] prompt-copy-v6 loaded");

// ── 커리큘럼 데이터 (내용은 직접 수정하세요) ───────────────
// 구조:
//   week: 주차 번호 (1~12)
//   weekTitle: 주차 제목
//   days: 배열 (7개)
//     day: 일차 번호 (1~7)
//     title: 그날의 주제 제목
//     summary: 한 줄 요약
//     topics: 배열 — 클릭하면 펼쳐지는 학습 내용
//       name: 항목 이름
//       desc: 상세 설명
//     practice: 오늘의 실습 과제
//     deliverable: 권장 결과물 파일명

const CURRICULUM = [
  {
    week: 1, weekTitle: "HTML 기초",
    days: [
      {
        day: 1, title: "HTML 기본 문서 구조",
        summary: "HTML 기본 골격을 이해하고 문서 설정 태그와 요소의 개념을 익힙니다.",
        topics: [
          { name: "HTML, CSS, JavaScript의 역할", desc: "HTML은 콘텐츠와 구조, CSS는 디자인, JavaScript는 클릭·입력 등 동작을 담당한다." },
          { name: "태그, 요소, 속성", desc: "<p>내용</p>에서 태그와 요소의 개념을 익히고, lang, id, class 같은 속성의 역할을 배운다." },
          { name: "HTML 기본 골격", desc: "<!doctype html>, <html>, <head>, <body>를 사용해 HTML 문서의 기본 구조를 작성한다." },
          { name: "문서 설정 태그", desc: "<title>로 브라우저 탭 제목을 정하고, <meta charset>과 <meta name=\"viewport\">를 설정한다." },
          { name: "태그 중첩 관계", desc: "부모·자식·형제 요소를 구분하고, 태그를 올바른 순서로 열고 닫는 방법을 배운다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 2, title: "텍스트와 목록 태그",
        summary: "제목, 문단, 강조 및 목록 태그를 사용해 텍스트를 구조화합니다.",
        topics: [
          { name: "제목 태그", desc: "<h1>부터 <h6>까지 사용해 문서의 제목과 하위 제목 구조를 만든다." },
          { name: "문단과 줄 구분", desc: "<p>로 문단을 만들고, <br>과 <hr>의 용도와 차이를 익힌다." },
          { name: "텍스트 강조", desc: "<strong>으로 중요성을, <em>으로 문맥상 강조를 표현한다." },
          { name: "순서 없는 목록", desc: "<ul>과 <li>를 사용해 기술, 경력, 준비물처럼 순서가 중요하지 않은 항목을 나열한다." },
          { name: "순서 있는 목록", desc: "<ol>과 <li>를 사용해 학습 순서나 작업 절차처럼 순서가 중요한 내용을 표현한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 3, title: "링크, 이미지, 파일 경로",
        summary: "외부 페이지 및 내부 파일을 연결하고 이미지를 삽입하는 방법을 배웁니다.",
        topics: [
          { name: "다른 페이지 연결", desc: "<a href=\"\">를 사용해 외부 웹사이트, 내부 HTML 파일, 이메일 주소를 연결한다." },
          { name: "페이지 내부 이동", desc: "요소의 id와 href=\"#아이디\"를 연결해 목차나 맨 위로 이동하는 링크를 만든다." },
          { name: "이미지 삽입", desc: "<img src=\"\" alt=\"\">를 사용해 이미지를 표시하고, 이미지가 보이지 않을 때 사용할 대체 설명을 작성한다." },
          { name: "절대 경로와 상대 경로", desc: "웹 주소 전체를 사용하는 절대 경로와 현재 파일 위치를 기준으로 하는 상대 경로를 구분한다." },
          { name: "경로 기호", desc: "./는 현재 폴더, ../는 상위 폴더를 의미한다는 것을 배우고 여러 페이지를 연결한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 4, title: "시맨틱 HTML과 페이지 구조",
        summary: "의미 있는 HTML 태그를 사용해 검색엔진과 스크린 리더가 이해하기 쉬운 페이지 구조를 만듭니다.",
        topics: [
          { name: "페이지 상단 구조", desc: "<header>에 제목과 소개를 넣고, <nav>에 주요 페이지 이동 링크를 구성한다." },
          { name: "주요 콘텐츠 구조", desc: "<main>에 페이지의 핵심 내용을 넣고, 주제별 내용을 <section>으로 구분한다." },
          { name: "독립적인 콘텐츠", desc: "프로젝트 카드나 게시글처럼 단독으로 이해할 수 있는 내용을 <article>로 표현한다." },
          { name: "보조 콘텐츠와 하단 정보", desc: "부가 정보에는 <aside>, 저작권·연락처 등 하단 정보에는 <footer>를 사용한다." },
          { name: "div와 시맨틱 태그의 차이", desc: "의미가 있는 영역은 전용 태그를 사용하고, 단순히 요소를 묶을 때만 <div>를 사용한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 5, title: "표와 입력 폼",
        summary: "표 데이터를 다루고 사용자로부터 입력을 받는 폼을 구성합니다.",
        topics: [
          { name: "표 기본 구조", desc: "<table>, <tr>, <th>, <td>를 사용해 행과 열로 이루어진 데이터를 표현한다." },
          { name: "표 영역 구분", desc: "<caption>으로 표 제목을 작성하고, <thead>와 <tbody>로 머리글과 본문을 나눈다." },
          { name: "폼 기본 구조", desc: "<form> 안에 <input>, <textarea>, <select>, <button>을 배치해 사용자 입력 화면을 만든다." },
          { name: "입력창 종류", desc: "type=\"text\", type=\"email\", type=\"number\", type=\"file\", type=\"checkbox\" 등 목적에 맞는 입력 타입을 배운다." },
          { name: "라벨과 입력창 연결", desc: "<label for=\"\">의 for 값과 <input id=\"\">의 id를 일치시켜 입력창의 설명을 명확하게 만든다." },
          { name: "입력 데이터 속성", desc: "name, value, placeholder, required 속성이 각각 어떤 역할을 하는지 익힌다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 6, title: "개발자도구와 HTML 오류 수정",
        summary: "브라우저 개발자도구를 활용해 HTML 구조를 분석하고 흔한 오류를 해결합니다.",
        topics: [
          { name: "Elements 패널", desc: "브라우저가 실제로 해석한 HTML 구조를 확인하고, 요소와 속성을 임시로 수정해본다." },
          { name: "DOM 구조 확인", desc: "화면에 보이는 요소가 어떤 부모 요소 안에 들어 있는지 확인하고 잘못된 중첩을 찾는다." },
          { name: "Console 패널", desc: "페이지에서 발생한 오류와 경고 메시지를 확인하는 방법을 익힌다." },
          { name: "HTML 구조 오류", desc: "닫는 태그 누락, 잘못된 제목 순서, 상호작용 요소 중첩 등 자주 발생하는 오류를 수정한다." },
          { name: "접근성 오류", desc: "이미지의 alt 누락, 입력창의 label 누락, 의미가 불분명한 링크 문구를 점검한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 7, title: "HTML 종합 프로젝트와 복습",
        summary: "지금까지 배운 태그들을 모두 활용하여 포트폴리오의 구조를 완성합니다.",
        topics: [
          { name: "페이지 전체 구조 작성", desc: "<header>, <nav>, <main>, <section>, <article>, <footer>를 사용해 포트폴리오 구조를 만든다." },
          { name: "개인 정보와 역량 표현", desc: "제목, 문단, 목록 태그를 사용해 자기소개, 경력, 기술, 관심 분야를 정리한다." },
          { name: "프로젝트 연결", desc: "<a>와 <img>를 사용해 프로젝트 상세 페이지, GitHub, 프로젝트 이미지를 연결한다." },
          { name: "학습계획 표 제작", desc: "<table>을 사용해 주차, 학습 주제, 결과물을 표로 정리한다." },
          { name: "문의 폼 제작", desc: "이름, 이메일, 문의 내용 입력창과 제출 버튼을 포함한 기본 폼을 만든다." },
          { name: "최종 코드 점검", desc: "제목 계층, 시맨틱 태그, 파일 경로, 이미지 대체 텍스트, 입력창 라벨을 확인한다." },
          { name: "AI 코드 리뷰 활용", desc: "AI에게 코드를 새로 작성하게 하기보다 문법 오류, 접근성 문제, 불필요한 태그를 찾아달라고 요청한 뒤 직접 수정한다." }
        ],
        practice: "",
        deliverable: ""
      }
    ]
  },
  {
    week: 2, weekTitle: "CSS 기초",
    days: [
      {
        day: 1, title: "CSS 적용 방법과 기본 문법",
        summary: "CSS의 역할과 기본 문법을 배우고 HTML에 스타일을 연결하는 방법을 익힙니다.",
        topics: [
          { name: "CSS의 역할", desc: "HTML로 만든 콘텐츠 구조에 글자 색상, 크기, 여백, 배경, 테두리 등의 디자인을 적용한다." },
          { name: "CSS 기본 문법", desc: "선택자 { 속성: 값; } 구조로 스타일을 작성하고, 선택자·속성·값·선언의 의미를 구분한다." },
          { name: "외부 CSS 파일 연결", desc: "HTML의 <head>에서 <link rel=\"stylesheet\" href=\"style.css\">를 사용해 CSS 파일을 연결한다." },
          { name: "인라인·내부·외부 CSS", desc: "style 속성, <style> 태그, 별도 CSS 파일을 사용하는 세 가지 방식을 비교한다." },
          { name: "기본 선택자", desc: "태그 선택자, 클래스 선택자, 아이디 선택자를 사용해 스타일을 적용할 요소를 지정한다." },
          { name: "class와 id의 차이", desc: "여러 요소에 반복 적용하는 스타일에는 class, 페이지에서 고유한 요소를 식별할 때는 id를 사용한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 2, title: "CSS 선택자와 스타일 적용 우선순위",
        summary: "다양한 선택자로 원하는 요소를 정확히 찾고, 스타일이 겹칠 때의 우선순위를 이해합니다.",
        topics: [
          { name: "그룹 선택자", desc: "h1, h2, h3처럼 여러 선택자에 동일한 스타일을 한 번에 적용한다." },
          { name: "자손 선택자", desc: ".card p처럼 특정 요소 내부에 있는 모든 하위 요소를 선택한다." },
          { name: "자식 선택자", desc: ".card > p처럼 바로 아래 단계에 있는 자식 요소만 선택한다." },
          { name: "인접 형제 선택자", desc: "h2 + p처럼 특정 요소 바로 다음에 나오는 형제 요소를 선택한다." },
          { name: "속성 선택자", desc: "input[type=\"email\"]처럼 특정 속성이나 속성값을 가진 요소를 선택한다." },
          { name: "상속", desc: "color, font-family처럼 부모 요소의 스타일이 자식 요소에 전달되는 속성을 이해한다." },
          { name: "우선순위", desc: "인라인 스타일, 아이디, 클래스, 태그 선택자가 충돌할 때 어떤 스타일이 적용되는지 배운다." },
          { name: "선언 순서와 !important", desc: "우선순위가 같으면 나중에 작성한 스타일이 적용되며, !important는 불가피한 경우가 아니면 사용하지 않는 이유를 익힌다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 3, title: "박스 모델과 크기 설정",
        summary: "CSS 박스 모델의 개념을 이해하고 요소의 크기와 여백을 정밀하게 제어합니다.",
        topics: [
          { name: "CSS 박스 모델", desc: "모든 HTML 요소가 콘텐츠, 안쪽 여백, 테두리, 바깥 여백으로 이루어진 사각형이라는 개념을 배운다." },
          { name: "width와 height", desc: "요소의 너비와 높이를 지정하고, 고정 크기로 인해 콘텐츠가 넘칠 수 있다는 점을 확인한다." },
          { name: "padding", desc: "콘텐츠와 테두리 사이의 안쪽 여백을 설정한다." },
          { name: "border", desc: "요소의 테두리 두께, 모양, 색상을 지정한다." },
          { name: "margin", desc: "요소와 다른 요소 사이의 바깥 여백을 설정한다." },
          { name: "box-sizing", desc: "box-sizing: border-box를 사용해 width 안에 padding과 border가 포함되도록 설정한다." },
          { name: "최소·최대 크기", desc: "min-width, max-width, min-height, max-height로 요소 크기의 범위를 제한한다." },
          { name: "콘텐츠 넘침 처리", desc: "overflow: visible, hidden, auto, scroll을 사용해 영역을 벗어난 콘텐츠를 처리한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 4, title: "색상, 배경, 글꼴과 텍스트",
        summary: "웹페이지의 시각적 요소를 꾸미는 다양한 CSS 속성들을 배웁니다.",
        topics: [
          { name: "색상 표현 방식", desc: "색상 이름, HEX, rgb(), rgba()를 사용해 글자색과 배경색을 지정한다." },
          { name: "글자색과 배경색", desc: "color로 글자색을, background-color로 요소의 배경색을 설정한다." },
          { name: "배경 이미지", desc: "background-image, background-size, background-position, background-repeat로 배경 이미지를 조정한다." },
          { name: "글꼴 지정", desc: "font-family로 사용할 글꼴과 대체 글꼴의 순서를 설정한다." },
          { name: "글자 크기와 굵기", desc: "font-size, font-weight를 사용해 글자의 크기와 굵기를 조절한다." },
          { name: "줄 높이와 글자 간격", desc: "line-height, letter-spacing, word-spacing으로 텍스트의 가독성을 조정한다." },
          { name: "텍스트 정렬", desc: "text-align으로 왼쪽·가운데·오른쪽 정렬을 설정한다." },
          { name: "텍스트 꾸미기", desc: "text-decoration, text-transform, text-shadow로 밑줄, 대소문자, 그림자 등을 적용한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 5, title: "단위와 요소의 표시 방식",
        summary: "CSS의 다양한 단위(px, %, em, rem 등)와 display 속성을 익힙니다.",
        topics: [
          { name: "절대 단위 px", desc: "화면에서 비교적 고정된 크기가 필요한 테두리나 작은 간격에 픽셀 단위를 사용한다." },
          { name: "상대 단위 %", desc: "부모 요소의 크기를 기준으로 너비와 높이를 설정한다." },
          { name: "글자 기준 단위 em과 rem", desc: "em은 현재 또는 부모 요소의 글자 크기, rem은 최상위 요소의 글자 크기를 기준으로 계산된다." },
          { name: "화면 기준 단위 vw와 vh", desc: "브라우저 화면의 너비와 높이를 기준으로 요소 크기를 지정한다." },
          { name: "블록 요소", desc: "display: block 요소가 한 줄 전체를 차지하고 위아래로 배치되는 원리를 배운다." },
          { name: "인라인 요소", desc: "display: inline 요소가 글자처럼 같은 줄에 배치되며 너비와 높이 설정이 제한되는 점을 이해한다." },
          { name: "인라인 블록 요소", desc: "display: inline-block으로 같은 줄에 배치하면서 너비, 높이, 여백을 설정한다." },
          { name: "요소 숨기기", desc: "display: none, visibility: hidden, opacity: 0의 차이를 구분한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 6, title: "위치 지정과 사용자 상호작용 스타일",
        summary: "position 속성으로 요소를 자유롭게 배치하고, 가상 클래스로 상호작용을 추가합니다.",
        topics: [
          { name: "기본 배치 흐름", desc: "별도 위치 지정이 없을 때 블록 요소와 인라인 요소가 문서에 배치되는 순서를 이해한다." },
          { name: "position: relative", desc: "요소의 원래 위치를 기준으로 이동하거나, 내부의 절대 위치 요소가 기준으로 삼을 영역을 만든다." },
          { name: "position: absolute", desc: "가장 가까운 위치 지정 조상 요소를 기준으로 top, right, bottom, left 값을 적용한다." },
          { name: "position: fixed", desc: "화면을 스크롤해도 같은 위치에 유지되는 버튼이나 메뉴를 만든다." },
          { name: "position: sticky", desc: "일반적인 흐름에 있다가 지정된 스크롤 위치에서 고정되는 요소를 만든다." },
          { name: "요소 겹침 순서", desc: "z-index를 사용해 위치가 지정된 요소들이 겹칠 때 표시 순서를 조정한다." },
          { name: "가상 클래스", desc: ":hover, :focus, :active, :checked를 사용해 마우스와 키보드 동작에 따른 스타일을 지정한다." },
          { name: "가상 요소", desc: "::before, ::after를 사용해 HTML을 추가하지 않고 장식용 콘텐츠를 삽입한다." },
          { name: "마우스 모양", desc: "cursor: pointer 등을 사용해 클릭할 수 있는 요소라는 시각적 단서를 제공한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 7, title: "HTML 포트폴리오 CSS 적용과 종합 복습",
        summary: "1주차에 만든 포트폴리오 HTML에 CSS를 적용하여 실제 웹사이트처럼 꾸밉니다.",
        topics: [
          { name: "CSS 초기 설정", desc: "box-sizing: border-box를 전체 요소에 적용하고 기본 margin과 padding을 정리한다." },
          { name: "페이지 전체 디자인", desc: "body에 배경색, 글꼴, 글자색, 줄 높이를 설정해 페이지의 기본 분위기를 만든다." },
          { name: "콘텐츠 너비 제한", desc: "width, max-width, margin: 0 auto를 사용해 콘텐츠를 화면 중앙에 배치한다." },
          { name: "헤더와 내비게이션 디자인", desc: "배경, 글자색, 여백, 테두리를 적용하고 링크에 hover·focus 스타일을 추가한다." },
          { name: "섹션 구분", desc: "각 <section>에 여백, 배경, 테두리, 둥근 모서리를 적용해 콘텐츠 영역을 구분한다." },
          { name: "프로젝트 카드 제작", desc: "클래스 선택자와 박스 모델을 사용해 프로젝트별 카드 형태를 만든다." },
          { name: "표 디자인", desc: "border-collapse, padding, 배경색, 테두리를 사용해 학습 계획표의 가독성을 높인다." },
          { name: "폼 디자인", desc: "입력창의 너비, padding, 테두리, focus 상태와 버튼의 hover·active 상태를 설정한다." },
          { name: "개발자도구를 활용한 수정", desc: "Elements와 Styles 패널에서 적용된 CSS, 상속된 속성, 덮어씌워진 선언을 확인한다." },
          { name: "AI 코드 리뷰 활용", desc: "AI에게 디자인을 전면 재작성하게 하기보다 중복된 CSS, 지나치게 강한 선택자, 불필요한 !important, 접근성 문제를 점검하게 한다." }
        ],
        practice: "",
        deliverable: ""
      }
    ]
  },
  {
    week: 3, weekTitle: "Flexbox·Grid·반응형 웹",
    days: [
      {
        day: 1, title: "Flexbox 기본 구조와 정렬",
        summary: "Flexbox 레이아웃의 개념을 이해하고 주축과 교차축을 기준으로 요소를 정렬합니다.",
        topics: [
          { name: "Flexbox의 역할", desc: "여러 요소를 가로 또는 세로 방향으로 배치하고, 요소 사이의 간격과 정렬을 쉽게 조절하는 레이아웃 방식이다." },
          { name: "Flex 컨테이너 만들기", desc: "부모 요소에 display: flex를 적용하면 바로 아래 자식 요소들이 Flex 아이템이 된다." },
          { name: "주축과 교차축", desc: "Flexbox에서는 요소가 배치되는 방향을 주축, 그와 수직인 방향을 교차축이라고 한다." },
          { name: "배치 방향 설정", desc: "flex-direction: row, column, row-reverse, column-reverse로 요소가 놓이는 방향을 지정한다." },
          { name: "주축 정렬", desc: "justify-content를 사용해 요소를 시작점, 가운데, 끝 또는 일정한 간격으로 배치한다." },
          { name: "교차축 정렬", desc: "align-items를 사용해 요소를 위쪽, 가운데, 아래쪽 또는 높이에 맞게 정렬한다." },
          { name: "요소 사이 간격", desc: "gap, row-gap, column-gap을 사용해 각 아이템 사이의 간격을 설정한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 2, title: "Flex 아이템의 크기와 줄바꿈",
        summary: "공간에 맞춰 아이템이 늘어나거나 줄어드는 원리를 배우고 여러 줄 배치를 제어합니다.",
        topics: [
          { name: "사용 가능한 공간 확장", desc: "flex-grow를 사용해 컨테이너에 남는 공간을 각 아이템이 어떤 비율로 차지할지 정한다." },
          { name: "공간 부족 시 축소", desc: "flex-shrink를 사용해 컨테이너가 좁아졌을 때 각 아이템이 줄어드는 비율을 지정한다." },
          { name: "아이템의 기본 크기", desc: "flex-basis로 Flex 아이템이 배치되기 전의 기본 너비나 높이를 설정한다." },
          { name: "flex 단축 속성", desc: "flex: grow shrink basis 형식으로 확장, 축소, 기본 크기를 한 번에 지정한다." },
          { name: "줄바꿈", desc: "flex-wrap: wrap을 적용해 공간이 부족할 때 아이템이 다음 줄로 내려가도록 만든다." },
          { name: "여러 줄 정렬", desc: "align-content를 사용해 줄바꿈으로 생긴 여러 줄 전체의 배치를 조절한다." },
          { name: "개별 아이템 정렬", desc: "align-self를 사용해 특정 아이템 하나만 다른 교차축 위치에 배치한다." },
          { name: "자동 여백 활용", desc: "margin-left: auto 등을 사용해 특정 요소를 반대쪽 끝으로 밀어낸다." },
          { name: "아이템 순서 변경", desc: "order로 화면에 표시되는 순서를 바꿀 수 있지만, HTML의 실제 읽기 순서와 달라질 수 있다는 점을 배운다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 3, title: "CSS Grid 기본 구조",
        summary: "행과 열을 동시에 관리하는 CSS Grid를 사용해 복잡한 2차원 레이아웃을 만듭니다.",
        topics: [
          { name: "Grid의 역할", desc: "행과 열을 동시에 사용해 카드 목록, 대시보드, 전체 페이지처럼 2차원 레이아웃을 구성한다." },
          { name: "Grid 컨테이너 만들기", desc: "부모 요소에 display: grid를 적용해 자식 요소를 Grid 아이템으로 만든다." },
          { name: "열 정의", desc: "grid-template-columns를 사용해 열의 개수와 너비를 지정한다." },
          { name: "행 정의", desc: "grid-template-rows를 사용해 행의 개수와 높이를 지정한다." },
          { name: "비율 단위 fr", desc: "1fr, 2fr처럼 남은 공간을 비율에 따라 나누어 사용한다." },
          { name: "반복 함수", desc: "repeat(3, 1fr)처럼 같은 크기의 열이나 행을 반복해 작성한다." },
          { name: "Grid 간격", desc: "gap, row-gap, column-gap으로 행과 열 사이의 간격을 설정한다." },
          { name: "아이템 위치 지정", desc: "grid-column, grid-row를 사용해 아이템이 차지할 시작선과 끝선을 정한다." },
          { name: "여러 칸 차지하기", desc: "span을 사용해 하나의 아이템이 여러 열이나 행을 차지하도록 만든다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 4, title: "CSS Grid 반응형·고급 기능",
        summary: "화면 크기에 따라 자동으로 적응하는 동적인 Grid 레이아웃을 구성합니다.",
        topics: [
          { name: "최소·최대 크기 설정", desc: "minmax()를 사용해 열이나 행의 최소 크기와 최대 크기를 함께 지정한다." },
          { name: "자동 열 개수 조절", desc: "repeat(auto-fit, minmax())를 사용해 화면 너비에 따라 카드 열의 개수가 자동으로 바뀌게 만든다." },
          { name: "auto-fit과 auto-fill", desc: "남은 공간을 기존 아이템이 확장해 채우는 방식과 빈 열을 유지하는 방식의 차이를 익힌다." },
          { name: "명시적·암시적 Grid", desc: "직접 정의한 행과 열은 명시적 Grid이며, 아이템이 넘쳐 자동으로 생성된 영역은 암시적 Grid라는 점을 배운다." },
          { name: "자동 생성 행 크기", desc: "grid-auto-rows, grid-auto-columns로 자동 생성되는 행과 열의 크기를 지정한다." },
          { name: "자동 배치 방향", desc: "grid-auto-flow로 아이템을 행 우선 또는 열 우선으로 채우는 방식을 설정한다." },
          { name: "영역 이름 지정", desc: "grid-template-areas로 header, sidebar, main, footer 같은 영역 이름을 정해 레이아웃을 작성한다." },
          { name: "Grid 내부 정렬", desc: "justify-items, align-items, place-items로 각 Grid 셀 안의 아이템을 정렬한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 5, title: "반응형 웹과 미디어 쿼리",
        summary: "다양한 기기 화면 크기에 맞게 페이지 레이아웃이 변환되는 반응형 웹을 배웁니다.",
        topics: [
          { name: "반응형 웹의 개념", desc: "하나의 HTML 페이지가 모바일, 태블릿, 데스크톱 화면 크기에 맞게 구조와 크기를 바꾸도록 설계한다." },
          { name: "뷰포트 설정", desc: "HTML의 <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">가 모바일 화면에 필요한 이유를 복습한다." },
          { name: "유동적인 너비", desc: "width: 100%와 max-width를 함께 사용해 화면이 작을 때는 줄어들고, 큰 화면에서는 지나치게 넓어지지 않게 한다." },
          { name: "미디어 쿼리", desc: "@media (min-width: ...) 또는 @media (max-width: ...)를 사용해 화면 크기에 따라 다른 CSS를 적용한다." },
          { name: "모바일 우선 설계", desc: "기본 CSS는 모바일 화면을 기준으로 작성하고, 화면이 넓어질 때 min-width 미디어 쿼리로 레이아웃을 확장한다." },
          { name: "브레이크포인트", desc: "특정 기기 이름이 아니라 콘텐츠와 레이아웃이 깨지는 지점을 기준으로 화면 전환 기준을 정한다." },
          { name: "반응형 이미지", desc: "max-width: 100%와 height: auto를 사용해 이미지가 부모 영역을 벗어나지 않도록 한다." },
          { name: "개발자도구 기기 모드", desc: "Chrome 개발자도구에서 모바일, 태블릿, 데스크톱 너비로 페이지를 확인한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 6, title: "유동적인 크기와 반응형 UI 패턴",
        summary: "자주 쓰이는 반응형 디자인 패턴을 익히고 상황에 맞게 Flexbox와 Grid를 선택합니다.",
        topics: [
          { name: "크기 범위 제한", desc: "min(), max(), clamp()를 사용해 글자 크기와 여백이 화면에 따라 유동적으로 변하되 일정 범위를 벗어나지 않게 한다." },
          { name: "반응형 글자 크기", desc: "font-size: clamp(최솟값, 유동값, 최댓값)으로 화면에 맞춰 자연스럽게 변하는 제목 크기를 만든다." },
          { name: "가로세로 비율 유지", desc: "aspect-ratio를 사용해 이미지, 영상, 차트 영역의 비율을 일정하게 유지한다." },
          { name: "내비게이션 배치", desc: "넓은 화면에서는 메뉴를 가로로 배치하고, 좁은 화면에서는 줄바꿈하거나 세로로 배치한다." },
          { name: "반응형 카드 목록", desc: "Flexbox의 flex-wrap 또는 Grid의 auto-fit과 minmax()를 사용해 화면 크기에 따라 카드 개수를 변경한다." },
          { name: "사이드바 레이아웃", desc: "데스크톱에서는 본문과 사이드바를 나란히 배치하고, 모바일에서는 한 열로 변경한다." },
          { name: "가로 넘침 처리", desc: "긴 표나 차트는 overflow-x: auto를 적용해 작은 화면에서 가로 스크롤로 확인할 수 있게 한다." },
          { name: "Flexbox와 Grid 선택 기준", desc: "한 방향의 단순 정렬은 Flexbox, 행과 열을 함께 관리하는 전체 레이아웃은 Grid를 우선 사용한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 7, title: "반응형 대시보드 종합 프로젝트",
        summary: "지금까지 배운 Flexbox, Grid, 미디어 쿼리를 총동원하여 데스크톱과 모바일을 모두 지원하는 복잡한 대시보드를 제작합니다.",
        topics: [
          { name: "전체 Grid 레이아웃", desc: "데스크톱 화면에서 좌측 설정 패널, 중앙 결과 영역, 우측 요약 패널로 구성된 3열 대시보드를 만든다." },
          { name: "모바일 레이아웃 전환", desc: "좁은 화면에서는 세 영역을 한 열로 배치하고, 콘텐츠가 자연스러운 순서로 표시되게 한다." },
          { name: "설정 폼 정렬", desc: "Flexbox를 사용해 라벨, 입력창, 버튼을 정렬하고 화면이 좁아지면 세로로 배치한다." },
          { name: "요약 카드 목록", desc: "Grid를 사용해 수익률, MDD, 거래 횟수 등의 결과 카드를 화면 너비에 맞춰 자동 배치한다." },
          { name: "차트 영역 제작", desc: "aspect-ratio, min-height, overflow를 사용해 차트가 들어갈 반응형 공간을 만든다." },
          { name: "반응형 내비게이션", desc: "데스크톱에서는 메뉴를 가로로, 모바일에서는 세로 또는 줄바꿈 형태로 표시한다." },
          { name: "브레이크포인트 점검", desc: "320px 수준의 작은 화면부터 넓은 데스크톱 화면까지 확인하고 레이아웃이 깨지는 구간을 수정한다." },
          { name: "접근성과 표시 순서 확인", desc: "CSS로 보이는 순서를 바꾸더라도 HTML의 실제 읽기 순서가 자연스럽게 유지되는지 확인한다." },
          { name: "개발자도구 점검", desc: "Grid·Flex 오버레이를 켜서 열, 행, 간격, 정렬 기준이 의도한 대로 적용되었는지 확인한다." },
          { name: "AI 코드 리뷰 활용", desc: "AI에게 고정 너비 남용, 불필요한 미디어 쿼리, 중복된 브레이크포인트, 가로 스크롤 발생 위치를 점검하게 한다." }
        ],
        practice: "",
        deliverable: ""
      }
    ]
  },
  {
    week: 4, weekTitle: "JavaScript 기초",
    days: [
      {
        day: 1, title: "JavaScript 연결과 변수·자료형",
        summary: "JavaScript의 기본 역할을 이해하고 데이터를 저장하는 변수와 자료형을 배웁니다.",
        topics: [
          { name: "JavaScript의 역할", desc: "HTML과 CSS로 만든 화면에 계산, 조건 판단, 데이터 처리, 사용자 상호작용 등의 기능을 추가한다." },
          { name: "외부 JavaScript 파일 연결", desc: "HTML에서 <script src=\"script.js\" defer></script>를 사용해 JavaScript 파일을 연결한다." },
          { name: "개발자도구 Console", desc: "console.log()로 값과 실행 결과를 출력하고, 브라우저에서 오류 메시지를 확인한다." },
          { name: "변수 선언", desc: "const는 재할당하지 않는 값에, let은 실행 중 값이 바뀌는 변수에 사용한다." },
          { name: "변수 이름 작성 규칙", desc: "숫자로 시작할 수 없으며, 의미가 드러나는 카멜 케이스 이름을 사용한다. 예: purchasePrice, totalReturn, isCompleted" },
          { name: "기본 자료형", desc: "문자열 string, 숫자 number, 불리언 boolean, undefined, null의 의미를 구분한다." },
          { name: "자료형 확인", desc: "typeof 연산자를 사용해 변수에 저장된 값의 자료형을 확인한다." },
          { name: "문자열 템플릿", desc: "백틱과 ${변수}를 사용하는 템플릿 리터럴로 문자열 안에 값을 삽입한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 2, title: "연산자와 자료형 변환",
        summary: "데이터를 계산하고 비교하는 연산자와 자료형을 변환하는 방법을 익힙니다.",
        topics: [
          { name: "산술 연산자", desc: "+, -, *, /, %, **를 사용해 사칙연산, 나머지, 거듭제곱을 계산한다." },
          { name: "할당 연산자", desc: "=, +=, -=, *=, /=를 사용해 기존 변수의 값을 계산하고 다시 저장한다." },
          { name: "비교 연산자", desc: ">, <, >=, <=, ===, !==를 사용해 두 값을 비교하고 불리언 결과를 얻는다." },
          { name: "엄격한 일치 비교", desc: "값과 자료형을 함께 비교하는 ===를 기본으로 사용하고, 자동 형 변환이 발생하는 ==는 가급적 사용하지 않는다." },
          { name: "논리 연산자", desc: "&&는 모든 조건이 참인지, ||는 하나 이상의 조건이 참인지, !는 참과 거짓을 반대로 바꾸는 데 사용한다." },
          { name: "숫자 변환", desc: "Number(), parseInt(), parseFloat()를 사용해 문자열 형태의 입력값을 숫자로 변환한다." },
          { name: "문자열 변환", desc: "String()과 .toString()을 사용해 숫자나 불리언 값을 문자열로 변환한다." },
          { name: "NaN 확인", desc: "숫자로 변환할 수 없는 값이 NaN이 되는 이유를 이해하고 Number.isNaN()으로 확인한다." },
          { name: "Truthy와 Falsy", desc: "조건문에서 false, 0, 빈 문자열, null, undefined, NaN 등이 거짓으로 평가되는 원리를 배운다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 3, title: "조건문과 분기 처리",
        summary: "상황에 따라 다른 코드가 실행되도록 조건문을 작성하고 입력값을 검증합니다.",
        topics: [
          { name: "기본 조건문", desc: "if를 사용해 조건이 참일 때만 특정 코드를 실행한다." },
          { name: "반대 조건 처리", desc: "else를 사용해 조건이 거짓일 때 실행할 코드를 작성한다." },
          { name: "여러 조건 처리", desc: "else if로 여러 조건을 순서대로 검사한다." },
          { name: "조건 결합", desc: "&&, ||, !를 사용해 나이, 가격, 로그인 상태 등 여러 조건을 조합한다." },
          { name: "삼항 연산자", desc: "조건 ? 참일 때 값 : 거짓일 때 값 형태로 간단한 조건에 따라 값을 선택한다." },
          { name: "switch문", desc: "하나의 값을 여러 경우와 비교할 때 case, break, default를 사용한다." },
          { name: "조건 검사 순서", desc: "더 구체적이고 제한적인 조건을 먼저 검사하고, 넓은 조건은 뒤에 배치한다." },
          { name: "입력값 검증", desc: "빈 값, 숫자가 아닌 값, 음수 등 잘못된 데이터가 들어왔을 때 계산을 중단하거나 오류 메시지를 만든다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 4, title: "반복문과 반복 제어",
        summary: "동일한 작업을 효율적으로 반복 처리하고 반복의 흐름을 제어하는 방법을 배웁니다.",
        topics: [
          { name: "for 반복문", desc: "초기값, 반복 조건, 증감식을 작성해 정해진 횟수만큼 코드를 반복한다." },
          { name: "while 반복문", desc: "특정 조건이 참인 동안 반복하며, 종료 조건이 없으면 무한 반복이 발생한다는 점을 배운다." },
          { name: "배열 순회", desc: "for...of를 사용해 배열의 값을 하나씩 꺼내 처리한다." },
          { name: "객체 순회", desc: "for...in을 사용해 객체의 속성 이름을 확인하되, 배열 반복에는 주로 사용하지 않는다." },
          { name: "반복 중단", desc: "break를 사용해 조건을 만족했을 때 반복문을 즉시 종료한다." },
          { name: "현재 반복 건너뛰기", desc: "continue를 사용해 특정 항목의 처리만 생략하고 다음 반복으로 이동한다." },
          { name: "누적값 계산", desc: "반복문 바깥에 합계 변수를 만들고 반복할 때마다 값을 더해 총합이나 평균을 계산한다." },
          { name: "중첩 반복문", desc: "반복문 안에 반복문을 작성해 행과 열 또는 여러 조건의 조합을 처리하는 방식을 익힌다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 5, title: "함수와 스코프",
        summary: "코드를 재사용 가능한 단위로 묶는 함수를 정의하고 변수의 유효 범위를 이해합니다.",
        topics: [
          { name: "함수의 역할", desc: "반복해서 사용하는 코드를 하나의 기능 단위로 묶어 이름을 붙이고 필요할 때 호출한다." },
          { name: "함수 선언문", desc: "function 함수명() {} 형태로 함수를 정의하고 함수 이름을 사용해 실행한다." },
          { name: "매개변수와 인수", desc: "매개변수는 함수가 받을 값의 이름이고, 인수는 함수를 호출할 때 실제로 전달하는 값이다." },
          { name: "반환값", desc: "return을 사용해 함수의 계산 결과를 외부로 돌려주고 함수 실행을 종료한다." },
          { name: "기본 매개변수", desc: "값이 전달되지 않았을 때 사용할 기본값을 function calculate(fee = 0)처럼 지정한다." },
          { name: "함수 표현식", desc: "함수를 변수에 저장하는 방식과 함수 선언문과의 기본적인 차이를 익힌다." },
          { name: "화살표 함수", desc: "(price, quantity) => price * quantity처럼 간결하게 함수를 작성한다." },
          { name: "지역·전역 스코프", desc: "함수나 블록 안에서 선언한 변수와 바깥에서 선언한 변수의 사용 가능 범위를 구분한다." },
          { name: "순수 함수", desc: "같은 입력값을 받으면 같은 결과를 반환하고 외부 값을 직접 변경하지 않는 함수의 장점을 배운다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 6, title: "배열과 객체를 이용한 데이터 처리",
        summary: "여러 데이터를 구조적으로 다루는 배열과 객체의 주요 메서드들을 익힙니다.",
        topics: [
          { name: "배열 생성과 접근", desc: "[]로 여러 값을 순서대로 저장하고 인덱스를 사용해 특정 값에 접근한다." },
          { name: "배열 요소 추가·삭제", desc: "push(), pop(), shift(), unshift()로 배열의 앞뒤에서 요소를 추가하거나 제거한다." },
          { name: "배열 검색", desc: "includes()로 값의 존재 여부를 확인하고 indexOf()로 위치를 찾는다." },
          { name: "배열 순회", desc: "forEach()를 사용해 배열의 각 요소에 같은 작업을 실행한다." },
          { name: "배열 변환", desc: "map()을 사용해 기존 배열의 각 값을 변환한 새로운 배열을 만든다." },
          { name: "배열 필터링", desc: "filter()를 사용해 조건을 만족하는 요소만 모은 새로운 배열을 만든다." },
          { name: "특정 요소 검색", desc: "find()로 조건을 만족하는 첫 번째 요소를 찾고 findIndex()로 위치를 찾는다." },
          { name: "값 누적", desc: "reduce()를 사용해 배열의 합계, 평균, 최댓값 또는 객체 형태의 결과를 만든다." },
          { name: "객체 생성과 접근", desc: "{ 키: 값 } 형태로 관련 데이터를 묶고 점 표기법 또는 대괄호 표기법으로 값에 접근한다." },
          { name: "객체 수정", desc: "새로운 속성을 추가하거나 기존 속성값을 변경하고 delete로 속성을 삭제한다." }
        ],
        practice: "",
        deliverable: ""
      },
      {
        day: 7, title: "구조 분해·스프레드와 수익률 계산기 제작",
        summary: "최신 자바스크립트 문법을 활용하여 실용적인 수익률 계산 로직을 만듭니다.",
        topics: [
          { name: "배열 구조 분해", desc: "const [first, second] = values처럼 배열의 값을 순서대로 변수에 저장한다." },
          { name: "객체 구조 분해", desc: "const { price, quantity } = trade처럼 객체의 속성을 같은 이름의 변수로 꺼낸다." },
          { name: "스프레드 문법", desc: "[...oldArray], {...oldObject}를 사용해 배열이나 객체를 복사하고 새로운 값을 추가한다." },
          { name: "나머지 매개변수", desc: "...values를 사용해 함수에 전달된 여러 값을 하나의 배열로 받는다." },
          { name: "옵셔널 체이닝", desc: "user?.profile?.name처럼 중간 속성이 없을 때 오류 없이 undefined를 반환하게 한다." },
          { name: "Null 병합 연산자", desc: "value ?? defaultValue를 사용해 값이 null 또는 undefined일 때만 기본값을 적용한다." },
          { name: "수익률 계산 함수", desc: "매수가, 현재가, 수량을 입력받아 평가금액, 손익금액, 수익률을 계산하는 함수를 작성한다." },
          { name: "거래 데이터 배열", desc: "여러 거래를 객체 배열로 저장하고 map(), filter(), reduce()로 거래별 결과와 전체 합계를 계산한다." },
          { name: "입력값 검증", desc: "매수가가 0 이하이거나 숫자가 아닌 경우 계산하지 않도록 조건문을 작성한다." },
          { name: "계산 로직 분리", desc: "입력 데이터, 계산 함수, 결과 출력 코드를 분리해 각 코드의 책임을 명확하게 만든다." },
          { name: "Console 기반 테스트", desc: "정상값, 0, 음수, 빈 값 등 여러 데이터를 직접 전달해 함수의 결과와 예외 처리를 확인한다." },
          { name: "AI 코드 리뷰 활용", desc: "AI에게 불필요한 반복문, 중복 계산, 의미가 불분명한 변수명, 입력값 검증 누락을 찾아달라고 요청한다." }
        ],
        practice: "",
        deliverable: ""
      }
    ]
  },
  {
    "week": 5,
    "weekTitle": "DOM·이벤트·브라우저 저장소",
    "days": [
      {
        "day": 1,
        "title": "DOM 이해와 HTML 요소 선택",
        "summary": "DOM의 개념과 브라우저의 문서 객체 구조를 이해하고, 다양한 방법으로 HTML 요소를 선택하여 탐색하는 방법을 배웁니다.",
        "topics": [
          { "name": "DOM의 개념", "desc": "브라우저가 HTML 문서를 JavaScript로 접근하고 수정할 수 있는 객체 구조로 변환한 것을 DOM이라고 한다." },
          { "name": "document 객체", "desc": "현재 웹페이지 전체를 나타내는 객체로, HTML 요소를 찾거나 새 요소를 만들 때 사용한다." },
          { "name": "아이디로 요소 선택", "desc": "document.getElementById(\"result\")로 특정 id를 가진 요소 하나를 선택한다." },
          { "name": "CSS 선택자로 요소 하나 선택", "desc": "document.querySelector(\".card\")로 CSS 선택자와 일치하는 첫 번째 요소를 가져온다." },
          { "name": "CSS 선택자로 여러 요소 선택", "desc": "document.querySelectorAll(\".card\")로 조건에 맞는 모든 요소를 NodeList 형태로 가져온다." },
          { "name": "선택된 요소 확인", "desc": "선택한 요소를 console.log()로 출력해 올바른 HTML 요소가 선택되었는지 확인한다." },
          { "name": "부모·자식 요소 탐색", "desc": "parentElement, children, firstElementChild, nextElementSibling 등으로 주변 DOM 요소에 접근한다." },
          { "name": "DOM 실행 시점", "desc": "JavaScript가 HTML보다 먼저 실행되면 요소를 찾지 못할 수 있으므로 defer 속성을 사용하는 이유를 배운다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "HTML 콘텐츠와 속성 변경",
        "summary": "DOM 요소를 통해 텍스트, 구조, 입력값, 속성 및 CSS 스타일을 동적으로 변경하고 제어하는 방법을 익힙니다.",
        "topics": [
          { "name": "텍스트 변경", "desc": "textContent를 사용해 요소 안의 텍스트를 안전하게 읽거나 변경한다." },
          { "name": "HTML 구조 변경", "desc": "innerHTML을 사용하면 문자열 형태의 HTML을 삽입할 수 있지만, 사용자 입력값을 직접 넣으면 보안 문제가 생길 수 있다는 점을 익힌다." },
          { "name": "입력값 읽기", "desc": "<input>과 <textarea>의 .value 속성으로 사용자가 입력한 값을 가져온다." },
          { "name": "속성 읽기와 변경", "desc": "getAttribute(), setAttribute(), removeAttribute()로 src, href, alt 같은 HTML 속성을 관리한다." },
          { "name": "불리언 속성 변경", "desc": ".disabled, .checked, .required, .hidden으로 버튼·체크박스·입력창의 상태를 변경한다." },
          { "name": "사용자 정의 데이터", "desc": "HTML의 data-* 속성과 JavaScript의 dataset을 이용해 요소에 추가 정보를 저장한다." },
          { "name": "스타일 직접 변경", "desc": "element.style.color처럼 인라인 스타일을 변경할 수 있지만, 여러 스타일은 클래스로 관리하는 편이 좋다는 점을 배운다." },
          { "name": "클래스 추가·삭제", "desc": "classList.add(), remove(), toggle(), contains()로 요소의 CSS 클래스를 관리한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "이벤트와 이벤트 객체",
        "summary": "웹페이지에서 발생하는 다양한 사용자 행동에 반응하는 이벤트 리스너를 등록하고, 이벤트 객체를 활용해 기본 동작을 제어합니다.",
        "topics": [
          { "name": "이벤트의 개념", "desc": "클릭, 입력, 제출, 키보드 조작처럼 웹페이지에서 발생하는 사용자 행동이나 브라우저 변화를 이벤트라고 한다." },
          { "name": "이벤트 리스너 등록", "desc": "addEventListener(\"click\", 함수)를 사용해 특정 이벤트가 발생했을 때 실행할 함수를 연결한다." },
          { "name": "클릭 이벤트", "desc": "버튼이나 카드가 클릭되었을 때 콘텐츠를 변경하거나 클래스를 추가한다." },
          { "name": "입력 이벤트", "desc": "input 이벤트를 사용해 사용자가 입력창에 값을 입력할 때마다 실시간으로 결과를 업데이트한다." },
          { "name": "변경 이벤트", "desc": "change 이벤트를 사용해 체크박스, 라디오 버튼, 선택 상자의 값이 확정되었을 때 처리한다." },
          { "name": "이벤트 객체", "desc": "이벤트 함수의 매개변수로 전달되는 event 객체에서 발생한 이벤트와 관련된 정보를 확인한다." },
          { "name": "이벤트 발생 요소", "desc": "event.target으로 실제 이벤트가 발생한 요소를 확인하고 해당 요소의 값이나 속성을 읽는다." },
          { "name": "기본 동작 막기", "desc": "event.preventDefault()로 폼 제출 시 새로고침이나 링크 이동 같은 브라우저의 기본 행동을 막는다." },
          { "name": "이벤트 제거", "desc": "removeEventListener()를 사용할 때는 등록할 때와 같은 함수 참조가 필요하다는 점을 배운다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "폼 처리와 입력값 검증",
        "summary": "폼 제출 데이터를 처리하고, 다양한 입력값 검증 기법과 오류 상태 관리를 구현하는 방법을 배웁니다.",
        "topics": [
          { "name": "폼 제출 이벤트", "desc": "<form>의 submit 이벤트를 사용해 입력값을 한 번에 처리한다." },
          { "name": "입력값 가져오기", "desc": "각 입력 요소의 .value를 읽거나 FormData를 사용해 폼 데이터를 모은다." },
          { "name": "문자열 공백 제거", "desc": ".trim()을 사용해 입력값 앞뒤의 불필요한 공백을 제거한다." },
          { "name": "입력값 자료형 변환", "desc": "입력값은 기본적으로 문자열이므로 Number() 등을 사용해 숫자로 변환한다." },
          { "name": "빈 값 검사", "desc": "필수 입력값이 비어 있으면 처리하지 않고 오류 메시지를 표시한다." },
          { "name": "숫자 범위 검사", "desc": "가격, 수량, 점수 등이 0보다 큰지 또는 허용 범위 안에 있는지 조건문으로 확인한다." },
          { "name": "HTML 기본 검증 기능", "desc": "required, min, max, minlength, maxlength, pattern 속성으로 기본 입력 조건을 지정한다." },
          { "name": "오류 메시지 표시", "desc": "alert()에만 의존하지 않고 입력창 주변에 오류 문구를 표시한다." },
          { "name": "오류 상태 스타일", "desc": "검증에 실패한 입력창에 오류 클래스를 추가하고, 정상적으로 수정되면 해당 클래스를 제거한다." },
          { "name": "폼 초기화", "desc": "제출이 완료된 뒤 form.reset()을 사용해 입력값을 초기화한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "DOM 요소 생성·추가·삭제",
        "summary": "자바스크립트를 이용해 동적으로 HTML 요소를 생성, 조작, 추가, 삭제하며 데이터 기반의 화면 렌더링 방식을 익힙니다.",
        "topics": [
          { "name": "새 요소 생성", "desc": "document.createElement(\"li\")로 새로운 HTML 요소를 JavaScript에서 만든다." },
          { "name": "요소에 내용 넣기", "desc": "생성한 요소의 textContent, className, dataset 등을 설정한다." },
          { "name": "요소 추가", "desc": "append(), appendChild(), prepend()로 새로운 요소를 부모 요소 안에 삽입한다." },
          { "name": "특정 위치에 요소 삽입", "desc": "before(), after(), insertAdjacentHTML()로 원하는 위치에 콘텐츠를 추가한다." },
          { "name": "요소 삭제", "desc": "element.remove()로 선택한 요소를 DOM에서 제거한다." },
          { "name": "요소 교체", "desc": "replaceWith()를 사용해 기존 요소를 새로운 요소로 바꾼다." },
          { "name": "요소 복제", "desc": "cloneNode(true)로 기존 요소와 내부 콘텐츠를 복사한다." },
          { "name": "데이터 기반 화면 생성", "desc": "객체 배열을 반복하면서 카드, 목록, 표의 행을 동적으로 만든다." },
          { "name": "렌더링 함수 작성", "desc": "데이터 배열을 받아 화면을 새로 그리는 renderItems() 같은 함수를 작성한다." },
          { "name": "데이터와 화면의 역할 분리", "desc": "화면에 표시된 HTML을 직접 데이터처럼 사용하지 않고, 배열을 원본 데이터로 관리한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "이벤트 위임과 브라우저 저장소",
        "summary": "이벤트 버블링과 위임 패턴을 이해하고, 로컬 스토리지를 활용하여 데이터를 영구적으로 저장하고 불러오는 방법을 배웁니다.",
        "topics": [
          { "name": "이벤트 버블링", "desc": "자식 요소에서 발생한 이벤트가 부모 요소까지 전달되는 현상을 이해한다." },
          { "name": "event.currentTarget", "desc": "event.target은 실제 클릭한 요소, event.currentTarget은 이벤트 리스너가 등록된 요소라는 차이를 익힌다." },
          { "name": "이벤트 위임", "desc": "목록의 부모 요소에 이벤트를 한 번만 등록하고, event.target을 확인해 여러 자식 요소의 클릭을 처리한다." },
          { "name": "closest() 활용", "desc": "event.target.closest(\".item\")으로 클릭한 요소를 포함하는 가장 가까운 상위 요소를 찾는다." },
          { "name": "localStorage", "desc": "브라우저를 닫거나 새로고침해도 유지해야 하는 데이터를 문자열 형태로 저장한다." },
          { "name": "데이터 저장", "desc": "localStorage.setItem(\"todos\", 값)으로 데이터를 저장한다." },
          { "name": "데이터 불러오기", "desc": "localStorage.getItem(\"todos\")으로 저장된 값을 가져온다." },
          { "name": "데이터 삭제", "desc": "removeItem()으로 특정 항목을 삭제하고 clear()로 현재 출처의 저장 데이터를 모두 제거한다." },
          { "name": "객체와 배열 저장", "desc": "객체와 배열은 직접 저장할 수 없으므로 JSON.stringify()로 문자열로 변환한다." },
          { "name": "저장 데이터 복원", "desc": "불러온 JSON 문자열을 JSON.parse()로 다시 객체나 배열로 변환한다." },
          { "name": "기본값 처리", "desc": "저장된 데이터가 없을 때 JSON.parse(localStorage.getItem(\"items\")) ?? []처럼 기본 배열을 사용한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 관리 앱 제작",
        "summary": "지금까지 배운 DOM 조작, 이벤트 관리, 로컬 스토리지 연동을 모두 활용하여 인터랙티브한 학습 진도 관리 앱을 완성합니다.",
        "topics": [
          { "name": "학습 데이터 구조", "desc": "주차, 일차, 제목, 완료 여부, 메모를 객체 배열 형태로 정의한다." },
          { "name": "진도 목록 렌더링", "desc": "학습 데이터 배열을 기준으로 각 일차의 제목과 체크박스를 화면에 표시한다." },
          { "name": "완료 상태 변경", "desc": "체크박스의 change 이벤트가 발생하면 해당 학습 항목의 completed 값을 변경한다." },
          { "name": "완료 항목 스타일", "desc": "완료된 항목에 별도의 클래스를 적용해 체크 표시, 취소선, 배경색 등으로 구분한다." },
          { "name": "전체 진도율 계산", "desc": "전체 항목 수와 완료 항목 수를 계산해 완료율을 백분율로 표시한다." },
          { "name": "진행률 바 표시", "desc": "계산된 진도율에 따라 진행률 바의 너비나 값을 변경한다." },
          { "name": "학습 메모 저장", "desc": "각 일차에 입력한 메모를 데이터 객체에 반영하고 localStorage에 저장한다." },
          { "name": "필터 기능", "desc": "전체, 완료, 미완료 버튼을 누르면 조건에 맞는 학습 항목만 화면에 표시한다." },
          { "name": "데이터 영구 저장", "desc": "완료 상태와 메모가 변경될 때마다 전체 데이터를 JSON 문자열로 변환해 저장한다." },
          { "name": "새로고침 후 복원", "desc": "페이지가 처음 실행될 때 저장된 데이터가 있으면 불러오고, 없으면 기본 학습 데이터를 사용한다." },
          { "name": "빈 데이터 처리", "desc": "필터 조건에 맞는 항목이 없을 때 빈 화면 대신 안내 문구를 표시한다." },
          { "name": "기능별 함수 분리", "desc": "renderLessons(), saveLessons(), calculateProgress(), updateLesson()처럼 기능별로 함수를 나눈다." },
          { "name": "개발자도구 디버깅", "desc": "Console에서 데이터 배열을 확인하고, Application 패널에서 localStorage 저장값을 직접 점검한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 이벤트 리스너 중복, DOM 직접 수정과 데이터 상태 불일치, 저장 누락, 불필요한 전체 렌더링을 점검하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 6,
    "weekTitle": "비동기 처리와 API 연동",
    "days": [
      {
        "day": 1,
        "title": "웹 통신과 API·JSON 이해",
        "summary": "프론트엔드와 백엔드의 통신 구조인 웹 통신, API의 역할, 그리고 HTTP 메서드와 상태 코드, JSON 형식의 변환 방법을 배웁니다.",
        "topics": [
          { "name": "클라이언트와 서버", "desc": "브라우저에서 실행되는 프론트엔드는 클라이언트이며, 데이터와 기능을 제공하는 컴퓨터나 프로그램을 서버라고 한다." },
          { "name": "요청과 응답", "desc": "클라이언트가 서버에 필요한 데이터를 요청하면 서버가 처리 결과와 데이터를 응답하는 구조를 배운다." },
          { "name": "API의 개념", "desc": "프론트엔드가 서버의 데이터나 기능을 정해진 방식으로 사용할 수 있도록 만든 통신 규칙을 API라고 한다." },
          { "name": "엔드포인트", "desc": "사용자 목록, 게시글 상세, 검색 결과처럼 특정 데이터에 접근하기 위해 사용하는 API 주소를 엔드포인트라고 한다." },
          { "name": "HTTP 요청 메서드", "desc": "GET은 조회, POST는 생성, PUT·PATCH는 수정, DELETE는 삭제 요청에 주로 사용한다." },
          { "name": "HTTP 상태 코드", "desc": "200은 정상 처리, 201은 생성 성공, 400은 잘못된 요청, 401은 인증 필요, 404는 데이터 없음, 500은 서버 오류를 의미한다." },
          { "name": "JSON 형식", "desc": "서버와 프론트엔드가 데이터를 주고받을 때 자주 사용하는 문자열 기반 데이터 형식으로, 객체와 배열 구조를 표현할 수 있다." },
          { "name": "JSON 문법", "desc": "JSON의 속성 이름과 문자열은 큰따옴표를 사용하며, 함수·undefined·주석은 포함할 수 없다는 점을 배운다." },
          { "name": "JSON 변환", "desc": "JSON.stringify()로 객체를 JSON 문자열로 바꾸고, JSON.parse()로 문자열을 JavaScript 데이터로 복원한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "동기·비동기 처리와 Promise",
        "summary": "동기와 비동기 처리의 차이를 이해하고, 비동기 작업을 다루기 위한 Promise의 상태와 체이닝 기법을 익힙니다.",
        "topics": [
          { "name": "동기 처리", "desc": "앞의 작업이 끝날 때까지 기다린 후 다음 코드를 순서대로 실행하는 방식이다." },
          { "name": "비동기 처리", "desc": "서버 요청이나 타이머처럼 시간이 걸리는 작업을 기다리는 동안 다른 코드를 먼저 실행할 수 있는 방식이다." },
          { "name": "비동기 처리가 필요한 이유", "desc": "서버 응답을 기다리는 동안 웹페이지 전체가 멈추는 현상을 방지하고 사용자 입력이나 화면 표시를 계속 처리한다." },
          { "name": "setTimeout()", "desc": "지정한 시간이 지난 뒤 함수를 실행하며, 비동기 코드의 실행 순서를 간단히 확인할 때 사용한다." },
          { "name": "Promise의 상태", "desc": "비동기 작업은 대기 중인 pending, 성공한 fulfilled, 실패한 rejected 상태를 가진다." },
          { "name": "then()", "desc": "Promise가 성공했을 때 전달된 결과를 받아 다음 작업을 실행한다." },
          { "name": "catch()", "desc": "Promise가 실패했을 때 발생한 오류를 받아 처리한다." },
          { "name": "finally()", "desc": "성공과 실패 여부에 관계없이 마지막에 실행할 코드를 작성한다." },
          { "name": "Promise 체이닝", "desc": "여러 비동기 작업을 .then()으로 연결하고, 각 단계에서 다음 작업에 필요한 값을 반환한다." },
          { "name": "콜백과 Promise의 차이", "desc": "중첩된 콜백보다 Promise를 사용하면 성공·실패 흐름을 읽기 쉽고 오류를 일관되게 처리할 수 있다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "async와 await",
        "summary": "async와 await 키워드를 활용해 비동기 코드를 직관적인 동기식 형태로 작성하고 오류를 처리하는 방법을 배웁니다.",
        "topics": [
          { "name": "async 함수", "desc": "함수 앞에 async를 붙이면 해당 함수는 항상 Promise를 반환한다." },
          { "name": "await 표현식", "desc": "Promise의 처리가 끝날 때까지 해당 함수 내부의 실행을 잠시 기다린 뒤 결과값을 반환한다." },
          { "name": "비동기 코드 순서 표현", "desc": "여러 .then()을 연결하는 대신 일반적인 위에서 아래 방향으로 비동기 코드를 작성한다." },
          { "name": "await 사용 위치", "desc": "일반적으로 async 함수 내부에서만 사용할 수 있다는 점을 배운다." },
          { "name": "반환값 받기", "desc": "const data = await getData()처럼 비동기 함수가 처리한 결과를 변수에 저장한다." },
          { "name": "try...catch", "desc": "try 안에서 비동기 작업을 실행하고, 실패하면 catch에서 오류를 처리한다." },
          { "name": "finally", "desc": "로딩 종료처럼 성공과 실패 모두에서 실행해야 하는 코드를 작성한다." },
          { "name": "오류 직접 발생시키기", "desc": "throw new Error(\"메시지\")를 사용해 잘못된 응답이나 입력값을 오류로 처리한다." },
          { "name": "순차 실행", "desc": "이전 요청의 결과가 다음 요청에 필요할 때 여러 await를 순서대로 작성한다." },
          { "name": "병렬 실행 기초", "desc": "서로 의존하지 않는 비동기 작업은 Promise.all()로 동시에 실행해 전체 대기 시간을 줄인다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "fetch()로 API 데이터 가져오기",
        "summary": "fetch() 함수를 사용하여 서버에 HTTP 요청을 보내고 응답 데이터를 처리하며 POST 요청을 전송하는 방법을 익힙니다.",
        "topics": [
          { "name": "fetch() 기본 사용", "desc": "fetch(\"API 주소\")를 호출해 서버에 HTTP 요청을 보내고 Promise 형태의 응답을 받는다." },
          { "name": "Response 객체", "desc": "fetch()의 첫 번째 결과는 실제 데이터가 아니라 상태 코드, 헤더, 본문 등을 담은 응답 객체다." },
          { "name": "JSON 본문 변환", "desc": "await response.json()을 사용해 응답 본문을 JavaScript 객체나 배열로 변환한다." },
          { "name": "응답 성공 여부 확인", "desc": "response.ok를 검사해 상태 코드가 정상 범위인지 확인한다." },
          { "name": "HTTP 오류 처리", "desc": "fetch()는 404나 500 응답만으로 자동 실패하지 않으므로, response.ok가 거짓이면 직접 오류를 발생시킨다." },
          { "name": "GET 요청", "desc": "별도의 설정 없이 fetch()를 호출하면 기본적으로 서버의 데이터를 조회하는 GET 요청이 전송된다." },
          { "name": "요청 헤더", "desc": "headers 옵션을 사용해 서버에 데이터 형식, 인증 정보 등 요청에 필요한 추가 정보를 전달한다." },
          { "name": "POST 요청", "desc": "method: \"POST\", headers, body를 설정해 새로운 데이터를 서버에 전송하는 방법을 익힌다." },
          { "name": "본문 JSON 변환", "desc": "JavaScript 객체를 JSON.stringify()로 변환해 POST 요청의 body에 넣는다." },
          { "name": "Network 패널", "desc": "개발자도구에서 요청 주소, 메서드, 상태 코드, 요청 데이터, 응답 데이터를 확인한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "검색 조건·쿼리 파라미터와 화면 연결",
        "summary": "쿼리 파라미터를 활용해 검색 조건을 전달하고, API 응답 데이터를 가공하여 화면에 동적으로 렌더링하는 방법을 배웁니다.",
        "topics": [
          { "name": "쿼리 파라미터", "desc": "?keyword=react&page=1처럼 URL 뒤에 검색어, 페이지 번호, 정렬 조건 등을 전달한다." },
          { "name": "URLSearchParams", "desc": "검색 조건을 안전하게 URL 문자열로 변환하고 특수문자와 공백을 인코딩한다." },
          { "name": "검색 폼 연결", "desc": "폼의 submit 이벤트에서 입력값을 읽고 해당 검색어가 포함된 API 요청을 실행한다." },
          { "name": "입력값 검증", "desc": "검색어가 비어 있거나 너무 짧으면 서버 요청을 보내지 않고 안내 문구를 표시한다." },
          { "name": "응답 데이터 구조 확인", "desc": "Console에서 API 응답 객체를 확인하고 실제 목록이 어느 속성에 들어 있는지 찾는다." },
          { "name": "데이터 구조 분해", "desc": "객체 구조 분해를 사용해 응답에서 필요한 목록, 전체 개수, 페이지 정보 등을 꺼낸다." },
          { "name": "검색 결과 렌더링", "desc": "map()이나 반복문을 사용해 응답 데이터를 카드·목록 형태의 DOM 요소로 표시한다." },
          { "name": "검색 결과 초기화", "desc": "새로운 검색을 실행할 때 이전 결과와 안내 메시지를 제거한다." },
          { "name": "결과 없음 처리", "desc": "응답은 성공했지만 데이터 배열이 비어 있을 때 “검색 결과가 없습니다”라는 화면을 표시한다." },
          { "name": "날짜·숫자 형식", "desc": "Intl.DateTimeFormat과 Intl.NumberFormat을 사용해 날짜와 숫자를 읽기 좋은 형식으로 표시한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "로딩·오류·중복 요청 처리",
        "summary": "사용자 경험을 향상시키기 위해 로딩 상태, 오류 처리, 버튼 비활성화, 디바운스 및 중복 요청 제어 기법을 익힙니다.",
        "topics": [
          { "name": "UI 상태 구분", "desc": "화면 상태를 초기, 로딩, 성공, 결과 없음, 실패로 구분해 각각 다른 내용을 표시한다." },
          { "name": "로딩 상태", "desc": "요청을 시작할 때 로딩 문구나 스피너를 표시하고, 요청이 끝나면 제거한다." },
          { "name": "버튼 비활성화", "desc": "요청 처리 중 제출 버튼을 비활성화해 같은 요청이 여러 번 실행되는 것을 방지한다." },
          { "name": "오류 메시지 구분", "desc": "인터넷 연결 실패, 잘못된 요청, 데이터 없음, 서버 오류 등을 가능한 범위에서 구분해 안내한다." },
          { "name": "사용자용 오류와 개발자용 오류", "desc": "사용자 화면에는 이해하기 쉬운 메시지를 보여주고, 상세 오류 정보는 console.error()로 확인한다." },
          { "name": "재시도 기능", "desc": "요청이 실패했을 때 같은 요청을 다시 실행할 수 있는 재시도 버튼을 제공한다." },
          { "name": "요청 취소", "desc": "AbortController를 사용해 새 검색이 시작되면 아직 끝나지 않은 이전 요청을 취소한다." },
          { "name": "중복 검색 방지", "desc": "이전 검색어와 같은 값이 다시 입력되었는지 확인하거나 처리 중인 요청을 관리한다." },
          { "name": "검색 입력 지연", "desc": "입력할 때마다 검색하는 기능에서는 디바운스를 적용해 사용자가 입력을 멈춘 뒤 한 번만 요청한다." },
          { "name": "최종 정리", "desc": "finally에서 로딩 상태와 버튼 비활성화를 해제해 성공·실패 모두에서 UI가 정상으로 돌아오게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "공개 API 검색 앱 제작",
        "summary": "실제 공개 API를 연동하여 검색, 로딩, 오류 처리, 로컬 스토리지 기반 검색 기록 저장 기능이 포함된 완전한 검색 앱을 완성합니다.",
        "topics": [
          { "name": "프로젝트 API 선택", "desc": "GitHub 사용자, 영화, 도서, 공공데이터 등 브라우저에서 사용할 수 있는 공개 API 하나를 선택한다." },
          { "name": "검색 화면 구성", "desc": "검색어 입력창, 제출 버튼, 결과 목록, 로딩 문구, 오류 영역, 빈 결과 안내 영역을 만든다." },
          { "name": "API 요청 함수", "desc": "검색어를 전달받아 fetch()로 데이터를 가져오고 성공한 결과만 반환하는 함수를 작성한다." },
          { "name": "HTTP 오류 검사", "desc": "response.ok가 거짓이면 상태 코드에 맞는 오류를 발생시킨다." },
          { "name": "응답 데이터 가공", "desc": "API가 제공한 원본 데이터에서 화면에 필요한 이름, 이미지, 설명, 링크 등의 값만 추출한다." },
          { "name": "결과 카드 렌더링", "desc": "가공된 객체 배열을 기반으로 카드 요소를 생성해 화면에 표시한다." },
          { "name": "상세 페이지 연결", "desc": "각 검색 결과에 원본 웹페이지나 상세 정보를 확인할 수 있는 링크를 추가한다." },
          { "name": "로딩 화면", "desc": "요청이 진행되는 동안 기존 안내 문구를 숨기고 로딩 상태를 표시한다." },
          { "name": "빈 결과 화면", "desc": "요청은 성공했지만 결과가 없을 때 별도의 안내 문구를 보여준다." },
          { "name": "오류 화면", "desc": "요청 실패 시 오류 메시지와 재시도 버튼을 표시한다." },
          { "name": "중복 요청 제어", "desc": "요청 중 버튼을 비활성화하고, 새로운 검색이 시작되면 이전 요청을 취소한다." },
          { "name": "검색 기록 저장", "desc": "최근 검색어를 배열로 관리하고 localStorage에 저장해 새로고침 후에도 유지한다." },
          { "name": "최근 검색어 재사용", "desc": "저장된 검색어를 버튼으로 표시하고 클릭하면 해당 검색을 다시 실행한다." },
          { "name": "기능별 함수 분리", "desc": "fetchResults(), renderResults(), renderLoading(), renderError(), saveHistory()처럼 책임에 따라 함수를 나눈다." },
          { "name": "Network 패널 점검", "desc": "요청 URL, 쿼리 파라미터, 상태 코드, 응답 시간, 실제 응답 데이터를 확인한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 HTTP 오류 확인 누락, await 누락, 반복 요청, 로딩 상태 해제 누락, 사용자 입력의 URL 인코딩 문제를 점검하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 7,
    "weekTitle": "React 기초",
    "days": [
      {
        "day": 1,
        "title": "React의 개념과 개발환경 구성",
        "summary": "React의 개념과 컴포넌트 기반 개발의 특징을 이해하고, Vite를 활용한 개발환경 구축과 프로젝트 구조를 익힙니다.",
        "topics": [
          { "name": "React의 역할", "desc": "사용자 인터페이스를 독립적인 컴포넌트로 나누고, 데이터가 바뀌면 화면이 자동으로 다시 그려지도록 만드는 JavaScript 라이브러리다." },
          { "name": "바닐라 JavaScript와 React의 차이", "desc": "바닐라 JavaScript에서는 DOM 요소를 직접 선택하고 수정하지만, React에서는 화면에 표시할 상태와 구조를 선언한다." },
          { "name": "컴포넌트 기반 개발", "desc": "헤더, 버튼, 카드, 검색창처럼 반복하거나 독립적으로 관리할 수 있는 UI를 각각의 컴포넌트로 만든다." },
          { "name": "Vite 프로젝트 생성", "desc": "Vite를 사용해 React 프로젝트를 생성하고 개발 서버를 실행하는 방법을 익힌다." },
          { "name": "프로젝트 폴더 구조", "desc": "src, public, main.jsx, App.jsx, package.json 파일과 폴더의 역할을 확인한다." },
          { "name": "개발 서버 실행", "desc": "npm run dev로 로컬 개발 서버를 실행하고, 파일을 수정했을 때 화면이 자동으로 갱신되는 과정을 확인한다." },
          { "name": "main.jsx", "desc": "React 애플리케이션의 시작점으로, 최상위 컴포넌트를 HTML의 root 요소에 연결한다." },
          { "name": "App.jsx", "desc": "애플리케이션의 주요 화면 구조를 작성하는 최상위 컴포넌트로 사용한다." },
          { "name": "React 개발자도구", "desc": "React DevTools를 사용해 브라우저에서 컴포넌트 구조와 props·state를 확인한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "JSX와 컴포넌트 작성",
        "summary": "JSX의 문법적 특징과 HTML과의 차이를 이해하고, 컴포넌트를 작성·조합하여 효율적으로 UI를 구성하는 방법을 배웁니다.",
        "topics": [
          { "name": "JSX의 개념", "desc": "JavaScript 파일 안에서 HTML과 비슷한 문법으로 화면 구조를 표현하는 방식이다." },
          { "name": "JSX와 HTML의 차이", "desc": "class 대신 className, for 대신 htmlFor를 사용하고 모든 태그를 반드시 닫는다." },
          { "name": "JavaScript 값 출력", "desc": "JSX 안에서 중괄호 {}를 사용해 변수, 계산식, 함수 반환값을 화면에 표시한다." },
          { "name": "컴포넌트 함수", "desc": "대문자로 시작하는 함수를 작성하고 JSX를 반환하도록 만들어 하나의 UI 영역을 정의한다." },
          { "name": "컴포넌트 사용", "desc": "작성한 컴포넌트를 <Header />, <ProjectCard />처럼 사용자 정의 태그로 호출한다." },
          { "name": "컴포넌트 분리 기준", "desc": "반복되는 UI, 독립적인 역할을 가진 영역, 코드가 지나치게 긴 영역을 별도 컴포넌트로 분리한다." },
          { "name": "컴포넌트 중첩", "desc": "부모 컴포넌트 안에서 여러 자식 컴포넌트를 조합해 하나의 페이지를 구성한다." },
          { "name": "Fragment", "desc": "불필요한 <div>를 추가하지 않고 여러 요소를 묶을 때 <>...</> 문법을 사용한다." },
          { "name": "컴포넌트 파일 분리", "desc": "컴포넌트를 별도의 .jsx 파일에 작성하고 export와 import로 연결한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "Props와 컴포넌트 재사용",
        "summary": "부모 컴포넌트로부터 데이터를 전달받는 Props의 개념을 익히고, 재사용 가능한 유연한 컴포넌트를 설계하는 방법을 학습합니다.",
        "topics": [
          { "name": "Props의 개념", "desc": "부모 컴포넌트가 자식 컴포넌트에 전달하는 읽기 전용 데이터다." },
          { "name": "Props 전달", "desc": "<ProjectCard title=\"ETF Analyzer\" />처럼 HTML 속성과 유사한 형태로 값을 전달한다." },
          { "name": "Props 받기", "desc": "컴포넌트 함수의 매개변수로 props 객체를 받고 필요한 값을 JSX에서 사용한다." },
          { "name": "Props 구조 분해", "desc": "function ProjectCard({ title, description })처럼 필요한 속성을 바로 꺼내 사용한다." },
          { "name": "여러 자료형 전달", "desc": "문자열뿐 아니라 숫자, 불리언, 배열, 객체, 함수도 props로 전달할 수 있다." },
          { "name": "동적 Props", "desc": "중괄호를 사용해 변수와 계산 결과를 props 값으로 전달한다." },
          { "name": "기본값 지정", "desc": "구조 분해 과정에서 기본값을 설정해 특정 props가 전달되지 않았을 때 사용할 값을 정한다." },
          { "name": "children", "desc": "컴포넌트의 여는 태그와 닫는 태그 사이에 작성한 콘텐츠를 children으로 전달받는다." },
          { "name": "Props의 불변성", "desc": "자식 컴포넌트가 전달받은 props를 직접 변경하지 않고, 변경이 필요하면 부모에게 요청해야 한다." },
          { "name": "재사용 가능한 컴포넌트", "desc": "내용은 props로 전달하고 구조와 디자인은 공유하도록 설계해 같은 컴포넌트를 여러 곳에서 사용한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "State와 이벤트 처리",
        "summary": "컴포넌트의 동적 상태를 관리하는 State와 useState 훅의 사용법을 익히고, 이벤트 핸들러를 통해 사용자 상호작용을 처리하는 방법을 배웁니다.",
        "topics": [
          { "name": "State의 개념", "desc": "컴포넌트가 기억하고 있으며 변경될 때 화면을 다시 렌더링하는 데이터다." },
          { "name": "useState", "desc": "const [count, setCount] = useState(0) 형태로 현재 상태와 상태 변경 함수를 만든다." },
          { "name": "초기 상태", "desc": "숫자, 문자열, 불리언, 배열, 객체 등을 useState()의 초기값으로 지정한다." },
          { "name": "이벤트 핸들러 연결", "desc": "onClick, onChange, onSubmit 등에 실행할 함수를 전달한다." },
          { "name": "함수 전달과 실행의 차이", "desc": "onClick={handleClick}은 함수를 전달하고, onClick={handleClick()}은 렌더링 중 즉시 실행된다는 차이를 익힌다." },
          { "name": "상태 변경과 재렌더링", "desc": "상태 변경 함수를 호출하면 React가 변경된 상태를 기준으로 컴포넌트를 다시 실행하고 화면을 갱신한다." },
          { "name": "이전 상태 기반 변경", "desc": "기존 상태를 사용해 다음 상태를 계산할 때 setCount(previous => previous + 1) 형태를 사용한다." },
          { "name": "불리언 상태", "desc": "메뉴 열림, 완료 여부, 다크 모드처럼 참과 거짓으로 표현할 수 있는 UI 상태를 관리한다." },
          { "name": "상태 업데이트의 비동기적 특성", "desc": "상태 변경 직후 기존 변수를 출력하면 이전 값이 보일 수 있다는 점을 이해한다." },
          { "name": "컴포넌트별 독립 상태", "desc": "같은 컴포넌트를 여러 번 렌더링해도 각각 별도의 state를 가진다는 점을 확인한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "조건부 렌더링과 리스트 렌더링",
        "summary": "조건에 따라 화면 구성을 다르게 보여주는 조건부 렌더링과 배열 데이터를 활용한 리스트 렌더링 및 key 속성의 중요성을 배웁니다.",
        "topics": [
          { "name": "조건부 렌더링", "desc": "특정 조건에 따라 다른 JSX를 화면에 표시하거나 일부 요소를 숨긴다." },
          { "name": "if문 활용", "desc": "컴포넌트가 반환할 JSX를 조건에 따라 미리 결정한다." },
          { "name": "삼항 연산자", "desc": "조건 ? 참일 때 JSX : 거짓일 때 JSX로 두 가지 화면 중 하나를 표시한다." },
          { "name": "논리 AND 연산자", "desc": "조건 && <요소 /> 형태로 조건이 참일 때만 특정 요소를 렌더링한다." },
          { "name": "배열 기반 목록 출력", "desc": "map()을 사용해 객체 배열을 여러 개의 카드나 목록 요소로 변환한다." },
          { "name": "key 속성", "desc": "React가 각 목록 요소를 식별할 수 있도록 변하지 않고 고유한 값을 key로 지정한다." },
          { "name": "인덱스 key의 한계", "desc": "목록의 추가·삭제·정렬이 발생하면 배열 인덱스를 key로 사용할 때 상태가 잘못 연결될 수 있다는 점을 익힌다." },
          { "name": "목록 필터링", "desc": "filter()로 조건에 맞는 데이터만 추린 뒤 map()으로 화면에 표시한다." },
          { "name": "빈 목록 처리", "desc": "데이터가 없을 때 빈 화면 대신 “표시할 항목이 없습니다” 같은 안내 문구를 렌더링한다." },
          { "name": "렌더링 전 데이터 가공", "desc": "JSX 안에 복잡한 로직을 몰아넣지 않고 필요한 배열과 값을 컴포넌트 위쪽에서 계산한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "폼 상태와 배열·객체 State 관리",
        "summary": "제어 컴포넌트를 통한 입력값 관리와 스프레드 문법을 활용한 불변성 유지 기반의 배열 및 객체 State 조작 방법을 익힙니다.",
        "topics": [
          { "name": "제어 컴포넌트", "desc": "입력창의 value를 state와 연결하고 onChange 이벤트로 상태를 변경하는 방식을 익힌다." },
          { "name": "입력값 상태 관리", "desc": "이름, 검색어, 메모 같은 입력값을 useState로 저장하고 화면과 동기화한다." },
          { "name": "폼 제출 처리", "desc": "onSubmit에서 event.preventDefault()를 호출하고 현재 state를 이용해 데이터를 처리한다." },
          { "name": "객체 State 변경", "desc": "스프레드 문법을 사용해 기존 객체를 복사한 뒤 변경할 속성만 덮어쓴다." },
          { "name": "배열 State 항목 추가", "desc": "[...items, newItem] 형태로 기존 배열을 직접 수정하지 않고 새 배열을 만든다." },
          { "name": "배열 State 항목 수정", "desc": "map()을 사용해 특정 id를 가진 항목만 변경한 새로운 배열을 만든다." },
          { "name": "배열 State 항목 삭제", "desc": "filter()를 사용해 삭제할 항목을 제외한 새 배열을 만든다." },
          { "name": "State 직접 변경 금지", "desc": "push(), 직접 속성 대입 등으로 기존 배열이나 객체를 수정하면 React가 변화를 제대로 감지하지 못할 수 있다는 점을 익힌다." },
          { "name": "입력값 검증", "desc": "빈 문자열이나 중복 데이터가 입력되면 state를 변경하지 않고 오류 메시지를 표시한다." },
          { "name": "폼 초기화", "desc": "정상적으로 항목이 추가된 뒤 입력 state를 초기값으로 되돌린다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 관리 앱 React로 재구현",
        "summary": "컴포넌트 분리, Props 전달, State 관리를 종합하여 기존 바닐라 JavaScript로 만들었던 학습 진도 관리 앱을 React로 재구현합니다.",
        "topics": [
          { "name": "컴포넌트 구조 설계", "desc": "앱을 Header, ProgressSummary, FilterButtons, LessonList, LessonItem, LessonForm 등으로 나눈다." },
          { "name": "학습 데이터 State", "desc": "주차, 일차, 제목, 완료 여부, 메모를 포함한 객체 배열을 최상위 컴포넌트에서 관리한다." },
          { "name": "Props를 통한 데이터 전달", "desc": "학습 목록과 완료 상태를 부모 컴포넌트에서 자식 컴포넌트로 전달한다." },
          { "name": "이벤트 함수 전달", "desc": "완료 상태 변경, 메모 수정, 항목 삭제 함수를 props로 자식 컴포넌트에 전달한다." },
          { "name": "완료 상태 업데이트", "desc": "항목의 id를 기준으로 map()을 사용해 해당 항목의 completed 값만 변경한다." },
          { "name": "학습 항목 추가", "desc": "제어된 폼에서 입력값을 받아 새로운 학습 객체를 배열 state에 추가한다." },
          { "name": "학습 항목 삭제", "desc": "삭제 버튼을 누르면 filter()로 해당 항목을 제외한 새 배열을 만든다." },
          { "name": "목록 필터링", "desc": "전체, 완료, 미완료 상태를 별도 state로 관리하고 조건에 맞는 항목만 렌더링한다." },
          { "name": "진도율 계산", "desc": "전체 항목 수와 완료 항목 수를 기반으로 진도율을 계산해 요약 컴포넌트에 표시한다." },
          { "name": "파생값 계산", "desc": "완료 개수와 진도율처럼 기존 state로 계산할 수 있는 값은 별도 state로 중복 저장하지 않는다." },
          { "name": "조건부 화면", "desc": "항목이 없거나 필터 결과가 비어 있을 때 상황에 맞는 안내 문구를 표시한다." },
          { "name": "컴포넌트 책임 분리", "desc": "데이터를 관리하는 컴포넌트와 화면을 표시하는 컴포넌트의 역할을 구분한다." },
          { "name": "React DevTools 점검", "desc": "컴포넌트 계층, 각 컴포넌트에 전달된 props, 현재 state 값을 확인한다." },
          { "name": "바닐라 JavaScript 버전과 비교", "desc": "querySelector, createElement, innerHTML 없이 state와 JSX만으로 화면이 갱신되는 과정을 비교한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 지나치게 큰 컴포넌트, 불필요한 state, props 직접 수정, 배열 state 직접 변경, 잘못된 key 사용을 점검하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 8,
    "weekTitle": "React 상태 관리와 실전 활용",
    "days": [
      {
        "day": 1,
        "title": "State 배치와 상태 끌어올리기",
        "summary": "State를 선언할 최적의 위치를 판단하고, 상태 끌어올리기와 단일 진실 공급원 원칙을 활용해 컴포넌트 간 데이터를 유연하게 공유하는 방법을 배웁니다.",
        "topics": [
          { "name": "State의 소유 위치", "desc": "특정 데이터가 필요한 컴포넌트 중 가장 가까운 공통 부모에서 state를 관리한다." },
          { "name": "상태 끌어올리기", "desc": "여러 자식 컴포넌트가 같은 데이터를 사용해야 할 때 각자 state를 만들지 않고 부모 컴포넌트로 이동시킨다." },
          { "name": "단일 진실 공급원", "desc": "동일한 데이터를 여러 state에 중복 저장하지 않고 하나의 state를 기준으로 화면을 구성한다." },
          { "name": "부모에서 자식으로 데이터 전달", "desc": "부모 컴포넌트가 관리하는 state를 props로 자식 컴포넌트에 내려보낸다." },
          { "name": "자식에서 부모 상태 변경", "desc": "부모가 상태 변경 함수를 props로 전달하고, 자식 컴포넌트가 해당 함수를 호출해 변경을 요청한다." },
          { "name": "콜백 Props", "desc": "onComplete, onDelete, onChange처럼 자식에서 발생한 행동을 부모에게 전달하는 함수형 props를 작성한다." },
          { "name": "파생 상태", "desc": "완료 개수, 검색 결과, 진도율처럼 기존 state로 계산할 수 있는 값은 별도 state로 저장하지 않는다." },
          { "name": "상태 최소화", "desc": "화면 구현에 반드시 필요한 원본 데이터만 state로 관리하고, 나머지는 렌더링 과정에서 계산한다." },
          { "name": "컴포넌트 상태와 앱 상태", "desc": "입력창 열림 여부처럼 특정 컴포넌트만 사용하는 값과 여러 컴포넌트가 공유하는 값을 구분한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "useEffect와 컴포넌트 생명주기",
        "summary": "React 화면 렌더링 외부의 시스템을 동기화하기 위한 useEffect 훅의 동작 원리와 의존성 배열, Cleanup 함수의 활용법을 익힙니다.",
        "topics": [
          { "name": "Effect의 역할", "desc": "React 화면 렌더링 외부의 시스템과 컴포넌트를 동기화할 때 useEffect를 사용한다." },
          { "name": "Effect가 필요한 작업", "desc": "API 요청, 브라우저 저장소, 타이머, 이벤트 리스너, 문서 제목 변경 등 외부 작업을 처리한다." },
          { "name": "기본 실행 방식", "desc": "의존성 배열을 생략하면 컴포넌트가 렌더링될 때마다 Effect가 실행된다." },
          { "name": "최초 렌더링 후 실행", "desc": "빈 의존성 배열 []을 전달하면 컴포넌트가 처음 화면에 나타난 뒤 Effect가 실행된다." },
          { "name": "특정 값 변경 시 실행", "desc": "[searchKeyword]처럼 의존성 배열에 값을 넣으면 해당 값이 바뀔 때 Effect가 다시 실행된다." },
          { "name": "의존성 배열", "desc": "Effect 내부에서 사용하는 props와 state를 의존성 배열에 정확히 포함해야 하는 이유를 익힌다." },
          { "name": "무한 렌더링", "desc": "Effect에서 state를 변경하고 그 state를 의존성으로 설정하면 반복 실행이 발생할 수 있다는 점을 확인한다." },
          { "name": "Cleanup 함수", "desc": "Effect에서 함수를 반환해 타이머, 이벤트 리스너, 네트워크 요청 등 이전 작업을 정리한다." },
          { "name": "개발 모드의 중복 실행", "desc": "React Strict Mode에서 잘못된 Effect를 발견하기 위해 개발 환경에서 Effect가 추가로 실행될 수 있다는 점을 이해한다." },
          { "name": "불필요한 Effect 구분", "desc": "사용자 클릭으로 처리할 수 있는 작업이나 단순 계산은 useEffect가 아니라 이벤트 핸들러와 파생값으로 처리한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "React에서 API 데이터 가져오기",
        "summary": "useEffect를 활용해 컴포넌트 마운트 시점에 API를 호출하고, 로딩 상태, 오류 처리, 요청 취소 및 경쟁 상태를 방지하는 방법을 학습합니다.",
        "topics": [
          { "name": "API 관련 State", "desc": "서버 데이터, 로딩 여부, 오류 메시지를 각각 state로 관리한다." },
          { "name": "Effect에서 데이터 요청", "desc": "컴포넌트가 처음 렌더링되거나 검색 조건이 변경될 때 useEffect에서 API 요청을 실행한다." },
          { "name": "비동기 함수 작성", "desc": "Effect 함수 자체를 async로 만들지 않고 Effect 내부에 별도의 비동기 함수를 선언해 실행한다." },
          { "name": "로딩 상태 처리", "desc": "요청 직전에 로딩 상태를 true로 변경하고 요청이 끝나면 false로 되돌린다." },
          { "name": "HTTP 오류 처리", "desc": "response.ok를 확인하고 정상 응답이 아니면 오류를 발생시킨다." },
          { "name": "오류 상태 처리", "desc": "try...catch에서 오류를 받아 사용자에게 표시할 오류 메시지를 state에 저장한다." },
          { "name": "빈 결과 처리", "desc": "요청은 성공했지만 결과 배열이 비어 있을 때 별도의 안내 화면을 렌더링한다." },
          { "name": "요청 취소", "desc": "AbortController를 사용해 검색 조건이 바뀌거나 컴포넌트가 사라질 때 이전 요청을 취소한다." },
          { "name": "경쟁 상태 방지", "desc": "이전 검색 요청이 늦게 완료되어 최신 검색 결과를 덮어쓰는 문제를 방지한다." },
          { "name": "재시도 기능", "desc": "오류 화면에 재시도 버튼을 추가하고 동일한 API 요청을 다시 실행한다." },
          { "name": "데이터 요청 함수 분리", "desc": "실제 요청을 수행하는 함수와 React state를 변경하는 로직을 구분해 작성한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "useRef와 DOM·파일 처리",
        "summary": "재렌더링 없이 값을 유지하거나 DOM 요소를 직접 조작하는 useRef의 사용법을 익히고, 파일 업로드 및 유효성 검증 기능을 구현합니다.",
        "topics": [
          { "name": "useRef의 역할", "desc": "렌더링 사이에 값을 유지하면서 값이 변경되어도 화면을 다시 렌더링하지 않아야 할 때 사용한다." },
          { "name": "DOM 요소 참조", "desc": "ref를 입력창에 연결하고 inputRef.current로 실제 DOM 요소에 접근한다." },
          { "name": "입력창 포커스", "desc": "버튼을 클릭하거나 컴포넌트가 열렸을 때 .focus()를 호출해 특정 입력창으로 포커스를 이동한다." },
          { "name": "이전 값 저장", "desc": "useRef에 이전 state 값을 저장해 현재 값과 비교한다." },
          { "name": "타이머 ID 저장", "desc": "setTimeout()이나 setInterval()이 반환한 ID를 ref에 저장하고 필요할 때 정리한다." },
          { "name": "파일 입력", "desc": "<input type=\"file\">의 event.target.files에서 사용자가 선택한 파일 정보를 가져온다." },
          { "name": "파일 정보 확인", "desc": "파일의 name, type, size, lastModified 값을 읽어 화면에 표시한다." },
          { "name": "파일 형식 검증", "desc": "file.type이나 파일 확장자를 확인해 허용하지 않은 파일을 차단한다." },
          { "name": "파일 크기 검증", "desc": "지정한 최대 용량을 초과한 파일은 저장하거나 미리보기 전에 오류로 처리한다." },
          { "name": "이미지 미리보기", "desc": "URL.createObjectURL(file)로 선택한 이미지 파일의 임시 미리보기 주소를 만든다." },
          { "name": "임시 URL 정리", "desc": "새 파일을 선택하거나 컴포넌트가 사라질 때 URL.revokeObjectURL()을 호출해 메모리를 정리한다." },
          { "name": "파일 자체와 파일 정보 구분", "desc": "실제 File 객체와 화면에 표시하거나 저장할 파일 메타데이터를 구분해 관리한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "커스텀 훅과 localStorage 동기화",
        "summary": "반복되는 상태 관리와 Effect 로직을 커스텀 훅으로 분리하는 방법과 브라우저 저장소를 안전하게 연동하는 방법을 배웁니다.",
        "topics": [
          { "name": "커스텀 훅의 개념", "desc": "여러 컴포넌트에서 반복되는 state와 Effect 로직을 하나의 재사용 가능한 함수로 분리한다." },
          { "name": "커스텀 훅 이름", "desc": "React가 훅으로 인식할 수 있도록 함수 이름을 useLocalStorage, useFetch처럼 use로 시작한다." },
          { "name": "훅 사용 규칙", "desc": "훅은 컴포넌트나 다른 커스텀 훅의 최상위에서만 호출하고 조건문·반복문 안에서 호출하지 않는다." },
          { "name": "useLocalStorage 작성", "desc": "state의 초기값을 브라우저 저장소에서 읽고, 값이 변경될 때 다시 저장하는 커스텀 훅을 만든다." },
          { "name": "지연 초기화", "desc": "useState(() => 초기값계산) 형태로 저장소 읽기가 최초 렌더링에서 한 번만 실행되도록 한다." },
          { "name": "JSON 변환", "desc": "배열과 객체를 JSON.stringify()로 저장하고 JSON.parse()로 복원한다." },
          { "name": "저장 오류 처리", "desc": "잘못된 JSON, 브라우저 저장 용량 초과, 저장소 접근 제한 등의 오류를 try...catch로 처리한다." },
          { "name": "기본값 복원", "desc": "저장된 데이터가 없거나 손상되었을 때 앱의 기본 데이터를 사용한다." },
          { "name": "커스텀 훅 반환값", "desc": "일반적인 useState처럼 현재 값과 변경 함수를 배열이나 객체 형태로 반환한다." },
          { "name": "로직 재사용과 UI 재사용 구분", "desc": "커스텀 훅은 상태와 동작을 재사용하며, 실제 화면 구조는 컴포넌트가 담당한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "Context와 전역 UI 상태",
        "summary": "Props Drilling 문제를 해결하고 Context API를 활용해 다크 모드와 같은 전역 UI 상태를 효율적으로 관리하는 방법을 익힙니다.",
        "topics": [
          { "name": "Context의 개념", "desc": "여러 단계 아래의 컴포넌트에 같은 데이터를 전달할 때 중간 컴포넌트를 거치지 않고 공유하는 기능이다." },
          { "name": "Props Drilling", "desc": "중간 컴포넌트가 직접 사용하지 않는 props를 계속 전달해야 하는 문제를 이해한다." },
          { "name": "Context 생성", "desc": "createContext()로 공유할 데이터의 Context 객체를 만든다." },
          { "name": "Provider 설정", "desc": "Context를 사용할 컴포넌트들을 Provider로 감싸고 공유할 값을 value로 전달한다." },
          { "name": "useContext", "desc": "하위 컴포넌트에서 useContext()를 사용해 공유된 데이터와 함수를 가져온다." },
          { "name": "다크 모드 상태", "desc": "테마 상태와 테마 변경 함수를 Context로 제공해 여러 컴포넌트에서 사용한다." },
          { "name": "테마 클래스 적용", "desc": "최상위 요소에 light 또는 dark 클래스를 적용해 CSS 변수와 배경색을 변경한다." },
          { "name": "테마 저장", "desc": "선택한 테마를 localStorage에 저장해 새로고침 후에도 유지한다." },
          { "name": "시스템 테마 감지", "desc": "window.matchMedia(\"(prefers-color-scheme: dark)\")로 사용자의 운영체제 테마 설정을 확인한다." },
          { "name": "Context 사용 범위", "desc": "테마, 로그인 사용자, 언어처럼 앱 전반에서 필요한 데이터에 사용하고 모든 state를 Context로 만들지는 않는다." },
          { "name": "불필요한 재렌더링", "desc": "Provider의 value가 바뀌면 해당 Context를 사용하는 컴포넌트가 다시 렌더링된다는 점을 이해한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 앱 기능 확장",
        "summary": "지금까지 배운 상태 관리, 이펙트, useRef, 커스텀 훅, Context를 총동원하여 학습 진도 관리 앱에 검색, 필터, 파일 첨부, 다크 모드 기능을 확장합니다.",
        "topics": [
          { "name": "상태 구조 재설계", "desc": "학습 데이터, 필터, 검색어, 파일 정보, 테마 상태를 각각 어느 컴포넌트에서 관리할지 정한다." },
          { "name": "상태 끌어올리기", "desc": "학습 목록과 진도율을 함께 사용하는 컴포넌트들의 공통 부모에서 학습 데이터를 관리한다." },
          { "name": "검색 기능", "desc": "검색어 state를 만들고 제목이나 설명에 검색어가 포함된 학습 항목만 표시한다." },
          { "name": "다중 필터 기능", "desc": "완료 여부, 주차, 파일 첨부 여부 등의 조건을 조합해 표시할 학습 목록을 계산한다." },
          { "name": "정렬 기능", "desc": "일차순, 제목순, 완료 상태순 등 선택한 기준에 따라 복사한 배열을 정렬한다." },
          { "name": "파생 통계", "desc": "전체 항목 수, 완료 개수, 미완료 개수, 완료율을 원본 학습 데이터에서 계산한다." },
          { "name": "진행률 시각화", "desc": "완료율을 숫자와 진행률 바로 표시하고 0%와 100% 상태를 별도로 처리한다." },
          { "name": "파일 업로드", "desc": "각 학습 항목에 파일을 선택하고 파일명, 형식, 크기, 업로드 여부를 표시한다." },
          { "name": "파일 미리보기", "desc": "이미지 파일은 썸네일을 표시하고, 지원하지 않는 파일은 파일 정보만 보여준다." },
          { "name": "파일 삭제", "desc": "첨부 파일을 제거할 때 state와 임시 미리보기 URL을 함께 정리한다." },
          { "name": "데이터 저장", "desc": "완료 상태, 메모, 필터 설정, 테마를 localStorage와 동기화한다." },
          { "name": "파일 저장 한계 확인", "desc": "localStorage에는 실제 파일 객체를 안정적으로 저장할 수 없으므로 파일 메타데이터만 저장되는 차이를 확인한다." },
          { "name": "로딩·오류 UI", "desc": "초기 데이터 로딩, 저장 오류, 파일 검증 오류에 각각 다른 안내 화면을 표시한다." },
          { "name": "다크 모드", "desc": "Context를 사용해 헤더, 카드, 입력창, 버튼 등 전체 앱의 테마를 한 번에 변경한다." },
          { "name": "커스텀 훅 적용", "desc": "useLocalStorage, useFilePreview처럼 반복되는 저장·미리보기 로직을 별도 훅으로 분리한다." },
          { "name": "Effect 정리", "desc": "불필요한 useEffect를 제거하고, 계산 가능한 값은 파생값으로, 클릭에 따른 작업은 이벤트 핸들러로 이동한다." },
          { "name": "React DevTools 점검", "desc": "props, state, Context 값과 컴포넌트 재렌더링 흐름을 확인한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 누락된 Effect 의존성, 무한 렌더링 가능성, cleanup 누락, 중복 state, 과도한 Context 사용을 점검하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 9,
    "weekTitle": "TypeScript 기초",
    "days": [
      {
        "day": 1,
        "title": "TypeScript의 개념과 개발환경 구성",
        "summary": "TypeScript의 역할과 정적 타입 검사의 개념을 이해하고, Vite 프로젝트에서 .ts와 .tsx 파일을 활용한 개발환경 구성 방법과 타입 오류 확인법을 익힙니다.",
        "topics": [
          { "name": "TypeScript의 역할", "desc": "JavaScript에 타입 검사 기능을 추가해 값의 종류가 잘못 사용된 코드를 실행 전에 발견한다." },
          { "name": "정적 타입 검사", "desc": "프로그램을 실행하기 전에 변수, 함수 인수, 반환값, 객체 속성의 타입이 서로 맞는지 검사한다." },
          { "name": "JavaScript와의 관계", "desc": "TypeScript는 JavaScript 문법을 기반으로 하며, 브라우저에서 실행할 때는 JavaScript 코드로 변환된다." },
          { "name": "TypeScript 프로젝트 생성", "desc": "Vite에서 React·TypeScript 템플릿을 선택해 .ts, .tsx 파일을 사용하는 프로젝트를 만든다." },
          { "name": ".ts와 .tsx", "desc": "일반 TypeScript 파일은 .ts, JSX가 포함된 React 컴포넌트는 .tsx 확장자를 사용한다." },
          { "name": "tsconfig.json", "desc": "TypeScript의 검사 수준, JavaScript 변환 방식, 사용할 브라우저 기능 등을 설정하는 파일이다." },
          { "name": "엄격한 타입 검사", "desc": "strict 옵션을 활성화해 암묵적인 any, null 가능성, 잘못된 함수 사용 등을 더 엄격하게 검사한다." },
          { "name": "타입 추론", "desc": "const name = \"민주\"처럼 초기값이 명확하면 TypeScript가 별도 표기 없이 string 타입을 추론한다." },
          { "name": "타입 표기", "desc": "let price: number = 10000처럼 변수 이름 뒤에 콜론을 붙여 타입을 직접 지정한다." },
          { "name": "편집기 타입 정보", "desc": "VS Code에서 변수나 함수 위에 마우스를 올려 추론된 타입과 오류 내용을 확인한다." },
          { "name": "타입 오류 읽기", "desc": "오류가 표시된 줄만 보는 것이 아니라 “어떤 타입을 기대했고 실제로 어떤 타입이 전달됐는지”를 확인한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "기본 타입과 함수 타입",
        "summary": "TypeScript의 기본 자료형과 배열, 객체, 그리고 함수 매개변수 및 반환값의 타입을 지정하고 검사하는 방법을 학습합니다.",
        "topics": [
          { "name": "문자열 타입", "desc": "이름, 제목, 설명처럼 문자로 구성된 값에는 string을 사용한다." },
          { "name": "숫자 타입", "desc": "가격, 수량, 수익률, 진도율처럼 숫자로 계산할 값에는 number를 사용한다." },
          { "name": "불리언 타입", "desc": "완료 여부, 로그인 상태, 다크 모드처럼 참과 거짓으로 표현할 값에는 boolean을 사용한다." },
          { "name": "배열 타입", "desc": "string[], number[], Array<Lesson>처럼 같은 종류의 데이터를 여러 개 저장하는 배열의 타입을 지정한다." },
          { "name": "튜플 타입", "desc": "[string, number]처럼 원소의 순서와 각 위치의 타입이 정해진 배열을 표현한다." },
          { "name": "객체 타입", "desc": "{ title: string; completed: boolean }처럼 객체가 가져야 할 속성과 각 속성의 타입을 정의한다." },
          { "name": "선택적 속성", "desc": "memo?: string처럼 물음표를 사용해 존재하지 않을 수도 있는 객체 속성을 표현한다." },
          { "name": "읽기 전용 속성", "desc": "readonly id: number처럼 생성 후 직접 변경하면 안 되는 속성을 지정한다." },
          { "name": "함수 매개변수 타입", "desc": "function calculate(price: number, quantity: number)처럼 함수가 받을 값의 타입을 지정한다." },
          { "name": "함수 반환 타입", "desc": "function calculateTotal(): number처럼 함수가 반환해야 하는 결과의 타입을 명시한다." },
          { "name": "반환값이 없는 함수", "desc": "화면 출력이나 상태 변경처럼 값을 반환하지 않는 함수에는 void를 사용한다." },
          { "name": "함수 타입 자체 정의", "desc": "(id: number) => void처럼 콜백 함수가 받을 인수와 반환값의 타입을 작성한다." },
          { "name": "기본 매개변수와 선택적 매개변수", "desc": "기본값이 있는 매개변수와 message?: string처럼 전달하지 않아도 되는 매개변수를 구분한다." },
          { "name": "나머지 매개변수", "desc": "...values: number[]처럼 여러 개의 인수를 배열로 받을 때 타입을 지정한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "type, interface와 타입 조합",
        "summary": "타입 별칭과 인터페이스를 활용해 복잡한 객체 구조를 정의하고, 유니온 타입, 교차 타입 및 확장 기법을 익힙니다.",
        "topics": [
          { "name": "타입 별칭", "desc": "type Lesson = { ... }처럼 복잡한 타입에 이름을 붙여 여러 파일과 함수에서 재사용한다." },
          { "name": "인터페이스", "desc": "interface Lesson { ... } 형태로 객체가 가져야 할 속성과 메서드의 구조를 정의한다." },
          { "name": "type과 interface의 공통점", "desc": "둘 다 객체의 형태를 정의하고 React 컴포넌트의 props 타입 등에 사용할 수 있다." },
          { "name": "type의 활용 범위", "desc": "객체뿐 아니라 문자열 리터럴, 유니온, 튜플, 함수 타입에도 이름을 붙일 수 있다." },
          { "name": "인터페이스 확장", "desc": "interface DetailedLesson extends Lesson처럼 기존 객체 구조를 확장해 새로운 속성을 추가한다." },
          { "name": "교차 타입", "desc": "User & Settings처럼 여러 타입을 결합해 모든 속성을 포함하는 타입을 만든다." },
          { "name": "유니온 타입", "desc": "string | number처럼 값이 둘 이상의 타입 중 하나일 수 있음을 표현한다." },
          { "name": "문자열 리터럴 타입", "desc": "\"all\" | \"completed\" | \"pending\"처럼 허용할 문자열 값을 정확하게 제한한다." },
          { "name": "상태 타입 정의", "desc": "로딩 상태를 \"idle\" | \"loading\" | \"success\" | \"error\"처럼 정의해 잘못된 상태값이 들어오지 않게 한다." },
          { "name": "선택적 속성과 필수 속성", "desc": "반드시 필요한 속성과 일부 데이터에만 존재하는 속성을 구분해 객체 타입을 설계한다." },
          { "name": "인덱스 접근 타입", "desc": "Lesson[\"status\"]처럼 기존 객체 타입에서 특정 속성의 타입을 가져와 중복 정의를 줄인다." },
          { "name": "타입 내보내기", "desc": "여러 컴포넌트가 공유할 타입은 별도 파일에서 export type 또는 export interface로 내보낸다." },
          { "name": "타입 전용 가져오기", "desc": "import type { Lesson } from \"./types\"처럼 실행 코드가 아닌 타입만 가져온다는 것을 명시한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "타입 좁히기와 안전한 데이터 처리",
        "summary": "조건문과 타입 가드를 활용해 유니온 타입을 구체화하고, unknown과 any의 차이를 이해하며 안전한 에러 처리를 구현합니다.",
        "topics": [
          { "name": "타입 좁히기", "desc": "유니온 타입으로 선언된 값을 조건문으로 검사해 현재 코드에서 사용할 수 있는 구체적인 타입을 알아내는 과정이다." },
          { "name": "typeof 검사", "desc": "typeof value === \"string\"처럼 기본 자료형을 검사한 뒤 해당 타입의 메서드를 안전하게 사용한다." },
          { "name": "동등성 검사", "desc": "값이 null, undefined 또는 특정 리터럴인지 비교해 가능한 타입의 범위를 줄인다." },
          { "name": "in 연산자", "desc": "\"message\" in result처럼 객체가 특정 속성을 가지고 있는지 검사해 객체 타입을 구분한다." },
          { "name": "instanceof 검사", "desc": "error instanceof Error처럼 값이 특정 클래스의 인스턴스인지 확인한다." },
          { "name": "판별 가능한 유니온", "desc": "각 객체에 status, type, kind 같은 공통 구분 속성을 넣어 여러 객체 타입을 안전하게 분기한다." },
          { "name": "사용자 정의 타입 가드", "desc": "value is Lesson을 반환하는 함수를 작성해 복잡한 검사 로직을 재사용한다." },
          { "name": "unknown 타입", "desc": "API 응답, JSON 파싱 결과, catch 오류처럼 실제 형태가 확실하지 않은 값에 사용하고 검사 후 접근한다." },
          { "name": "any 타입", "desc": "모든 타입 검사를 사실상 비활성화하므로 기존 JavaScript 이전 과정 등 불가피한 상황 외에는 사용하지 않는다." },
          { "name": "unknown과 any의 차이", "desc": "any는 검사 없이 바로 사용할 수 있지만, unknown은 타입을 확인하기 전까지 속성과 메서드에 접근할 수 없다." },
          { "name": "타입 단언", "desc": "value as Lesson은 TypeScript에게 개발자의 판단을 믿으라고 지시할 뿐, 실제 데이터가 해당 형태인지 검사하지 않는다." },
          { "name": "never 타입", "desc": "발생할 수 없는 상태를 표현하며, 모든 유니온 분기를 빠짐없이 처리했는지 확인할 때 사용한다." },
          { "name": "완전한 분기 검사", "desc": "switch문의 마지막에서 never를 사용해 새로운 상태가 추가됐지만 처리 코드가 누락된 경우 오류가 발생하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "제네릭과 유틸리티 타입",
        "summary": "제네릭을 통해 재사용 가능한 함수와 타입을 설계하고, Partial, Pick, Omit 등 TypeScript가 제공하는 유틸리티 타입 활용법을 배웁니다.",
        "topics": [
          { "name": "제네릭의 개념", "desc": "특정 타입으로 고정하지 않고 호출할 때 전달되는 타입을 유지하면서 재사용 가능한 함수와 타입을 만든다." },
          { "name": "제네릭 함수", "desc": "function firstItem<T>(items: T[]): T | undefined처럼 배열에 들어 있는 타입을 그대로 반환 타입에 연결한다." },
          { "name": "타입 매개변수", "desc": "<T>는 함수나 타입이 사용할 실제 타입을 나중에 전달받기 위한 자리다." },
          { "name": "제네릭 타입 추론", "desc": "함수를 호출할 때 인수의 타입이 명확하면 <string>처럼 타입을 직접 작성하지 않아도 TypeScript가 추론한다." },
          { "name": "제네릭 객체 타입", "desc": "ApiResponse<T>처럼 응답 데이터의 형태만 바꾸면서 로딩 상태나 오류 구조는 재사용한다." },
          { "name": "제네릭 제약 조건", "desc": "<T extends { id: number }>처럼 제네릭 타입이 반드시 가져야 할 속성을 제한한다." },
          { "name": "keyof 연산자", "desc": "객체 타입의 속성 이름을 유니온 타입으로 추출해 존재하지 않는 속성 이름이 전달되는 것을 방지한다." },
          { "name": "Partial<T>", "desc": "기존 타입의 모든 속성을 선택적으로 바꿔 일부 속성만 수정하는 객체 타입을 만든다." },
          { "name": "Required<T>", "desc": "기존 타입의 선택적 속성을 모두 필수 속성으로 변경한다." },
          { "name": "Pick<T, K>", "desc": "기존 타입에서 필요한 속성만 골라 새로운 타입을 만든다." },
          { "name": "Omit<T, K>", "desc": "기존 타입에서 특정 속성을 제외한 새로운 타입을 만든다." },
          { "name": "Readonly<T>", "desc": "객체의 모든 속성을 읽기 전용으로 만들어 직접 변경하지 못하게 한다." },
          { "name": "Record<K, T>", "desc": "정해진 키와 동일한 값 타입을 갖는 객체 구조를 만든다." },
          { "name": "ReturnType<T>", "desc": "기존 함수가 반환하는 값의 타입을 추출해 같은 타입을 반복해서 작성하지 않게 한다." },
          { "name": "제네릭 남용 방지", "desc": "하나의 구체적인 타입만 사용하는 함수에 불필요하게 제네릭을 적용하지 않는다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "React 컴포넌트와 Hook 타입 지정",
        "summary": "React 컴포넌트의 props, useState, 이벤트, useRef 및 Context에 정확한 타입을 지정하여 타입 안정성을 확보하는 방법을 익힙니다.",
        "topics": [
          { "name": "Props 타입 정의", "desc": "컴포넌트가 받을 문자열, 숫자, 객체, 함수 등의 props 구조를 type 또는 interface로 정의한다." },
          { "name": "선택적 Props", "desc": "description?: string처럼 없어도 되는 props와 반드시 전달해야 하는 props를 구분한다." },
          { "name": "콜백 Props", "desc": "onDelete: (id: number) => void처럼 자식 컴포넌트가 호출할 함수의 인수와 반환 타입을 정의한다." },
          { "name": "children 타입", "desc": "컴포넌트 내부에 문자열, 요소, 여러 컴포넌트를 받을 때 ReactNode를 사용한다." },
          { "name": "useState 타입 추론", "desc": "useState(0)처럼 초기값이 명확하면 TypeScript가 state 타입을 자동으로 추론한다." },
          { "name": "배열 State 타입", "desc": "빈 배열은 충분한 타입 정보를 제공하지 못할 수 있으므로 useState<Lesson[]>([])처럼 원소 타입을 지정한다." },
          { "name": "Nullable State", "desc": "선택된 항목이 없을 수 있다면 useState<Lesson | null>(null)처럼 null 가능성을 포함한다." },
          { "name": "입력 이벤트 타입", "desc": "입력창 변경 함수에는 ChangeEvent<HTMLInputElement>를 사용해 event.target.value의 타입을 안전하게 확인한다." },
          { "name": "폼 이벤트 타입", "desc": "폼 제출 함수에는 FormEvent<HTMLFormElement>를 사용한다." },
          { "name": "버튼 이벤트 타입", "desc": "필요한 경우 MouseEvent<HTMLButtonElement>로 클릭 이벤트의 대상 요소 타입을 지정한다." },
          { "name": "useRef DOM 타입", "desc": "입력창 참조에는 useRef<HTMLInputElement | null>(null)처럼 실제 DOM 요소와 초기 null을 함께 지정한다." },
          { "name": "Context 타입", "desc": "공유할 데이터와 함수의 구조를 정의하고, Provider 없이 사용했을 때의 undefined 가능성을 처리한다." },
          { "name": "커스텀 훅 반환 타입", "desc": "커스텀 훅이 반환하는 state, 함수, 로딩 상태 등의 타입을 명확히 정의한다." },
          { "name": "API 응답 타입", "desc": "서버에서 받을 데이터의 예상 구조를 타입으로 정의하고 React state와 렌더링 코드에 사용한다." },
          { "name": "JSX 파일 확장자", "desc": "JSX를 포함한 TypeScript 컴포넌트는 .tsx 확장자를 사용해야 한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 앱 TypeScript 전환",
        "summary": "기존 React 학습 진도 관리 앱의 도메인 모델, 컴포넌트 props, state, 훅 및 외부 데이터를 TypeScript로 안전하게 전환하고 빌드 검증을 수행합니다.",
        "topics": [
          { "name": "프로젝트 전환 범위 확인", "desc": "기존 React 학습 진도 앱의 컴포넌트, state, props, 커스텀 훅, API 응답 구조를 먼저 정리한다." },
          { "name": "도메인 타입 정의", "desc": "Lesson, Week, Attachment, Filter, Theme, LoadingStatus 등 앱에서 사용하는 핵심 데이터 타입을 만든다." },
          { "name": "타입 파일 분리", "desc": "여러 컴포넌트가 공유하는 타입을 types 폴더나 기능별 타입 파일로 분리한다." },
          { "name": "컴포넌트 Props 타입 적용", "desc": "각 컴포넌트가 실제로 사용하는 데이터와 콜백 함수만 props 타입에 포함한다." },
          { "name": "State 타입 적용", "desc": "학습 목록, 선택 항목, 필터, 파일 정보, 오류 상태의 타입을 지정한다." },
          { "name": "이벤트 핸들러 타입 적용", "desc": "입력, 체크박스, 선택 상자, 폼 제출, 파일 선택 이벤트에 알맞은 React 이벤트 타입을 사용한다." },
          { "name": "파일 타입 처리", "desc": "File, FileList, HTMLInputElement 타입을 사용해 파일 선택과 미리보기 기능을 안전하게 작성한다." },
          { "name": "localStorage 데이터 처리", "desc": "저장소에서 불러온 문자열을 JSON으로 변환한 뒤 예상한 데이터 구조인지 확인한다." },
          { "name": "API 응답 타입 적용", "desc": "API 원본 응답 타입과 화면에서 사용할 가공 데이터 타입을 구분한다." },
          { "name": "런타임 데이터 검증", "desc": "TypeScript 타입은 실제 서버 응답이나 저장된 JSON을 검사하지 않으므로 외부 데이터는 별도 조건문이나 검증 함수를 거친다." },
          { "name": "Nullable 값 처리", "desc": "선택된 항목, DOM ref, API 응답처럼 값이 없을 수 있는 경우 null과 undefined를 명시적으로 처리한다." },
          { "name": "타입 오류 해결", "desc": "오류를 any, 무분별한 as, @ts-ignore로 덮지 않고 데이터 구조나 함수 정의를 수정해 원인을 해결한다." },
          { "name": "타입 단언 제거", "desc": "타입 단언이 사용된 위치를 검토하고 타입 가드, 초기값, 조건문으로 대체할 수 있는지 확인한다." },
          { "name": "엄격 모드 점검", "desc": "strict 설정에서 프로젝트 전체 타입 검사를 실행하고 남은 오류를 해결한다." },
          { "name": "빌드 확인", "desc": "개발 서버에서 동작하는 것만 확인하지 않고 프로덕션 빌드를 실행해 타입 오류와 빌드 오류를 함께 점검한다." },
          { "name": "React DevTools 점검", "desc": "컴포넌트에 전달되는 실제 props와 TypeScript로 정의한 타입 구조가 일치하는지 확인한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 any, 과도한 타입 단언, 누락된 null 처리, 잘못된 이벤트 타입, 중복된 타입 정의를 집중적으로 검토하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 10,
    "weekTitle": "Next.js와 앱 구조 설계",
    "days": [
      {
        "day": 1,
        "title": "Next.js의 개념과 프로젝트 구성",
        "summary": "Next.js의 핵심 역할과 React와의 차이점을 이해하고, App Router 기반의 프로젝트를 생성하여 디렉터리 구조와 스타일링 방식을 설정하는 방법을 배웁니다.",
        "topics": [
          { "name": "Next.js의 역할", "desc": "React를 기반으로 여러 페이지의 라우팅, 서버 렌더링, 데이터 요청, 이미지 최적화, 메타데이터 관리 등을 지원하는 프레임워크다." },
          { "name": "React와 Next.js의 차이", "desc": "React는 UI 컴포넌트를 만드는 라이브러리이고, Next.js는 React 앱의 라우팅·서버 실행·빌드·배포 구조까지 제공한다." },
          { "name": "App Router", "desc": "app 폴더의 디렉터리와 특수 파일을 기준으로 페이지와 레이아웃을 구성하는 현재 Next.js의 라우팅 방식이다." },
          { "name": "Next.js 프로젝트 생성", "desc": "create-next-app을 사용해 TypeScript, ESLint, App Router가 설정된 프로젝트를 만든다." },
          { "name": "학습용 설정 선택", "desc": "이번 주에는 TypeScript와 App Router를 사용하고, CSS 원리를 계속 복습하기 위해 Tailwind CSS는 선택하지 않아도 된다." },
          { "name": "개발 명령어", "desc": "npm run dev는 개발 서버, npm run build는 운영용 빌드, npm run start는 빌드된 앱 실행에 사용한다." },
          { "name": "app 폴더", "desc": "페이지, 레이아웃, 로딩 화면, 오류 화면 등 앱의 주요 라우팅 구조를 작성한다." },
          { "name": "public 폴더", "desc": "이미지, 아이콘, 정적 파일처럼 URL로 직접 접근할 파일을 저장한다." },
          { "name": "package.json", "desc": "프로젝트에서 사용하는 라이브러리, 실행 명령어, 프로젝트 정보를 관리한다." },
          { "name": "next.config.ts", "desc": "Next.js의 빌드·이미지·캐시 등 프레임워크 설정을 작성한다." },
          { "name": "tsconfig.json", "desc": "TypeScript 검사 방식과 @/* 같은 import 경로 별칭을 관리한다." },
          { "name": "globals.css", "desc": "페이지 전체에 공통으로 적용할 초기화 스타일, 색상 변수, 기본 글꼴 등을 작성한다." },
          { "name": "CSS Modules", "desc": "Component.module.css 형태의 파일을 만들어 특정 컴포넌트에만 적용되는 CSS 클래스를 작성한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "파일 기반 라우팅과 레이아웃",
        "summary": "폴더 구조를 활용한 파일 기반 라우팅과 중첩 레이아웃의 개념을 익히고, Link 컴포넌트와 useRouter를 통한 페이지 이동 방식을 학습합니다.",
        "topics": [
          { "name": "파일 기반 라우팅", "desc": "별도의 라우트 목록을 작성하지 않고 app 폴더 안의 디렉터리 구조로 URL을 만든다." },
          { "name": "page.tsx", "desc": "해당 경로에서 실제로 표시될 페이지 컴포넌트를 정의한다." },
          { "name": "홈 페이지", "desc": "app/page.tsx는 사이트의 / 경로에 해당한다." },
          { "name": "하위 페이지", "desc": "app/settings/page.tsx는 /settings, app/report/page.tsx는 /report 경로가 된다." },
          { "name": "중첩 경로", "desc": "app/weeks/detail/page.tsx처럼 폴더를 중첩하면 /weeks/detail 형태의 URL이 만들어진다." },
          { "name": "layout.tsx", "desc": "여러 페이지에서 공통으로 사용할 헤더, 내비게이션, 사이드바, 푸터 등을 정의한다." },
          { "name": "루트 레이아웃", "desc": "app/layout.tsx는 모든 페이지를 감싸며 <html>과 <body> 태그를 포함해야 한다." },
          { "name": "중첩 레이아웃", "desc": "app/weeks/layout.tsx를 만들면 /weeks 아래의 페이지만 공유하는 레이아웃을 만들 수 있다." },
          { "name": "children", "desc": "레이아웃 컴포넌트의 children 위치에 현재 경로의 페이지나 하위 레이아웃이 표시된다." },
          { "name": "레이아웃 상태 유지", "desc": "페이지가 변경되어도 공통 레이아웃은 유지되므로 내비게이션과 사이드바 등을 다시 만들 필요가 없다." },
          { "name": "Link 컴포넌트", "desc": "<a> 대신 next/link의 <Link>를 사용해 앱 내부 페이지를 이동한다." },
          { "name": "클라이언트 측 이동", "desc": "Link를 이용하면 전체 문서를 새로 불러오지 않고 필요한 화면을 전환할 수 있다." },
          { "name": "프리페칭", "desc": "Next.js는 사용자가 이동할 가능성이 있는 경로를 미리 준비해 페이지 이동을 빠르게 만들 수 있다." },
          { "name": "현재 경로 표시", "desc": "클라이언트 컴포넌트에서 usePathname()으로 현재 URL을 읽어 활성화된 메뉴에 다른 스타일을 적용한다." },
          { "name": "프로그래밍 방식 이동", "desc": "폼 제출 완료 후 이동하는 것처럼 코드에서 경로를 바꿔야 할 때 useRouter()를 사용한다." },
          { "name": "이동 방식 선택", "desc": "일반적인 메뉴와 링크에는 <Link>를 우선 사용하고, 특정 로직 이후의 이동에만 useRouter()를 사용한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "동적 라우팅과 URL 데이터",
        "summary": "동적 세그먼트와 검색 파라미터를 활용해 URL 경로의 데이터를 읽고, Route Group 및 Private Folder를 이용해 라우트 구조를 정리하는 방법을 배웁니다.",
        "topics": [
          { "name": "동적 라우트", "desc": "데이터에 따라 페이지 주소의 일부가 달라질 때 대괄호 폴더를 사용한다." },
          { "name": "동적 폴더 작성", "desc": "app/weeks/[week]/page.tsx처럼 폴더 이름을 작성하면 /weeks/1, /weeks/2 등의 경로를 하나의 페이지로 처리한다." },
          { "name": "params", "desc": "동적 경로에 포함된 값을 페이지 컴포넌트의 params를 통해 읽는다." },
          { "name": "문자열 경로값 변환", "desc": "URL에서 받은 값은 문자열이므로 주차 번호처럼 계산에 사용할 값은 숫자로 변환한다." },
          { "name": "데이터 검색", "desc": "params.week 값과 일치하는 주차 데이터를 객체 배열이나 서버 데이터에서 찾는다." },
          { "name": "존재하지 않는 데이터 처리", "desc": "URL에 해당하는 주차 데이터가 없으면 임의의 빈 화면 대신 notFound()를 호출한다." },
          { "name": "not-found.tsx", "desc": "존재하지 않는 페이지나 데이터를 요청했을 때 표시할 404 화면을 정의한다." },
          { "name": "검색 파라미터", "desc": "/weeks?status=completed에서 status=completed처럼 ? 뒤에 전달되는 값을 검색 파라미터라고 한다." },
          { "name": "searchParams", "desc": "서버 페이지 컴포넌트에서 검색어, 필터, 정렬 기준 등 URL의 쿼리 데이터를 받는다." },
          { "name": "useSearchParams()", "desc": "클라이언트 컴포넌트에서 현재 URL의 검색 파라미터를 읽을 때 사용한다." },
          { "name": "URL에 필터 저장", "desc": "완료 여부, 검색어, 정렬 기준을 URL에 포함하면 새로고침하거나 링크를 공유해도 같은 화면 상태를 복원할 수 있다." },
          { "name": "동적 링크 생성", "desc": "객체 배열을 반복하면서 /weeks/${week.id} 형태의 상세 페이지 링크를 만든다." },
          { "name": "Catch-all 경로", "desc": "[...slug]를 사용하면 여러 단계로 이어진 경로값을 하나의 배열로 받을 수 있다." },
          { "name": "Route Group", "desc": "(dashboard)처럼 괄호로 폴더 이름을 작성하면 URL에는 포함하지 않으면서 관련 페이지를 묶을 수 있다." },
          { "name": "Private Folder", "desc": "_components, _lib처럼 밑줄로 시작하는 폴더는 라우트로 사용하지 않고 특정 기능의 컴포넌트와 유틸리티를 정리하는 데 사용한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "Server Component와 Client Component",
        "summary": "서버 컴포넌트와 클라이언트 컴포넌트의 역할 차이를 이해하고, use client 지시어를 통한 컴포넌트 경계 설계와 Hydration 과정을 익힙니다.",
        "topics": [
          { "name": "Server Component", "desc": "App Router의 페이지와 레이아웃은 기본적으로 서버 컴포넌트로 실행된다." },
          { "name": "서버 컴포넌트의 역할", "desc": "서버에서 데이터를 가져오고 HTML을 생성하며, 데이터베이스나 비공개 환경변수에 접근하는 작업에 적합하다." },
          { "name": "클라이언트 컴포넌트", "desc": "브라우저에서 사용자 입력과 상호작용을 처리해야 하는 컴포넌트다." },
          { "name": "\"use client\"", "desc": "파일 최상단에 \"use client\"를 작성해 해당 파일을 클라이언트 컴포넌트의 시작점으로 지정한다." },
          { "name": "클라이언트 컴포넌트가 필요한 경우", "desc": "useState, useEffect, useRef, 이벤트 핸들러, localStorage, window, document 등을 사용할 때 필요하다." },
          { "name": "서버 컴포넌트에서 가능한 작업", "desc": "async 함수로 데이터를 가져오고 결과를 바로 JSX에 표시할 수 있다." },
          { "name": "서버 컴포넌트의 제약", "desc": "onClick 같은 이벤트 핸들러와 useState 등 브라우저 상호작용용 Hook을 직접 사용할 수 없다." },
          { "name": "컴포넌트 경계", "desc": "페이지 전체를 클라이언트 컴포넌트로 만들지 않고, 실제 상호작용이 필요한 작은 영역만 분리한다." },
          { "name": "서버에서 클라이언트로 Props 전달", "desc": "서버 컴포넌트가 가져온 데이터를 클라이언트 컴포넌트에 props로 전달할 수 있다." },
          { "name": "직렬화 가능한 데이터", "desc": "서버에서 클라이언트로 전달하는 props에는 문자열, 숫자, 배열, 일반 객체처럼 전송 가능한 값을 사용한다." },
          { "name": "클라이언트 컴포넌트 조합", "desc": "검색창, 체크박스, 모달, 다크 모드 버튼 등 상호작용 영역을 클라이언트 컴포넌트로 만든다." },
          { "name": "서버 컴포넌트 조합", "desc": "페이지 구조, 서버 데이터 조회, 정적 설명 영역은 서버 컴포넌트로 유지한다." },
          { "name": "브라우저 번들 최소화", "desc": "\"use client\" 범위를 작게 유지하면 브라우저로 전송되는 JavaScript 양을 줄일 수 있다." },
          { "name": "Hydration", "desc": "서버에서 생성된 HTML에 클라이언트 JavaScript가 연결되어 상호작용할 수 있게 되는 과정을 의미한다." },
          { "name": "Hydration 오류", "desc": "서버에서 렌더링한 최초 결과와 브라우저의 최초 결과가 다르면 Hydration 불일치 오류가 발생할 수 있다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "서버 데이터 가져오기와 환경변수",
        "summary": "서버 컴포넌트에서의 비동기 데이터 요청, loading.tsx와 Suspense를 활용한 스트리밍 처리, 그리고 서버 전용 환경변수 관리 방법을 학습합니다.",
        "topics": [
          { "name": "서버 컴포넌트 데이터 요청", "desc": "서버 컴포넌트를 async 함수로 작성하고 fetch() 또는 데이터베이스 함수를 직접 호출한다." },
          { "name": "서버에서 데이터 가공", "desc": "API 원본 응답을 서버에서 필요한 구조로 가공한 뒤 페이지 컴포넌트에 표시한다." },
          { "name": "클라이언트 요청과의 차이", "desc": "최초 화면에 필요한 데이터는 서버에서 가져오고, 사용자 행동 이후 실시간으로 바뀌는 데이터는 클라이언트 요청을 고려한다." },
          { "name": "데이터 요청 함수 분리", "desc": "app/lib/data.ts 같은 파일에 데이터 요청 함수를 작성해 페이지 컴포넌트와 통신 로직을 분리한다." },
          { "name": "서버 전용 코드 분리", "desc": "비공개 키나 데이터베이스 접근 코드가 클라이언트 파일에서 import되지 않도록 서버 전용 모듈에 둔다." },
          { "name": "loading.tsx", "desc": "데이터가 준비되는 동안 해당 경로에 표시할 로딩 화면이나 스켈레톤을 정의한다." },
          { "name": "Suspense", "desc": "느린 데이터 영역을 <Suspense>로 감싸 전체 페이지가 아니라 해당 영역만 로딩 상태로 표시한다." },
          { "name": "스트리밍", "desc": "준비된 UI를 먼저 보여주고 느린 데이터 영역은 준비되는 순서대로 화면에 전달하는 방식이다." },
          { "name": "병렬 데이터 요청", "desc": "서로 의존하지 않는 여러 요청은 동시에 시작해 불필요한 순차 대기를 줄인다." },
          { "name": "순차 데이터 요청", "desc": "앞선 요청의 결과가 다음 요청에 필요한 경우에만 순서대로 실행한다." },
          { "name": "캐시 여부 결정", "desc": "항상 최신이어야 하는 데이터와 일정 시간 같은 결과를 재사용해도 되는 데이터를 구분한다." },
          { "name": "환경변수 파일", "desc": ".env.local에 API 주소, 서버 키, 외부 서비스 설정값 등을 작성한다." },
          { "name": "서버 전용 환경변수", "desc": "일반 환경변수는 기본적으로 서버 코드에서만 접근하며 브라우저에 노출하지 않는다." },
          { "name": "공개 환경변수", "desc": "브라우저에서도 필요한 값은 NEXT_PUBLIC_ 접두사를 사용하지만, 해당 값은 사용자에게 공개된다고 전제해야 한다." },
          { "name": "비밀 키 관리", "desc": "API 비밀 키, 데이터베이스 비밀번호, 인증 토큰에는 NEXT_PUBLIC_을 붙이지 않는다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "Route Handler·오류 화면·메타데이터",
        "summary": "Route Handler를 이용해 서버 API 엔드포인트를 구현하고, error.tsx를 통한 오류 경계 설정과 정적·동적 메타데이터 관리 방법을 익힙니다.",
        "topics": [
          { "name": "Route Handler", "desc": "route.ts 파일에서 웹 표준의 Request와 Response를 이용해 서버 API 엔드포인트를 만든다." },
          { "name": "Route Handler 위치", "desc": "app/api/lessons/route.ts를 만들면 /api/lessons 경로에서 요청을 처리할 수 있다." },
          { "name": "GET 요청 처리", "desc": "GET 함수를 export해 학습 목록이나 통계 데이터를 반환한다." },
          { "name": "POST 요청 처리", "desc": "POST 함수를 export해 요청 본문을 읽고 새로운 데이터를 생성하는 흐름을 작성한다." },
          { "name": "응답 생성", "desc": "Response.json()을 사용해 객체나 배열 데이터를 JSON 응답으로 반환한다." },
          { "name": "요청 본문 읽기", "desc": "await request.json()으로 클라이언트가 보낸 JSON 데이터를 읽는다." },
          { "name": "입력 데이터 검증", "desc": "요청값을 바로 신뢰하지 않고 필수 속성, 자료형, 범위 등을 검사한다." },
          { "name": "상태 코드 반환", "desc": "성공, 잘못된 입력, 찾을 수 없음, 서버 오류에 맞는 HTTP 상태 코드를 반환한다." },
          { "name": "예상 가능한 오류", "desc": "사용자가 잘못된 값을 입력했거나 요청 데이터가 없는 상황은 명시적인 결과로 처리한다." },
          { "name": "예상하지 못한 오류", "desc": "렌더링 중 발생한 예외는 error.tsx를 통해 대체 화면으로 처리한다." },
          { "name": "error.tsx", "desc": "특정 경로에서 예상하지 못한 오류가 발생했을 때 안내 문구와 재시도 버튼을 표시한다." },
          { "name": "reset()", "desc": "오류 화면에서 해당 경로를 다시 렌더링해 일시적인 오류의 복구를 시도한다." },
          { "name": "오류 정보 노출 제한", "desc": "사용자 화면에는 이해하기 쉬운 메시지를 표시하고 내부 오류 세부사항은 서버 로그에서 확인한다." },
          { "name": "정적 메타데이터", "desc": "페이지나 레이아웃에서 metadata 객체를 export해 제목과 설명을 지정한다." },
          { "name": "동적 메타데이터", "desc": "상세 페이지의 데이터에 따라 제목이 달라져야 할 때 generateMetadata()를 사용한다." },
          { "name": "페이지별 제목", "desc": "/weeks/1에서는 “1주차 학습 내용”, /report에서는 “학습 통계”처럼 경로에 맞는 제목을 설정한다." },
          { "name": "검색·공유 정보", "desc": "description과 Open Graph 정보를 설정해 검색 결과와 링크 공유 시 페이지 내용을 명확하게 전달한다." },
          { "name": "next/image", "desc": "일반 <img> 대신 Next.js의 <Image> 컴포넌트를 사용해 이미지 크기와 최적화 기능을 활용한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 앱을 Next.js로 전환",
        "summary": "지금까지 배운 Next.js의 라우팅, 서버 컴포넌트, 데이터 연동, 오류 및 로딩 처리를 종합하여 기존 학습 진도 관리 앱을 Next.js 앱으로 완전히 전환합니다.",
        "topics": [
          { "name": "페이지 구조 설계", "desc": "구현부터 시작하지 않고 먼저 필요한 URL과 각 페이지의 역할을 정의한다." },
          { "name": "홈 대시보드", "desc": "/에서 전체 완료율, 최근 학습 내용, 다음 학습 항목을 표시한다." },
          { "name": "주차 목록", "desc": "/weeks에서 전체 주차와 각 주차의 진도율을 카드로 표시한다." },
          { "name": "주차 상세", "desc": "/weeks/[week]에서 해당 주차의 일차별 학습 내용과 완료 상태를 표시한다." },
          { "name": "통계 페이지", "desc": "/report에서 전체 완료 개수, 주차별 완료율, 미완료 항목을 표시한다." },
          { "name": "설정 페이지", "desc": "/settings에서 테마, 기본 필터, 표시 방식 등의 설정을 관리한다." },
          { "name": "공통 레이아웃", "desc": "루트 layout.tsx에 헤더와 전체 스타일을 배치하고, 대시보드 영역에는 중첩 레이아웃을 적용한다." },
          { "name": "내비게이션", "desc": "<Link>를 사용해 대시보드, 주차 목록, 통계, 설정 페이지를 연결한다." },
          { "name": "활성 메뉴 표시", "desc": "내비게이션만 클라이언트 컴포넌트로 분리하고 usePathname()으로 현재 경로를 표시한다." },
          { "name": "서버·클라이언트 경계 설계", "desc": "데이터 조회와 페이지 구조는 서버 컴포넌트, 체크박스·검색창·필터는 클라이언트 컴포넌트로 분리한다." },
          { "name": "컴포넌트 배치", "desc": "공통 컴포넌트는 components, 특정 경로 전용 컴포넌트는 해당 경로의 _components에 배치한다." },
          { "name": "데이터 함수 배치", "desc": "조회·가공 로직을 lib 또는 기능별 _lib 폴더에 분리한다." },
          { "name": "동적 페이지 데이터 검색", "desc": "params.week에 해당하는 주차 데이터를 찾고 없으면 notFound()를 호출한다." },
          { "name": "검색 파라미터 활용", "desc": "검색어, 완료 여부, 정렬 기준을 URL에 반영해 새로고침 후에도 화면 조건이 유지되게 한다." },
          { "name": "로딩 화면", "desc": "데이터 요청이 있는 주요 경로에 loading.tsx를 추가해 스켈레톤을 표시한다." },
          { "name": "오류 화면", "desc": "데이터 요청이 실패할 수 있는 경로에 error.tsx와 재시도 기능을 추가한다." },
          { "name": "404 화면", "desc": "잘못된 주차 번호나 존재하지 않는 경로를 위한 not-found.tsx를 작성한다." },
          { "name": "페이지별 메타데이터", "desc": "각 페이지의 제목과 설명을 설정하고 동적 주차 페이지에는 주차 번호가 포함된 제목을 만든다." },
          { "name": "스타일 이전", "desc": "기존 전역 스타일은 globals.css, 컴포넌트별 스타일은 CSS Modules로 옮긴다." },
          { "name": "환경변수 정리", "desc": "API 주소와 서버 설정값을 .env.local에 분리하고 브라우저 노출 여부를 점검한다." },
          { "name": "빌드 검사", "desc": "npm run build를 실행해 TypeScript 오류, 서버·클라이언트 경계 오류, 잘못된 라우트 사용을 확인한다." },
          { "name": "폴더 구조 점검", "desc": "URL 구조와 코드 구조가 지나치게 결합되지 않았는지, 공통 코드와 기능 전용 코드가 구분되었는지 확인한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 불필요한 \"use client\", 서버 컴포넌트의 브라우저 API 사용, 비밀 환경변수 노출, 중복 레이아웃, 잘못된 동적 경로 타입을 집중적으로 점검하게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 11,
    "weekTitle": "테스트·디버깅·성능 개선",
    "days": [
      {
        "day": 1,
        "title": "Chrome 개발자도구를 이용한 디버깅",
        "summary": "Chrome DevTools와 React Developer Tools를 활용하여 JavaScript 실행 흐름, 변수 상태, 네트워크 요청 및 컴포넌트 렌더링을 디버깅하고 분석하는 방법을 익힙니다.",
        "topics": [
          { "name": "디버깅의 개념", "desc": "오류 메시지만 보고 코드를 무작정 수정하는 것이 아니라, 문제가 발생한 조건과 실행 흐름을 좁혀 실제 원인을 찾는 과정이다." },
          { "name": "오류 재현", "desc": "어떤 페이지에서 어떤 입력과 행동을 했을 때 오류가 발생하는지 동일한 절차로 반복해서 확인한다." },
          { "name": "Console 패널", "desc": "JavaScript 오류, 경고, 직접 출력한 로그를 확인하고 현재 페이지에서 JavaScript 표현식을 실행한다." },
          { "name": "오류 스택 추적", "desc": "Console에 표시된 파일명, 줄 번호, 함수 호출 순서를 따라가며 오류가 처음 발생한 위치를 찾는다." },
          { "name": "조건별 로그 출력", "desc": "console.log(), console.warn(), console.error(), console.table()을 사용해 변수와 배열·객체의 상태를 확인한다." },
          { "name": "구조화된 로그 작성", "desc": "단순히 값을 출력하지 않고 console.log(\"검색 응답:\", data)처럼 어떤 단계의 값인지 함께 기록한다." },
          { "name": "Sources 패널", "desc": "브라우저가 실행 중인 JavaScript와 TypeScript 원본 코드를 확인하고 특정 줄에서 실행을 멈춘다." },
          { "name": "Breakpoint", "desc": "코드 실행을 멈출 줄을 지정하고, 실행이 해당 지점에 도달했을 때 변수와 호출 흐름을 검사한다." },
          { "name": "단계별 실행", "desc": "현재 줄 실행, 함수 내부 진입, 함수 밖으로 이동 기능을 사용해 코드가 실제로 어떤 순서로 실행되는지 확인한다." },
          { "name": "조건부 Breakpoint", "desc": "특정 항목의 id가 일치할 때처럼 정해진 조건에서만 실행을 멈추게 한다." },
          { "name": "예외 발생 시 중단", "desc": "잡히지 않은 오류 또는 모든 예외가 발생하는 순간 실행을 멈춰 오류가 만들어진 위치를 확인한다." },
          { "name": "Watch", "desc": "디버깅 중 계속 관찰할 변수나 표현식을 등록해 값의 변화를 확인한다." },
          { "name": "Call Stack", "desc": "현재 함수가 어떤 함수를 거쳐 호출되었는지 확인해 오류가 전달된 경로를 추적한다." },
          { "name": "Network 패널", "desc": "API 요청의 URL, 메서드, 상태 코드, 요청 본문, 응답 데이터, 처리 시간을 확인한다." },
          { "name": "요청 오류 구분", "desc": "요청 자체가 전송되지 않은 문제, 서버 오류, 잘못된 응답 데이터, 화면 렌더링 오류를 분리한다." },
          { "name": "React DevTools", "desc": "Components 패널에서 컴포넌트 계층과 props·state를 확인하고, Profiler에서 어떤 컴포넌트가 다시 렌더링됐는지 살펴본다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "ESLint·TypeScript와 코드 정적 검사",
        "summary": "정적 분석 도구인 TypeScript와 ESLint를 활용해 소스 코드의 잠재적 오류, 규칙 위반, 코드 품질 문제를 사전에 검사하고 개선하는 방법을 학습합니다.",
        "topics": [
          { "name": "정적 검사의 개념", "desc": "애플리케이션을 직접 실행하지 않고 소스 코드를 분석해 잠재적인 오류와 규칙 위반을 찾는다." },
          { "name": "TypeScript 검사", "desc": "잘못된 함수 인수, 누락된 객체 속성, 처리하지 않은 null, 잘못된 반환 타입 등을 확인한다." },
          { "name": "ESLint의 역할", "desc": "사용하지 않는 변수, 잘못된 문법, 위험한 코드 패턴, 프로젝트에서 정한 코드 규칙 위반을 찾아낸다." },
          { "name": "오류와 경고", "desc": "반드시 수정해야 하는 문제는 error, 실행은 가능하지만 검토가 필요한 문제는 warning 수준으로 구분한다." },
          { "name": "Lint 실행", "desc": "프로젝트의 lint 명령어를 실행해 편집기에서 놓친 전체 파일의 문제를 확인한다." },
          { "name": "자동 수정", "desc": "안전하게 자동 수정할 수 있는 문제는 lint의 자동 수정 기능을 사용하되, 수정 결과는 직접 검토한다." },
          { "name": "React Hooks 규칙", "desc": "Hook을 조건문이나 반복문 안에서 호출하지 않았는지, Effect 의존성이 누락되지 않았는지 확인한다." },
          { "name": "사용하지 않는 코드", "desc": "사용하지 않는 import, 변수, 함수, 컴포넌트를 제거해 실제 코드 흐름을 명확하게 만든다." },
          { "name": "중복 코드", "desc": "같은 계산과 조건문이 반복되면 함수, 컴포넌트, 커스텀 훅으로 분리할 수 있는지 검토한다." },
          { "name": "지나치게 긴 함수", "desc": "입력 처리, 검증, API 요청, 상태 변경, 화면 출력이 한 함수에 섞여 있다면 책임별로 나눈다." },
          { "name": "복잡한 조건문", "desc": "중첩된 if문을 조기 반환, 별도 검사 함수, 판별 가능한 유니온 등으로 단순화한다." },
          { "name": "무분별한 예외 처리 해제", "desc": "eslint-disable, @ts-ignore, any가 사용된 위치를 찾아 실제 원인을 해결할 수 있는지 검토한다." },
          { "name": "코드 포맷과 코드 품질 구분", "desc": "들여쓰기·따옴표 등의 모양을 맞추는 포맷팅과 논리적 오류를 찾는 lint의 역할을 구분한다." },
          { "name": "검사 명령 통합", "desc": "타입 검사, lint, 테스트, 빌드를 각각 실행할 수 있도록 프로젝트 명령어를 정리한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "테스트 기초와 Vitest 단위 테스트",
        "summary": "Vitest를 활용하여 함수와 훅 같은 작은 단위를 독립적으로 테스트하고, 경계값 조건과 Mock 기능을 통해 안정적인 단위 테스트를 작성하는 방법을 익힙니다.",
        "topics": [
          { "name": "테스트 코드의 역할", "desc": "현재 기능이 정상인지 확인하고, 코드 수정 이후 기존 기능이 망가지는 회귀 오류를 발견한다." },
          { "name": "테스트 종류 구분", "desc": "단위 테스트는 함수나 훅 같은 작은 단위를 독립적으로 검사하고, 통합 테스트는 여러 단위가 함께 동작하는지 확인한다." },
          { "name": "테스트 대상 선택", "desc": "계산 함수, 필터 함수, 데이터 변환 함수, 입력값 검증처럼 입출력이 명확한 로직부터 테스트한다." },
          { "name": "Vitest 설정", "desc": "Vitest를 설치하고 테스트 명령어와 테스트 환경을 프로젝트에 설정한다." },
          { "name": "테스트 파일 이름", "desc": "calculateProgress.test.ts, formatReturn.spec.ts처럼 어떤 코드를 검사하는 파일인지 알 수 있게 작성한다." },
          { "name": "describe()", "desc": "같은 함수나 기능에 관한 여러 테스트를 하나의 그룹으로 묶는다." },
          { "name": "test()와 it()", "desc": "한 가지 입력이나 행동에 따른 기대 결과를 하나의 테스트 사례로 작성한다." },
          { "name": "expect()", "desc": "실제 실행 결과가 예상한 값이나 조건과 일치하는지 검증한다." },
          { "name": "동등성 검사", "desc": "숫자·문자열 같은 원시값과 객체·배열의 내용을 비교하는 matcher를 구분한다." },
          { "name": "예외 검사", "desc": "잘못된 입력이 들어왔을 때 함수가 정해진 오류를 발생시키는지 확인한다." },
          { "name": "경계값 테스트", "desc": "정상적인 중간값만 검사하지 않고 0, 빈 배열, 100%, 음수, 최댓값 등 경계 조건을 검사한다." },
          { "name": "정상·실패 사례", "desc": "올바른 데이터뿐 아니라 누락된 값, 잘못된 자료형, 존재하지 않는 항목도 테스트한다." },
          { "name": "Arrange·Act·Assert", "desc": "테스트 데이터를 준비하고, 대상 코드를 실행한 뒤, 결과를 검증하는 세 단계로 테스트를 구성한다." },
          { "name": "테스트 독립성", "desc": "한 테스트의 실행 결과가 다른 테스트의 데이터나 실행 순서에 영향을 주지 않게 작성한다." },
          { "name": "비동기 함수 테스트", "desc": "Promise를 반환하는 함수는 async 테스트와 await를 사용해 결과 또는 오류를 기다린다." },
          { "name": "Mock 함수", "desc": "실제 API, 시간, 저장소처럼 테스트에서 직접 사용하기 어려운 의존성을 통제 가능한 가짜 함수로 교체한다." },
          { "name": "호출 여부 검사", "desc": "콜백 함수가 호출됐는지, 몇 번 호출됐는지, 어떤 인수를 받았는지 검증한다." },
          { "name": "Mock 초기화", "desc": "각 테스트가 끝난 뒤 mock 호출 기록과 변경된 구현을 초기화해 다른 테스트에 영향을 주지 않게 한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "React Testing Library 컴포넌트 테스트",
        "summary": "React Testing Library를 사용하여 컴포넌트의 사용자 관점 행동과 렌더링 결과를 검사하고, 비동기 상태와 콜백 Props를 테스트하는 방법을 배웁니다.",
        "topics": [
          { "name": "컴포넌트 테스트", "desc": "React 컴포넌트가 props를 올바르게 표시하고 사용자 행동에 맞게 화면을 변경하는지 검사한다." },
          { "name": "구현 방식보다 사용자 행동 검사", "desc": "컴포넌트 내부 state 이름이나 함수 호출 순서보다 사용자가 보는 텍스트, 입력창, 버튼과 결과를 중심으로 테스트한다." },
          { "name": "컴포넌트 렌더링", "desc": "render()를 사용해 테스트 환경의 DOM에 React 컴포넌트를 표시한다." },
          { "name": "화면 요소 검색", "desc": "screen 객체를 사용해 렌더링된 버튼, 제목, 입력창, 안내 문구를 찾는다." },
          { "name": "역할로 요소 찾기", "desc": "getByRole()로 버튼, 체크박스, 제목, 링크 등을 접근 가능한 역할과 이름을 기준으로 찾는다." },
          { "name": "라벨로 입력창 찾기", "desc": "getByLabelText()를 사용해 사용자가 인식하는 라벨을 기준으로 폼 요소를 선택한다." },
          { "name": "텍스트로 요소 찾기", "desc": "getByText()를 사용해 화면에 실제 표시되는 문구를 검사한다." },
          { "name": "getBy, queryBy, findBy", "desc": "즉시 존재해야 하는 요소, 존재하지 않아야 하는 요소, 비동기로 나타나는 요소에 맞는 검색 방식을 구분한다." },
          { "name": "사용자 이벤트", "desc": "실제 사용자와 비슷하게 클릭, 입력, 체크, 키보드 조작을 실행한다." },
          { "name": "입력 폼 테스트", "desc": "사용자가 값을 입력하면 입력창의 값이 변경되고 제출 후 예상한 결과가 나타나는지 확인한다." },
          { "name": "상태 변경 테스트", "desc": "완료 체크박스를 선택하면 완료 표시와 진도율이 변경되는지 검사한다." },
          { "name": "조건부 렌더링 테스트", "desc": "로딩, 오류, 빈 결과, 정상 결과 상태에서 각각 올바른 화면이 나타나는지 확인한다." },
          { "name": "콜백 Props 테스트", "desc": "삭제 버튼을 클릭했을 때 부모가 전달한 onDelete 함수가 올바른 id와 함께 호출되는지 확인한다." },
          { "name": "비동기 화면 테스트", "desc": "API 응답 이후 나타나는 요소는 findBy 또는 waitFor()를 사용해 기다린 뒤 검사한다." },
          { "name": "data-testid 사용 제한", "desc": "역할, 라벨, 텍스트로 찾기 어려운 요소에만 보조적인 선택자로 사용한다." },
          { "name": "리팩터링에 강한 테스트", "desc": "CSS 클래스명이나 내부 함수 이름에 의존하지 않아 구현을 바꾸더라도 사용자 기능이 같으면 통과하게 작성한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "Playwright E2E 테스트",
        "summary": "Playwright를 활용해 실제 브라우저 환경에서 사용자의 전체 탐색 및 입력 흐름을 검사하고, 시각적 디버깅과 실패 원인 분석 기능을 익힙니다.",
        "topics": [
          { "name": "E2E 테스트의 개념", "desc": "실제 브라우저 환경에서 사용자가 페이지에 접속해 기능을 완료하는 전체 흐름을 검사한다." },
          { "name": "단위 테스트와의 차이", "desc": "단위 테스트는 개별 함수나 컴포넌트를 빠르게 검사하고, E2E 테스트는 페이지 이동·API·브라우저 저장소 등 전체 시스템의 연결을 확인한다." },
          { "name": "Playwright 설정", "desc": "Playwright와 테스트용 브라우저를 설치하고 테스트 대상 서버 주소를 설정한다." },
          { "name": "테스트 페이지 이동", "desc": "page.goto()를 사용해 앱의 특정 URL에 접속한다." },
          { "name": "Locator", "desc": "페이지의 버튼, 입력창, 링크 등을 찾아 이후 클릭·입력·검증 작업에 재사용한다." },
          { "name": "역할 기반 Locator", "desc": "getByRole()과 접근 가능한 이름을 사용해 실제 사용자가 인식하는 방식으로 요소를 찾는다." },
          { "name": "자동 대기", "desc": "Playwright가 요소가 표시되고 상호작용 가능한 상태가 될 때까지 기다리는 기능을 활용한다." },
          { "name": "사용자 입력", "desc": "fill(), click(), check(), selectOption() 등으로 실제 사용자 행동을 재현한다." },
          { "name": "화면 결과 검증", "desc": "URL, 제목, 텍스트, 표시 여부, 입력값, 요소 개수 등을 expect()로 확인한다." },
          { "name": "페이지 이동 테스트", "desc": "주차 목록에서 상세 페이지를 선택했을 때 올바른 동적 URL과 콘텐츠가 표시되는지 검사한다." },
          { "name": "학습 완료 흐름", "desc": "체크박스를 선택한 뒤 진도율이 변경되고 새로고침 이후에도 완료 상태가 유지되는지 확인한다." },
          { "name": "필터 흐름", "desc": "완료 필터를 선택하면 완료된 항목만 남고 URL 검색 파라미터도 올바르게 변경되는지 검사한다." },
          { "name": "폼 오류 흐름", "desc": "빈 입력값이나 잘못된 데이터를 제출했을 때 오류 문구가 표시되고 데이터가 추가되지 않는지 확인한다." },
          { "name": "API 실패 흐름", "desc": "네트워크 응답을 가로채 서버 오류를 재현하고 오류 화면과 재시도 버튼이 작동하는지 검사한다." },
          { "name": "브라우저별 검사", "desc": "Chromium을 기본으로 사용하고 필요에 따라 Firefox와 WebKit에서도 주요 사용자 흐름을 검사한다." },
          { "name": "UI Mode", "desc": "테스트 목록, 실행 단계, 브라우저 화면, 오류 위치를 시각적으로 확인하며 테스트를 실행한다." },
          { "name": "Trace", "desc": "실패한 테스트의 각 단계, 네트워크 요청, 화면 상태를 기록해 실패 원인을 분석한다." },
          { "name": "스크린샷과 영상", "desc": "테스트 실패 시 화면 상태를 보존해 CI나 다른 환경에서 발생한 문제를 확인한다." },
          { "name": "안정적인 테스트", "desc": "임의의 setTimeout()으로 기다리지 않고 Locator와 조건 기반 assertion을 사용한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "접근성·Lighthouse·React 성능 분석",
        "summary": "웹 접근성 기준을 준수하고, Lighthouse 감사와 React Profiler를 활용하여 애플리케이션의 성능, 네트워크, 렌더링 효율을 분석하고 최적화하는 방법을 배웁니다.",
        "topics": [
          { "name": "접근성의 개념", "desc": "마우스, 키보드, 스크린리더 등 서로 다른 방법으로 웹을 이용하는 사용자도 핵심 기능을 사용할 수 있게 만든다." },
          { "name": "키보드 조작", "desc": "마우스를 사용하지 않고 Tab, Shift+Tab, Enter, Space, Escape만으로 주요 기능을 사용할 수 있는지 확인한다." },
          { "name": "포커스 순서", "desc": "키보드 포커스가 화면과 DOM의 자연스러운 읽기 순서대로 이동하는지 확인한다." },
          { "name": "포커스 표시", "desc": "현재 선택된 링크, 버튼, 입력창이 시각적으로 명확하게 표시되는지 점검한다." },
          { "name": "시맨틱 요소", "desc": "클릭 기능에는 <button>, 페이지 이동에는 <a>, 입력에는 <input> 등 기본 HTML 요소를 우선 사용한다." },
          { "name": "폼 라벨", "desc": "모든 입력창에 연결된 <label>을 제공하고 placeholder만으로 입력 목적을 설명하지 않는다." },
          { "name": "접근 가능한 이름", "desc": "아이콘 버튼, 링크, 폼 요소가 스크린리더에서 목적을 이해할 수 있는 이름을 갖는지 확인한다." },
          { "name": "이미지 대체 텍스트", "desc": "정보를 전달하는 이미지에는 의미 있는 alt를 제공하고 장식용 이미지에는 빈 대체 텍스트를 사용한다." },
          { "name": "오류 메시지", "desc": "색상만으로 오류를 알리지 않고 해당 입력창 주변에 수정 방법을 포함한 문구를 표시한다." },
          { "name": "색상 대비", "desc": "글자, 버튼, 포커스 표시가 배경과 충분히 구분되는지 확인한다." },
          { "name": "자동 접근성 검사", "desc": "Lighthouse 또는 Playwright와 axe를 사용해 라벨 누락, 잘못된 ARIA, 색상 대비 등 자동으로 탐지 가능한 문제를 찾는다." },
          { "name": "수동 접근성 검사", "desc": "자동 도구만으로 발견할 수 없는 키보드 흐름, 문구 이해도, 포커스 이동, 화면 읽기 순서를 직접 확인한다." },
          { "name": "Lighthouse", "desc": "Chrome DevTools에서 성능, 접근성, 모범 사례, SEO 등의 자동 감사를 실행한다." },
          { "name": "Lighthouse 결과 해석", "desc": "점수 자체만 높이는 것이 아니라 실패한 audit의 원인과 사용자에게 미치는 영향을 확인한다." },
          { "name": "Core Web Vitals", "desc": "주요 콘텐츠 표시 속도인 LCP, 사용자 상호작용 반응성인 INP, 화면의 시각적 안정성인 CLS를 구분한다." },
          { "name": "Network 성능 분석", "desc": "지나치게 큰 이미지, 중복 요청, 긴 요청 시간, 불필요한 JavaScript 파일을 확인한다." },
          { "name": "이미지 최적화", "desc": "실제 표시 크기에 맞는 이미지와 적절한 형식을 사용하고, 화면 밖 이미지는 필요한 시점에 불러온다." },
          { "name": "불필요한 클라이언트 코드", "desc": "Next.js에서 상호작용하지 않는 영역까지 \"use client\"로 지정하지 않았는지 점검한다." },
          { "name": "React 재렌더링 확인", "desc": "React DevTools Profiler를 사용해 어떤 컴포넌트가 언제, 얼마나 자주 렌더링됐는지 확인한다." },
          { "name": "불필요한 렌더링 원인", "desc": "매번 새로 생성되는 객체·함수 props, 지나치게 넓은 Context, 중복 state 등을 확인한다." },
          { "name": "최적화 전 측정", "desc": "memo, useMemo, useCallback을 먼저 적용하지 않고 실제 렌더링 문제가 측정된 위치에만 사용한다." },
          { "name": "개발·운영 환경 비교", "desc": "개발 모드는 추가 검사로 느릴 수 있으므로 최종 성능은 운영용 빌드에서도 확인한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 앱 종합 품질 개선",
        "summary": "핵심 사용자 흐름을 중심으로 단위 테스트, 컴포넌트 테스트, E2E 테스트, 접근성 및 성능 검사를 종합적으로 수행하여 학습 진도 관리 앱의 전체적인 품질을 완성합니다.",
        "topics": [
          { "name": "핵심 사용자 흐름 선정", "desc": "모든 세부 구현을 테스트하려 하지 않고 실제 사용자에게 중요한 흐름을 먼저 정한다." },
          { "name": "핵심 흐름 1: 학습 완료", "desc": "사용자가 학습 항목을 완료하면 완료 상태와 전체 진도율이 정확하게 변경되는지 확인한다." },
          { "name": "핵심 흐름 2: 데이터 유지", "desc": "페이지를 새로고침하거나 다시 접속해도 저장한 학습 상태와 설정이 복원되는지 확인한다." },
          { "name": "핵심 흐름 3: 주차 이동", "desc": "주차 목록에서 상세 페이지로 이동하고 존재하지 않는 주차는 404 화면으로 처리되는지 확인한다." },
          { "name": "핵심 흐름 4: 검색과 필터", "desc": "검색어와 완료 상태를 조합했을 때 올바른 항목만 표시되고 URL 상태가 유지되는지 확인한다." },
          { "name": "핵심 흐름 5: 오류 복구", "desc": "데이터 요청 실패 시 오류 화면이 표시되고 재시도 후 정상 화면으로 돌아오는지 확인한다." },
          { "name": "계산 함수 단위 테스트", "desc": "완료율, 필터, 정렬, 데이터 변환 함수를 Vitest로 검사한다." },
          { "name": "경계값 테스트", "desc": "항목이 0개일 때의 진도율, 모두 완료된 상태, 존재하지 않는 주차, 손상된 저장 데이터 등을 검사한다." },
          { "name": "컴포넌트 테스트", "desc": "진도 카드, 학습 항목, 필터 버튼, 입력 폼이 props와 사용자 입력에 맞게 동작하는지 확인한다." },
          { "name": "로딩·오류·빈 상태 테스트", "desc": "정상 데이터 화면뿐 아니라 로딩 중, 오류 발생, 검색 결과 없음 상태도 각각 검사한다." },
          { "name": "E2E 테스트", "desc": "학습 완료, 필터 적용, 상세 페이지 이동, 새로고침 후 데이터 복원의 전체 흐름을 Playwright로 작성한다." },
          { "name": "접근성 테스트", "desc": "주요 페이지를 키보드만으로 조작하고 폼 라벨, 버튼 이름, 포커스 표시를 확인한다." },
          { "name": "자동 접근성 검사", "desc": "주요 페이지에 axe 기반 검사를 추가해 반복적으로 발생하는 접근성 위반을 찾는다." },
          { "name": "Lighthouse 검사", "desc": "홈, 주차 목록, 주차 상세, 통계 페이지를 각각 검사하고 공통 문제와 페이지별 문제를 구분한다." },
          { "name": "React Profiler 검사", "desc": "체크박스 하나를 변경했을 때 무관한 목록 전체나 레이아웃까지 다시 렌더링되는지 확인한다." },
          { "name": "Network 검사", "desc": "중복 API 요청, 지나치게 큰 응답, 캐시되지 않는 정적 파일, 불필요한 이미지 요청을 확인한다." },
          { "name": "ESLint와 타입 오류 해결", "desc": "lint와 TypeScript 검사를 통과시키고 예외 처리용 주석과 any가 남아 있는지 점검한다." },
          { "name": "운영 빌드 검사", "desc": "npm run build를 실행해 테스트 환경에서는 드러나지 않은 빌드, 타입, 서버·클라이언트 경계 오류를 확인한다." },
          { "name": "품질 검사 명령 정리", "desc": "lint, 타입 검사, 단위 테스트, E2E 테스트, 빌드를 순서대로 실행할 수 있게 프로젝트 명령어를 정리한다." },
          { "name": "버그 수정 전 테스트 작성", "desc": "발견한 버그가 다시 발생하지 않도록 실패 상황을 재현하는 테스트를 먼저 추가한 뒤 코드를 수정한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 단순한 스타일 평가가 아니라 오류 가능성, 테스트되지 않은 분기, 접근성 위반, 성능 병목을 근거와 함께 지적하게 한다." },
          { "name": "AI 생성 테스트 검증", "desc": "AI가 작성한 테스트가 실제 기능을 검증하는지, 단순히 렌더링 여부만 확인하거나 모든 값을 mock 처리하지 않았는지 점검한다." },
          { "name": "최종 품질 기록", "desc": "발견한 문제, 원인, 수정 내용, 추가한 테스트, 남은 한계를 README나 별도 품질 보고서에 정리한다." }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  },
  {
    "week": 12,
    "weekTitle": "Git·배포·보안·최종 프로젝트 출시",
    "days": [
      {
        "day": 1,
        "title": "Git으로 코드 변경 이력 관리",
        "summary": "Git의 버전 관리 개념과 저장소 생성, Staging, 커밋, 변경사항 비교 및 취소 명령어를 활용하여 코드 변경 이력을 안전하게 관리하는 방법을 익힙니다.",
        "topics": [
          { "name": "버전 관리의 개념", "desc": "파일을 단순히 복사해 보관하는 대신 코드가 언제, 왜, 어떻게 변경됐는지 기록하고 이전 상태로 돌아갈 수 있게 관리한다." },
          { "name": "Git 저장소", "desc": "프로젝트 폴더 안에 코드 변경 이력을 저장하는 .git 영역을 만든다." },
          { "name": "저장소 생성", "desc": "git init으로 현재 프로젝트 폴더를 새로운 Git 저장소로 만든다." },
          { "name": "현재 상태 확인", "desc": "git status로 변경된 파일, 아직 추적하지 않는 파일, 커밋할 준비가 된 파일을 구분한다." },
          { "name": "작업 영역", "desc": "개발자가 실제로 파일을 수정하고 있는 현재 프로젝트 폴더를 의미한다." },
          { "name": "Staging Area", "desc": "다음 커밋에 포함할 변경사항을 임시로 선택해 두는 영역이다." },
          { "name": "파일 Staging", "desc": "git add 파일명으로 특정 파일을, git add .으로 현재 폴더의 변경사항을 Staging Area에 추가한다." },
          { "name": "커밋 생성", "desc": "git commit -m \"메시지\"로 선택한 변경사항을 하나의 버전으로 기록한다." },
          { "name": "커밋 단위", "desc": "여러 기능과 수정사항을 한 번에 묶지 않고 하나의 목적을 가진 변경사항끼리 커밋한다." },
          { "name": "커밋 메시지", "desc": "학습 완료 필터 추가, 빈 데이터 오류 수정처럼 무엇이 변경됐는지 구체적으로 작성한다." },
          { "name": "커밋 기록 확인", "desc": "git log와 git log --oneline으로 기존 커밋의 순서와 식별값을 확인한다." },
          { "name": "변경사항 비교", "desc": "git diff로 작업 영역의 변경사항을 확인하고, git diff --staged로 커밋 예정 내용을 확인한다." },
          { "name": "파일 제외", "desc": ".gitignore에 node_modules, .next, .env.local처럼 저장소에 올리지 않을 파일과 폴더를 작성한다." },
          { "name": "수정 취소", "desc": "git restore 파일명으로 아직 커밋하지 않은 파일의 변경사항을 되돌린다." },
          { "name": "Staging 취소", "desc": "git restore --staged 파일명으로 파일 수정 내용은 유지하면서 커밋 대상에서만 제외한다." },
          { "name": "이전 커밋 되돌리기", "desc": "이미 공유된 커밋을 취소할 때는 기존 기록을 삭제하기보다 git revert로 반대 변경을 담은 새 커밋을 만드는 방식을 익힌다." },
          { "name": "위험한 명령어 구분", "desc": "git reset --hard처럼 작업 내용을 삭제할 수 있는 명령은 AI가 제시하더라도 영향 범위를 확인하지 않고 실행하지 않는다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 2,
        "title": "GitHub·브랜치·Pull Request",
        "summary": "원격 저장소 연동과 GitHub를 통한 협업의 핵심인 브랜치 관리, Pull Request 검토, 그리고 Merge Conflict 해결 방법을 배웁니다.",
        "topics": [
          { "name": "Git과 GitHub의 차이", "desc": "Git은 로컬에서 변경 이력을 관리하는 도구이고, GitHub는 Git 저장소를 원격으로 보관하고 공유·검토하는 서비스다." },
          { "name": "원격 저장소 생성", "desc": "GitHub에서 새로운 Repository를 만들고 프로젝트 이름, 공개 여부, 설명을 설정한다." },
          { "name": "원격 저장소 연결", "desc": "git remote add origin 저장소주소로 로컬 Git 저장소와 GitHub 저장소를 연결한다." },
          { "name": "원격 저장소 확인", "desc": "git remote -v로 연결된 원격 저장소 이름과 주소를 확인한다." },
          { "name": "코드 업로드", "desc": "git push -u origin main으로 로컬의 main 브랜치를 GitHub에 처음 업로드한다." },
          { "name": "저장소 복제", "desc": "다른 컴퓨터나 폴더에서 기존 프로젝트를 가져올 때 git clone을 사용한다." },
          { "name": "원격 변경사항 가져오기", "desc": "git pull로 원격 저장소의 변경사항을 현재 브랜치에 받아온다." },
          { "name": "브랜치의 역할", "desc": "안정적인 코드와 새로운 기능 개발 코드를 분리해 서로 영향을 주지 않고 작업한다." },
          { "name": "브랜치 생성", "desc": "git switch -c feature/progress-filter처럼 작업 목적이 드러나는 이름으로 브랜치를 만든다." },
          { "name": "브랜치 이동", "desc": "git switch 브랜치명으로 현재 작업할 브랜치를 변경한다." },
          { "name": "브랜치 목록 확인", "desc": "git branch로 로컬 브랜치와 현재 선택된 브랜치를 확인한다." },
          { "name": "기능 브랜치 작업", "desc": "검색 기능, 오류 수정, 디자인 개선 등을 별도의 브랜치에서 구현하고 커밋한다." },
          { "name": "Pull Request", "desc": "기능 브랜치의 변경사항을 main 브랜치에 반영하기 전에 내용과 코드를 검토하도록 요청한다." },
          { "name": "PR 제목과 설명", "desc": "무엇을 구현했는지, 주요 변경사항은 무엇인지, 어떻게 테스트했는지를 작성한다." },
          { "name": "Diff 검토", "desc": "Pull Request의 Files changed에서 의도하지 않은 파일, 디버깅 로그, 환경변수, 불필요한 코드가 포함됐는지 확인한다." },
          { "name": "Preview 화면 검토", "desc": "코드만 읽지 않고 실제 배포된 미리보기 환경에서 기능과 레이아웃을 확인한다." },
          { "name": "Merge", "desc": "코드 검토와 테스트가 끝난 기능 브랜치를 main 브랜치에 합친다." },
          { "name": "Merge Conflict", "desc": "같은 파일의 같은 부분이 서로 다르게 수정됐을 때 어느 코드를 남길지 직접 판단하고 충돌 표시를 제거한다." },
          { "name": "브랜치 삭제", "desc": "병합이 완료된 기능 브랜치는 삭제해 현재 진행 중인 작업과 완료된 작업을 구분한다." },
          { "name": "브랜치 보호", "desc": "중요한 프로젝트에서는 main에 직접 push하지 않고 Pull Request와 상태 검사를 통과해야 병합되도록 설정할 수 있다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 3,
        "title": "운영 빌드와 GitHub Actions CI",
        "summary": "운영용 빌드 검증의 중요성을 이해하고, GitHub Actions를 활용하여 코드 푸시 및 PR마다 lint, 테스트, 빌드를 자동화하는 CI 파이프라인을 구축합니다.",
        "topics": [
          { "name": "개발 환경과 운영 환경", "desc": "개발 서버에서 정상적으로 보이는 것과 실제 운영용 빌드가 성공하는 것은 별개의 문제다." },
          { "name": "운영 빌드 실행", "desc": "npm run build로 Next.js가 운영 환경에서 실행 가능한 결과물을 만들 수 있는지 확인한다." },
          { "name": "빌드 오류 확인", "desc": "TypeScript 오류, 잘못된 import, 서버·클라이언트 컴포넌트 경계 오류, 누락된 환경변수를 확인한다." },
          { "name": "Lint 실행", "desc": "프로젝트의 lint 명령으로 사용하지 않는 변수, 잘못된 Hook 사용, 코드 규칙 위반을 검사한다." },
          { "name": "단위 테스트 실행", "desc": "Vitest를 실행해 계산 함수, 필터 함수, 데이터 변환 함수가 통과하는지 확인한다." },
          { "name": "E2E 테스트 실행", "desc": "Playwright로 학습 완료, 페이지 이동, 데이터 복원 등 주요 사용자 흐름을 검사한다." },
          { "name": "로컬 품질 검사 순서", "desc": "타입 검사 → lint → 단위 테스트 → 운영 빌드 → E2E 테스트 순으로 전체 품질 검사를 실행한다." },
          { "name": "CI의 개념", "desc": "코드를 GitHub에 올릴 때마다 서버가 자동으로 검사 명령을 실행해 변경사항의 안전성을 확인한다." },
          { "name": "GitHub Actions", "desc": "GitHub 저장소 안에서 코드 설치, 타입 검사, 테스트, 빌드 등의 작업을 자동으로 실행한다." },
          { "name": "Workflow 파일", "desc": ".github/workflows/ci.yml에 CI를 실행할 조건과 단계를 작성한다." },
          { "name": "실행 조건", "desc": "push와 pull_request를 기준으로 워크플로가 실행되도록 설정한다." },
          { "name": "코드 Checkout", "desc": "워크플로 실행 환경에 현재 저장소 코드를 가져오는 단계를 추가한다." },
          { "name": "Node.js 환경", "desc": "프로젝트에서 사용하는 Node.js 버전을 CI 환경에도 동일하게 설정한다." },
          { "name": "의존성 설치", "desc": "잠금 파일을 기준으로 일관되게 설치하도록 npm ci를 사용한다." },
          { "name": "검사 단계 분리", "desc": "lint, 테스트, 빌드를 각각 별도 단계로 작성해 실패한 위치를 쉽게 파악한다." },
          { "name": "CI 실패 분석", "desc": "빨간 실패 표시만 보고 AI에게 수정을 맡기지 않고 어느 명령과 파일에서 실패했는지 로그를 확인한다." },
          { "name": "상태 검사", "desc": "Pull Request에서 CI가 통과했는지 확인한 뒤 main 브랜치로 병합한다." },
          { "name": "로컬과 CI 환경 차이", "desc": "운영체제, Node.js 버전, 환경변수, 대소문자 구분 등으로 로컬에서는 없던 오류가 발생할 수 있음을 확인한다." },
          { "name": "잠금 파일 관리", "desc": "package-lock.json을 저장소에 포함해 로컬과 CI에서 비슷한 의존성 버전이 설치되도록 한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 4,
        "title": "Vercel 배포와 Preview 환경",
        "summary": "Vercel을 활용하여 Next.js 프로젝트를 배포하고, 브랜치별 Preview Deployment를 통해 운영 반영 전 미리보기 검수를 수행하는 방법을 익힙니다.",
        "topics": [
          { "name": "배포의 개념", "desc": "로컬 컴퓨터에서만 실행되던 앱을 인터넷 주소를 통해 다른 사용자도 접속할 수 있는 환경에 올린다." },
          { "name": "Vercel 프로젝트 생성", "desc": "GitHub 저장소를 Vercel에 연결하고 Next.js 프로젝트로 인식되는지 확인한다." },
          { "name": "빌드 설정 확인", "desc": "프레임워크, 프로젝트 루트, 빌드 명령어, 결과물 설정이 올바른지 확인한다." },
          { "name": "Production Branch", "desc": "실제 운영 서비스에 반영할 기준 브랜치를 일반적으로 main으로 설정한다." },
          { "name": "자동 배포", "desc": "Production Branch에 변경사항이 반영되면 새로운 운영 배포가 생성되는 흐름을 확인한다." },
          { "name": "Preview Deployment", "desc": "기능 브랜치나 Pull Request의 변경사항을 운영 서비스에 반영하기 전에 별도의 URL로 미리 확인한다." },
          { "name": "배포 환경 구분", "desc": "Local, Preview, Production 환경에서 사용하는 코드와 환경변수를 구분한다." },
          { "name": "배포 URL 확인", "desc": "Vercel이 생성한 URL로 접속해 홈, 동적 페이지, API 경로, 새로고침을 확인한다." },
          { "name": "직접 URL 접근", "desc": "홈에서 링크를 눌러 이동하는 것뿐 아니라 /weeks/1 같은 경로를 주소창에 직접 입력해도 열리는지 확인한다." },
          { "name": "Preview 검수", "desc": "Pull Request를 병합하기 전에 Preview URL에서 모바일 화면, 폼, API 요청, 오류 화면을 검사한다." },
          { "name": "운영 배포 검수", "desc": "main 병합 후 운영 URL에서 핵심 기능을 다시 확인한다." },
          { "name": "배포 로그", "desc": "빌드 실패 시 Vercel 로그에서 실패한 명령, 파일, 오류 메시지를 확인한다." },
          { "name": "Runtime 로그", "desc": "배포는 성공했지만 서버 요청이 실패하는 경우 실행 로그를 확인한다." },
          { "name": "재배포", "desc": "환경변수나 설정을 수정한 뒤 기존 코드를 다시 배포한다." },
          { "name": "Rollback", "desc": "새 배포에서 치명적인 문제가 발생하면 이전 정상 배포로 되돌리는 방법을 확인한다." },
          { "name": "사용자 정의 도메인", "desc": "필요하면 별도로 구매한 도메인을 Vercel 프로젝트에 연결하고 대표 도메인을 설정한다." },
          { "name": "HTTPS 확인", "desc": "운영 주소가 암호화된 HTTPS 연결로 제공되는지 확인한다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 5,
        "title": "환경변수와 기본 웹 보안",
        "summary": "실행 환경별 환경변수 관리 방법과 입력값 검증, XSS 방지 등 웹 애플리케이션의 기본 보안 원칙을 학습합니다.",
        "topics": [
          { "name": "환경변수의 역할", "desc": "API 주소, 서비스 설정값, 인증 키처럼 코드와 분리해야 하는 값을 실행 환경별로 관리한다." },
          { "name": "로컬 환경변수", "desc": "로컬 개발에 필요한 값은 .env.local에 저장한다." },
          { "name": "Git 제외", "desc": "실제 키가 들어 있는 환경변수 파일은 .gitignore에 포함하고 GitHub에 커밋하지 않는다." },
          { "name": "Vercel 환경변수", "desc": "Vercel 프로젝트 설정에서 Development, Preview, Production 환경별 값을 등록한다." },
          { "name": "환경별 값 분리", "desc": "테스트 API와 운영 API처럼 환경에 따라 달라져야 하는 값을 각각 설정한다." },
          { "name": "서버 전용 환경변수", "desc": "API 비밀 키와 데이터베이스 인증값은 서버 코드에서만 사용한다." },
          { "name": "공개 환경변수", "desc": "NEXT_PUBLIC_이 붙은 값은 브라우저로 전달될 수 있으므로 비밀정보를 저장하지 않는다." },
          { "name": "키 노출 대응", "desc": "비밀 키를 실수로 GitHub에 올렸다면 파일만 삭제하는 것으로 끝내지 않고 해당 키를 폐기하거나 재발급한다." },
          { "name": "입력값 검증", "desc": "폼, URL, API 요청으로 들어오는 값의 존재 여부, 자료형, 길이, 범위를 서버에서도 확인한다." },
          { "name": "클라이언트 검증의 한계", "desc": "브라우저의 required나 JavaScript 검증은 사용자가 우회할 수 있으므로 중요한 데이터는 서버에서 다시 검증한다." },
          { "name": "인증과 권한 구분", "desc": "인증은 사용자가 누구인지 확인하는 과정이고, 권한 검사는 해당 사용자가 특정 데이터와 기능에 접근할 수 있는지 확인하는 과정이다." },
          { "name": "민감정보 응답 제한", "desc": "비밀번호, 비밀 키, 내부 오류 정보 등 사용자에게 필요하지 않은 값을 API 응답에 포함하지 않는다." },
          { "name": "XSS의 개념", "desc": "사용자 입력이나 외부 데이터에 포함된 악성 스크립트가 페이지에서 실행되는 문제를 이해한다." },
          { "name": "텍스트 출력 우선", "desc": "사용자 입력을 출력할 때 HTML 문자열을 직접 삽입하기보다 React의 일반 JSX 텍스트 출력을 사용한다." },
          { "name": "HTML 직접 삽입 주의", "desc": "dangerouslySetInnerHTML은 신뢰할 수 없거나 검증되지 않은 콘텐츠에 사용하지 않는다." },
          { "name": "URL 검증", "desc": "사용자가 입력한 링크를 그대로 사용하지 않고 허용할 프로토콜과 형식을 검사한다." },
          { "name": "오류 메시지 제한", "desc": "사용자에게는 이해 가능한 오류 문구를 제공하되 서버 경로, DB 구조, 비밀 설정값을 그대로 노출하지 않는다." },
          { "name": "의존성 점검", "desc": "사용하지 않는 패키지를 제거하고 보안 문제가 보고된 의존성이 있는지 정기적으로 확인한다." },
          { "name": "비밀정보 로그 금지", "desc": "API 키, 인증 토큰, 사용자 개인정보를 console.log()나 운영 로그에 출력하지 않는다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 6,
        "title": "운영 점검·SEO·README·포트폴리오 문서화",
        "summary": "서비스 출시 전 스모크 테스트와 SEO 설정을 점검하고, 프로젝트의 가치를 효과적으로 전달하기 위한 README 및 포트폴리오 문서화 방법을 배웁니다.",
        "topics": [
          { "name": "운영 점검의 개념", "desc": "배포 성공 여부만 확인하지 않고 실제 사용자가 서비스에 접속한 이후 발생할 수 있는 오류와 불편을 확인한다." },
          { "name": "Smoke Test", "desc": "배포 직후 홈 접속, 내비게이션, 로그인, 저장, 주요 API 등 핵심 기능이 최소한 정상 작동하는지 빠르게 검사한다." },
          { "name": "브라우저별 확인", "desc": "Chrome을 기본으로 검사하고 모바일 Safari나 다른 주요 브라우저에서도 핵심 화면을 확인한다." },
          { "name": "반응형 확인", "desc": "모바일, 태블릿, 데스크톱 화면에서 가로 스크롤, 잘린 버튼, 겹친 텍스트가 없는지 확인한다." },
          { "name": "새로고침 확인", "desc": "동적 페이지와 검색 파라미터가 포함된 페이지에서 새로고침해도 정상적으로 표시되는지 검사한다." },
          { "name": "로딩 상태", "desc": "네트워크가 느린 상황에서 빈 화면이 아니라 스켈레톤이나 로딩 문구가 표시되는지 확인한다." },
          { "name": "오류 상태", "desc": "API 실패와 존재하지 않는 데이터에서 오류 화면, 재시도 버튼, 404 화면이 정상 작동하는지 확인한다." },
          { "name": "운영 로그", "desc": "서버 요청 실패, 예외, 반복되는 오류를 로그에서 확인하되 민감정보를 기록하지 않는다." },
          { "name": "성능 점검", "desc": "Lighthouse와 Network 패널로 큰 이미지, 중복 요청, 불필요한 JavaScript, 느린 서버 응답을 확인한다." },
          { "name": "접근성 점검", "desc": "키보드 조작, 포커스 표시, 폼 라벨, 제목 구조, 색상 대비를 최종 확인한다." },
          { "name": "페이지 제목", "desc": "각 페이지의 역할을 알 수 있는 고유한 제목과 설명을 Metadata API로 설정한다." },
          { "name": "공유 이미지", "desc": "프로젝트 링크를 공유했을 때 표시할 Open Graph 제목, 설명, 이미지를 설정한다." },
          { "name": "파비콘", "desc": "브라우저 탭과 북마크에서 서비스를 구분할 수 있는 아이콘을 추가한다." },
          { "name": "robots.ts", "desc": "검색엔진이 접근할 수 있는 페이지와 제한할 경로를 설정한다." },
          { "name": "sitemap.ts", "desc": "검색엔진이 주요 공개 페이지의 URL을 찾을 수 있도록 사이트맵을 생성한다." },
          { "name": "README의 역할", "desc": "처음 프로젝트를 보는 사람이 무엇을 만든 서비스인지, 왜 만들었는지, 어떻게 실행하는지 이해할 수 있게 작성한다." },
          { "name": "프로젝트 소개", "desc": "서비스의 목적과 해결하려는 사용자 문제를 2~3문장으로 설명한다." },
          { "name": "핵심 기능", "desc": "학습 진도 관리, 검색·필터, 통계, 다크 모드, 데이터 저장 등 사용자가 실제로 이용할 기능을 정리한다." },
          { "name": "기술 스택", "desc": "Next.js, React, TypeScript, CSS Modules, Vitest, Playwright, Vercel 등 실제 사용한 기술만 기록한다." },
          { "name": "설치 및 실행 방법", "desc": "저장소 복제, 의존성 설치, 환경변수 준비, 개발 서버 실행 명령을 순서대로 작성한다." },
          { "name": "환경변수 예시", "desc": "실제 비밀 값 대신 필요한 변수 이름만 .env.example에 작성한다." },
          { "name": "폴더 구조", "desc": "주요 폴더와 파일의 역할을 간단히 설명해 프로젝트 구조를 빠르게 파악할 수 있게 한다." },
          { "name": "스크린샷", "desc": "홈, 상세 페이지, 모바일 화면, 오류 화면 등 주요 사용자 경험을 보여주는 이미지를 추가한다." },
          { "name": "문제 해결 기록", "desc": "개발 중 발생한 대표적인 문제와 원인, 해결 방법을 정리한다." },
          { "name": "향후 개선사항", "desc": "실제 DB 연결, 사용자 인증, 서버 저장, 알림 기능 등 현재 구현하지 못한 범위를 명확하게 적는다." }
        ],
        "practice": "",
        "deliverable": ""
      },
      {
        "day": 7,
        "title": "학습 진도 앱 최종 출시 프로젝트",
        "summary": "12주 동안 학습한 모든 기술을 총동원하여 학습 진도 관리 앱의 MVP 범위를 확정하고, 구현부터 Git 협업, CI/CD, 최종 배포 및 포트폴리오 문서화까지 완벽하게 수행합니다.",
        "topics": [
          { "name": "최종 프로젝트 범위 확정", "desc": "12주 동안 학습한 기술을 모두 억지로 넣지 않고 실제로 완성 가능한 MVP 기능을 확정한다." },
          { "name": "필수 페이지", "desc": "홈 대시보드, 전체 주차 목록, 주차별 상세 페이지, 통계 페이지, 설정 페이지를 구성한다." },
          { "name": "학습 데이터 구조", "desc": "주차, 일차, 제목, 설명, 완료 여부, 메모, 수정일자를 TypeScript 타입으로 정의한다." },
          { "name": "완료 상태 관리", "desc": "사용자가 체크박스를 변경하면 학습 데이터와 전체 진도율이 함께 갱신되게 한다." },
          { "name": "검색 기능", "desc": "제목과 학습 내용에서 검색어와 일치하는 항목을 찾는다." },
          { "name": "필터 기능", "desc": "전체, 완료, 미완료 상태와 주차 조건을 조합해 목록을 표시한다." },
          { "name": "정렬 기능", "desc": "일차순, 제목순, 최근 수정순 등 선택한 기준으로 데이터를 정렬한다." },
          { "name": "URL 상태", "desc": "검색어, 필터, 정렬 기준을 검색 파라미터에 반영해 새로고침과 링크 공유 후에도 동일한 조건을 유지한다." },
          { "name": "동적 상세 페이지", "desc": "/weeks/[week] 경로에서 해당 주차의 상세 학습 내용을 표시한다." },
          { "name": "잘못된 주차 처리", "desc": "존재하지 않는 주차 번호는 notFound()와 not-found.tsx로 처리한다." },
          { "name": "통계 화면", "desc": "전체 완료율, 완료 개수, 미완료 개수, 주차별 진도율을 계산해 표시한다." },
          { "name": "반응형 레이아웃", "desc": "모바일에서는 한 열, 넓은 화면에서는 사이드바와 콘텐츠 영역으로 배치한다." },
          { "name": "테마 설정", "desc": "라이트·다크 모드를 지원하고 사용자의 선택을 저장한다." },
          { "name": "데이터 저장", "desc": "학습용 버전은 브라우저 저장소를 사용할 수 있지만, 실제 여러 기기에서 공유하려면 서버와 DB가 필요하다는 한계를 문서화한다." },
          { "name": "로딩 화면", "desc": "데이터 처리 중 사용자가 현재 상태를 알 수 있도록 로딩 문구나 스켈레톤을 표시한다." },
          { "name": "빈 화면", "desc": "검색 결과와 필터 결과가 없을 때 이유와 다음 행동을 안내한다." },
          { "name": "오류 화면", "desc": "데이터 요청 실패 시 사용자용 오류 메시지와 재시도 버튼을 표시한다." },
          { "name": "접근성", "desc": "시맨틱 태그, 제목 순서, 폼 라벨, 키보드 조작, 포커스 표시를 점검한다." },
          { "name": "단위 테스트", "desc": "완료율 계산, 필터, 정렬, 검색, 데이터 검증 함수를 테스트한다." },
          { "name": "컴포넌트 테스트", "desc": "체크박스, 필터 버튼, 입력 폼, 오류 화면이 사용자 행동에 맞게 변경되는지 검사한다." },
          { "name": "E2E 테스트", "desc": "학습 완료 → 진도율 변경 → 상세 페이지 이동 → 새로고침 후 상태 유지 흐름을 검사한다." },
          { "name": "Git 브랜치 작업", "desc": "기능별 브랜치를 만들고 Pull Request를 통해 main에 병합한다." },
          { "name": "CI 통과", "desc": "Pull Request마다 lint, 타입 검사, 테스트, 빌드가 통과하는지 확인한다." },
          { "name": "Preview 검수", "desc": "운영 병합 전에 Preview URL에서 모바일과 데스크톱 화면을 직접 검사한다." },
          { "name": "운영 배포", "desc": "검수가 끝난 코드를 main에 병합하고 Vercel Production 환경에 배포한다." },
          { "name": "배포 후 Smoke Test", "desc": "운영 URL에서 홈, 주차 이동, 검색, 완료 처리, 새로고침, 오류 화면을 다시 확인한다." },
          { "name": "README 완성", "desc": "문제 정의, 핵심 기능, 기술 스택, 실행법, 화면, 설계 판단, 한계와 개선 방향을 기록한다." },
          { "name": "포트폴리오 문제 정의", "desc": "“무엇을 만들었는가”보다 “어떤 사용자의 어떤 문제를 해결하려 했는가”를 먼저 작성한다." },
          { "name": "기술 선택 이유", "desc": "React, TypeScript, Next.js를 사용한 이유를 각각 프로젝트 문제와 연결해 설명한다." },
          { "name": "핵심 설계 판단", "desc": "서버·클라이언트 컴포넌트 분리, URL 상태 관리, 타입 구조, 테스트 범위 등을 왜 그렇게 결정했는지 정리한다." },
          { "name": "트러블슈팅 사례", "desc": "가장 어려웠던 오류 하나를 골라 증상 → 원인 분석 → 해결 → 재발 방지 테스트 순서로 작성한다." },
          { "name": "AI 활용 기록", "desc": "AI가 생성한 코드 중 직접 검증하고 수정한 사례를 남겨 단순 생성이 아니라 코드 판단 능력을 보여준다." },
          { "name": "최종 회고", "desc": "잘한 점, 부족한 점, 다시 만든다면 변경할 점, 다음에 학습할 주제를 구체적으로 기록한다." },
          { "name": "ETF Analyzer 연결", "desc": "학습 진도 앱에서 익힌 대시보드, 필터, 동적 페이지, API, 차트 영역, 테스트, 배포 구조를 ETF Analyzer의 프론트엔드에 적용할 부분을 정리한다." },
          { "name": "AI 코드 리뷰 활용", "desc": "AI에게 전체 코드를 다시 작성하게 하지 않고 배포 전 위험 요소, 비밀정보 노출, 테스트 누락, 접근성 문제, 불필요한 클라이언트 코드만 검토하게 한다." },
          { "name": "최종 완료 기준", "desc": "운영 URL 접속 가능, 주요 기능 정상 작동, 모바일 화면 대응, 새로고침과 직접 URL 접근 정상, lint·타입 검사·테스트·빌드 통과, 환경변수와 비밀 키 미노출, README와 화면 이미지 작성, 알려진 한계와 개선 방향 기록" }
        ],
        "practice": "",
        "deliverable": ""
      }
    ]
  }
];


import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXedrUBjxgB6UK7xByD1a2iKzHwzGXpFk",
  authDomain: "frontend-b72bf.firebaseapp.com",
  projectId: "frontend-b72bf",
  storageBucket: "frontend-b72bf.firebasestorage.app",
  messagingSenderId: "1982598836",
  appId: "1:1982598836:web:b806c202547260b89051e1",
  measurementId: "G-YW04RFY66S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// ── 로컬 캐시 키 ─────────────────────────────────────────
// Firebase가 일시적으로 실패했을 때만 화면을 유지하기 위한 보조 캐시입니다.
// 실제 원본 데이터는 Firestore / Firebase Storage에 저장됩니다.
const STORAGE_KEY = "frontend_roadmap_files_v2";
const MEMO_STORAGE_KEY = "frontend_roadmap_memos_v2";


// ── 파일 업로드 제한 ─────────────────────────────────────────
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

// ── 접근 제어 검증 구조 ───────────────────────────────────────
// salt는 16바이트를 4개 조각으로 나누어 저장합니다.
const _S_PARTS = [
  [183, 247, 62, 119],
  [204, 31, 88, 173],
  [57, 142, 215, 9],
  [130, 76, 251, 44]
];

// Console에서 createPasswordVerifier()를 실행한 뒤 아래에 붙여 넣으세요.
const _H_PARTS = [
  "4912e45caa638a11",
  "c20ccc5fe0b9d890",
  "b51eabdb4b151a84",
  "5d6987321daf6442"
];

const _KDF_R = 350_000;

// PBKDF2-SHA256으로 입력값의 파생 해시를 계산합니다.
async function _deriveKey(raw) {
  const normalized = raw.normalize("NFKC");
  const encoded = new TextEncoder().encode(normalized);

  const baseKey = await crypto.subtle.importKey(
    "raw", encoded, "PBKDF2", false, ["deriveBits"]
  );

  const saltBytes = new Uint8Array(_S_PARTS.flat());

  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt: saltBytes, iterations: _KDF_R },
    baseKey,
    256
  );

  return Array.from(new Uint8Array(bits))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// 저장된 조각을 역순으로 복원해 기대값 문자열을 반환합니다.
function _getExpected() {
  return [..._H_PARTS].reverse().join("");
}

// 타이밍 공격을 방지하는 일정 시간 문자열 비교 함수입니다.
function _safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

// ── 상태 ─────────────────────────────────────────────────
let allFiles = [];
let allMemos = {};
const openWeeks = new Set();
const openDays = new Map(); // "w-d" → boolean
const openTopics = new Map(); // "w-d-t" → boolean
const memoSaveTimers = new Map();

// ── 유틸리티 ─────────────────────────────────────────────
const dayKey = (w, d) => `w${w}d${d}`;

function saveLocalCache() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allFiles));
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(allMemos));
}

// Firestore 데이터를 기다리지 않고 로컬 캐시로 먼저 화면을 렌더링합니다.
async function loadCloudData() {
  // Firebase 실패 시 사용할 로컬 백업
  const cachedFiles = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );

  const cachedMemos = JSON.parse(
    localStorage.getItem(MEMO_STORAGE_KEY) || "{}"
  );

  try {
    const [filesSnapshot, memosSnapshot] = await Promise.all([
      getDocs(collection(db, "files")),
      getDocs(collection(db, "memos"))
    ]);

    allFiles = filesSnapshot.docs.map(snapshot => {
      const data = snapshot.data();

      return {
        ...data,
        // 화면용 ID는 문자열로 통일합니다.
        id: String(data.id ?? snapshot.id),
        // 실제 Firestore 문서 삭제에는 반드시 문서 ID를 사용합니다.
        firestoreId: snapshot.id
      };
    });

    allMemos = {};

    memosSnapshot.forEach(snapshot => {
      const data = snapshot.data();

      if (typeof data.content === "string" && data.content.trim()) {
        allMemos[snapshot.id] = data.content;
      }
    });

    saveLocalCache();
  } catch (error) {
    console.error("클라우드 데이터 불러오기 실패:", error);

    // Firebase가 실패했을 때만 로컬 데이터 사용
    allFiles = cachedFiles;
    allMemos = cachedMemos;

    showToast("오프라인 상태입니다. 마지막 저장 상태로 동작합니다.");
  }

  // 성공하든 실패하든 화면은 딱 한 번만 렌더링
  render();
  updateProgress();
}

// 입력할 때마다 Firestore 쓰기가 발생하지 않도록 700ms 디바운스를 적용합니다.
function saveMemo(w, d, text) {
  const key = dayKey(w, d);

  if (!text.trim()) {
    delete allMemos[key];
  } else {
    allMemos[key] = text;
  }
  saveLocalCache();

  clearTimeout(memoSaveTimers.get(key));
  const timer = setTimeout(async () => {
    try {
      if (!text.trim()) {
        await deleteDoc(doc(db, "memos", key));
      } else {
        await setDoc(doc(db, "memos", key), {
          content: text,
          updatedAt: Date.now()
        });
      }
    } catch (error) {
      console.error("메모 저장 실패:", error);
      showToast("메모를 클라우드에 저장하지 못했습니다.");
    } finally {
      memoSaveTimers.delete(key);
    }
  }, 700);

  memoSaveTimers.set(key, timer);
}

function filesForDay(w, d) {
  return allFiles.filter(f => f.key === dayKey(w, d));
}

function isDayDone(w, d) {
  return filesForDay(w, d).length > 0;
}

function completedDays() {
  return new Set(allFiles.map(f => f.key)).size;
}

function weekProgress(w) {
  return CURRICULUM[w - 1].days.filter(day => isDayDone(w, day.day)).length;
}

function saveFiles() {
  saveLocalCache();
}

function ext(fileName) {
  return fileName.includes(".") ? fileName.split(".").pop().toLowerCase() : "file";
}

function formatSize(bytes) {
  if (!bytes) return "0B";
  const units = ["B", "KB", "MB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)}${units[i]}`;
}

// ── 토스트 ────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
}

// ── 진행률 업데이트 ──────────────────────────────────────
function updateProgress() {
  const done = completedDays();
  const total = 84;
  const pct = Math.round((done / total) * 100);
  const circ = 113.1; // 2π × 18

  const ring = document.getElementById("progressRing");
  if (ring) ring.style.strokeDashoffset = String(circ * (1 - done / total));

  const percentEl = document.getElementById("progressPercent");
  if (percentEl) percentEl.textContent = `${pct}%`;

  const countEl = document.getElementById("progressCount");
  if (countEl) countEl.textContent = `${done} / ${total}일 완료`;

  const barFill = document.getElementById("progressBarFill");
  if (barFill) barFill.style.width = `${pct}%`;

  const statNum = document.getElementById("completedStatNum");
  if (statNum) statNum.textContent = String(done);

  // 주차 도트 (헤더)
  const dotsEl = document.getElementById("progressWeeks");
  if (dotsEl) {
    dotsEl.innerHTML = Array.from({ length: 12 }, (_, i) => {
      const w = i + 1;
      const prog = weekProgress(w);
      let cls = "week-dot";
      if (prog === 7) cls += " complete";
      else if (prog > 0) cls += " partial";
      return `<span class="${cls}" title="${w}주차 ${prog}/7"></span>`;
    }).join("");
  }
}

// ── 아코디언 토글 ─────────────────────────────────────────
function toggleWeek(w) {
  const item = document.querySelector(`[data-week-item="${w}"]`);
  if (!item) return;
  if (openWeeks.has(w)) {
    openWeeks.delete(w);
    item.classList.remove("open");
  } else {
    openWeeks.add(w);
    item.classList.add("open");
  }
}

function toggleDay(w, d) {
  const k = `${w}-${d}`;
  const item = document.querySelector(`[data-day-item="${w}-${d}"]`);
  if (!item) return;
  if (openDays.get(k)) {
    openDays.set(k, false);
    item.classList.remove("open");
  } else {
    openDays.set(k, true);
    item.classList.add("open");
  }
}

function toggleTopic(w, d, t) {
  const k = `${w}-${d}-${t}`;
  const item = document.querySelector(`[data-topic-item="${w}-${d}-${t}"]`);
  if (!item) return;
  if (openTopics.get(k)) {
    openTopics.set(k, false);
    item.classList.remove("open");
  } else {
    openTopics.set(k, true);
    item.classList.add("open");
  }
}

// ── 파일 업로드 ──────────────────────────────────────────
async function handleFileUpload(w, d, fileList) {
  const key = dayKey(w, d);

  for (const file of Array.from(fileList)) {
    // 파일 1개당 최대 100MB
    if (file.size > MAX_FILE_SIZE) {
      showToast(`"${file.name}"은 100MB를 초과해 업로드할 수 없습니다.`);
      continue;
    }

    const id = (typeof crypto !== "undefined" && crypto.randomUUID)
      ? crypto.randomUUID()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);

    const storagePath = `uploads/${key}/${id}/${file.name}`;
    const fileRef = ref(storage, storagePath);

    try {
      showToast(`"${file.name}" 업로드 중... ⏳`);

      await uploadBytes(fileRef, file, {
        contentType: file.type || "application/octet-stream"
      });

      const fileUrl = await getDownloadURL(fileRef);

      const newFile = {
        id: String(id),
        firestoreId: String(id),
        key,
        name: file.name,
        size: file.size,
        type: file.type,
        content: fileUrl,
        storagePath,
        uploadedAt: Date.now()
      };

      await setDoc(doc(db, "files", id), newFile);

      allFiles.push(newFile);
      saveFiles();
      refreshDayUI(w, d);
      updateProgress();
      updateWeekBadge(w);
      showToast(`"${file.name}" 클라우드 업로드 완료 ✓`);
    } catch (error) {
      console.error("파일 업로드 에러:", error);

      // Storage 업로드 뒤 Firestore 기록에서 실패한 경우 고아 파일을 정리합니다.
      try {
        await deleteObject(fileRef);
      } catch (_) {
        // 업로드 자체가 실패했으면 삭제할 객체가 없으므로 무시합니다.
      }

      showToast(`"${file.name}" 업로드 실패 ❌`);
    }
  }
}

function findFileById(id) {
  const normalizedId = String(id);

  return allFiles.find(item =>
    String(item.id) === normalizedId ||
    String(item.firestoreId ?? "") === normalizedId
  );
}

function showDeleteModal(file) {
  return new Promise(resolve => {
    const previousOverflow = document.body.style.overflow;
    const overlay = document.createElement("div");
    overlay.className = "delete-modal-overlay";

    overlay.innerHTML = `
      <section class="delete-modal" role="dialog" aria-modal="true" aria-labelledby="deleteModalTitle">
        <button class="delete-modal-close" type="button" aria-label="닫기">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div class="delete-modal-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v5M14 11v5" />
          </svg>
        </div>

        <div class="delete-modal-copy">
          <span class="delete-modal-eyebrow">DELETE FILE</span>
          <h2 id="deleteModalTitle">파일을 삭제할까요?</h2>
          <p class="delete-modal-description">
            삭제하면 클라우드에서도 사라지며 다시 복구할 수 없습니다.
          </p>
        </div>

        <div class="delete-modal-file">
          <span class="delete-modal-file-dot"></span>
          <span class="delete-modal-file-name"></span>
        </div>

        <label class="delete-modal-field">
          <span>삭제 비밀번호</span>
          <div class="delete-modal-input-wrap">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            <input
              class="delete-modal-input"
              type="password"
              inputmode="numeric"
              autocomplete="off"
              maxlength="20"
              placeholder="비밀번호 입력"
              aria-describedby="deleteModalError"
            >
          </div>
          <span class="delete-modal-error" id="deleteModalError" aria-live="polite"></span>
        </label>

        <div class="delete-modal-actions">
          <button class="delete-modal-cancel" type="button">취소</button>
          <button class="delete-modal-confirm" type="button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6l-1 14H6L5 6" />
            </svg>
            영구 삭제
          </button>
        </div>
      </section>
    `;

    const modal = overlay.querySelector(".delete-modal");
    const input = overlay.querySelector(".delete-modal-input");
    const errorEl = overlay.querySelector(".delete-modal-error");
    const fileNameEl = overlay.querySelector(".delete-modal-file-name");
    const confirmButton = overlay.querySelector(".delete-modal-confirm");
    const cancelButton = overlay.querySelector(".delete-modal-cancel");
    const closeButton = overlay.querySelector(".delete-modal-close");

    fileNameEl.textContent = file.name;
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    let finished = false;

    const finish = result => {
      if (finished) return;
      finished = true;
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      overlay.classList.add("closing");
      window.setTimeout(() => overlay.remove(), 180);
      resolve(result);
    };

    const showError = message => {
      errorEl.textContent = message;
      input.setAttribute("aria-invalid", "true");
      modal.classList.remove("shake");
      void modal.offsetWidth;
      modal.classList.add("shake");
      input.focus();
      input.select();
    };

    const submit = async () => {
      const password = input.value;

      if (!password) {
        showError("삭제 비밀번호를 입력해 주세요.");
        return;
      }

      // 검증 중 중복 실행 방지
      confirmButton.disabled = true;
      input.disabled = true;

      try {
        const derived = await _deriveKey(password);
        const expected = _getExpected();

        if (!_safeEqual(derived, expected)) {
          showError("비밀번호가 올바르지 않습니다.");
          // 검증 실패 시 다시 입력할 수 있도록 복구
          if (!finished) {
            confirmButton.disabled = false;
            input.disabled = false;
          }
          return;
        }

        input.value = "";
        finish(true);
      } catch (err) {
        console.error("[접근 검증 오류]", err);
        showError("비밀번호를 확인하지 못했습니다.");
        if (!finished) {
          confirmButton.disabled = false;
          input.disabled = false;
        }
      }
    };

    const handleKeydown = event => {
      if (event.key === "Escape") {
        event.preventDefault();
        finish(false);
      }

      if (event.key === "Enter") {
        event.preventDefault();
        void submit();
      }
    };

    input.addEventListener("input", () => {
      errorEl.textContent = "";
      input.removeAttribute("aria-invalid");
    });

    confirmButton.addEventListener("click", () => void submit());
    cancelButton.addEventListener("click", () => finish(false));
    closeButton.addEventListener("click", () => finish(false));

    overlay.addEventListener("mousedown", event => {
      if (event.target === overlay) finish(false);
    });

    document.addEventListener("keydown", handleKeydown);

    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  });
}

async function deleteFile(id, w, d) {
  const normalizedId = String(id);
  const file = findFileById(normalizedId);

  console.log("[삭제 시작]", {
    clickedId: normalizedId,
    fileFound: Boolean(file),
    storedIds: allFiles.map(item => ({
      id: item.id,
      idType: typeof item.id,
      firestoreId: item.firestoreId
    }))
  });

  if (!file) {
    console.error("삭제할 파일을 allFiles에서 찾지 못했습니다.", normalizedId);
    showToast("삭제할 파일 정보를 찾지 못했습니다. 새로고침 후 다시 시도하세요.");
    return;
  }

  const confirmed = await showDeleteModal(file);
  if (!confirmed) return;

  try {
    const candidatePaths = [
      file.storagePath,
      `uploads/${file.key}/${file.id}/${file.name}`,
      `uploads/${file.key}/${file.name}`
    ].filter(Boolean);

    const uniquePaths = [...new Set(candidatePaths)];

    // Storage 객체가 이미 없더라도 Firestore 기록 삭제는 계속 진행합니다.
    for (const path of uniquePaths) {
      try {
        await deleteObject(ref(storage, path));
        break;
      } catch (error) {
        if (error?.code === "storage/object-not-found") {
          continue;
        }
        throw error;
      }
    }

    const firestoreId = String(
      file.firestoreId ??
      file.id ??
      normalizedId
    );

    await deleteDoc(doc(db, "files", firestoreId));

    allFiles = allFiles.filter(item =>
      String(item.id) !== normalizedId &&
      String(item.firestoreId ?? "") !== normalizedId
    );

    saveFiles();
    refreshDayUI(w, d);
    updateProgress();
    updateWeekBadge(w);

    showToast("파일을 삭제했습니다.");
  } catch (error) {
    console.error("파일 삭제 실패:", error?.code, error?.message, error);
    showToast(`삭제 실패: ${error?.code || error?.message || "알 수 없는 오류"}`);
  }
}

// 파일 클릭 → Firebase 다운로드 URL을 새 탭에서 엽니다.
function openFile(id) {
  const file = findFileById(id);

  if (!file?.content) {
    showToast("파일 정보를 찾지 못했습니다.");
    return;
  }

  const opened = window.open(file.content, "_blank", "noopener");
  if (!opened) {
    showToast("팝업 차단을 해제하고 다시 시도하세요.");
  }
}

// ── 개별 일차 UI 갱신 ─────────────────────────────────────
function refreshDayUI(w, d) {
  const dayItem = document.querySelector(`[data-day-item="${w}-${d}"]`);
  if (!dayItem) return;

  const done = isDayDone(w, d);
  dayItem.classList.toggle("done", done);

  const badge = dayItem.querySelector(".day-status-badge");
  if (badge) {
    badge.textContent = done ? "완료 ✓" : "학습 전";
    badge.classList.toggle("done", done);
  }

  const fileListEl = dayItem.querySelector(".file-list");
  if (fileListEl) renderFileList(fileListEl, w, d);
}

function updateWeekBadge(w) {
  const weekItem = document.querySelector(`[data-week-item="${w}"]`);
  if (!weekItem) return;
  const prog = weekProgress(w);
  weekItem.classList.toggle("done", prog === 7);

  const pill = weekItem.querySelector(".week-prog-pill");
  if (pill) {
    pill.classList.toggle("full", prog === 7);
    // 텍스트 노드만 업데이트 (pip span 보존)
    const pipSpan = pill.querySelector(".week-prog-pip");
    pill.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = ` ${prog}/7`;
    });

    if (pipSpan) {
      CURRICULUM[w - 1].days.forEach((day, i) => {
        const pip = pipSpan.children[i];
        if (pip) pip.classList.toggle("done", isDayDone(w, day.day));
      });
    }
  }
}

// ── 파일 목록 렌더링 ─────────────────────────────────────
function renderFileList(container, w, d) {
  const files = filesForDay(w, d);

  if (!files.length) {
    container.innerHTML = `<p class="file-empty">아직 업로드한 파일이 없습니다.</p>`;
    return;
  }

  container.innerHTML = files
    .sort((a, b) => a.uploadedAt - b.uploadedAt)
    .map(f => {
      const e = ext(f.name);
      return `
        <div class="file-chip">
          <div class="file-ext-badge ${e}">${e.slice(0, 4)}</div>
          <div class="file-meta">
            <button type="button" class="file-open-btn" data-id="${f.id}" title="${f.name}">${f.name}</button>
            <span class="file-size">${formatSize(f.size)}</span>
          </div>
          <button type="button" class="file-del-btn" data-del="${f.id}" aria-label="삭제">×</button>
        </div>
      `;
    }).join("");

  container.querySelectorAll(".file-open-btn").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      openFile(button.dataset.id);
    });
  });

  container.querySelectorAll(".file-del-btn").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const id = button.dataset.del;
      console.log("[삭제 버튼 직접 클릭]", { id, w, d });
      void deleteFile(id, w, d);
    });
  });
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// ── GPT 학습 프롬프트 복사 ──────────────────────────────────
function buildLearningPrompt(w, d) {
  const weekData = CURRICULUM.find(week => week.week === w);
  const dayData = weekData?.days.find(day => day.day === d);

  if (!weekData || !dayData) return "";

  const topics = (dayData.topics || [])
    .filter(topic => topic.name)
    .map((topic, index) => {
      const description = topic.desc ? `: ${topic.desc}` : "";
      return `${index + 1}. ${topic.name}${description}`;
    })
    .join("\n");

  const sections = [
    "나는 바이브 코딩을 활용하면서 프론트엔드를 처음부터 공부하는 초보자야.",
    "",
    `오늘은 ${w}주차 ${d}일차 「${dayData.title || "학습 주제"}」를 공부하려고 해.`,
    dayData.summary ? `학습 개요: ${dayData.summary}` : "",
    topics ? `\n오늘 배울 내용:\n${topics}` : "",
    dayData.practice ? `\n오늘의 실습: ${dayData.practice}` : "",
    dayData.deliverable ? `완성할 결과물: ${dayData.deliverable}` : "",
    "",
    "위 내용을 다음 방식으로 가르쳐줘.",
    "1. 각 개념을 초보자 눈높이에서 쉽게 설명해줘.",
    "2. 개념마다 짧고 실행 가능한 코드 예시를 보여줘.",
    "3. 내가 직접 따라 할 수 있는 순서로 실습을 진행해줘.",
    "4. 바이브 코딩을 사용할 때 AI에게 맡겨도 되는 부분과 내가 직접 이해해야 하는 부분을 구분해줘.",
    "5. 자주 하는 실수와 개발자도구로 확인하는 방법을 알려줘.",
    "6. 마지막에 오늘 배운 내용을 점검할 복습 문제와 미니 과제를 내줘.",
    "",
    "한꺼번에 너무 많은 내용을 주지 말고, 학습 순서에 따라 단계별로 진행해줘."
  ];

  return sections.filter((line, index) => line !== "" || sections[index - 1] !== "").join("\n").trim();
}

async function writeTextToClipboard(text) {
  if (!text) throw new Error("복사할 내용이 없습니다.");

  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) throw new Error("클립보드 복사에 실패했습니다.");
}

async function copyLearningPrompt(w, d, button) {
  const prompt = buildLearningPrompt(w, d);

  try {
    await writeTextToClipboard(prompt);

    button?.classList.add("copied");
    showToast(`${d}일차 학습 프롬프트를 복사했습니다.`);

    window.setTimeout(() => {
      button?.classList.remove("copied");
    }, 1400);
  } catch (error) {
    console.error("학습 프롬프트 복사 실패:", error);
    showToast("프롬프트 복사에 실패했습니다.");
  }
}

// ── 전체 렌더링 ──────────────────────────────────────────
function render() {
  const list = document.getElementById("weeksList");
  if (!list) return;

  // 주차별 accent 색상
  const weekColors = [
    "#f87171", "#fb923c", "#fbbf24", "#a3e635",
    "#34d399", "#22d3ee", "#38bdf8", "#818cf8",
    "#a78bfa", "#f472b6", "#e879f9", "#94a3b8"
  ];

  list.innerHTML = CURRICULUM.map((weekData, wi) => {
    const w = weekData.week;
    const prog = weekProgress(w);
    const isDone = prog === 7;
    const color = weekColors[wi];

    // 일차 pip 도트 (7개)
    const pips = weekData.days.map(day =>
      `<span class="prog-pip ${isDayDone(w, day.day) ? "done" : ""}"></span>`
    ).join("");

    // 일차 목록 HTML
    const daysHTML = weekData.days.map(dayData => {
      const d = dayData.day;
      const dayDone = isDayDone(w, d);

      // 학습 내용(토픽) HTML — name이 빈 항목은 렌더링 생략
      const topicsHTML = dayData.topics
        .filter(topic => topic.name)
        .map((topic, ti) => `
          <div class="topic-item" data-topic-item="${w}-${d}-${ti}">
            <button class="topic-trigger" type="button">
              <span class="topic-dot"></span>
              <span class="topic-name">${escapeHTML(topic.name)}</span>
              <span class="topic-arrow">
                <svg viewBox="0 0 14 14"><polyline points="2 5 7 10 12 5"/></svg>
              </span>
            </button>
            <div class="topic-desc">
              <div class="topic-desc-inner">
                <p class="topic-desc-text">${escapeHTML(topic.desc)}</p>
              </div>
            </div>
          </div>
        `).join("");

      return `
        <div class="day-item ${dayDone ? "done" : ""}" data-day-item="${w}-${d}">
          <button class="day-trigger" type="button">
            <span class="day-num">DAY ${String(d).padStart(2, "0")}</span>

            <span class="day-title-wrap">
              <span class="day-title-text">${escapeHTML(dayData.title)}</span>

              <span
                class="day-copy-btn"
                role="button"
                tabindex="0"
                data-copy-prompt="${w}-${d}"
                aria-label="${d}일차 GPT 학습 프롬프트 복사"
                title="GPT 학습 프롬프트 복사"
              >
                <svg class="day-copy-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="9" y="9" width="11" height="11" rx="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <svg class="day-copy-check" viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </span>

            <span class="day-status-badge ${dayDone ? "done" : ""}">${dayDone ? "완료 ✓" : "학습 전"}</span>
            <span class="day-chevron">
              <svg viewBox="0 0 14 14"><polyline points="2 5 7 10 12 5"/></svg>
            </span>
          </button>

          <div class="day-panel">
            <div class="day-panel-inner">
              <div class="day-content">

                <!-- 왼쪽: 학습 내용 + 실습 정보 -->
                <div class="topics-section">
                  ${topicsHTML ? `<p class="topics-title">학습 내용</p>${topicsHTML}` : ""}
                  ${dayData.practice ? `
                    <div class="practice-info" style="margin-top:8px">
                      <p class="practice-info-label">오늘의 실습</p>
                      <p class="practice-info-text">${dayData.practice}</p>
                    </div>` : ""}
                  ${dayData.deliverable ? `
                    <div class="deliverable-info">
                      <span class="deliverable-label">결과물</span>
                      <span class="deliverable-text">${dayData.deliverable}</span>
                    </div>` : ""}
                </div>

                <!-- 오른쪽: 메모 -->
                <div class="memo-section">
                  <div class="memo-header">
                    <span class="memo-title">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px;">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                      학습 메모
                    </span>
                  </div>
                  <textarea class="memo-textarea" data-memo="${w}-${d}" placeholder="자동 저장됩니다.">${escapeHTML(allMemos[dayKey(w, d)] || "")}</textarea>
                </div>

                <!-- 하단: 파일 업로드 -->
                <div class="upload-section">
                  <div class="upload-header">
                    <span class="upload-title">
                      <svg viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      학습 파일 업로드
                    </span>
                  </div>
                  <label class="upload-dropzone" data-upload="${w}-${d}">
                    <input type="file" multiple accept="*/*">
                    <div class="upload-icon-wrap">
                      <svg viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                    </div>
                    <div class="upload-dropzone-text">
                      <strong>클릭하거나 파일을 끌어다 놓으세요</strong>
                      <small>HTML 파일은 클릭 시 새 탭에서 바로 열립니다</small>
                    </div>
                  </label>
                  <div class="file-list" data-filelist="${w}-${d}"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="week-item ${isDone ? "done" : ""}"
           data-week-item="${w}"
           style="--week-color:${color}">
        <button class="week-trigger" type="button">
          <div class="week-num-badge">W${String(w).padStart(2, "0")}</div>
          <div class="week-info">
            <span class="week-title-text">${weekData.weekTitle}</span>
            <span class="week-sub">${w}주차 · 7일 과정</span>
          </div>
          <div class="week-prog-pill ${prog === 7 ? "full" : ""}">
            <span class="week-prog-pip">${pips}</span>
            ${prog}/7
          </div>
          <span class="week-chevron">
            <svg viewBox="0 0 14 14"><polyline points="2 5 7 10 12 5"/></svg>
          </span>
        </button>

        <div class="week-panel">
          <div class="week-panel-inner">
            <div class="days-list">
              ${daysHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // ── 이벤트 바인딩 ────────────────────────────────────────

  // 주차 토글
  list.querySelectorAll("[data-week-item]").forEach(item => {
    item.querySelector(".week-trigger")
      .addEventListener("click", () => toggleWeek(Number(item.dataset.weekItem)));
  });

  // 일차 토글
  list.querySelectorAll("[data-day-item]").forEach(item => {
    const [w, d] = item.dataset.dayItem.split("-").map(Number);
    item.querySelector(".day-trigger")
      .addEventListener("click", () => toggleDay(w, d));
  });

  // GPT 학습 프롬프트 복사
  list.querySelectorAll("[data-copy-prompt]").forEach(button => {
    const handleCopy = event => {
      event.preventDefault();
      event.stopPropagation();

      const [w, d] = button.dataset.copyPrompt.split("-").map(Number);
      void copyLearningPrompt(w, d, button);
    };

    button.addEventListener("click", handleCopy);

    button.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        handleCopy(event);
      }
    });
  });

  // 토픽 토글
  list.querySelectorAll("[data-topic-item]").forEach(item => {
    const [w, d, t] = item.dataset.topicItem.split("-").map(Number);
    item.querySelector(".topic-trigger")
      .addEventListener("click", () => toggleTopic(w, d, t));
  });

  // 파일 업로드 (클릭 + 드래그앤드롭)
  list.querySelectorAll(".upload-dropzone").forEach(dropzone => {
    const [w, d] = dropzone.dataset.upload.split("-").map(Number);
    const input = dropzone.querySelector("input[type=file]");

    input.addEventListener("change", () => {
      if (input.files.length) handleFileUpload(w, d, input.files);
      input.value = "";
    });

    dropzone.addEventListener("dragover", e => { e.preventDefault(); dropzone.classList.add("dragging"); });
    dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragging"));
    dropzone.addEventListener("drop", e => {
      e.preventDefault();
      dropzone.classList.remove("dragging");
      if (e.dataTransfer.files.length) handleFileUpload(w, d, e.dataTransfer.files);
    });
  });

  // 기존 파일 목록 초기 렌더링
  list.querySelectorAll("[data-filelist]").forEach(el => {
    const [w, d] = el.dataset.filelist.split("-").map(Number);
    renderFileList(el, w, d);
  });
}

// ── 파일 버튼 이벤트 위임 ───────────────────────────────────
// 파일 목록이 다시 렌더링되어도 클릭 이벤트가 사라지지 않습니다.
document.getElementById("weeksList")?.addEventListener("click", event => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const deleteButton = target.closest(".file-del-btn");

  if (deleteButton) {
    event.preventDefault();
    event.stopPropagation();

    const dayItem = deleteButton.closest("[data-day-item]");
    if (!dayItem) {
      console.error("삭제 버튼이 일차 영역 안에 없습니다.");
      showToast("삭제 버튼 정보를 찾지 못했습니다.");
      return;
    }

    const [w, d] = dayItem.dataset.dayItem.split("-").map(Number);
    const id = deleteButton.dataset.del;

    console.log("삭제 버튼 클릭:", { id, w, d });
    void deleteFile(id, w, d);
    return;
  }

  const openButton = target.closest(".file-open-btn");

  if (openButton) {
    event.preventDefault();
    event.stopPropagation();
    openFile(openButton.dataset.id);
  }
});

// ── 메모 자동 저장 이벤트 ──────────────────────────────────
document.getElementById("weeksList")?.addEventListener("input", e => {
  if (!e.target.matches(".memo-textarea")) return;

  const [w, d] = e.target.dataset.memo.split("-").map(Number);
  saveMemo(w, d, e.target.value);
});

// ── 이어하기 ─────────────────────────────────────────────
document.getElementById("continueLearningBtn")?.addEventListener("click", () => {
  let targetW = null, targetD = null;
  
  for (const week of CURRICULUM) {
    const w = week.week;
    for (const day of week.days) {
      const d = day.day;
      if (!isDayDone(w, d)) {
        targetW = w;
        targetD = d;
        break;
      }
    }
    if (targetW) break;
  }
  
  if (targetW && targetD) {
    if (!openWeeks.has(targetW)) {
      openWeeks.add(targetW);
      document.querySelector(`[data-week-item="${targetW}"]`)?.classList.add("open");
    }
    
    const dayKeyStr = `${targetW}-${targetD}`;
    if (!openDays.get(dayKeyStr)) {
      openDays.set(dayKeyStr, true);
      document.querySelector(`[data-day-item="${dayKeyStr}"]`)?.classList.add("open");
    }
    
    setTimeout(() => {
      const el = document.querySelector(`[data-day-item="${dayKeyStr}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.transition = "background-color 0.5s ease";
        const oldBg = el.style.backgroundColor;
        el.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
        setTimeout(() => el.style.backgroundColor = oldBg, 1500);
      }
    }, 100);
    showToast(`${targetW}주차 ${targetD}일차 학습을 이어갑니다.`);
  } else {
    showToast("모든 학습 과정을 완료했습니다! 🎉");
  }
});

// ── 전체 열기 / 닫기 ─────────────────────────────────────
document.getElementById("expandAllBtn")?.addEventListener("click", () => {
  CURRICULUM.forEach(week => {
    openWeeks.add(week.week);
    document.querySelector(`[data-week-item="${week.week}"]`)?.classList.add("open");
  });
});

document.getElementById("collapseAllBtn")?.addEventListener("click", () => {
  openWeeks.clear();
  openDays.clear();
  openTopics.clear();
  document.querySelectorAll("[data-week-item]").forEach(el => el.classList.remove("open"));
  document.querySelectorAll("[data-day-item]").forEach(el => el.classList.remove("open"));
  document.querySelectorAll("[data-topic-item]").forEach(el => el.classList.remove("open"));
});


// ── 삭제 확인 모달 ───────────────────────────────────────────
const deleteModalStyle = document.createElement("style");
deleteModalStyle.textContent = `
  .delete-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 20000;
    display: grid;
    place-items: center;
    padding: 24px;
    background:
      radial-gradient(circle at 50% 25%, rgba(139, 92, 246, 0.14), transparent 38%),
      rgba(3, 5, 15, 0.76);
    backdrop-filter: blur(18px) saturate(125%);
    -webkit-backdrop-filter: blur(18px) saturate(125%);
    opacity: 0;
    transition: opacity 0.18s ease;
  }

  .delete-modal-overlay.visible {
    opacity: 1;
  }

  .delete-modal-overlay.closing {
    opacity: 0;
  }

  .delete-modal {
    position: relative;
    width: min(100%, 430px);
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.11);
    border-radius: 24px;
    background:
      linear-gradient(145deg, rgba(24, 27, 48, 0.97), rgba(10, 12, 27, 0.98));
    box-shadow:
      0 28px 80px rgba(0, 0, 0, 0.52),
      0 0 0 1px rgba(139, 92, 246, 0.05) inset,
      0 1px 0 rgba(255, 255, 255, 0.08) inset;
    color: #f8fafc;
    transform: translateY(12px) scale(0.975);
    transition: transform 0.22s cubic-bezier(.2,.8,.2,1);
    overflow: hidden;
  }

  .delete-modal::before {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    top: -110px;
    right: -80px;
    border-radius: 50%;
    background: rgba(244, 63, 94, 0.14);
    filter: blur(20px);
    pointer-events: none;
  }

  .delete-modal-overlay.visible .delete-modal {
    transform: translateY(0) scale(1);
  }

  .delete-modal-overlay.closing .delete-modal {
    transform: translateY(8px) scale(0.985);
  }

  .delete-modal-close {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 11px;
    background: rgba(255,255,255,0.04);
    color: #94a3b8;
    cursor: pointer;
    transition: 0.18s ease;
  }

  .delete-modal-close:hover {
    color: #f8fafc;
    background: rgba(255,255,255,0.08);
    border-color: rgba(255,255,255,0.14);
    transform: rotate(3deg);
  }

  .delete-modal-close svg,
  .delete-modal-icon svg,
  .delete-modal-input-wrap > svg,
  .delete-modal-confirm svg {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .delete-modal-close svg {
    width: 17px;
    height: 17px;
  }

  .delete-modal-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    margin-bottom: 20px;
    border: 1px solid rgba(251, 113, 133, 0.22);
    border-radius: 16px;
    color: #fb7185;
    background: linear-gradient(145deg, rgba(244, 63, 94, 0.15), rgba(244, 63, 94, 0.06));
    box-shadow: 0 12px 30px rgba(244, 63, 94, 0.08);
  }

  .delete-modal-icon svg {
    width: 23px;
    height: 23px;
  }

  .delete-modal-copy {
    position: relative;
  }

  .delete-modal-eyebrow {
    display: block;
    margin-bottom: 7px;
    color: #fb7185;
    font: 700 0.66rem/1.2 'JetBrains Mono', monospace;
    letter-spacing: 0.13em;
  }

  .delete-modal-copy h2 {
    margin: 0;
    font-size: clamp(1.35rem, 4vw, 1.65rem);
    line-height: 1.25;
    letter-spacing: -0.035em;
  }

  .delete-modal-description {
    margin: 10px 0 0;
    color: #94a3b8;
    font-size: 0.86rem;
    line-height: 1.65;
  }

  .delete-modal-file {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    margin: 22px 0 20px;
    padding: 12px 14px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 13px;
    background: rgba(255,255,255,0.035);
  }

  .delete-modal-file-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: #a78bfa;
    box-shadow: 0 0 14px rgba(167, 139, 250, 0.7);
  }

  .delete-modal-file-name {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #e2e8f0;
    font: 600 0.8rem/1.3 'JetBrains Mono', monospace;
  }

  .delete-modal-field {
    display: block;
  }

  .delete-modal-field > span:first-child {
    display: block;
    margin-bottom: 8px;
    color: #cbd5e1;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .delete-modal-input-wrap {
    position: relative;
  }

  .delete-modal-input-wrap > svg {
    position: absolute;
    top: 50%;
    left: 14px;
    width: 18px;
    height: 18px;
    color: #64748b;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .delete-modal-input {
    width: 100%;
    height: 48px;
    padding: 0 15px 0 43px;
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 13px;
    outline: none;
    background: rgba(3, 5, 15, 0.48);
    color: #f8fafc;
    font: 600 0.9rem/1 'JetBrains Mono', monospace;
    box-sizing: border-box;
    transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  }

  .delete-modal-input::placeholder {
    color: #475569;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
  }

  .delete-modal-input:focus {
    border-color: rgba(167, 139, 250, 0.72);
    background: rgba(3, 5, 15, 0.7);
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.12);
  }

  .delete-modal-input[aria-invalid="true"] {
    border-color: rgba(251, 113, 133, 0.72);
    box-shadow: 0 0 0 4px rgba(244, 63, 94, 0.1);
  }

  .delete-modal-error {
    display: block;
    min-height: 18px;
    margin-top: 7px;
    color: #fb7185;
    font-size: 0.72rem;
    font-weight: 600;
  }

  .delete-modal-actions {
    display: grid;
    grid-template-columns: 1fr 1.35fr;
    gap: 10px;
    margin-top: 10px;
  }

  .delete-modal-cancel,
  .delete-modal-confirm {
    height: 46px;
    border-radius: 13px;
    font-size: 0.84rem;
    font-weight: 750;
    cursor: pointer;
    transition: transform 0.16s ease, border-color 0.16s ease, background 0.16s ease, box-shadow 0.16s ease;
  }

  .delete-modal-cancel {
    border: 1px solid rgba(255,255,255,0.09);
    background: rgba(255,255,255,0.045);
    color: #cbd5e1;
  }

  .delete-modal-cancel:hover {
    border-color: rgba(255,255,255,0.16);
    background: rgba(255,255,255,0.075);
    color: #f8fafc;
  }

  .delete-modal-confirm {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid rgba(251, 113, 133, 0.22);
    background: linear-gradient(135deg, #f43f5e, #e11d48);
    color: white;
    box-shadow: 0 12px 28px rgba(225, 29, 72, 0.2);
  }

  .delete-modal-confirm:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 34px rgba(225, 29, 72, 0.28);
  }

  .delete-modal-confirm:active,
  .delete-modal-cancel:active {
    transform: translateY(1px);
  }

  .delete-modal-confirm svg {
    width: 16px;
    height: 16px;
  }

  .delete-modal.shake {
    animation: deleteModalShake 0.34s ease;
  }

  @keyframes deleteModalShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-7px); }
    50% { transform: translateX(6px); }
    75% { transform: translateX(-3px); }
  }

  @media (max-width: 520px) {
    .delete-modal-overlay {
      padding: 16px;
      align-items: end;
    }

    .delete-modal {
      width: 100%;
      padding: 26px 20px 20px;
      border-radius: 22px;
    }

    .delete-modal-actions {
      grid-template-columns: 1fr;
    }

    .delete-modal-confirm {
      order: -1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .delete-modal-overlay,
    .delete-modal,
    .delete-modal-close,
    .delete-modal-cancel,
    .delete-modal-confirm {
      transition: none !important;
    }

    .delete-modal.shake {
      animation: none;
    }
  }
`;
document.head.appendChild(deleteModalStyle);

// ── 파일 버튼 클릭 영역 보정 ─────────────────────────────────
const fileButtonStyle = document.createElement("style");
fileButtonStyle.textContent = `
  .file-list,
  .file-chip {
    position: relative;
    z-index: 5;
  }

  .file-open-btn,
  .file-del-btn {
    position: relative;
    z-index: 10;
    pointer-events: auto !important;
  }
`;
document.head.appendChild(fileButtonStyle);

// ── SVG 그라디언트 (진행률 링) ───────────────────────────
document.body.insertAdjacentHTML("afterbegin", `
  <svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
    <defs>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   style="stop-color:#8b5cf6"/>
        <stop offset="100%" style="stop-color:#38bdf8"/>
      </linearGradient>
    </defs>
  </svg>
`);

// ── 초기 실행 ────────────────────────────────────────────
// Firebase 데이터를 읽은 뒤 렌더링해야 다른 브라우저에서도 같은 상태가 보입니다.
loadCloudData();


// ── 일차 프롬프트 복사 버튼 스타일 ──────────────────────────
const promptCopyStyle = document.createElement("style");
promptCopyStyle.textContent = `
  .day-title-wrap {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex: 1;
  }

  .day-title-wrap .day-title-text {
    min-width: 0;
  }

  .day-copy-btn {
    width: 22px;
    height: 22px;
    display: inline-grid;
    place-items: center;
    flex: 0 0 22px;
    margin-left: 1px;
    border-radius: 6px;
    color: var(--text-dim);
    cursor: pointer;
    opacity: 0.72;
    transition:
      color 0.18s ease,
      background 0.18s ease,
      opacity 0.18s ease,
      transform 0.18s ease;
  }

  .day-copy-btn svg {
    width: 12px;
    height: 12px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.9;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .day-copy-btn:hover {
    color: var(--purple-light);
    background: rgba(139, 92, 246, 0.11);
    opacity: 1;
  }

  .day-copy-btn:active {
    transform: scale(0.88);
  }

  .day-copy-btn:focus-visible {
    outline: 2px solid rgba(167, 139, 250, 0.72);
    outline-offset: 1px;
    opacity: 1;
  }

  .day-copy-check {
    display: none;
  }

  .day-copy-btn.copied {
    color: var(--green);
    background: rgba(52, 211, 153, 0.09);
    opacity: 1;
  }

  .day-copy-btn.copied .day-copy-icon {
    display: none;
  }

  .day-copy-btn.copied .day-copy-check {
    display: block;
  }
`;

document.head.appendChild(promptCopyStyle);

const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
});


// ── Ctrl+F 커스텀 전체 검색 ────────────────────────────────────────────

const _srchStyle = document.createElement("style");
_srchStyle.textContent = `
  .s-bar-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30000;
    display: flex;
    justify-content: center;
    padding: 14px 16px;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-120%);
    transition: opacity 0.22s ease, transform 0.24s cubic-bezier(.2,.8,.2,1);
  }

  .s-bar-wrap.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .s-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    background: rgba(10, 13, 32, 0.97);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 16px;
    box-shadow:
      0 16px 48px rgba(0, 0, 0, 0.55),
      0 0 0 1px rgba(139, 92, 246, 0.1) inset;
    backdrop-filter: blur(24px) saturate(140%);
    width: min(520px, calc(100vw - 32px));
  }

  .s-icon {
    flex: 0 0 18px;
    color: #8b5cf6;
  }

  .s-icon svg {
    display: block;
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .s-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: #f8fafc;
    font: 500 0.89rem/1 'Pretendard', sans-serif;
    min-width: 0;
    padding: 4px 2px;
  }

  .s-input::placeholder { color: #475569; }
  .s-input::-webkit-search-cancel-button { display: none; }

  .s-count {
    flex: 0 0 auto;
    font: 600 0.72rem/1 'JetBrains Mono', monospace;
    color: #475569;
    white-space: nowrap;
    min-width: 44px;
    text-align: right;
    padding: 0 4px;
    transition: color 0.15s;
  }

  .s-count.hit { color: #a78bfa; }

  .s-sep {
    width: 1px;
    height: 20px;
    background: rgba(255,255,255,0.07);
    flex-shrink: 0;
  }

  .s-btn {
    flex: 0 0 28px;
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    background: rgba(255,255,255,0.03);
    color: #94a3b8;
    cursor: pointer;
    transition: background 0.14s, color 0.14s, border-color 0.14s;
  }

  .s-btn:hover:not(:disabled) {
    background: rgba(139, 92, 246, 0.16);
    color: #a78bfa;
    border-color: rgba(139, 92, 246, 0.28);
  }

  .s-btn:disabled { opacity: 0.28; cursor: not-allowed; }

  .s-btn svg {
    width: 13px;
    height: 13px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* 텍스트 하이라이트 */
  mark.sh {
    background: rgba(251, 191, 36, 0.28);
    color: inherit;
    border-radius: 2px;
    padding: 1px 0;
  }

  mark.sh.active {
    background: rgba(251, 191, 36, 0.82);
    color: #1a0f00;
    border-radius: 2px;
    outline: 2px solid rgba(251, 191, 36, 0.5);
    outline-offset: 1px;
  }

  /* 메모 textarea 하이라이트 */
  .memo-textarea.sh-memo {
    border-color: rgba(251, 191, 36, 0.38) !important;
    background: rgba(251, 191, 36, 0.04) !important;
  }

  .memo-textarea.sh-memo-active {
    border-color: rgba(251, 191, 36, 0.75) !important;
    background: rgba(251, 191, 36, 0.08) !important;
    box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.18) !important;
  }
`;
document.head.appendChild(_srchStyle);

// ── 검색 바 HTML ─────────────────────────────────────────────
const _srchWrap = document.createElement("div");
_srchWrap.className = "s-bar-wrap";
_srchWrap.setAttribute("role", "search");
_srchWrap.innerHTML = `
  <div class="s-bar">
    <span class="s-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </span>
    <input
      class="s-input"
      id="sInput"
      type="search"
      placeholder="검색어를 입력하세요…"
      autocomplete="off"
      spellcheck="false"
      aria-label="콘텐츠 내 검색"
    >
    <span class="s-count" id="sCnt" aria-live="polite" aria-atomic="true"></span>
    <div class="s-sep"></div>
    <button class="s-btn" id="sPrev" aria-label="이전 결과 (←)" title="이전 (←)" disabled>
      <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
    <button class="s-btn" id="sNext" aria-label="다음 결과 (→)" title="다음 (→)" disabled>
      <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
    </button>
    <div class="s-sep"></div>
    <button class="s-btn" id="sClose" aria-label="검색 닫기 (Esc)" title="닫기 (Esc)">
      <svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>
`;
document.body.appendChild(_srchWrap);

const _sInput = document.getElementById("sInput");
const _sCnt = document.getElementById("sCnt");
const _sPrev = document.getElementById("sPrev");
const _sNext = document.getElementById("sNext");
const _sClose = document.getElementById("sClose");

// 매치 목록: { type: 'text', el: markEl } | { type: 'memo', el: textareaEl }
let _sMatches = [];
let _sIdx = -1;
let _sTimer = null;

// 검색 네비게이션이 열어 놓은 섹션 추적
let _srchOpened = { weeks: new Set(), days: new Set(), topics: new Set() };

// 일반 텍스트 검색 대상 선택자 (textarea 제외)
const _SRCH_SEL =
  ".week-title-text, .day-title-text, " +
  ".topic-name, .topic-desc-text, " +
  ".practice-info-text, .deliverable-text";

// ── 열기 / 닫기 ─────────────────────────────────────────────
function _srchOpen() {
  _srchWrap.classList.add("open");
  _sInput.focus();
  _sInput.select();
}

function _srchClose() {
  _srchWrap.classList.remove("open");
  _clearAll();
  _sInput.value = "";
  _updateCnt();
}

// ── 하이라이트 + 검색으로 열린 섹션 전체 초기화 ─────────────────
function _clearAll() {
  // 텍스트 mark 제거
  _sMatches.forEach(m => {
    if (m.type === "text") {
      const p = m.el.parentNode;
      if (!p) return;
      p.replaceChild(document.createTextNode(m.el.textContent), m.el);
      p.normalize();
    } else {
      m.el.classList.remove("sh-memo", "sh-memo-active");
    }
  });
  _sMatches = [];
  _sIdx = -1;

  // 검색이 열어 놓은 섹션 모두 닫기
  _closeSearchOpened(_srchOpened);
  _srchOpened = { weeks: new Set(), days: new Set(), topics: new Set() };
}

// ── 섹션 닫기 헬퍼 ──────────────────────────────────────────
function _closeSearchOpened(opened) {
  opened.topics.forEach(key => {
    const el = document.querySelector(`[data-topic-item="${key}"]`);
    if (el) { el.classList.remove("open"); openTopics.set(key, false); }
  });
  opened.days.forEach(key => {
    const el = document.querySelector(`[data-day-item="${key}"]`);
    if (el) { el.classList.remove("open"); openDays.set(key, false); }
  });
  opened.weeks.forEach(w => {
    const el = document.querySelector(`[data-week-item="${w}"]`);
    if (el) { el.classList.remove("open"); openWeeks.delete(w); }
  });
}

// ── 카운터 갱신 ──────────────────────────────────────────────
function _updateCnt() {
  const total = _sMatches.length;
  const cur = total > 0 ? _sIdx + 1 : 0;
  _sCnt.textContent = total > 0
    ? `${cur} / ${total}`
    : (_sInput.value.trim() ? "없음" : "");
  _sCnt.classList.toggle("hit", total > 0);
  _sPrev.disabled = total === 0;
  _sNext.disabled = total === 0;
}

// ── 검색 실행 ────────────────────────────────────────────────
function _doSearch(q) {
  _clearAll();
  if (!q.trim()) { _updateCnt(); return; }

  const root = document.getElementById("weeksList");
  if (!root) return;

  const lq = q.toLowerCase();

  // 1) 일반 텍스트 요소 검색
  root.querySelectorAll(_SRCH_SEL).forEach(el => {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(textNode => {
      const text = textNode.textContent;
      const ltext = text.toLowerCase();
      if (!ltext.includes(lq)) return;

      const frag = document.createDocumentFragment();
      let last = 0, idx;

      while ((idx = ltext.indexOf(lq, last)) !== -1) {
        if (idx > last) frag.appendChild(document.createTextNode(text.slice(last, idx)));
        const mark = document.createElement("mark");
        mark.className = "sh";
        mark.textContent = text.slice(idx, idx + q.length);
        frag.appendChild(mark);
        _sMatches.push({ type: "text", el: mark });
        last = idx + q.length;
      }

      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  });

  // 2) 메모 textarea 검색 (값은 평문으로 읽고, 하이라이트는 CSS 테두리로 표현)
  root.querySelectorAll(".memo-textarea").forEach(ta => {
    if (ta.value.toLowerCase().includes(lq)) {
      ta.classList.add("sh-memo");
      _sMatches.push({ type: "memo", el: ta });
    }
  });

  if (_sMatches.length > 0) {
    _sIdx = 0;
    void _activateMark(0);
  }
  _updateCnt();
}

// ── 특정 결과로 이동 ─────────────────────────────────────────
async function _activateMark(idx) {
  // 현재 활성 표시 해제
  _sMatches.forEach(m => {
    if (m.type === "text") m.el.classList.remove("active");
    else m.el.classList.remove("sh-memo-active");
  });
  if (idx < 0 || idx >= _sMatches.length) return;

  const match = _sMatches[idx];
  const target = match.el; // mark 요소 또는 textarea 요소

  // ── 이전 검색 네비게이션으로 열린 섹션 중 새 목표와 겹치지 않는 것 닫기 ──
  const newWeekEl = target.closest("[data-week-item]");
  const newDayEl = target.closest("[data-day-item]");
  const newTopicEl = target.closest("[data-topic-item]");

  const needWeek = newWeekEl ? String(newWeekEl.dataset.weekItem) : null;
  const needDay = newDayEl ? newDayEl.dataset.dayItem : null;
  const needTopic = newTopicEl ? newTopicEl.dataset.topicItem : null;

  // 새 결과에 필요하지 않은 이전 열린 섹션 닫기
  const toClose = {
    weeks: new Set([..._srchOpened.weeks].filter(w => String(w) !== needWeek)),
    days: new Set([..._srchOpened.days].filter(k => k !== needDay)),
    topics: new Set([..._srchOpened.topics].filter(k => k !== needTopic))
  };
  _closeSearchOpened(toClose);

  // 추적 세트 업데이트 (닫은 것 제거, 유지된 것만 남김)
  _srchOpened = {
    weeks: new Set([..._srchOpened.weeks].filter(w => !toClose.weeks.has(w))),
    days: new Set([..._srchOpened.days].filter(k => !toClose.days.has(k))),
    topics: new Set([..._srchOpened.topics].filter(k => !toClose.topics.has(k)))
  };

  // ── 새 결과의 조상 섹션 펼치기 (닫혀 있는 것만) ──────────────
  if (newWeekEl && !newWeekEl.classList.contains("open")) {
    const w = Number(newWeekEl.dataset.weekItem);
    openWeeks.add(w);
    newWeekEl.classList.add("open");
    _srchOpened.weeks.add(w);
  }

  if (newDayEl && !newDayEl.classList.contains("open")) {
    openDays.set(needDay, true);
    newDayEl.classList.add("open");
    _srchOpened.days.add(needDay);
  }

  if (newTopicEl && !newTopicEl.classList.contains("open")) {
    openTopics.set(needTopic, true);
    newTopicEl.classList.add("open");
    _srchOpened.topics.add(needTopic);
  }

  // 활성 표시 적용
  if (match.type === "text") match.el.classList.add("active");
  else match.el.classList.add("sh-memo-active");

  // CSS 트랜지션 대기 후 스크롤
  await new Promise(r => setTimeout(r, 340));
  target.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ── 다음 / 이전 ─────────────────────────────────────────────
function _sGoNext() {
  if (!_sMatches.length) return;
  _sIdx = (_sIdx + 1) % _sMatches.length;
  void _activateMark(_sIdx);
  _updateCnt();
}

function _sGoPrev() {
  if (!_sMatches.length) return;
  _sIdx = (_sIdx - 1 + _sMatches.length) % _sMatches.length;
  void _activateMark(_sIdx);
  _updateCnt();
}

// ── 이벤트 바인딩 ───────────────────────────────────────────
document.addEventListener("keydown", ev => {
  if ((ev.ctrlKey || ev.metaKey) && ev.key === "f") {
    if (document.querySelector(".delete-modal-overlay")) return;
    ev.preventDefault();
    _srchOpen();
    return;
  }

  if (!_srchWrap.classList.contains("open")) return;

  if (ev.key === "Escape") { ev.preventDefault(); _srchClose(); return; }

  // 화살표 네비게이션 (오른쪽: 다음, 왼쪽: 이전)
  if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") {
    const active = document.activeElement;

    // 메모 입력 중일 때는 화살표 무시
    if (active && active.tagName === "TEXTAREA") return;

    if (active === _sInput) {
      // 검색창 내에서는 화살표 커서 이동을 방해하지 않음
      // 커서가 양끝에 도달했을 때만 네비게이션 수행
      if (ev.key === "ArrowRight" && _sInput.selectionStart === _sInput.value.length) {
        ev.preventDefault();
        _sGoNext();
      } else if (ev.key === "ArrowLeft" && _sInput.selectionEnd === 0) {
        ev.preventDefault();
        _sGoPrev();
      }
      return;
    }

    // 다른 곳에 포커스가 있다면 화살표 네비게이션 수행
    ev.preventDefault();
    if (ev.key === "ArrowRight") _sGoNext();
    if (ev.key === "ArrowLeft") _sGoPrev();
  }
});

_sInput.addEventListener("input", () => {
  clearTimeout(_sTimer);
  _sTimer = setTimeout(() => _doSearch(_sInput.value), 200);
});

_sNext.addEventListener("click", _sGoNext);
_sPrev.addEventListener("click", _sGoPrev);
_sClose.addEventListener("click", _srchClose);