import axios from "axios";

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const instance = axios.create({
  baseURL: CONTENTFUL_URL,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

const GQLQuery = `
query {
  recipePostsCollection {
    items {
      headline
      slug
      featuredImage {
        url
        description
      }
    }
  }
}
`;

export const getRecipes = async () =>
  instance
    .post("/", {
      query: GQLQuery,
    })
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .then((r) => r.data.recipePostsCollection.items)
    .catch((err) => console.error(err));
