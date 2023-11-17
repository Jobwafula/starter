import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchCategory from "./pages/SearchCategory";
import DebitCard from "./pages/debitCard";
import MpesaPayment from "./pages/mpesa";
import Action from "./components/categories/Action";
import All from "./components/categories/All";
import SubscriptionPage from "./pages/subscription/SubscriptionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/subscription" element = {<SubscriptionPage />}/>
        <Route path="/debitCard" element={<DebitCard/>}/>
        <Route path="/mpesa" element={<MpesaPayment/>}/>
        <Route path="category" element={<SearchCategory />}>
          <Route path="action" element={<Action />} />
          <Route path="all" element={<All />} />
        </Route>   
      </Routes>
    </>
  );
}

export default App;
