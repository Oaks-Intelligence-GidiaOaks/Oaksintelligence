import { blockContent } from "./schemas/blockContent";
import { category } from "./schemas/category";
import { post } from "./schemas/post";
import { author } from "./schemas/author";
import { comment } from "./schemas/comment";
import { ecoKiddies } from "./schemas/eco-kiddies";
import { ecoTails } from "./schemas/eco-tails";
import { marketIntelligenceReport } from "./schemas/mir";
import { survey } from "./schemas/survey";

export const schema = {
  types: [
    post,
    author,
    comment,
    category,
    blockContent,
    ecoKiddies,
    ecoTails,
    marketIntelligenceReport,
    survey,
  ],
};
