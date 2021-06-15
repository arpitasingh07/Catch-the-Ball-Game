import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Lightning from "./Lightning/Lightning.js";
import Bowl from "./Bowl/Bowl.js";
import Ball2 from "./Ball2/Ball2.js";
import Ball1 from "./Ball1/Ball1.js";
import Ball from "./Ball/Ball.js";
import Button2 from "./Button2/Button2.js";
import Lightning2 from "./Lightning2/Lightning2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Lightning: new Lightning({
    x: 224,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Bowl: new Bowl({
    x: -104.02560424804688,
    y: -108,
    direction: -90,
    costumeNumber: 1,
    size: 114.99999999999999,
    visible: true,
    layerOrder: 3
  }),
  Ball2: new Ball2({
    x: -188,
    y: -114,
    direction: 78.46304096718451,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Ball1: new Ball1({
    x: 22,
    y: 60,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Ball: new Ball({
    x: 69,
    y: -114,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Button2: new Button2({
    x: 7,
    y: 41,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Lightning2: new Lightning2({
    x: -119,
    y: 52,
    direction: 122.02466822233775,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
