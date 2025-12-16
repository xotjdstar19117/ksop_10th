/* ========================================
   🎯 Contact.tsx - 연락 탭
   ========================================
   
   ✏️ 여기서 수정할 것:
   1. 이메일 주소
   2. 인스타 아이디
   3. 유튜브 채널
   4. 하고 싶은 말
   
   ======================================== */

function Contact() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* 연락처 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📬 연락처</h2>
        
        <div className="space-y-4">
          
          {/* ✏️ 수정 1: 이메일을 바꿔보세요! */}
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
            <span className="text-4xl">📧</span>
            <div>
              <p className="text-gray-500">이메일</p>
              <p className="font-bold text-lg text-gray-800">anghk@gamil.com</p>
            </div>
          </div>
          
          
        </div>
      </div>

      {/* 한마디 카드 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💬 하고 싶은 말</h2>
        
        {/* ✏️ 수정 4: 하고 싶은 말을 바꿔보세요! */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center">
          <p className="text-gray-700 text-xl">
            "10차시 동안 즐거웠습니다! 배운 것들 잊지마세요~~"
          </p>
        </div>
      </div>

      {/* 방문자 환영 메시지 */}
      <div className="text-center text-gray-400 py-4">
        방문해주셔서 감사합니다!
      </div>

    </div>
  );
}

export default Contact;
