import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
