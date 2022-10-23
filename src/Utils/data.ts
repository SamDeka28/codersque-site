import app from "../assets/images/app.svg";
import ui from "../assets/images/ui.svg";
import web from "../assets/images/web.svg";

import react from "../assets/images/react.svg";
import ionic from "../assets/images/ionic.svg";
import flutter from "../assets/images/flutter.svg";

import figma from "../assets/images/figma.svg";
import xd from "../assets/images/xd.svg";

import node from "../assets/images/node.svg";
import mongo from "../assets/images/mongo.svg";
import nginx from "../assets/images/nginx.svg";
import angular from "../assets/images/angular.svg";

export const services = [
  {
    name: "Mobile App Development",
    desc: "We build cross-platform mobile applications using modern technologies.",
    icon: app,
    tools: [react, ionic, flutter],
  },
  {
    name: "UI/UX Designing",
    desc: "We research, understand and plan to bring UX thats embracing and UI that’s soothing.",
    icon: ui,
    tools: [figma, xd],
  },
  {
    name: "Web Development",
    desc: "We gather requirements, brain-storm ideas, design and build your product like its our own.",
    icon: web,
    tools: [node, mongo, nginx, angular],
  },
];
