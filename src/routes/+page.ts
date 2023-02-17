/** @type {import('./$types').PageLoad} */
import { BookManager } from "../lib/BookManager";
import { MiscManager } from "../lib/MiscManager";

export async function load() {
  const bm:BookManager= new BookManager();
  const mm:MiscManager=new MiscManager();


  const latestBook=await bm.getLatestBook(1);
  const randomBook=await bm.getRandomBook(1);
  const summary=await bm.getSummary();
  const booksToday=await bm.getBookToday();

  const qotd=await mm.getQotd();

  return {
    latestBook: latestBook[0],
    randomBook: randomBook[0],
    summary: summary,
    booksToday: booksToday,
    qotd: qotd,
  };
}