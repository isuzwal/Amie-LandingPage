import { Earth, Github, ShoppingBag } from "lucide-react";
import { Props } from "./types";
import { SiDuolingo } from "react-icons/si";
import { PiSpotifyLogoFill } from "react-icons/pi";
import { SiBytedance } from "react-icons/si";

export const CompaniesList: Props[] = [
  {
    icon: <Github className="size-4 fill-black text-black" />,
    name: "GitHub",
  },
  {
    icon: <Earth className="size-4" />,
    name: "World",
  },
  {
    name: "Canva",
  },
  {
    icon: <ShoppingBag className="size-4" />,
    name: "Shopify",
  },
  {
    icon: <SiDuolingo className="size-4" />,
    name: "Duolingo",
  },
  {
    icon: <PiSpotifyLogoFill className="size-4" />,
    name: "Spotify",
  },
  {
    name: "Cal.com",
  },
  {
    name: "Nothing",
  },
  {
    icon: <SiBytedance className="size-4" />,
    name: "ByteDance",
  },
];
