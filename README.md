# 페이백 쇼핑 이벤트 페이지

Figma 디자인을 기반으로 구현한 React 애플리케이션입니다.

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 기술 스택

- React 18
- Vite
- Tailwind CSS
- Black Han Sans 폰트
- Pretendard 폰트
- Noto Sans KR 폰트

## 프로젝트 구조

```
event/
├── src/
│   ├── components/
│   │   ├── MainImg.jsx      # 메인 이미지 섹션
│   │   ├── Content.jsx      # 미션 인증 섹션
│   │   └── HowToParticipate.jsx  # 참여방법 섹션
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── videos/              # 동영상 파일 저장 위치
└── package.json
```

## 배포 방법

### 1. GitHub에 업로드

```bash
# Git 초기화 (아직 안 했다면)
git init
git add .
git commit -m "Initial commit"

# GitHub 저장소 생성 후
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Netlify로 배포

1. [Netlify](https://www.netlify.com/)에 가입
2. "Add new site" → "Import an existing project"
3. GitHub 저장소 연결
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy 클릭

### 3. Vercel로 배포

1. [Vercel](https://vercel.com/)에 가입
2. "New Project" 클릭
3. GitHub 저장소 선택
4. Framework Preset: Vite 선택
5. Deploy 클릭

### 4. 정적 파일로 배포

```bash
# 빌드
npm run build

# dist 폴더의 내용을 웹 서버에 업로드
```

## 주의사항

- 동영상 파일은 `public/videos/` 폴더에 넣어야 합니다
- 이미지 파일은 Figma에서 제공하는 localhost 서버를 사용 중입니다
- 실제 배포 시 이미지와 동영상 파일을 적절한 CDN이나 서버에 업로드해야 합니다
