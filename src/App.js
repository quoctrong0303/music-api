import "./App.css";
import ListSongs from "./components/ListSongs";
import SearchInput from "./components/SearchInput";
import AudioPlayer from "react-h5-audio-player";
import { useRef, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import { infoSong, lyricSong, search, song } from "./api/zing-mp3";
import Lyric from "./components/Lyric";
function App() {
    const [Song, setSong] = useState({});
    const [Lyrics, setLyrics] = useState([]);
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [ListSong, setListSong] = useState([]);
    {
        /* Hàm tìm kiếm bài hát*/
    }
    const searchSong = async (keyword, event) => {
        if (keyword && event.key === "Enter") {
            let res = await search(keyword);
            if (res.msg === "Success") {
                console.log(res);
                setListSong(res.data.songs);
            }
        }
    };
    {
        /* Hàm phát bài hát*/
    }
    const playSong = async (id) => {
        setIsPlaying(false);
        let res = await song(id);
        if (res.msg === "Success") {
            Song.streaming = res.data;
        }
        res = await infoSong(id);
        if (res.msg == "Success") {
            Song.info = res.data;
            setSong({ ...Song });
            console.log(Song);
        }
        res = await lyricSong(id);
        if (res.msg == "Success") {
            if (res.data.sentences) setLyrics(res.data.sentences);
        }
        audioRef.current.audio.current.play();
        setIsPlaying(true);
    };
    {
        /* Hàm dừng bài hát*/
    }
    const handlePause = () => {
        setIsPlaying(false);
        audioRef.current.audio.current.pause();
    };
    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.audio.current.play();
    };

    return (
        <div className="min-h-screen bg-zinc-100">
            <div className="flex justify-center items-center">
                <div>
                    <SearchInput searchSong={searchSong} />
                    <ListSongs
                        ListSong={ListSong}
                        playSong={playSong}
                        Song={Song}
                        handlePause={handlePause}
                        isPlaying={isPlaying}
                        handlePlay={handlePlay}
                    />
                    <AudioPlayer
                        ref={audioRef}
                        src={Song.streaming ? Song.streaming[128] : null}
                        onPause={() => handlePause()}
                        onPlay={() => handlePlay()}
                    />
                </div>
                <Lyric Lyrics={Lyrics} />
            </div>
        </div>
    );
}

export default App;
