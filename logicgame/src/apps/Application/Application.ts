import {Button, Input} from "../../components";
import { append, removeChildren, render } from "../../core";
export class Application {
  private app: HTMLElement;


  constructor() {
    this.app = document.getElementById("app") as HTMLElement;
  }

  launchApp() {
    render(this.app, []);
  }

  run() {
    render(this.app, []);

    setTimeout(() => {
      this.launchApp();
    }, 2000);
  }
}
