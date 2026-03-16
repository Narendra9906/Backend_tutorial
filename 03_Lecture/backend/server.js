import express from "express";
const app = express();

// get, post ye method hote hain http ke andar. get ka matlab hota hai data ko retrieve karna, post ka matlab hota hai data ko create karna. put ka matlab hota hai data ko update karna, delete ka matlab hota hai data ko delete karna.

app.get("/", (req, res) => {
  res.send("Hii");
});

// Middleware: ye ek function hota hai jo request aur response ke beech mein execute hota hai. middleware ka use hum logging, authentication, error handling, etc ke liye kar sakte hain. middleware ko hum app.use() ke through register karte hain.



// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",  
    },
    {
      id: 2,
      title: "What did one wall say to the other wall?",
      content: "I'll meet you at the corner!",      
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!", 
    },
    {
      id: 4,
      title: "What do you call a fake noodle?",
      content: "An impasta!"                         
    },
    {
      id: 5,
      title: "Why don't eggs tell jokes?",
      content: "They'd crack up!"                   
    },
  ];
  res.json(jokes);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
