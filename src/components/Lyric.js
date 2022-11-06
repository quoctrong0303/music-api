import React from "react";

const Lyric = ({ Lyrics }) => {
    return (
        <div className="mt-10 bg-white ml-5 w-[400px] shadow-md">
            <h2 className="bg-zinc-500 text-white font-bold text-center p-1">
                Lyrics
            </h2>
            <p className="p-3 h-[500px] overflow-y-auto">
                {Lyrics.map((words) => (
                    <p>
                        {words.words.map((word) => (
                            <span>&nbsp;{word.data}</span>
                        ))}
                    </p>
                ))}
            </p>
        </div>
    );
};

export default Lyric;
