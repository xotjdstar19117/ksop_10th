/* ========================================
   🎯 App.tsx - 앱의 전체 구조
   ========================================
   
   이 파일은 건드리지 않아도 돼요!
   URL에 따라 어떤 페이지를 보여줄지 설정되어 있어요.
   
   ======================================== */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 컴포넌트들 가져오기
import Header from "./components/Header";
import TabBar from "./components/TabBar";

// 페이지들 가져오기
import About from "./pages/About";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* 전체 화면 */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        
        {/* 상단: 프로필 헤더 */}
        <Header />
        
        {/* 탭 바 (Link 사용!) */}
        <TabBar />
        
        {/* 탭 내용 (URL에 따라 바뀜) */}
        <div className="container mx-auto px-4 py-8">
          <Routes>
            {/* 처음 들어오면 /about으로 이동 */}
            <Route path="/" element={<Navigate to="/about" />} />
            
            {/* 각 탭 페이지 */}
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
