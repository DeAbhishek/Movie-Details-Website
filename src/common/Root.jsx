import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const Root = () => {
  return (
    <>
      <Header />
      <main style={{ margin: "0px 40px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
