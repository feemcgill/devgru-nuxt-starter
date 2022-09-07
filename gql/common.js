const basics = `
  id
  title
  slug
  content
`;
const image = `
  altText
  mediaDetails {
    height
    width
  }
  mediaItemUrl
  sourceUrl(size: LARGE)
  srcSet
`;

const featured_image = `
featuredImage {
  node {
    ${image}
  }
}
`;

const tags_cats = `
  tags {
    nodes {
      name
      slug
    }
  }
  categories {
    nodes {
      slug
      name
      parent {
        node {
          name
          slug
        }
      }
    }
  } 
`;

const link = `
  target
  title
  url
`;

const seo_fields = `
  SeoFields {
    seoTitle
    seoDescription
    seoImage {
      ${image}
    }
  }
`;

export { basics, image, featured_image, tags_cats, link, seo_fields };
