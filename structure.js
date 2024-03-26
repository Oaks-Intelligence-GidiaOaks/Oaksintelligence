import Iframe from "sanity-plugin-iframe-pane";

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(doc) {
  const host = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
  return doc?.slug?.current
    ? // ? `${host}/api/draft${doc.slug.current}`
      `${host}/api/draft?slug=${doc.slug.current}`
    : `${host}/blog`;
}

export const getDefaultDocumentNode = (S, { schemaType }) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => getPreviewUrl(doc),
          reload: {
            button: true, // default "undefined"
          },
        })
        // .options({
        //   // Required: Accepts an async function
        //   // OR a string
        //   url: `${
        //     process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
        //   }/api/draft`,
        //   // Optional: Set the default size
        //   defaultSize: "desktop", // default "desktop"
        //   // Optional: Add a reload button, or reload on new document revisions
        //   reload: {
        //     button: true, // default "undefined"
        //   },
        //   // Optional: Pass attributes to the underlying 'iframe element:
        //   // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
        //   attributes: {},
        // })
        .title("Preview"),
    ]);
  }
};
