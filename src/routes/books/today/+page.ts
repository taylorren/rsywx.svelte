/** @type {import('./$types').PageLoad} */
import { BookManager } from "$lib/BookManager";

export async function load({fetch}) {
  const bm:BookManager= new BookManager();
  const booksToday=await bm.getBookToday({fetch});

  return {
    booksToday: booksToday,
  };
}