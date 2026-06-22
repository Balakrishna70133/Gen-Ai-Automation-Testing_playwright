import { After, AfterAll, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Expect } from "playwright/test";
import { PSWorld } from "./simpleWorld";

setDefaultTimeout(120000); //

Before(async function (this: PSWorld) {
  await this.initPlaywright();
});

After(async function (this: PSWorld) {
  await this.closeContext();
});