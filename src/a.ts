import { injectable } from 'inversify';

import "./b";

export const ThingASymbol = "ThingASymbol";

@injectable()
export class ThingA {
  constructor() {
    console.log("Thing Ctor");
  }
}