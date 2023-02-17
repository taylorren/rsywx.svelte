import type { Qotd } from "./Qotd";

export class MiscManager {
  private base = "http://lumen";

  async getQotd(): Promise<Qotd> {
    const uri = this.base + "/qotd";
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"] as Qotd[];

    return data[0];
  }
}
