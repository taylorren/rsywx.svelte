/** @type {import('./$types').PageLoad} */
import { BookManager } from "$lib/BookManager";

export async function load({ params }) {
  const bm: BookManager = new BookManager();

  const type=params.type;
  const key=params.key;
  let cpage=params.page;
  if(cpage===undefined) {
    cpage=1;
  }


  const books = await bm.getBookByType(type, key, cpage);

  return {
    books: books,
  }
}
