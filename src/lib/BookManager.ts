import type { Book } from "./Book";

export class BookManager {
  private base = "http://lumen";
  async getLatestBook(count = 1): Promise<Book[]> {
    const uri = this.base + "/books/latest/" + count;
    const data = await this._getBooks(uri);

    return data;
  }

  async getRandomBook(count = 1): Promise<Book[]> {
    const uri = this.base + "/books/random/" + count;
    const data = await this._getBooks(uri);

    return data;
  }

  async getBookById(bookId: string): Promise<Book> {
    const uri = this.base + "/books/" + bookId;
    const data = await this._getBook(uri);

    return data;
  }

  async getSummary() {
    const uri = this.base + "/books";
    const ret = await fetch(uri);
    const json = await ret.json();
    const data = await json["data"];

    return data;
  }

  async getBookToday() {
    const today = new Date();
    const m = today.getMonth() + 1;
    const d = today.getDate();
    const uri = this.base + "/books/today/"+m+"/"+d;

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
