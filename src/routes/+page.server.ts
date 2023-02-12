
/** @type {import('./$types').PageServerLoad} */
import { BookManager } from "../lib/BookManager";

export async function load() {
  const bm:BookManager= new BookManager();
  const latestBook=await bm.getLatestBook(1);
  const randomBook=await bm.getRandomBook(1);

  return {
    latestBook: latestBook[0],
    randomBook: randomBook[0],
  };
}