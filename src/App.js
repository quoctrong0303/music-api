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
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [Queue, setQueue] = useState([]);
    const [ListSong, setListSong] = useState([]);
    // Hàm tìm kiếm bài hát
    const searchSong = async (keyword, event) => {
        if (keyword && event.key === "Enter") {
            setIsLoading(true);
            let res = await search(keyword);
            if (res.msg === "Success") {
                console.log(res);
                setListSong(res.data.songs);
                setIsLoading(false);
            }
        }
    };
    // Hàm phát bài hát
    const playSong = async (id) => {
        setQueue(Queue.filter((queue) => queue !== id));
        setIsPlaying(false);
        let res = await song(id);
        if (res.msg === "Success") {
            Song.streaming = res.data;
        } else {
            alert(res.msg);
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
    // Hàm nhấn nút dừng bài hát
    const handlePause = () => {
        setIsPlaying(false);
        audioRef.current.audio.current.pause();
    };
    // Hàm nhấn nút tiếp tục phat
    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.audio.current.play();
    };

    // Thêm bài hát vào hàng đợi
    const handleAddToQueue = (id) => {
        setQueue((prevQ) => [...prevQ, id]);
    };

    const handleOnEnded = () => {
        if (Queue.length > 0) {
            let id = Queue[0];
            playSong(id);
            setQueue(Queue.filter((queue) => queue !== id));
        }
    };

    return (
        <div className="min-h-screen bg-zinc-100">
            <div className="sm:block md:block lg:flex xl:flex justify-center items-center">
                <div className="">
                    <SearchInput searchSong={searchSong} />
                    <ListSongs
                        ListSong={ListSong}
                        isLoading={isLoading}
                        playSong={playSong}
                        Song={Song}
                        handlePause={handlePause}
                        isPlaying={isPlaying}
                        handlePlay={handlePlay}
                        handleAddToQueue={handleAddToQueue}
                        Queue={Queue}
                    />
                    <AudioPlayer
                        ref={audioRef}
                        src={Song.streaming ? Song.streaming[128] : null}
                        onPause={() => handlePause()}
                        onPlay={() => handlePlay()}
                        onEnded={() => handleOnEnded()}
                    />
                </div>
                <Lyric Lyrics={Lyrics} />
            </div>
        </div>
    );
}

export default App;
