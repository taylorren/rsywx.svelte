import type { Qotd } from "./Interfaces";
import { BASE_URI } from './Interfaces';
export class MiscManager {
  
  async getQotd({fetch}): Promise<Qotd> {
    const uri = BASE_URI + "/qotd";
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"] as Qotd[];

    return data[0];
  }

  async getLakersSummary({fetch}) {
    const uri=BASE_URI+'/lakers';
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"];

    return data;
  }
}
