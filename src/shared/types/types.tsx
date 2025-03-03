export interface ICategory {
    id: number;
    name: string;
    descriptions?: string;
    posts: IPost[];
}


export interface IPost {
    id: number;
    title: string;
    description?: string;
    author: string;
    date: Date;
    categoryId: number;
    category: ICategory;
  }
  