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

export const updateVotes = (id, voteChange) => {
  return axios.patch(`https://mf-news.herokuapp.com/api/articles/${id}`, {
    inc_votes: voteChange
  });
};

export const postComment = (id, comment, username) => {
  return axios
    .post(`https://mf-news.herokuapp.com/api/articles/${id}/comments`, {
      username,
      body: comment
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const fetchUsers = () => {
  return axios
    .get("https://mf-news.herokuapp.com/api/users/")
    .then(({ data }) => {
      return data.users;
    });
};
