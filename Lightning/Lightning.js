/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lightning extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("lightning", "./Lightning/costumes/lightning.svg", {
        x: 21,
        y: 83
      }),
      new Costume("Ball-a", "./Lightning/costumes/Ball-a.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound("Whistle Thump", "./Lightning/sounds/Whistle Thump.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Begin" }, this.whenIReceiveBegin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Begin" },
        this.whenIReceiveBegin2
      ),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBegin() {
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
    while (true) {
      this.y += -6;
      if (this.y < -170) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }

  *whenIReceiveBegin2() {
    this.visible = true;
    this.stage.vars.score = 0;
    while (true) {
      if (this.touching(this.sprites["Bowl"].andClones())) {
        yield* this.startSound("Whistle Thump");
        this.stage.vars.score += -3;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }

  *whenIReceiveEnd() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
