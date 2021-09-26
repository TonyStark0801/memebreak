const subs = [
    "dankmemes",
    "memes",
    "me_irl",
    "cursedcomments",
    "wholesomememes",
    "funny",
    "gifs",
    "hmmm",
];

var item = subs[Math.floor(Math.random() * subs.length)];

var url;

fetch("https://meme-api.herokuapp.com/gimme/" + item)
    .then((res) => res.json())
    .then((data) => (url = data["url"]))
    .then(() => (document.getElementById("img").src = url));