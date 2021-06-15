/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Castle 1", "./Stage/costumes/Castle 1.png", {
        x: 480,
        y: 360
      }),
      new Costume("Theater 2", "./Stage/costumes/Theater 2.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 294.75,
        y: 259.3195
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Begin" }, this.whenIReceiveBegin)
    ];

    this.vars.myVariable = 0;
    this.vars.time = 0;
    this.vars.score =0;

    this.watchers.time = new Watcher({
      label: "Time",
      style: "normal",
      visible: true,
      value: () => this.vars.time,
      x: 612,
      y: 170
    });
    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 240,
      y: 167
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop2";
    this.vars.time = 0;
    this.vars.score = 0;
  }

  *whenIReceiveBegin() {
    this.costume = "Theater 2";
  }
}
