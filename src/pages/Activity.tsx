/* ========================================
   🎯 Activity.tsx - 활동 탭
   ========================================
   
   ✏️ 여기서 수정할 것:
   1. MBTI 4개 값을 true 또는 false로 바꿔보세요!
   2. 좋아하는 것 목록
   3. 좋아하는 노래 목록
   
   💡 조건부 렌더링 배우기!
   true면 왼쪽이 선택되고, false면 오른쪽이 선택돼요!
   
   ======================================== */

function Activity() {
  // ✏️ 수정: true 또는 false로 바꿔서 나의 MBTI를 만들어보세요!
  
  const isE = true;   // true = E(외향), false = I(내향)
  const isN = false;  // true = N(직관), false = S(감각)
  const isF = true;   // true = F(감정), false = T(사고)
  const isP = false;  // true = P(인식), false = J(판단)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* MBTI 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🧠 나의 MBTI</h2>
        
        {/* 
          💡 조건부 렌더링!
          변수가 true면 왼쪽(E, N, F, P)이 선택되고,
          false면 오른쪽(I, S, T, J)이 선택돼요!
        */}
        
        <div className="grid grid-cols-4 gap-3">
          
          {/* E vs I */}
          <div className="text-center">
            {isE ? (
              <div className="bg-yellow-400 text-white rounded-xl p-4">
                <p className="text-3xl font-black">E</p>
                <p className="text-xs mt-1">외향형</p>
              </div>
            ) : (
              <div className="bg-purple-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">I</p>
                <p className="text-xs mt-1">내향형</p>
              </div>
            )}
          </div>

          {/* N vs S */}
          <div className="text-center">
            {isN ? (
              <div className="bg-green-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">N</p>
                <p className="text-xs mt-1">직관형</p>
              </div>
            ) : (
              <div className="bg-orange-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">S</p>
                <p className="text-xs mt-1">감각형</p>
              </div>
            )}
          </div>

          {/* F vs T */}
          <div className="text-center">
            {isF ? (
              <div className="bg-pink-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">F</p>
                <p className="text-xs mt-1">감정형</p>
              </div>
            ) : (
              <div className="bg-blue-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">T</p>
                <p className="text-xs mt-1">사고형</p>
              </div>
            )}
          </div>

          {/* P vs J */}
          <div className="text-center">
            {isP ? (
              <div className="bg-cyan-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">P</p>
                <p className="text-xs mt-1">인식형</p>
              </div>
            ) : (
              <div className="bg-red-500 text-white rounded-xl p-4">
                <p className="text-3xl font-black">J</p>
                <p className="text-xs mt-1">판단형</p>
              </div>
            )}
          </div>

        </div>

        {/* 결과 표시 */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">나의 MBTI는</p>
          <p className="text-4xl font-black text-gray-800 mt-1">
            {isE ? "E" : "I"}{isN ? "N" : "S"}{isF ? "F" : "T"}{isP ? "P" : "J"}
          </p>
        </div>
      </div>

      {/* 좋아하는 것 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💖 좋아하는 것</h2>
        
        {/* ✏️ 수정: 좋아하는 것들을 바꿔보세요! 추가하거나 삭제해도 돼요! */}
        <div className="flex flex-wrap gap-3">
          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-lg font-medium">
            🧶 뜨개질
          </span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-lg font-medium">
            💃 춤
          </span>
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-lg font-medium">
            💖 연애 예능
          </span>
          <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-lg font-medium">
            🎥 영화보기
          </span>
          <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-lg font-medium">
            🏊‍♀️ 수영
          </span>
        </div>
      </div>

      {/* 좋아하는 노래 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎵 좋아하는 노래</h2>
        
        {/* ✏️ 수정: 좋아하는 노래를 바꿔보세요! */}
        <div className="space-y-4">
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 flex items-center gap-4">
            <span className="text-4xl">🥇</span>
            <div>
              <p className="font-bold text-lg text-gray-800">I Feel For You</p>
              <p className="text-gray-500">Chaka Khan</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 flex items-center gap-4">
            <span className="text-4xl">🥈</span>
            <div>
              <p className="font-bold text-lg text-gray-800">Do It!</p>
              <p className="text-gray-500">하우스룰즈</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 flex items-center gap-4">
            <span className="text-4xl">🥉</span>
            <div>
              <p className="font-bold text-lg text-gray-800">멸종위기사랑</p>
              <p className="text-gray-500">이찬혁</p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Activity;
