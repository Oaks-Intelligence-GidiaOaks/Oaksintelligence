import research from "../assets/mission/search-status.svg";
import globe from "../assets/mission/global.svg";
import userCentric from "../assets/mission/monitor-mobile.svg";
import collaborative from "../assets/mission/people.svg";
import software from "../assets/mission/cpu-setting.svg";
import growth from "../assets/mission/diagram.svg";

import softwareService from "../assets/services/software.svg";
import consultation from "../assets/services/consultation.svg";

import certificate from "../assets/about/framework/certificate.svg";
import compliance from "../assets/about/framework/compliance.svg";
import concept from "../assets/about/framework/concept.svg";
import conceptualization from "../assets/about/framework/conceptualization.svg";
import feasibility from "../assets/about/framework/feasibility.svg";
import launch from "../assets/about/framework/launch.svg";
import prototype from "../assets/about/framework/prototype.svg";
import scaling from "../assets/about/framework/scaling.svg";
import testing from "../assets/about/framework/testing.svg";

import avatar1 from "../assets/feedback/1.png";
import avatar2 from "../assets/feedback/2.png";
import avatar3 from "../assets/feedback/3.png";

export const missions = [
  {
    title: "Purpose-Driven Research",
    description:
      "Conducting responsible research and innovation (RRI) for product suitability.",
    icon: research,
  },
  {
    title: "User-Centric Impact",
    description:
      "Committed to impactful solutions that effectively solve real-world problems.",
    icon: userCentric,
  },
  {
    title: "Industry-Leading Software",
    description:
      "Building high-quality software solutions meeting ISO 9001 and ISO 27001 standards.",
    icon: software,
  },
  {
    title: "Addressing Global Priorities",
    description:
      "Continuously launching priority-focused products and services globally.",
    icon: globe,
  },
  {
    title: "Collaborative Innovation",
    description:
      "Working together with affiliated enterprises to swiftly launch innovative solutions.",
    icon: collaborative,
  },
  {
    title: "Supportive Growth Culture",
    description:
      "Building a culture that fosters growth, teamwork, and mutual respect for all.",
    icon: growth,
  },
];

export const dashboardInstructions = [
  {
    title: "Filters",
    description:
      "You can make use of any of the buttons (with arrows at the edges) to filter down the data by a range of dates, geopolitical zone, state, LGA, or commodity.",
    icon: research,
  },
  {
    title: "Navigation",
    description:
      "You can navigate the pages of the dashboard using the buttons on the left panel of the dashboard. To do this, simply click on the button that corresponds to the page or category you want to view.",
    icon: research,
  },
  {
    title: "Dashed Lines",
    description:
      "On the Price changes page, the dashed lines represent 0 while on the category pages, the dashed lines represent the minimum value of that commodity or item for the given state.",
    icon: research,
  },
  {
    title: "Social Media",
    description:
      "You can connect with us on social media by clicking any of the buttons at the bottom left of the page. Also, subscribe to our weekly newsletters using the open mail button.",
    icon: research,
  },
];

export const tailwindGradients = [
  "bg-gradient-to-b from-green-300 via-blue-500 to-purple-600",
  "bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500",
  "bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400",
  "bg-gradient-to-b from-red-200 via-red-300 to-yellow-200",
  "bg-gradient-to-b from-red-200 via-red-300 to-yellow-200",
];

export const services = [
  {
    title: "Software Development",
    description:
      "We offer end-to-end software development services that covers everything from conceptualization to design, development, testing, and deployment.",
    icon: softwareService,
  },
  {
    title: "Addressing Global Priorities",
    description:
      "Our experienced consultants work closely with clients to understand their unique business needs and provide guidance on the best software solutions.",
    icon: consultation,
  },
  // {
  //   title: "Purpose-Driven Research",
  //   description:
  //     "Conducting responsible research and innovation (RRI) for product suitability.",
  //   icon: userCentric,
  // },
];

export const framework = [
  {
    title: "Conceptualization",
    description: "Clear and compelling concept for the product.",
    icon: conceptualization,
  },
  {
    title: "Feasibility Analysis",
    description: "Thorough assessment to determine feasibility.",
    icon: feasibility,
  },
  {
    title: "Prototype Development",
    description: "Preliminary version of your product or service.",
    icon: prototype,
  },
  {
    title: "Proof of  Concept",
    description: "Small-scale trials to validate the product.",
    icon: concept,
  },
  {
    title: "Testing & Quality Assurance",
    description: "Identify and rectify bugs, glitches, or usability issues.",
    icon: testing,
  },
  {
    title: "Auditing & Compliance",
    description: "Ensure legal, ethical, and safety compliance.",
    icon: compliance,
  },
  {
    title: "Certification",
    description: "Obtain certifications or licenses required.",
    icon: certificate,
  },
  {
    title: "Scaling & Deployment",
    description: "Develop a comprehensive deployment plan.",
    icon: scaling,
  },
  {
    title: "Post Launch Evaluation",
    description: "Monitor the performance and adoption of the product.",
    icon: launch,
  },
];

export const feedbacks = [
  {
    avatar: avatar1,
    name: "Like A Palm Tree Foundation",
    comment:
      "We had a great experience working with Oaks Intelligence. First, we could not even find any other company doing what the company is doing, and with the extent of spread that the company had. We are impressed by their belief in data, their pursuit of integrity in data gathering and analysis, and their desire to see the fulfillment of the business goals of partners.",
    rating: 5,
  },
  // {
  //   avatar: avatar2,
  //   name: "Ronald Richards",
  //   comment:
  //     "I highly recommend Oaks Intelligence. Their commitment to quality is evident in the flawless product they delivered. The level of collaboration and communication was impressive, ensuring our needs were met every step of the way.",
  //   rating: 4,
  // },
  // {
  //   avatar: avatar3,
  //   name: "Savannah Nguyen",
  //   comment:
  //     "Impressive customer support and timely delivery! They went above and beyond to ensure our satisfaction. They were proactive in addressing any issues and were always available to assist us.",
  //   rating: 4.5,
  // },
];
