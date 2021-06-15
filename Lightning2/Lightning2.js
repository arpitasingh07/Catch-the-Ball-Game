/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lightning2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("lightning", "./Lightning2/costumes/lightning.svg", {
        x: 20.599999999999994,
        y: 82.5
      })
    ];

    this.sounds = [
      
      new Sound("Large Cowbell", "./Lightning2/sounds/Large Cowbell.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Begin" }, this.whenIReceiveBegin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.BROADCAST, { name: "Begin" }, this.whenIReceiveBegin2)
    ];
  }

  *whenIReceiveBegin() {     
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
    while (true) {
      this.y += -10;
      if (this.y < -170) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  

  *whenIReceiveBegin2() {
    this.visible = true;
    this.stage.vars.score = 0;
    while (true) {
      if (this.touching(this.sprites["Bowl"].andClones())) {
        yield* this.startSound("Large Cowbell");
        this.stage.vars.score += -5;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }
}
