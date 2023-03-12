/** @type {import('./$types').PageLoad} */
import { ReadManager } from "$lib/ReadManager";
import { BookManager } from "$lib/BookManager";
import { MiscManager } from "$lib/MiscManager";
import { BlogManager } from "$lib/BlogManager";

export async function load({ fetch }) {
  const bm:BookManager= new BookManager();
  const mm:MiscManager=new MiscManager();
  const rm:ReadManager=new ReadManager();
  const blm:BlogManager=new BlogManager();


  const latestBook=await bm.getLatestBook(1, {fetch});
  const randomBook=await bm.getRandomBook(1, {fetch});
  const summary=await bm.getSummary({fetch});
  const booksToday=await bm.getBookToday({fetch});

  const readSummary=await rm.getSummary({fetch});

  const lbp=await blm.getLatestBlog(1, {fetch})
  const bt=await blm.getBlogToday({fetch});
  

  const qotd=await mm.getQotd({fetch});
  const lakers=await mm.getLakersSummary({fetch});

  return {
    latestBook: latestBook[0],
    randomBook: randomBook[0],
    summary: summary,
    booksToday: booksToday,
    readSummary: readSummary,
    qotd: qotd,
    lbp: lbp,
    bt: bt,
    lakers: lakers,
  };
}