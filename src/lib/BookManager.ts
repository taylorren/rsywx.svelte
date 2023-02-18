import type { Book, Summary } from "./Interfaces";
import { BASE_URI } from './Interfaces';
export class BookManager {
  async getLatestBook(count = 1): Promise<Book[]> {
    const uri = BASE_URI + "/books/latest/" + count;
    const data = await this._getBooks(uri);

    return data;
  }

  async getRandomBook(count = 1): Promise<Book[]> {
    const uri = BASE_URI + "/books/random/" + count;
    const data = await this._getBooks(uri);

    return data;
  }

  async getBookById(bookId: string): Promise<Book> {
    const uri = BASE_URI + "/books/" + bookId;
    const data = await this._getBook(uri);

    return data;
  }

  async getSummary():Promise<Summary> {
    const uri = BASE_URI + "/books";
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"];

    return data;
  }

  async getBookToday() {
    const today = new Date();
    const m = today.getMonth() + 1;
    const d = today.getDate();
    const uri = BASE_URI + "/books/today/"+m+"/"+d;

    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"];

    return data;
  }

  private async _getBook(uri: string): Promise<Book> {
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"] as Book;

    return data;
  }
  private async _getBooks(uri: string): Promise<Book[]> {
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"] as Book[];

    return data;
  }
}
