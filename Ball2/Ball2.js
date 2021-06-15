/* yellow ball */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball2/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball2/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball2/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball2/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball2/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      
      new Sound("Pop", "./Ball2/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Begin" }, this.whenIReceiveBegin),
      new Trigger(Trigger.BROADCAST, { name: "End" }, this.whenIReceiveEnd),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Begin" },
        this.whenIReceiveBegin2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBegin() {
    this.visible = true;
    this.stage.vars.score = 0;
    while (true) {
      if (this.touching(this.sprites["Bowl"].andClones())) {
        yield* this.startSound("Pop");
        this.stage.vars.score += 2;
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.y = 180;
      }
      yield;
    }
  }


  *whenIReceiveBegin2() {
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

  *whenGreenFlagClicked() {
    this.visible = false;
  }




  *whenIReceiveEnd() {
    
  }
}


  
