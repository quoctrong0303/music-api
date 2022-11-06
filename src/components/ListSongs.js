import { Skeleton } from "@mui/material";
import React, { useState } from "react";

const ListSongs = ({
    ListSong,
    playSong,
    Song,
    handlePause,
    isPlaying,
    handlePlay,
    isLoading,
    handleAddToQueue,
    Queue,
}) => {
    const inQueue = (id) => {
        let inQueue = false;
        Queue.forEach((Q) => {
            if (Q === id) {
                inQueue = true;
            }
        });
        return inQueue;
    };
    return (
        <div className="shadow-md h-96 bg-white mt-10 p-5 overflow-y-auto w-[500px]">
            {/* render các bài hát ra giao diện */}

            {!isLoading ? (
                ListSong.map((song, index) => (
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
                                <p className="font-semibold">
                                    {song.artistsNames}
                                </p>
                                <p className="text-sm text-zinc-600">
                                    {song.duration}
                                </p>
                            </div>
                        </div>
                        {/* Điều kiện hiện icon */}
                        {!isPlaying ||
                        !Song.info ||
                        song.encodeId !== Song.info.encodeId ? (
                            <div className="flex items-center">
                                {!inQueue(song.encodeId) ? (
                                    <button
                                        onClick={(e) => {
                                            handleAddToQueue(song.encodeId);
                                        }}
                                        className="mr-2"
                                    >
                                        Add to queue
                                    </button>
                                ) : (
                                    <button className="mr-2">In queue</button>
                                )}

                                <i
                                    onClick={() => {
                                        Song.info &&
                                        song.encodeId === Song.info.encodeId
                                            ? handlePlay()
                                            : playSong(song.encodeId);
                                    }}
                                    className="fa fa-play text-zinc-500 text-2xl hover:cursor-pointer"
                                ></i>
                            </div>
                        ) : (
                            <div>
                                {!inQueue(song.encodeId) ? (
                                    <button
                                        onClick={(e) => {
                                            handleAddToQueue(song.encodeId);
                                        }}
                                        className="mr-2"
                                    >
                                        Add to queue
                                    </button>
                                ) : (
                                    <button className="mr-2">In queue</button>
                                )}
                                <i
                                    onClick={() => handlePause()}
                                    className="fa fa-pause text-zinc-500 text-2xl hover:cursor-pointer"
                                ></i>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div>
                    <div className="flex">
                        <Skeleton variant="circular" width={40} height={40} />
                        <div className="ml-3 mb-3">
                            <Skeleton
                                width={400}
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Skeleton variant="circular" width={40} height={40} />
                        <div className="ml-3 mb-3">
                            <Skeleton
                                width={400}
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Skeleton variant="circular" width={40} height={40} />
                        <div className="ml-3 mb-3">
                            <Skeleton
                                width={400}
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Skeleton variant="circular" width={40} height={40} />
                        <div className="ml-3 mb-3">
                            <Skeleton
                                width={400}
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Skeleton variant="circular" width={40} height={40} />
                        <div className="ml-3 mb-3">
                            <Skeleton
                                width={400}
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "1rem" }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListSongs;
