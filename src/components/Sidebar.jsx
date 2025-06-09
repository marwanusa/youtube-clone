import React from "react";
import { NavLink } from "react-router-dom";
import HistoryIcon from "../assets/HistoryIcon.svg?react";
import PlaylistIcon from "../assets/PlaylistIcon.svg?react";
import YourVideosIcon from "../assets/YourVideosIcon.svg?react";
import CoursesIcon from "../assets/CoursesIcon.svg?react";
import WatchLaterIcon from "../assets/WatchLaterIcon.svg?react";
import LikedVideosIcon from "../assets/LikedVideosIcon.svg?react";
import TrendingIcon from "../assets/TrendingIcon.svg?react";
import MusicIcon from "../assets/MusicIcon.svg?react";
import LiveIcon from "../assets/LiveIcon.svg?react";
import GamingIcon from "../assets/GamingIcon.svg?react";
import SportsIcon from "../assets/SportsIcon.svg?react";
import YouTubePremiumIcon from "../assets/YouTubePremiumIcon.svg?react";
import YouTubeStudioIcon from "../assets/YouTubeStudioIcon.svg?react";
import YouTubeMusicIcon from "../assets/YouTubeMusicIcon.svg?react";
import YouTubeKidsIcon from "../assets/YouTubeKidsIcon.svg?react";
import SettingsIcon from "../assets/SettingsIcon.svg?react";
import ReportHistoryIcon from "../assets/ReportHistoryIcon.svg?react";
import HelpIcon from "../assets/HelpIcon.svg?react";
import FeedbackIcon from "../assets/FeedbackIcon.svg?react";
import HomeIcon from "../assets/Home.svg?react";
import ShortsIcon from "../assets/Shorts.svg?react";
import SubscriptionsIcon from "../assets/Subs.svg?react";
import Profile from "../assets/Profile.svg?react";

const Sidebar = ({ SidebarShow }) => {
  const sidebarElements = [
    // Section 1: Main Navigation
    {
      type: "item",
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      type: "item",
      text: "Shorts",
      icon: <ShortsIcon />,
    },
    {
      type: "item",
      text: "Subscriptions",
      icon: <SubscriptionsIcon />,
      badge: true,
    },

    // Separator
    { type: "separator" },

    // Section 2: You
    {
      type: "header",
      text: "You",
    },
    {
      type: "item",
      text: "History",
      icon: <HistoryIcon />,
    },
    {
      type: "item",
      text: "Playlists",
      icon: <PlaylistIcon />,
    },
    {
      type: "item",
      text: "Your videos",
      icon: <YourVideosIcon />,
    },
    {
      type: "item",
      text: "Your courses",
      icon: <CoursesIcon />,
    },
    {
      type: "item",
      text: "Watch later",
      icon: <WatchLaterIcon />,
    },
    {
      type: "item",
      text: "Liked videos",
      icon: <LikedVideosIcon />,
    },

    // Separator
    { type: "separator" },

    // Section 3: Explore
    {
      type: "header",
      text: "Explore",
    },
    {
      type: "item",
      text: "Trending",
      icon: <TrendingIcon />,
    },
    {
      type: "item",
      text: "Music",
      icon: <MusicIcon />,
    },
    {
      type: "item",
      text: "Live",
      icon: <LiveIcon />,
    },
    {
      type: "item",
      text: "Gaming",
      icon: <GamingIcon />,
    },
    {
      type: "item",
      text: "Sports",
      icon: <SportsIcon />,
    },

    // Separator
    { type: "separator" },

    // Section 4: More from YouTube
    {
      type: "header",
      text: "More from YouTube",
    },
    {
      type: "item",
      text: "YouTube Premium",
      icon: <YouTubePremiumIcon />,
    },
    {
      type: "item",
      text: "YouTube Studio",
      icon: <YouTubeStudioIcon />,
    },
    {
      type: "item",
      text: "YouTube Music",
      icon: <YouTubeMusicIcon />,
    },
    {
      type: "item",
      text: "YouTube Kids",
      icon: <YouTubeKidsIcon />,
    },

    // Separator
    { type: "separator" },

    // Section 5: Settings and Feedback
    {
      type: "item",
      text: "Settings",
      icon: <SettingsIcon />,
    },
    {
      type: "item",
      text: "Report history",
      icon: <ReportHistoryIcon />,
    },
    {
      type: "item",
      text: "Help",
      icon: <HelpIcon />,
    },
    {
      type: "item",
      text: "Send feedback",
      icon: <FeedbackIcon />,
    },
  ];

  const smallSidebarElements = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Shorts",
      icon: <ShortsIcon />,
    },
    {
      text: "Subscriptions",
      icon: <SubscriptionsIcon />,
    },
    {
      text: "You",
      icon: <Profile />,
    },
  ];
  return (
    <>
      {SidebarShow ? (
        <div className=" fixed flex top-0 left-0 w-[240px] h-screen mt-[64px] bg-[#0f0f0f] z-50 flex-col overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-thumb]:rounded-full
  hover:[&::-webkit-scrollbar-thumb]:bg-[#9f9f9f]
  [&::-webkit-scrollbar-thumb]:bg-transparent
">
          {sidebarElements.map((item, index) => {
            if (item.type === "item") {
              return (
                <NavLink
                  to={`/${item.text === "Home" ? "" : item.text.toLowerCase()}`}
                  key={index}
                  className="p-2 cursor-pointer flex items-center gap-5 w-full h-[48px] hover:bg-[#272727] rounded-2xl px-4"
                >
                  <div className="w-[27px] h-[27px]">{item.icon}</div>
                  <p className="text-[15px] font-medium text-white">
                    {item.text}
                  </p>
                </NavLink>
              );
            }
            if (item.type === "separator") {
              return <hr key={index} className="my-2 border-[#444]" />;
            }
            if (item.type === "header") {
              return (
                <div
                  key={index}
                  className="text-[12px] font-medium text-white px-4 py-2"
                >
                  {item.text}
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="hidden fixed md:flex top-0 left-0 w-[70px] h-screen mt-[64px] bg-[#0f0f0f] z-50 flex-col overflow-y-auto">
          {smallSidebarElements.map((item, index) => (
            <NavLink
            to={`/${item.text === "Home" ? "" : item.text.toLowerCase()}`}
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center gap-1 w-full h-[74px] hover:bg-[#272727] rounded-2xl "
            >
              <div className="w-[24px] h-[24px]">{item.icon}</div>
              <p className="text-[10px] font-medium text-white">{item.text}</p>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
