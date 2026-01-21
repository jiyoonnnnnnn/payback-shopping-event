const imgConts = "http://localhost:3845/assets/cfbd307dae354faf973331e1edb38d6ab5512791.svg";
const imgConts1 = "http://localhost:3845/assets/b30fb91b37df4957078ca55bee65f63be6c124a7.svg";
const imgConts2 = "http://localhost:3845/assets/a16c7feb6d5a9fa4d84d09a4ba5241a272b7f271.svg";

export default function Content() {
  return (
    <div className="bg-[#090837] flex flex-col gap-[26px] items-center px-[43px] py-[24px] relative w-full" data-name="content" data-node-id="206:15662">
      <div className="flex flex-col font-['Pretendard',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-0.4px]" data-node-id="206:15663">
        <p className="text-[16px]">
          <span className="font-bold leading-[1.5] not-italic">미션 인증</span>
          <span className="leading-[1.5]">{`하고, 구매금액 `}</span>
          <span className="font-bold leading-[1.5] not-italic">페이백 받기!</span>
          <span className="leading-[1.5]">
            <br aria-hidden="true" />
            자유롭게 사용 가능한 적립금 지급 혜택!
          </span>
        </p>
      </div>
      <div className="flex gap-[20px] items-center relative shrink-0" data-name="content" data-node-id="206:15664">
        <div className="border border-solid flex flex-col gap-[11px] h-[82px] items-center px-[12px] py-[10px] relative rounded-[20px] shrink-0 w-[80px]" data-name="con_1" data-node-id="206:15665" style={{ backgroundImage: "linear-gradient(143.13deg, rgba(20, 0, 98, 0.2) 2.6978%, rgba(135, 110, 255, 0.2) 94.874%)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
          <div className="h-[16.909px] relative shrink-0 w-[15px]" data-name="conts" data-node-id="206:15666">
            <img alt="" className="block max-w-none size-full" src={imgConts} />
          </div>
          <div className="flex flex-col font-['Pretendard',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] w-full" data-node-id="206:15672">
            <p className="mb-0 break-words">상품</p>
            <p className="break-words">구매하고</p>
          </div>
        </div>
        <div className="border border-solid flex flex-col gap-[11px] h-[82px] items-center px-[12px] py-[10px] relative rounded-[20px] shrink-0 w-[80px]" data-name="con_2" data-node-id="206:15673" style={{ backgroundImage: "linear-gradient(139.816deg, rgba(20, 0, 98, 0.2) 3.8917%, rgba(135, 110, 255, 0.2) 90.62%)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
          <div className="h-[15.364px] relative shrink-0 w-[16px]" data-name="conts" data-node-id="206:15674">
            <img alt="" className="block max-w-none size-full" src={imgConts1} />
          </div>
          <div className="flex flex-col font-['Pretendard',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] w-full" data-node-id="206:15677">
            <p className="mb-0 break-words">미션</p>
            <p className="break-words">수행 후</p>
          </div>
        </div>
        <div className="border border-solid flex flex-col gap-[11px] h-[82px] items-center px-[12px] py-[10px] relative rounded-[20px] shrink-0 w-[80px]" data-name="con_3" data-node-id="206:15678" style={{ backgroundImage: "linear-gradient(145.524deg, rgba(20, 0, 98, 0.2) 10.89%, rgba(135, 110, 255, 0.2) 93.136%)", borderColor: "rgba(255, 255, 255, 0.2)" }}>
          <div className="h-[16.385px] relative shrink-0 w-[16px]" data-name="conts" data-node-id="206:15679">
            <img alt="" className="block max-w-none size-full" src={imgConts2} />
          </div>
          <div className="flex flex-col font-['Pretendard',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px] w-full" data-node-id="206:15688">
            <p className="mb-0 break-words">구매금액</p>
            <p className="break-words">페이백</p>
          </div>
        </div>
      </div>
    </div>
  );
}
