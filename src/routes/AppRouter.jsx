import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeFeed from "../pages/HomeFeed";
import Playlist from "../pages/Playlist";
import VideoDetails from "../pages/VideoDetails";
import SearchResults from "../pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <HomeFeed />,
      },
      {
        path: "playlists",
        element: <Playlist />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
      {
        path: "video/:prefix",
        element: <VideoDetails />, 
        loader: async ({ params }) => {
          const { prefix } = params;
          if (!prefix) {
            throw new Response("Bad Request", {
              statusText: "Bad Request",
              status: 400,
            });
          }
          return { prefix };
        },
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>, 
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
