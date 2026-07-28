/* ===================================================
   FRONTEND ROADMAP — app.js
   =================================================== */

"use strict";

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
    week: 5, weekTitle: "DOM·이벤트·브라우저 저장소",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 6, weekTitle: "비동기 처리와 API 연동",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 7, weekTitle: "React 기초",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 8, weekTitle: "React 상태 관리와 실전 활용",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 9, weekTitle: "TypeScript 기초",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 10, weekTitle: "Next.js와 앱 구조 설계",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 11, weekTitle: "테스트·디버깅·성능 개선",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  },
  {
    week: 12, weekTitle: "종합 프로젝트 제작과 배포",
    days: [
      { day: 1, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 2, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 3, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 4, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 5, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 6, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" },
      { day: 7, title: "", summary: "", topics: [{ name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }, { name: "", desc: "" }], practice: "", deliverable: "" }
    ]
  }
];

// ── 스토리지 키 ──────────────────────────────────────────
const STORAGE_KEY = "frontend_roadmap_files_v2";
const MEMO_STORAGE_KEY = "frontend_roadmap_memos_v2";

// ── 상태 ─────────────────────────────────────────────────
let allFiles = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
let allMemos = JSON.parse(localStorage.getItem(MEMO_STORAGE_KEY) || "{}");
const openWeeks = new Set();
const openDays = new Map(); // "w-d" → boolean
const openTopics = new Map(); // "w-d-t" → boolean

// ── 유틸리티 ─────────────────────────────────────────────
const dayKey = (w, d) => `w${w}d${d}`;

function saveMemo(w, d, text) {
  const key = dayKey(w, d);
  if (!text.trim()) {
    delete allMemos[key];
  } else {
    allMemos[key] = text;
  }
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(allMemos));
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allFiles));
}

function ext(fileName) {
  return fileName.includes(".") ? fileName.split(".").pop().toLowerCase() : "file";
}

function formatSize(bytes) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${units[i]}`;
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
function handleFileUpload(w, d, fileList) {
  const key = dayKey(w, d);
  for (const file of Array.from(fileList)) {
    const reader = new FileReader();
    reader.onload = (e) => {
      allFiles.push({
        id: crypto.randomUUID(),
        key,
        name: file.name,
        size: file.size,
        type: file.type,
        content: e.target.result,   // base64 data URL
        uploadedAt: Date.now()
      });
      saveFiles();
      refreshDayUI(w, d);
      updateProgress();
      updateWeekBadge(w);
      showToast(`"${file.name}" 업로드 완료 ✓`);
    };
    reader.readAsDataURL(file);
  }
}

function deleteFile(id, w, d) {
  allFiles = allFiles.filter(f => f.id !== id);
  saveFiles();
  refreshDayUI(w, d);
  updateProgress();
  updateWeekBadge(w);
  showToast("파일이 삭제되었습니다.");
}

// 파일 클릭 → 새 탭에서 열기
function openFile(id) {
  const file = allFiles.find(f => f.id === id);
  if (!file) return;

  if (file.name.endsWith(".html") || file.type === "text/html") {
    // HTML: base64 디코딩 후 새 탭에 직접 쓰기 (UTF-8 한글 깨짐 방지)
    const win = window.open("", "_blank");
    if (!win) { showToast("팝업 차단을 해제하고 다시 시도하세요."); return; }

    const base64 = file.content.split(",")[1] || "";
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const html = new TextDecoder("utf-8").decode(bytes);

    win.document.open();
    win.document.write(html);
    win.document.close();
  } else {
    // 그 외 파일: data URL로 새 탭 열기
    const a = document.createElement("a");
    a.href = file.content;
    a.target = "_blank";
    a.rel = "noopener";
    a.click();
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
            <button class="file-open-btn" data-id="${f.id}" title="${f.name}">${f.name}</button>
            <span class="file-size">${formatSize(f.size)}</span>
          </div>
          <button class="file-del-btn" data-del="${f.id}" aria-label="삭제">×</button>
        </div>
      `;
    }).join("");

  container.querySelectorAll(".file-open-btn").forEach(btn => {
    btn.addEventListener("click", () => openFile(btn.dataset.id));
  });
  container.querySelectorAll(".file-del-btn").forEach(btn => {
    btn.addEventListener("click", () => deleteFile(btn.dataset.del, w, d));
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
            <span class="day-title-text">${escapeHTML(dayData.title)}</span>
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

  // 메모 자동 저장 이벤트 바인딩
  list.addEventListener("input", e => {
    if (e.target.matches(".memo-textarea")) {
      const [w, d] = e.target.dataset.memo.split("-").map(Number);
      saveMemo(w, d, e.target.value);
    }
  });
}

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
render();
updateProgress();
