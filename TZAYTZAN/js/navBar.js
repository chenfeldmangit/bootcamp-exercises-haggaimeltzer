function onHomeClicked(){
    document.getElementById("tweet-form").style.display = "flex";
    document.getElementById("newsFeed").style.display = "flex";

    document.getElementById("profile-container").style.display = "none";
    document.getElementById("my-activities").style.display = "none";

}

function onProfileClicked(){
    document.getElementById("tweet-form").style.display = "none";
    document.getElementById("newsFeed").style.display = "none";
    document.getElementById("profile-container").style.display = "flex";
    document.getElementById("my-activities").style.display = "flex";

    
}