import type { BlogPost } from "./Interfaces";
import { BASE_URI } from "./Interfaces";
export class BlogManager {
  async getLatestBlog(count = 1, { fetch }): Promise<BlogPost[]> {
    const uri = BASE_URI + "/blogs/latest/" + count;
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"] as BlogPost[];

    return data;
  }

  async getBlogToday({ fetch }) :Promise<BlogPost[]>{
    const uri = BASE_URI + "/blogs/today";
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"];

    return data;
  }
}
