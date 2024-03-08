import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchCategory from "./pages/SearchCategory";
import Action from "./components/categories/Action";
import All from "./components/categories/All";
import SubscriptionPage from "./pages/subscription/SubscriptionPage";
import Bollywood from "./components/categories/Bollywood";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/subscription" element = {<SubscriptionPage />}/>
        <Route path="category" element={<SearchCategory />}>
          <Route path="action" element={<Action />} />
          <Route path="all" element={<All />} />
          <Route path="bollywood" element={<Bollywood />}/>
        </Route>   
      </Routes>
    </>
  );
}

export default App;
