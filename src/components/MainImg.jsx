const imgMainImage = "http://localhost:3845/assets/2f7e8fa57c5b5b00a77e3e0ae1fef4afb541b8c2.png";
// 동영상 파일 경로를 여기에 설정하세요
// public/videos 폴더에 동영상을 넣으면 "/videos/파일명.mp4" 형식으로 사용
const videoSource = "/videos/background.mp4"; // 동영상 파일명을 변경하세요

export default function MainImg() {
  return (
    <div className="bg-gradient-to-b from-[#8c9bfc] relative w-full h-full to-[#524ffc]" data-name="main_img" data-node-id="206:15691">
      <div className="absolute h-[446px] left-0 top-0 w-[360px]" data-name="Background image" data-node-id="206:15692">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay className="absolute h-[109.37%] left-[-12.77%] max-w-none top-[-9.41%] w-[125.54%]" controlsList="nodownload" loop playsInline muted>
            <source src={videoSource} type="video/mp4" />
            {/* 동영상 파일이 없을 경우를 대비한 대체 메시지 */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.1)] h-[446px] left-0 mix-blend-overlay top-0 w-[360px]" data-name="Background image" data-node-id="206:15693" />
      <div className="absolute bg-gradient-to-t from-[6.064%] from-[rgba(68,66,255,0)] h-[446px] left-0 mix-blend-overlay to-[#4442ff] top-0 w-[360px]" data-name="Background image" data-node-id="206:15694" />
      <div className="absolute bg-gradient-to-t from-[6.064%] from-[rgba(68,66,255,0)] h-[446px] left-0 opacity-60 to-black top-0 w-[360px]" data-name="Background image" data-node-id="206:15695" />
      <div className="absolute flex flex-col gap-[13px] items-center left-[62px] top-[59px] w-[236px]" data-name="main_text" data-node-id="206:15696">
        <div className="flex flex-col font-['Black Han Sans',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[34px] text-center text-white tracking-[-0.75px] w-[min-content]" data-node-id="206:15697">
          <p className="leading-[1.2]">상품 받고</p>
        </div>
        <div className="h-[70.074px] relative shrink-0 w-[218.909px]" data-name="img_text" data-node-id="206:15698">
          <div className="absolute h-[70.074px] left-0 top-0 w-[218.909px]" data-name="Main image" data-node-id="206:15699">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMainImage} />
          </div>
        </div>
        <div className="bg-clip-text flex flex-col font-['Black Han Sans',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[49px] text-center tracking-[-1.225px] w-[min-content]" data-node-id="206:15700" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(101.871deg, rgb(53, 83, 255) 18.145%, rgb(181, 246, 255) 42.727%, rgb(227, 106, 255) 100%)" }}>
          <p className="leading-[1.2]">받아가세요!</p>
        </div>
      </div>
    </div>
  );
}
