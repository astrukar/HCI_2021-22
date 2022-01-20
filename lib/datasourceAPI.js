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
const recipeQuery = `
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
      tags
    }
  }
}
`;

export const getRecipes = async () =>
  instance
    .post("/", {
      query: recipeQuery,
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => r.data.recipePostsCollection.items)
    .catch((err) => console.error(err));

//get Recipe SLugs
const recipeSlugQuery = `
query {
  recipePostsCollection {
    items {
      slug
    }
  }
}
`;

export const getRecipeSlugs = async () =>
  instance
    .post("/", {
      query: recipeSlugQuery,
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => {
      return r.data.recipePostsCollection.items;
    })
    .catch((err) => console.error(err));

//Get Blog Posts
const blogQuery = `
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
      query: blogQuery,
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => {
      return r.data.blogPostsCollection.items;
    })
    .catch((err) => console.error(err));

//get Blog Slugs
const blogSlugQuery = `
query {
  blogPostsCollection {
    items {
      slug
    }
  }
}
`;
export const getBlogSlugs = async () =>
  instance
    .post("/", {
      query: blogSlugQuery,
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => {
      return r.data.blogPostsCollection.items;
    })
    .catch((err) => console.error(err));

//Get Blog Detail By Slug
const recipeBySlug = (slug) => `query {
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
      mobileImage {
        url 
        title
        description
      }
      ingredientsContainer
      instructionsContainer
      recipeInfo
      tags
    }
  }
}
`;

export const getRecipeBySlug = async (slug) => {
  return instance
    .post("/", {
      query: recipeBySlug(slug),
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => r.data.recipePostsCollection.items[0])
    .catch((err) => console.error(JSON.stringify(err)));
};

const postBySlug = (slug) => `query {
  blogPostsCollection(where: { slug: "${slug}"}) {
    items {
      sys {
        id
      }
      slug
      headline
      subheadline
      desktopImage {
        url
        title
        description
      }
      mobileImage {
        url 
        title
        description
      }
      textContainer
    }
  }
}
`;

export const getBlogBySlug = async (slug) => {
  return instance
    .post("/", {
      query: postBySlug(slug),
    })
    .then((response) => {
      return response.data;
    })
    .then((r) => r.data.blogPostsCollection.items[0])
    .catch((err) => console.error(JSON.stringify(err)));
};
