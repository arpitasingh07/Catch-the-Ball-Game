/* BOwl */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bowl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bowl-a", "./Bowl/costumes/bowl-a.svg", {
        x: 29.850405086591735,
        y: 14.170199999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Bowl/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(Trigger.BROADCAST, { name: "Begin" }, this.whenIReceiveBegin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Begin" },
        this.whenIReceiveBegin2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveEnd() {
    this.say("GAME OVER!");
   
  }

  *whenIReceiveBegin() {
    this.visible = true;
    this.goto(0, -108);
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      yield;
    }
  }


  
  *whenIReceiveBegin2() {
    this.visible = true;
    this.stage.vars.time = 31;
    while (!(this.stage.vars.time == 0)) {
      this.stage.vars.time += -1;
      yield* this.wait(1);
      yield;
    }
    this.broadcast("End");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
