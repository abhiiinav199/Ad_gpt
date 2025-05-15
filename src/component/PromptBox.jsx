import { useState } from 'react';

export function PromptBox() {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 5000);
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div 
        className="relative flex flex-col w-full p-4 rounded-lg shadow-lg"
        style={{ background: 'linear-gradient(132.39deg, #3F51B5 39.93%, #673AB7 123.78%)' }}
      >
        <label className="pl-1 mb-1 text-sm font-medium text-white">Prompt</label>
        <textarea
          className="text-white/80 placeholder-white/60 w-full h-12 text-sm bg-transparent border-none outline-none resize-none"
          placeholder="Describe your ad copy. Get creative..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end mt-1">
          <button
            className="w-40 h-12 p-0 border-none outline-none"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            <div className="h-11 hover:brightness-110 flex items-center w-40 gap-2 px-2 transition-all duration-300 bg-indigo-900 border border-purple-500 rounded-full">
              <div className="flex items-center justify-center w-10 h-10">
                {isGenerating ? (
                  <svg className="animate-spin w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v1m0 3v1m0 3v1m-9-4a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </div>
              <div className="flex items-center justify-end w-20 h-5">
                <p className="text-base font-medium leading-none text-right text-white">
                  {isGenerating ? "Generating..." : "Generate"}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}