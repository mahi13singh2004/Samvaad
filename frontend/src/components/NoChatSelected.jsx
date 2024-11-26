import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-12 bg-base-100">
      <div className="max-w-lg space-y-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white animate-[slideIn_1s_ease-out]">
          Welcome to <span className="text-primary">Samvaad</span>!
        </h2>
        <p className="text-base-content/70 text-lg mt-4 animate-[slideIn_1s_1s_ease-out]">
          Pick a chat, any chat! Let's get this conversation started! 
        </p>
        <div className="flex justify-center items-center mt-6 animate-bounce">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
            <MessageSquare className="w-10 h-10 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
