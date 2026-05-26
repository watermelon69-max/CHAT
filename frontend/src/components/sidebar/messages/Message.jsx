import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://imgs.search.brave.com/BusPQb9nLSop7o-H0Z430q7-vz-dic3L5qMvP_dZtb4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0L2Ez/L2I2Lzc0YTNiNmE4/ODU2YjAwNGRmZmY4/MjRhZTk2NjhmZTli/LmpwZw"
            alt="Tailwind CSS chat bubble component"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi! What is upp?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
