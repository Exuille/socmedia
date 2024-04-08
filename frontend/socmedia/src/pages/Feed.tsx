import "../styles/Feed.css";

const Feed = () => {
  return (
    <div className="feed-main">
      <div className="top-part">
        <h2>Feeds</h2>
        <input type="text" placeholder="Search accounts " />
      </div>
      <div className="feed-container">
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
