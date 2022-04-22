const meta = function (data, featured_image, post_content, title) {
  const output = [];
  output.push(
    { hid: "author", name: "author", content: process.env.SITE_NAME },
    {
      hid: "apple-mobile-web-app-title",
      name: "apple-mobile-web-app-title",
      content: process.env.SITE_NAME,
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: process.env.SITE_NAME,
    },
    { hid: "theme-color", name: "theme-color", content: "#ffffff" },
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    }
  );
  if (data.seoDescription) {
    output.push(
      { hid: "description", name: "description", content: data.seoDescription },
      {
        hid: "og:description",
        name: "og:description",
        content: data.seoDescription,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: data.seoDescription,
      }
    );
  } else if (post_content) {
    const content = post_content.substring(0, 200);
    output.push(
      {
        hid: "description",
        name: "description",
        content: content,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: content,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: content,
      }
    );
  }
  if (data.seoTitle) {
    output.push(
      { hid: "og:title", name: "og:title", content: data.seoTitle },
      { hid: "twitter:title", name: "twitter:title", content: data.seoTitle }
    );
  } else if (title) {
    output.push(
      { hid: "og:title", name: "og:title", content: title },
      { hid: "twitter:title", name: "twitter:title", content: title }
    );
  }

  if (data.seoImage && data.seoImage.sourceUrl) {
    output.push(
      {
        hid: "og:image",
        name: "og:image",
        content: data.seoImage.sourceUrl,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: data.seoImage.sourceUrl,
      }
    );
  } else if (featured_image && featured_image.node) {
    output.push(
      {
        hid: "og:image",
        name: "og:image",
        content: featured_image.node.sourceUrl,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: featured_image.node.sourceUrl,
      }
    );
  }

  return output;
};

export default meta;
