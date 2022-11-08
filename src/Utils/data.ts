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

import ionicIcon from "../assets/images/ionic-icon.svg";
import nodeIcon from "../assets/images/node-icon.svg";
import mongoIcon from "../assets/images/mongo-icon.svg";
import nginxIcon from "../assets/images/nginx-icon.svg";
import tsIcon from "../assets/images/typescript-icon.svg";
import reactIcon from "../assets/images/react-icon.svg";

import ecommerce from "../assets/images/ecommerce.svg";
import edtech from "../assets/images/edtech.svg";
import fintech from "../assets/images/fintech.svg";
import healthcare from "../assets/images/healthcare.svg";

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

export const technologies = [
  {
    name: "Ionic",
    icon: ionicIcon,
  },
  {
    name: "NodeJs",
    icon: nodeIcon,
  },
  {
    name: "MongoDB",
    icon: mongoIcon,
  },
  {
    name: "Nginx",
    icon: nginxIcon,
  },
  {
    name: "TypeScript",
    icon: tsIcon,
  },
  {
    name: "ReactJs",
    icon: reactIcon,
  },
];

export const industries = [
  {
    name: "HealthCare",
    icon: healthcare,
  },
  {
    name: "E-commerce",
    icon: ecommerce,
  },
  {
    name: "FinTech",
    icon: fintech,
  },
  {
    name: "EdTech",
    icon: edtech,
  },
];

export const footerLinks = [
  {
    title: "About",
    links: ["Our Company", "How we work", "Our Processes"],
  },
  {
    title: "Our Processes",
    links: [
      "Ios Application Development",
      "Android Application Development",
      "Desktop Application Development",
      "Custom Application Development",
      "Minimum Viable Product",
      "Proof Of Concepts",
    ],
  },
  {
    title: "Industries",
    links: [
      "Healthcare",
      "Financial Technologies",
      "E-commerce",
      "Social Media Networking",
      "Retail and Customer",
      "Startup and Enterprizes",
    ],
  },
  {
    title: "Portfolios",
    links: [
      "US health Insurance digitization",
      "Financial Reconciliation",
      "Influencer engagement platform",
      "Electronic medical records",
      "Company Valuation application",
      "Chatbot Integration",
    ],
  },
  {
    title: "Contact",
    links: ["sales@codersque.com", "86381-87156"],
  },
];
