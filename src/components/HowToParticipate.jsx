const imgOnlineShopping1 = "/images/online-shopping.png";
const imgFinancialAchievementSuccessTrophy1 = "/images/trophy.png";
const imgRewardGift1 = "/images/reward-gift.png";
const imgEllipse6085 = "/images/ellipse-6085.svg";
const imgEllipse6087 = "/images/ellipse-6087.svg";
const imgLine1 = "/images/line.svg";

export default function HowToParticipate() {
  return (
    <div className="bg-[#f4f4fa] flex flex-col gap-[21px] items-center px-[5.6%] sm:px-[20px] py-[34px] pb-[100px] relative w-full" data-name="How to participate" data-node-id="206:15630">
      <div className="flex flex-col font-['Black Han Sans',sans-serif] justify-center not-italic relative shrink-0 text-[24px] text-black text-center" data-node-id="206:15631">
        <p className="leading-[1.26]">참여방법</p>
      </div>
      <div className="bg-white flex flex-col min-h-[394px] items-start justify-between p-[6.7%] sm:p-[24px] relative rounded-[20px] shrink-0 w-full max-w-[320px]" data-name="explanation" data-node-id="206:15632">
        <div className="flex items-center gap-[24px] relative shrink-0 w-full" data-name="STEP 1" data-node-id="206:15633">
          <div className="relative shrink-0 size-[90px] animate-pulse-icon" data-name="icon_01" data-node-id="206:15634">
            <div className="absolute left-0 size-[90px] top-0" data-node-id="206:15635">
              <img alt="" className="block max-w-none size-full" src={imgEllipse6085} />
            </div>
            <div className="absolute h-[64px] left-[8px] rounded-[21px] top-[14px] w-[67px]" data-name="online-shopping 1" data-node-id="206:15636">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px] flex items-center justify-center">
                <img alt="" className="max-h-full max-w-full object-contain" src={imgOnlineShopping1} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 flex-1 min-w-0" data-name="text" data-node-id="206:15637">
            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="title" data-node-id="206:15638">
              <div className="flex flex-col font-['Black Han Sans',sans-serif] justify-center relative shrink-0 text-[#536cff] text-[11px] w-full" data-node-id="206:15639">
                <p className="leading-[1.26]">STEP 1</p>
              </div>
              <div className="flex flex-col font-['Pretendard',sans-serif] justify-center relative shrink-0 text-black tracking-[-0.4px] w-full" data-node-id="206:15640">
                <p className="text-[16px] leading-[1.26]">
                  <span className="font-bold not-italic text-black">원하는 상품</span>
                  <span> </span>
                  <span className="font-light not-italic text-black">구매</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col font-['Pretendard',sans-serif] justify-center w-full relative shrink-0 text-[#6e6e6e] text-[12px] text-left tracking-[-0.3px]" data-node-id="206:15641">
              <p className="leading-[1.26]">원하는 상품 확인 후 구매하세요!</p>
            </div>
          </div>
        </div>
        {/* 연결선 1 */}
        <div className="flex w-full relative" style={{ height: '41px' }}>
          <div className="absolute left-[45px] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <div className="flex-none">
              <div className="h-[22px] relative w-[41px]" data-name="Line_1" data-node-id="206:15660">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[24px] relative shrink-0 w-full" data-name="STEP 2" data-node-id="206:15642">
          <div className="relative shrink-0 size-[90px] animate-pulse-icon-delay-1" data-name="icon_02" data-node-id="206:15643">
            <div className="absolute left-0 size-[90px] top-0" data-node-id="206:15644">
              <img alt="" className="block max-w-none size-full" src={imgEllipse6085} />
            </div>
            <div className="absolute left-[5px] rounded-[40px] size-[80px] top-[6px] flex items-center justify-center overflow-hidden" data-name="financial-achievement-success-trophy 1" data-node-id="206:15645">
              <img alt="" className="max-h-full max-w-full object-contain pointer-events-none rounded-[40px]" src={imgFinancialAchievementSuccessTrophy1} />
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 flex-1 min-w-0" data-name="text" data-node-id="206:15646">
            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="title" data-node-id="206:15647">
              <div className="flex flex-col font-['Black Han Sans',sans-serif] justify-center relative shrink-0 text-[#536cff] text-[11px] w-full" data-node-id="206:15648">
                <p className="leading-[1.26]">STEP 2</p>
              </div>
              <div className="flex flex-col font-['Pretendard',sans-serif] justify-center relative shrink-0 text-black tracking-[-0.4px] w-full" data-node-id="206:15649">
                <p className="text-[16px] leading-[1.26]">
                  <span className="font-bold not-italic text-black">인증 미션</span>
                  <span> </span>
                  <span className="font-light not-italic text-black">제출</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col font-['Pretendard',sans-serif] justify-center w-full relative shrink-0 text-[#6e6e6e] text-[12px] text-left tracking-[-0.3px]" data-node-id="206:15650">
              <p className="leading-[1.26]">인증 미션 수행 후 제출해요!</p>
            </div>
          </div>
        </div>
        {/* 연결선 2 */}
        <div className="flex w-full relative" style={{ height: '41px' }}>
          <div className="absolute left-[45px] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <div className="flex-none">
              <div className="h-[22px] relative w-[41px]" data-name="Line_2" data-node-id="206:15661">
                <img alt="" className="block max-w-none size-full" src={imgLine1} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[24px] relative shrink-0 w-full" data-name="STEP 3" data-node-id="206:15651">
          <div className="relative shrink-0 size-[90px] animate-pulse-icon-delay-2" data-name="icon_03" data-node-id="206:15652">
            <div className="absolute left-0 size-[90px] top-0" data-node-id="206:15653">
              <img alt="" className="block max-w-none size-full" src={imgEllipse6087} />
            </div>
            <div className="absolute left-[5px] rounded-[40px] size-[80px] top-[5px] flex items-center justify-center overflow-hidden" data-name="reward-gift 1" data-node-id="206:15654">
              <img alt="" className="max-h-full max-w-full object-contain pointer-events-none rounded-[40px]" src={imgRewardGift1} />
            </div>
          </div>
          <div className="flex flex-col gap-[12px] items-start not-italic relative shrink-0 flex-1 min-w-0" data-name="text" data-node-id="206:15655">
            <div className="flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="title" data-node-id="206:15656">
              <div className="flex flex-col font-['Black Han Sans',sans-serif] justify-center relative shrink-0 text-[#536cff] text-[11px] w-full" data-node-id="206:15657">
                <p className="leading-[1.26]">STEP 3</p>
              </div>
              <div className="flex flex-col font-['Pretendard',sans-serif] font-light justify-center relative shrink-0 text-black tracking-[-0.4px] w-full" data-node-id="206:15658">
                <p className="text-[16px] leading-[1.26]">
                  <span className="font-bold not-italic">페이백</span>
                  <span> 지급</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col font-['Pretendard',sans-serif] justify-center leading-[1.26] w-full relative shrink-0 text-[#6e6e6e] text-[12px] text-left tracking-[-0.3px]" data-node-id="206:15659">
              <p className="mb-0">검수 후 30%~최대 120% 까지</p>
              <p>페이백 드려요!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
