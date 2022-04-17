const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hello Rajan");
    res.end();
  } else if (req.url === "/books") {
    res.writeHead(200, {
      contentType: "application/json",
    });
    const book = [
      {
        name: "Atomic Habits",
        author: "JamesClear",
      },
      {
        name: "Mindset",
        author: "Dr Carol Dweck",
      },
      {
        name: "The Subtle of Not Giving a Fuck",
        author: "Name Not rememebered at the moment",
      },
    ];
    res.write(JSON.stringify(book));
    res.end();
  } else {
    res.writeHead(404, {});
    res.write("This page doesn't exist. Try searching for something else");
  }

  res.end();
});

server.listen(8000, function () {
  console.log("Server stated at port number 8000");
});
