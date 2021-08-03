export interface IArticle {
    id: number
    title: string
    body: string
  }
  
  export interface ArticleState  {
    articles: IArticle[]
  }
  
  export interface ArticleAction  {
    type: string
    article: IArticle
  }
  
