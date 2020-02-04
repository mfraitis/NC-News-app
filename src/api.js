import axios from "axios";

export const fetchArticles = topic => {
  return axios
    .get("https://mf-news.herokuapp.com/api/articles", {
      params: { topic: topic }
    })
    .then(({ data }) => {
      return data.articles;
    });
};
export const fetchArticle = id => {
  return axios
    .get(`https://mf-news.herokuapp.com/api/articles/${id}`)
    .then(({ data }) => {
      return data.article;
    });
};
export const fetchCommentsById = id => {
  return axios
    .get(`https://mf-news.herokuapp.com/api/articles/${id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};
