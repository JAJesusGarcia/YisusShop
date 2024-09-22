"use client";
import * as framerMotion from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-75">
      <framerMotion.motion.div
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="mr-4">
          <div className="size-10 animate-bounce rounded-full bg-gray-300" />
          <div className="mt-2 h-6 w-6 animate-bounce rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-white">Loading...</div>
          <div className="text-lg font-semibold text-primary">YisusShop!</div>
        </div>
      </framerMotion.motion.div>
    </div>
  );
};

export default Loading;
