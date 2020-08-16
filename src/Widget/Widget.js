import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import "./Widget.css";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening? </h2>
        <TwitterTweetEmbed tweetId={"1285094868272820230"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SanthoshPemmaka"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://github.com/santhoshpemmaka"}
          options={{ text: "#reactJs is github", via: "SanthoshPemmaka" }}
        />
      </div>
    </div>
  );
}

export default Widget;
