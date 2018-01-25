import "reflect-metadata";

import { Container } from "inversify";
import { ThingASymbol, ThingA } from "./a";
import { ThingBSymbol, ThingB } from "./b";


const container = new Container();
container.bind(ThingASymbol).to(ThingA);
container.bind(ThingBSymbol).to(ThingB);

console.log("ThingA: ", container.get(ThingASymbol)) // works
console.log("ThingB: ", container.get(ThingBSymbol)) // fails
