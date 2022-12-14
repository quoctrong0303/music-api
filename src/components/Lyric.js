import React from "react";

const Lyric = ({ Lyrics }) => {
    return (
        <div className="mt-10 bg-white lg:ml-5 xl:ml-5 w-[500px] shadow-md">
            <h2 className="bg-zinc-500 text-white font-bold text-center p-1">
                Lyrics
            </h2>
            <div className="p-3 h-[500px] overflow-y-auto">
                {Lyrics.map((words, index) => (
                    <p key={index}>
                        {words.words.map((word, index) => (
                            <span key={index}>&nbsp;{word.data}</span>
                        ))}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Lyric;
