import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "SanthoshPemmaka",
      username: "santhospemmaka",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars1.githubusercontent.com/u/30383739?s=400&u=a4d69190210fb85efa693b41061071b692dd1f24&v=4"
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://avatars1.githubusercontent.com/u/30383739?s=400&u=a4d69190210fb85efa693b41061071b692dd1f24&v=4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
            value={tweetMessage}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
