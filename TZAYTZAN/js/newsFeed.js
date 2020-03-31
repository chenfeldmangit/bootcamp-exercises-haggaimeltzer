
async function fillNewsFeed(){
    let tweets = await TweetsApi.getTweets();
    if(!tweets){
        return;
    }
    let tweetTemplate = document.getElementById("tweet-template");
    let myTweetsElement = document.querySelector("#newsFeed");
    tweets.forEach(tweetData => {
        let tweetElement = tweetTemplate.content.cloneNode(true);
        tweetElement.querySelector(".feed-profile-img").src = tweetData.profileImage;
        tweetElement.querySelector(".username").textContent = tweetData.username;
        tweetElement.querySelector(".twitterhandle").textContent = tweetData.twhandle;
        tweetElement.querySelector(".tweet-timestamp").textContent = tweetData.timestamp;
        tweetElement.querySelector(".tweet-text").textContent = tweetData.text;
        if(tweetData.img){
            tweetElement.querySelector(".tweet-image").src = tweetData.img;
        }
        tweetElement.querySelector(".comment_counter").textContent = tweetData.numComments;
        tweetElement.querySelector(".retweet_counter").textContent = tweetData.numRetweets;
        tweetElement.querySelector(".like_counter").textContent = tweetData.numLikes;
        if(tweetData.liked){
            tweetElement.querySelector(".like_icon").src = "./assets/liked_icon.svg"
        }
        tweetElement.querySelector(".like_icon").onclick = function(event) {onlike(event.target, tweetData)}; //function(element){onlike(element, tweetData.id)};
        myTweetsElement.insertBefore(tweetElement, myTweetsElement.firstChild);
    });
   
};

async function onlike(like_element, tweetData){
    if(tweetData.liked){
        await TweetsApi.removeLike(tweetData.id);
        tweetData.liked = false;
        tweetData.numLikes--;
        like_element.src = "./assets/like_icon.svg";
    }
    else{
        await TweetsApi.addLike(tweetData.id);
        tweetData.liked = true;
        tweetData.numLikes++;
        like_element.src = "./assets/liked_icon.svg";
    }
    like_element.closest(".tweet-action").querySelector(".like_counter").textContent = tweetData.numLikes;

}

