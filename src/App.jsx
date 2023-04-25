import VideoList from './Components/VideoList';
import { videoList } from "./data/videoList";
import './App.css';

export default function App() {
  return (
      <VideoList list={videoList} />
  );
}
