import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import App from "../App";
import App from "@/App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <h1>라우트 테스트 1</h1>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "test",
            element: <h2>중첩 라우트 테스트</h2>,
          },
        ],
      },
      {
        path: "test2",
        element: <h1>라우트 테스트 2</h1>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
