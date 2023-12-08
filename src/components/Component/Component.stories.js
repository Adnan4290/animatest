import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-3888", "variant-3", "frame-3887"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-3888",
    className: {},
  },
};
