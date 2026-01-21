const imgMainImage = "/images/main-image.png";
const imgText1 = "/images/Main heading.png"; // "상품 받고" 텍스트 이미지
const imgText2 = "/images/Subheading.png"; // "받아가세요!" 텍스트 이미지
// 동영상 파일 경로를 여기에 설정하세요
// public/videos 폴더에 동영상을 넣으면 "/videos/파일명.mp4" 형식으로 사용
const videoSource = "/videos/background.mp4"; // 동영상 파일명을 변경하세요

export default function MainImg() {
  return (
    <div className="bg-gradient-to-b from-[#8c9bfc] relative w-full h-full to-[#524ffc]" data-name="main_img" data-node-id="206:15691">
      <div className="absolute inset-0" data-name="Background image" data-node-id="206:15692">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay className="absolute h-[109.37%] left-[-12.77%] max-w-none top-[-9.41%] w-[125.54%]" controlsList="nodownload" loop playsInline muted>
            <source src={videoSource} type="video/mp4" />
            {/* 동영상 파일이 없을 경우를 대비한 대체 메시지 */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 mix-blend-overlay" data-name="Background image" data-node-id="206:15693" />
      <div className="absolute bg-gradient-to-t from-[6.064%] from-[rgba(68,66,255,0)] inset-0 mix-blend-overlay to-[#4442ff]" data-name="Background image" data-node-id="206:15694" />
      <div className="absolute bg-gradient-to-t from-[6.064%] from-[rgba(68,66,255,0)] inset-0 opacity-60 to-black" data-name="Background image" data-node-id="206:15695" />
      <div className="absolute flex flex-col gap-[2px] items-center left-[50%] top-[13.2%] -translate-x-1/2 w-[65.6%] max-w-[236px]" data-name="main_text" data-node-id="206:15696">
        <div className="relative shrink-0 w-full max-w-[236px]" data-node-id="206:15697">
          <img alt="상품 받고" className="w-full h-auto object-contain" style={{ transform: 'scale(0.5)', transformOrigin: 'center' }} src={imgText1} />
        </div>
        <div className="h-[70px] sm:h-[70.074px] relative shrink-0 w-[92.7%] max-w-[218.909px]" data-name="img_text" data-node-id="206:15698">
          <div className="absolute inset-0" data-name="Main image" data-node-id="206:15699">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMainImage} />
          </div>
        </div>
        <div className="h-[70px] sm:h-[70.074px] relative shrink-0 w-[92.7%] max-w-[218.909px]" data-node-id="206:15700">
          <div className="absolute inset-0">
            <img alt="받아가세요!" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgText2} />
          </div>
        </div>
      </div>
    </div>
  );
}
