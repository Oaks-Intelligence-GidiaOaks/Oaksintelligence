/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { myTheme } from "./theme";
import StudioNavbar from "./components/studio/StudioNavbar";
import StudioLogo from "./components/studio/StudioLogo";
import { getDefaultDocumentNode } from "./structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  name: "Oaks_Intelligence_Content_Studio",
  title: "Oaks Intelligence Content Studio",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      navbar: StudioNavbar,
      logo: StudioLogo,
    },
  },
  theme: myTheme,
});
