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

export const BASE_URI="http://lumen";