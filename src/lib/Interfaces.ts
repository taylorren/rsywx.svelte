export interface Book {
    id: number,
    bookid: string,
    title: string,
    author: string,
    img: string,
    region: string,
    purchdate: string,
    translated: boolean,
    copyrighter: string,
    vc: number,
}

export interface Qotd {
    id: number,
    quote: string,
    source: string
}

export interface ReadSummary {
    hc: number,
    rc: number,
}

export interface Summary {
    bc: number,
    wc: string,
    pc: string,
    vc: number
}

export interface BlogPost {
    link: string,
    title: string,
    pv: number,
    year: number,

}

export const BASE_URI="http://lumen";
export const IMG_URI="https://blog.rsywx.net/wp-content/uploads/";
