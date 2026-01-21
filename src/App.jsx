import MainImg from './components/MainImg'
import Content from './components/Content'
import HowToParticipate from './components/HowToParticipate'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-900">
      <div className="relative w-[360px] h-[446px]">
        <MainImg />
      </div>
      <div className="w-[360px]">
        <Content />
      </div>
      <div className="w-[360px]">
        <HowToParticipate />
      </div>
      {/* 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[360px] flex justify-center bg-white pb-[20px] pt-[10px] px-[20px] z-50">
        <div className="bg-[#524ffc] flex items-center justify-center overflow-clip px-[20px] py-[12px] rounded-[12px] w-full max-w-[320px]" data-name="BTN_Default  / Large" data-node-id="206:15690">
          <div className="flex flex-col font-['Noto_Sans_KR',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.64px]" data-node-id="I206:15690;137:3169">
            <p className="leading-[26px]">미션 참가하러 가기</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
