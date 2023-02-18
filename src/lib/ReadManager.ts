import type { ReadSummary } from "./Interfaces";
import { BASE_URI } from './Interfaces';

export class ReadManager {
  async getSummary() : Promise<ReadSummary>{
    const uri=BASE_URI+"/readings";

    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"] as ReadSummary[];

    return data[0];
  }
  
}
