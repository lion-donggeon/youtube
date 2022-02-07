import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  // 상태 관리를 위해 useState를 선언한다
  const [videos, setVideos] = useState([]);

  // useEffect는 마운트가 되었거나, 업데이트가 될 때 마다 호출 됨
  useEffect(()=>{
    console.log(`useEffect`);


    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCgyqEAnL9ZSzamKgAcoViaM6jVGjJOQQ4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

    // 컴포넌트가 업데이트 될 때마다 다시 네트워크 통신을 하지 않기 위해 두번째 인자로 [] 사용, 그럼 마운트가 되었을 때만 호출 됨
    // 상태가 업데이트 될 때 호출 하고 싶으면 [] 배열에 state 이름 넣으면 됨
  }, []); 


  return <VideoList videos={videos} />;
  
}

export default App;
