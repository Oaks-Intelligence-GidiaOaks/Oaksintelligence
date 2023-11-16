import { FaRegCircleUser } from "react-icons/fa6";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <div className="w-full">
      <div className="flex items-start flex-nowrap gap-x-3">
        <div className="w-6">
          <FaRegCircleUser
            size={24}
            className="block text-main-light dark:text-main"
          />
        </div>
        <div className="flex-1">
          <p className="text-base poppins-7 text-main-light dark:text-main">
            {comment?.name}
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main">
            {comment?.text}
          </p>
          <p className="poppins-4 text-end italic text-secondary-main-light dark:text-secondary-main text-sm">
            {moment(comment?._createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
