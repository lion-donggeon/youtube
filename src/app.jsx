import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/seach_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  // 상태 관리를 위해 useState를 선언한다
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  // useEffect는 마운트가 되었거나, 업데이트가 될 때 마다 호출 됨
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));

    // 컴포넌트가 업데이트 될 때마다 다시 네트워크 통신을 하지 않기 위해 두번째 인자로 [] 사용, 그럼 마운트가 되었을 때만 호출 됨
    // 상태가 업데이트 될 때 호출 하고 싶으면 [] 배열에 state 이름 넣으면 됨
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
