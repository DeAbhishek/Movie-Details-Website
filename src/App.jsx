import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Root from "./common/Root";
import { Home, MovieDetail, PageNotFound } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "movie/:imdbID",
          element: <MovieDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
