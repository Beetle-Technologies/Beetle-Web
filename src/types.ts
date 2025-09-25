/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Author {
  name: string;
  picture_url: string;
  picture_hash: string;
}

export interface BlogContent {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  image_url: string;
  tags: string[];
  authors: Author[];
}

export interface BlogPosts {
  article_links: BlogContent[];
  meta_data: any;
}
