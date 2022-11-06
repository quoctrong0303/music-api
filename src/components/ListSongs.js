import React, { useState } from "react";
import { search } from "../api/zing-mp3";

const ListSongs = ({
    ListSong,
    playSong,
    Song,
    handlePause,
    isPlaying,
    handlePlay,
}) => {
    return (
        <div className="shadow-md h-96 bg-white mt-10 p-5 overflow-y-auto w-[500px]">
            {/* render các bài hát ra giao diện */}
            {ListSong.map((song, index) => (
                <div
                    className="flex justify-between items-center pb-5"
                    key={index}
                >
                    <div className="flex items-center">
                        <img
                            className="w-12 h-12 mr-3"
                            src={song.thumbnail}
                            alt=""
                        />
                        <div>
                            <p className="font-bold text-xl break-words">
                                {song.title}
                            </p>
                            <p className="font-semibold">{song.artistsNames}</p>
                            <p className="text-sm text-zinc-600">
                                {song.duration}
                            </p>
                        </div>
                    </div>
                    {/* Điều kiện hiện icon */}
                    {!isPlaying ||
                    !Song.info ||
                    song.encodeId !== Song.info.encodeId ? (
                        <i
                            onClick={() => {
                                Song.info &&
                                song.encodeId === Song.info.encodeId
                                    ? handlePlay()
                                    : playSong(song.encodeId);
                            }}
                            className="fa fa-play text-zinc-500 text-2xl hover:cursor-pointer"
                        ></i>
                    ) : (
                        <i
                            onClick={() => handlePause()}
                            className="fa fa-pause text-zinc-500 text-2xl hover:cursor-pointer"
                        ></i>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ListSongs;
