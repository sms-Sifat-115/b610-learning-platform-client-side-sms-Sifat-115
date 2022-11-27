import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // children: [
      //   {
      //     path: "/",
      //     element: <Home></Home>,
      //   },
      //   {
      //     path: "/quiz",
      //     element: <Quiz></Quiz>,
      //   },
      //   {
      //     path: "/quiz/:id",
      //     loader: async ({ params }) => {
      //       return fetch(
      //         `https://openapi.programming-hero.com/api/quiz/${params.id}`
      //       );
      //     },
      //     element: <Questions></Questions>,
      //   },
      //   {
      //     path: "/stats",
      //     element: <Stats></Stats>,
      //   },
      //   {
      //     path: "/blogs",
      //     element: <Blogs></Blogs>,
      //   },
      //   {
      //     path: "*",
      //     element: <Error></Error>,
      //   },
      // ],
    },
  ]);
  return (
    <div className>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
