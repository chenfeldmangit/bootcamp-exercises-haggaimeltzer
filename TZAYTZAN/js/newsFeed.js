
async function fillNewsFeed(){
    let tweets = await TweetsApi.getTweets();
    if(!tweets){
        return;
    }
    let tweetTemplate = document.getElementById("tweet-template");
    let myTweetsElement = document.querySelector("#newsFeed");
    tweets.forEach(tweetData => {
        let tweetElement = tweetTemplate.content.cloneNode(true);
        tweetElement.querySelector(".feed-profile-img").src = profile_data.profileImage;
        tweetElement.querySelector(".username").textContent = profile_data.username;
        tweetElement.querySelector(".twitterhandle").textContent = profile_data.twhandle;
        tweetElement.querySelector(".tweet-timestamp").textContent = tweetData.timestamp;
        tweetElement.querySelector(".tweet-text").textContent = tweetData.text;
        if(tweetData.img){
            tweetElement.querySelector(".tweet-image").src = tweetData.img;
        }
        tweetElement.querySelector(".comment_counter").textContent = tweetData.numComments;
        tweetElement.querySelector(".retweet_counter").textContent = tweetData.numRetweets;
        tweetElement.querySelector(".like_counter").textContent = tweetData.numLikes;

        myTweetsElement.insertBefore(tweetElement, myTweetsElement.firstChild);
    });
   
};