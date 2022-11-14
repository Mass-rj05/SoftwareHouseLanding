import React from "react";

const FakeChatBot = () => {

    const assistentName = "Janusz Asystent"
  return (
    <div className="bg-white  rounded-md">
      <div className="bg-cyan-300 flex rounded-md items-center py-2 px-2">
        <div className="avatar w-4 h-4 bg-orange-800 rounded-full mr-2"></div>
        <div className="user-name">{assistentName}</div>
        <div className="icon ml-auto cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </div>
      <div className="chat-body text-black text-left">
        <span className="text-xs text-center">Today 23:49</span>
        <div className="msg assitant-msg flex ">

        <div className="avatar w-6 h-6 bg-orange-800 rounded-full "></div>
        <div className="msg-content w-80 ">
            <span>{assistentName}</span>
            <div className="msg-body bg-sky-100 rounded-md p-2">
                <span>
                Hey there👋Which path would you like to take in order to receive a project estimation?
                </span>
            </div>
        </div>
{}
        </div>

      </div>
    </div>
  );
};

export default FakeChatBot;
