export interface SinglePostProps {
    title: string;
    description?: string;
    date: string;
    slug: string;
    slugAsParams: string;
    authors?: string[];
    authorsImage?: string[];
    tags?: string[];
}
export interface ArticlePageProps {
    params: {
        slug: string;
    };
}