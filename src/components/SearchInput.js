import React, { useState } from "react";
import { search } from "../api/zing-mp3";

const SearchInput = ({ searchSong }) => {
    return (
        <div>
            <div className="mt-10 shadow-md">
                <input
                    onKeyDown={(e) => {
                        searchSong(e.target.value, e);
                    }}
                    className="p-3 focus:outline-none w-[500px]"
                    type="search"
                    placeholder="Tìm kiếm bài hát..."
                />
            </div>
        </div>
    );
};

export default SearchInput;
