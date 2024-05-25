import { Container } from "@chakra-ui/react";
import "./App.css";
import Account from "./components/Pages/Account/Account";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import AccInfo from "./components/Pages/Account/AccInfo";
import AccPrivacy from "./components/Pages/Account/AccPrivacy";
import AccPayment from "./components/Pages/Account/AccPayment";
import NoMatch from "./components/Pages/NoMatch";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import Single_Card from "./components/partials/Single_Card";
function App() {
  return (
    <>
      <Container
        maxW={{
          base: "600px",
          sm: "750px",
          md: "900px",
          lg: "1200px",
          xl: "1920px",
          // base: "500px",
          // sm: "600px",
          // md: "750px",
          // lg: "900px",
          // xl: "1200px",
        }}
        mx="auto"
        my="0"
      >
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account">
            <Route index path="in" element={<Account />} />
            <Route path="info" element={<AccInfo />} />
            <Route path="payment" element={<AccPayment />} />
            <Route path="privacy" element={<AccPrivacy />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          <Route path="single_user-page" element={<Single_Card />} />
        </Routes>


        <Footer />

        {/* <Single_Card /> */}
      </Container>
    </>
  );
}

export default App;
