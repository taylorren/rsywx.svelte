/** @type {import('./$types').PageLoad} */
import { BookManager } from "$lib/BookManager";

export async function load() {
  const bm:BookManager= new BookManager();
  const booksToday=await bm.getBookToday();

  return {
    booksToday: booksToday,
  };
}