/* ========================================
   🎯 About.tsx - 소개 탭
   ========================================
   
   ✏️ 여기서 수정할 것:
   1. 자기소개 내용
   2. 꿈/목표
   
   ======================================== */

function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* 자기소개 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 자기소개</h2>
        
        {/* ✏️ 수정 1: 자기소개를 바꿔보세요! */}
        <p className="text-gray-700 text-lg leading-relaxed">
          안녕하세요. 저는 김태성입니다. 강신중학교에 재학 중이며, 과학 그 중에서 화학을 좋아합니다.
        </p>
      </div>

      {/* 꿈/목표 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 진로 계획</h2>
        
        {/* ✏️ 수정 2: 꿈이나 목표를 바꿔보세요! */}
        <p className="text-gray-700 text-lg leading-relaxed">
          원소에 관심이 많아 원자의 구조 화학결합 등을 배우고 있습니다.
          KAIST 화학과 연구실에 진학해 박사과정까지 마치는 것이 목표입니다.
        </p>
      </div>

    </div>
  );
}

export default About;
