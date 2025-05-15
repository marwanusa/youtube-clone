import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeFeed from "../pages/HomeFeed";
import Playlist from "../pages/Playlist";
import VideoDetails from "../pages/VideoDetails";
import SearchResults from "../pages/SearchResults";
import ChannelPage from "../pages/ChannelPage";

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
        path: "search/:searchTerm",
        element: <SearchResults />,
        loader: async ({ params }) => {
          const { searchTerm } = params;
          if (!searchTerm) {
            throw new Response("Bad Request", {
              statusText: "Bad Request",
              status: 400,
            });
          }
          return { searchTerm };
        },
      },
      {
        path: "channel/:channelId",
        element: <ChannelPage />,
        loader: async ({ params }) => {
          const { channelId } = params;
          if (!channelId) {
            throw new Response("Bad Request", {
              statusText: "Bad Request",
              status: 400,
            });
          }
          return { channelId };
        },
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
