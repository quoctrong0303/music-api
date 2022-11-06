const URL = "https://server-tau-six.vercel.app";

const search = async (keyword) => {
    let res = await fetch(URL + `/api/search?keyword=${keyword}`);
    return await res.json();
};

const song = async (id) => {
    let res = await fetch(URL + `/api/song?id=${id}`);
    return await res.json();
};

const infoSong = async (id) => {
    let res = await fetch(URL + `/api/infosong?id=${id}`);
    return await res.json();
};

const lyricSong = async (id) => {
    let res = await fetch(URL + `/api/lyric?id=${id}`);
    return await res.json();
};
export { search, song, infoSong, lyricSong };
