import Video from "./Video";
import uniqid from "uniqid";

export default function VideoList(props) {
    return props.list.map(item => <Video key={uniqid()} url={item.url} date={item.date} />);
}