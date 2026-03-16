require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "Narendra9906",
  id: 124489116,
  node_id: "U_kgDOB2uNnA",
  avatar_url: "https://avatars.githubusercontent.com/u/124489116?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Narendra9906",
  html_url: "https://github.com/Narendra9906",
  followers_url: "https://api.github.com/users/Narendra9906/followers",
  following_url:
    "https://api.github.com/users/Narendra9906/following{/other_user}",
  gists_url: "https://api.github.com/users/Narendra9906/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Narendra9906/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Narendra9906/subscriptions",
  organizations_url: "https://api.github.com/users/Narendra9906/orgs",
  repos_url: "https://api.github.com/users/Narendra9906/repos",
  events_url: "https://api.github.com/users/Narendra9906/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Narendra9906/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Narendra",
  company: "Nit Rourkela",
  blog: "",
  location: "India",
  email: null,
  hireable: true,
  bio: "DSA in C++ 🖥️ \r\nFull Stack Developer 💻 \r\nAstrophile✨ ",
  twitter_username: "Narendra9906",
  public_repos: 36,
  public_gists: 0,
  followers: 2,
  following: 23,
  created_at: "2023-02-05T07:19:29Z",
  updated_at: "2026-03-12T17:46:25Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Narendra9906");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("Chai aur Code Youtube channel");
});

app.get("/github", (req, res)=>{
    res.json(githubData);
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// this approach is ued when we create a file .env and it is in production format , Use the PORT from environment variables.
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
