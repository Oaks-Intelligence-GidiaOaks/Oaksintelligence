import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <div className="w-full">
      <div className="flex items-start flex-nowrap gap-x-3">
        <div className="w-6">
          <svg
            className="block text-main-light fill-[#202046] dark:text-main dark:fill-[#F1F1F1]"
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
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
