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
          안녕하세요. 저는 이수민입니다. KAIST에 재학 중이며, 전산학부와 전기및전자공학부를 전공합니다.
        </p>
      </div>

      {/* 꿈/목표 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 진로 계획</h2>
        
        {/* ✏️ 수정 2: 꿈이나 목표를 바꿔보세요! */}
        <p className="text-gray-700 text-lg leading-relaxed">
          컴퓨터 시스템에 관심이 많아 운영체제, 컴퓨터 구조 등을 배우고 있습니다.
          KAIST CASYS 연구실에 진학해 박사과정까지 마치는 것이 목표입니다.
        </p>
      </div>

    </div>
  );
}

export default About;
