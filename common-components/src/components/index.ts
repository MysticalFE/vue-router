import Vue from "vue";

import { Tooltip } from "./tooltip";
import { RTabset } from "./r-tabset";
import { NumberAnimation } from "./number-animation";

Object.entries({
  Tooltip,
  RTabset,
  NumberAnimation,
}).forEach(([name, component]) => Vue.component(name, component));

export { Tooltip, RTabset };
