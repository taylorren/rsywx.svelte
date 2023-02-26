/** @type {import('./$types').PageLoad} */
import { ReadManager } from "$lib/ReadManager";
import { BookManager } from "$lib/BookManager";
import { MiscManager } from "$lib/MiscManager";
import { BlogManager } from "$lib/BlogManager";

export async function load() {
  const bm:BookManager= new BookManager();
  const mm:MiscManager=new MiscManager();
  const rm:ReadManager=new ReadManager();
  const blm:BlogManager=new BlogManager();


  const latestBook=await bm.getLatestBook(1);
  const randomBook=await bm.getRandomBook(1);
  const summary=await bm.getSummary();
  const booksToday=await bm.getBookToday();

  const readSummary=await rm.getSummary();
  const lbp=await blm.getLatestBlog()
  

  const qotd=await mm.getQotd();

  return {
    latestBook: latestBook[0],
    randomBook: randomBook[0],
    summary: summary,
    booksToday: booksToday,
    readSummary: readSummary,
    qotd: qotd,
    lbp: lbp,
  };
}