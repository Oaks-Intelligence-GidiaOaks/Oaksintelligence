"use client";

import { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./blogs/CommentForm";

const CommentSection = ({ postId, comments }) => {
  const [newComments, setNewComments] = useState([]);
  const [limit, setLimit] = useState(10);

  return (
    <div>
      <CommentForm _id={postId} setNewComments={setNewComments} />

      <div className="mt-20 flex flex-col gap-y-4 w-[clamp(240px,100%,480px)]">
        {comments && comments.length ? (
          [...newComments, ...comments]
            .slice(0, limit)
            .map((comment, index) => <Comment key={index} comment={comment} />)
        ) : (
          <p className="text-base">
            <span className="block text-main-light dark:text-main poppins-7">
              No comments.
            </span>
          </p>
        )}
        {comments.length > limit && (
          <div className="flex justify-end mt-6">
            <p
              onClick={() => setLimit((prev) => prev + 10)}
              className="text-base cursor-pointer w-fit gradient-text hover:gold-gradient-text poppins-6 "
            >
              See more comments
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
