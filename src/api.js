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
