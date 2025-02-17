import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
// 페이지 컴포넌트
import MainPage from "@pages/index/Index";
//const MainPage = React.lazy(() => import("@pages/index/Index"));
import BookmarkPage from "@pages/bookmark/index";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />}></Route>
          <Route path="/search/:id" element={<MainPage />}></Route>
          <Route path="/bookmark" element={<BookmarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
