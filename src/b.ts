import { injectable, inject } from "inversify";

import { ThingASymbol, ThingA } from "./a";

export const ThingBSymbol = "ThingBSymbol";

@injectable()
export class ThingB {
  constructor(@inject(ThingASymbol) thingA: ThingA) {
    console.log("ThingB Ctor")
  }
}