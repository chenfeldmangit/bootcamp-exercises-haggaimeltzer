function onTweetFormSubmit(event){
    event.preventDefault();
    let tweetTextInput = document.getElementById("tweet-form");
    var inputs = document.getElementById("tweet-form").elements;
    let txt = inputs.tweetInput.value;
    TweetsApi.addTweet(txt);
    return false;
}