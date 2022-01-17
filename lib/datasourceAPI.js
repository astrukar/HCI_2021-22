import axios from "axios";

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const instance = axios.create({
  baseURL: CONTENTFUL_URL,
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

//Get Recipes List
const GQLQuery = `
query {
  recipePostsCollection {
    items {
      sys {
        id
      }
      headline
      slug
      featuredImage {
        url
        description
      }
      desktopImage {
        title
        description
        url
      }
      ingredientsContainer
      instructionsContainer
      nutritionInfo
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
      return response.data;
    })
    .then((r) => r.data.recipePostsCollection.items)
    .catch((err) => console.error(err));

//get Recipe SLugs
const GQLQuerySlugs = `
query {
  recipePostsCollection {
    items {
      slug
    }
  }
}
`;

export const getSlugs = async () =>
  instance
    .post("/", {
      query: GQLQuerySlugs,
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => {
      return r.data.recipePostsCollection.items;
    })
    .catch((err) => console.error(err));

//get Blog Posts
const GQLQueryBlog = `
query {
  blogPostsCollection {
    items {
      sys {
        id
      }
      slug
      headline
      descriptionBox
      featuredImage {
        url
        title
        description
      }
    }
  }
}`;

export const getBlogPosts = async () =>
  instance
    .post("/", {
      query: GQLQueryBlog,
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => {
      return r.data.blogPostsCollection.items;
    })
    .catch((err) => console.error(err));

const gueryBySlug = (slug) => `query {
  recipePostsCollection(where: { slug: "${slug}"}) {
    items {
      sys {
        id
      }
      slug
      headline
      desktopImage {
        url
        title
        description
      }
      ingredientsContainer
      instructionsContainer
      nutritionInfo
    }
  }
}
`;

export const getRecipesBySlug = async (slug) => {
  console.log(gueryBySlug(slug));
  return instance
    .post("/", {
      query: gueryBySlug(slug),
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => r.data.recipePostsCollection.items[0])
    .catch((err) => console.error(JSON.stringify(err)));
};
