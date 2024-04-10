import "../styles/Feed.css";
// import { TiThMenu } from "react-icons/ti";
import MobileBar from "../components/MobileBar";

const Feed = () => {
  return (
    <div className="feed-main">
      <MobileBar />
      <div className="feed-container">
        <div className="your-post-container">
          <textarea placeholder="What's on your mind?" maxLength={150} />
          <div className="button-post">
            <button>Photo/Video</button>
            <button>POST</button>
          </div>
        </div>
        <div className="post-container">
          <div className="profile-container">
            <img className="rightSide-profile" src="" alt="" />
            <p style={{ fontWeight: "bold", fontSize: "0.8rem" }}>
              James De Villa Magnaye <br />{" "}
              <span style={{ color: "#b5b7b8", fontSize: "0.7rem" }}>
                @akosijameshaha
              </span>
            </p>
          </div>
          <div className="post-here">HI</div>
          <div className="interactive-buttons">
            <button>♥</button>
            <button>📦</button>
            <button>📤 </button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Feed;
