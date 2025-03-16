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

  export interface IError {
    status: 'error'
    message: string
}

export interface ISuccess<T> {
    status: 'success'
    data: T
}

export type Response<T> = IError | ISuccess<T>