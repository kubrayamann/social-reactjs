import "./share.css"
import {PermMediaOutlined} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/88.jpg" alt="" />
                <input placeholder="What's in your mind Safak?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaOutlined className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
