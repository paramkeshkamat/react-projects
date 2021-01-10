import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import FolderRoundedIcon from "@material-ui/icons/FolderRounded";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DescriptionIcon from "@material-ui/icons/Description";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    url: "/",
    text: "team",
    icon: <GroupRoundedIcon />,
  },
  {
    id: 3,
    url: "/",
    text: "projects",
    icon: <FolderRoundedIcon />,
  },
  {
    id: 4,
    url: "/",
    text: "calendar",
    icon: <CalendarTodayIcon />,
  },
  {
    id: 5,
    url: "/",
    text: "documents",
    icon: <DescriptionIcon />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    url: "https://www.linked.com",
    icon: <LinkedInIcon />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <InstagramIcon />,
  },
  {
    id: 5,
    url: "https://www.github.com",
    icon: <GitHubIcon />,
  },
];
