import { Document } from '@contentful/rich-text-types';

export type BlogItem = {
    fields: {
        title: string;
        thema: string,
        slug: string;
        dateCreatePost: Date;
        coverImg: string,
        content: Document;
    }
}
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems;
}