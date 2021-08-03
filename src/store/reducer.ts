import { ArticleAction, ArticleState, IArticle } from "../types"

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "post 1",
      body:
        "Java Script",
    }]
  }
const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
  ): ArticleState => {
    switch (action.type) {
      case 'ADD_ARTICLE':
        const newArticle: IArticle = {
          id: Math.random(), // not really unique
          title: action.article.title,
          body: action.article.body,
        }
        return {
          ...state,
          articles: state.articles.concat(newArticle),
        }
      case 'REMOVE_ARTICLE':
        const updatedArticles: IArticle[] = state.articles.filter(
          article => article.id !== action.article.id
        )
        return {
          ...state,
          articles: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer
  