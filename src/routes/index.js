import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import IntroPage from "@/pages/IntroPage";
import CurriculumPage from "@/pages/curriculum/CurriculumPage";
import WorkBookPage from "@/pages/WorkBookPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <IntroPage />,
      },
      {
        path: "curriculum",
        element: <CurriculumPage />,
      },
      {
        path: "workbook",
        element: <WorkBookPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
