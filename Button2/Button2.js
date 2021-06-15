/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button2/costumes/button2-a.svg", {
        x: 58.982000000000085,
        y: 56.18065999999999
      }),
      new Costume("button2-b", "./Button2/costumes/button2-b.svg", {
        x: 58.952,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.size = 150;
      } else {
        this.size = 100;
      }
      if (this.mouse.down) {
        this.broadcast("Begin");
        this.visible = false;
      }
      yield;
    }
  }
}
