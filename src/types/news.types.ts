export interface NewsAuthor {
    name: string;
}

export interface NewsSentiment {
    label: string;
    score: number;
}

export interface CryptoNewsArticle {
    title: string;
    summary: string;
    media: string[];
    link: string;
    authors: NewsAuthor[];
    published: string;
    category: string;
    subCategory: string;
    language: string;
    timeZone: string;
    sentiment: NewsSentiment;
}

export type CryptoNewsResponse = CryptoNewsArticle[]; 