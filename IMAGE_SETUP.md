# 이미지 설정 가이드

현재 이미지들이 `localhost:3845`에서 제공되고 있어서 GitHub에 업로드하면 이미지가 깨집니다.

## 해결 방법

### 방법 1: Figma에서 이미지 직접 다운로드 (권장)

1. Figma 파일을 열고 각 이미지를 우클릭
2. "Export" 선택
3. 적절한 형식(PNG/SVG) 선택 후 다운로드
4. 다운로드한 이미지를 `public/images/` 폴더에 다음 이름으로 저장:

```
public/images/
├── main-image.png          (MainImg 컴포넌트용)
├── online-shopping.png     (STEP 1 아이콘)
├── trophy.png              (STEP 2 아이콘)
├── reward-gift.png         (STEP 3 아이콘)
├── ellipse-6085.svg        (STEP 1, 2 배경 원)
├── ellipse-6087.svg        (STEP 3 배경 원)
├── line.svg                (연결선)
├── conts.svg               (Content 카드 1 아이콘)
├── conts1.svg              (Content 카드 2 아이콘)
└── conts2.svg              (Content 카드 3 아이콘)
```

### 방법 2: 브라우저에서 이미지 다운로드

1. 개발 서버 실행 (`npm run dev`)
2. 브라우저에서 각 이미지 URL을 열어서 다운로드:
   - http://localhost:3845/assets/2f7e8fa57c5b5b00a77e3e0ae1fef4afb541b8c2.png → main-image.png
   - http://localhost:3845/assets/596e3d41bec2da477b7202d678cf9d5ed5598f35.png → online-shopping.png
   - http://localhost:3845/assets/8e3950092ef59ff5f52bc306eb28f87de3a26234.png → trophy.png
   - http://localhost:3845/assets/8f1840c535ba65c40fe9c58dac566c30aabab6b9.png → reward-gift.png
   - http://localhost:3845/assets/ec16a4de6cf280f3f73e4932dade68328d5c17db.svg → ellipse-6085.svg
   - http://localhost:3845/assets/9b13b4209b14c5ec0a8e4148d7eca4d89fd80121.svg → ellipse-6087.svg
   - http://localhost:3845/assets/5daa3aa2e55d5989f396c8529d2b7d365f472e13.svg → line.svg
   - http://localhost:3845/assets/cfbd307dae354faf973331e1edb38d6ab5512791.svg → conts.svg
   - http://localhost:3845/assets/b30fb91b37df4957078ca55bee65f63be6c124a7.svg → conts1.svg
   - http://localhost:3845/assets/a16c7feb6d5a9fa4d84d09a4ba5241a272b7f271.svg → conts2.svg

3. 다운로드한 이미지를 `public/images/` 폴더에 저장

### 이미지 파일 목록

필요한 이미지 파일:
- `main-image.png` - 메인 섹션의 "페이백" 이미지
- `online-shopping.png` - STEP 1 쇼핑 아이콘
- `trophy.png` - STEP 2 트로피 아이콘  
- `reward-gift.png` - STEP 3 선물 아이콘
- `ellipse-6085.svg` - STEP 1, 2 배경 원형
- `ellipse-6087.svg` - STEP 3 배경 원형
- `line.svg` - 단계 연결선
- `conts.svg` - Content 카드 1 아이콘
- `conts1.svg` - Content 카드 2 아이콘
- `conts2.svg` - Content 카드 3 아이콘

이미지를 모두 다운로드한 후 GitHub에 다시 업로드하면 이미지가 정상적으로 표시됩니다!
