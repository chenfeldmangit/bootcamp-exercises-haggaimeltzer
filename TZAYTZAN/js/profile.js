profile_data = {
    username : 'MeltzerMan',
    twitterHandle : '@meltzerman',
    profileImage: 'https://pbs.twimg.com/profile_images/475721381443670016/-Usuvy6t_400x400.jpeg',
    bgImage: 'https://picsum.photos/300/200?random=7',
    joinedTime: '1/1/1999',
    numFollowing: 5, 
    numFollowers: 9999,

    lastTweets:[
        {
            timestamp : "1/1/1999",
            text : "this is my last tweet",
            img : "https://picsum.photos/300/200?random=8",
            numComments : 1,
            numRetweets : 2,
            numLikes : 3,
        },    
        {
            timestamp : "1/1/1999",
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam ad dolor. Eveniet laborum officiis recusandae praesentium pariatur iure minus quod illum, aut, consec",
            img : "https://picsum.photos/300/200?random=3",
            numComments : 1,
            numRetweets: 2,
            numLikes : 3,
        } ,      
        {
            timestamp : "1/1/1999",
            text : "this is another tweet",
            img : "https://picsum.photos/300/200?random=87",
            numComments : 1,
            numRetweets : 2,
            numLikes : 3,
        } ,        
    ]   ,
}

function fillProfileData(){
    let container = document.getElementById("profile-container");
    let bgImage = container.querySelector(".background-img");
    bgImage.src = profile_data.bgImage;
    //container.style.backgroundImage = `url(${profile_data.bgImage})`;
    let profileImg = container.querySelector(".my-profile-img");
    profileImg.src = profile_data.profileImage;
    let userNameSpan = container.querySelector(".username");
    userNameSpan.textContent   = profile_data.username;
    let twitterhandle = container.querySelector(".twitterhandle");
    twitterhandle.textContent   = profile_data.twitterHandle;
    let joinedTime =  container.querySelector(".joinedTime");
    joinedTime.textContent = profile_data.joinedTime;
    let followingSpan =  container.querySelector(".numFollowing");
    followingSpan.textContent = profile_data.numFollowing;
    let followersSpan =  container.querySelector(".numFollowers");
    followersSpan.textContent = profile_data.numFollowers;
    
};

function fillMyActivities(){
    let tweetTemplate = document.getElementById("tweet-activity-template");
    let myTweets = document.querySelector("#my-activities .my-activities-content .tweets");
    profile_data.lastTweets.forEach(tweetData => {
        let tweetElement = tweetTemplate.content.cloneNode(true);
        tweetElement.querySelector(".feed-profile-img").src = profile_data.profileImage;
        tweetElement.querySelector(".username").textContent = profile_data.username;
        tweetElement.querySelector(".twitterhandle").textContent = profile_data.twitterHandle;
        tweetElement.querySelector(".tweet-timestamp").textContent = tweetData.timestamp;
        tweetElement.querySelector(".tweet-text").textContent = tweetData.text;
        tweetElement.querySelector(".tweet-image").src = tweetData.img;
        tweetElement.querySelector(".comment_counter").textContent = tweetData.numComments;
        tweetElement.querySelector(".retweet_counter").textContent = tweetData.numRetweets;
        tweetElement.querySelector(".like_counter").textContent = tweetData.numLikes;



        myTweets.appendChild(tweetElement);
    });
   
};
