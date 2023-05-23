import React from "react";

import { Requirement } from "../components/Requirement/Requirement";

function handleclick() {
  window.open("https://superfluid-wavepool.vercel.app/payment");
}

export default {
  title: "Example/Requirement",
  component: Requirement,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: handleclick,
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
    onClick: handleclick,
  },
};
