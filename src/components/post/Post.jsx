import "./post.css";
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className="postUserName">Kübra Yaman</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postCenterText">Hey! Its my first Post :)</span>
                <img className="postCenterImg" src="assets/post/1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="postBottomLeftItem" src="assets/heart.png" alt="" />
                    <img className="postBottomLeftItem" src="assets/like.png" alt="" />
                    <span className="postBottomLeftCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postBottomRightCommentText">9 Comments</span>
                </div> 
            </div>
        </div>
    </div>
  )
}
