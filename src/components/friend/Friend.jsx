import "./friend.css";
import {User} from "../../dummyData"

export default function Friend({user}) {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>  
  )
}
