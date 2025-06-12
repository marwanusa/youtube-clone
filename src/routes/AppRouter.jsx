import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeFeed from "../pages/HomeFeed";
import VideoDetails from "../pages/VideoDetails";
import SearchResults from "../pages/SearchResults";
import ChannelPage from "../pages/ChannelPage";
import Lottie from "lottie-react";
import Error404 from "../lotties/404 error.json";
import UnexpectedError from "../lotties/error.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
<div className="flex flex-col  h-[100vh] justify-center items-center">
<Lottie animationData={UnexpectedError} loop={true} />
<h1 className="text-3xl font-bold text-center">Oops! Something went wrong.</h1>
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomeFeed />,
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
        path: "video/:videoId",
        element: <VideoDetails />,
        loader: async ({ params }) => {
          const { videoId } = params;
          if (!videoId) {
            throw new Response("Bad Request", {
              statusText: "Bad Request",
              status: 400,
            });
          }
          return { videoId };
        },
      },
      {
        path: "*",
        element: (
          <div className="flex h-[full] justify-center items-center">
            <Lottie animationData={Error404} loop={true} />
          </div>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
