const http = require("http");
const url = require("url");
const qs = require("querystring");
let emparr = [
  {
    id: 1,
    name: "a",
    job: "aaa",
    salary: "6984",
  },
];

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const { id } = qs.parse(query);

  if (pathname == "/employees") {
    res.writeHead(200, { "Content-Type": "json" });
    res.end(JSON.stringify(emparr));
  } else if (pathname == "/employees/post") {
    req
      .on("data", (data) => {
        emparr.push(JSON.parse(data));
      })
      .on("end", () => {
        res.end(JSON.stringify(emparr));
      });
  } else if (pathname == "/employees/put") {
    req
      .on("data", (data) => {
        obj = JSON.parse(data);
        let ind = emparr.findIndex((e) => Number(e.id) == Number(id));
        emparr[ind] = obj;
      })
      .on("end", () => {
        res.end(JSON.stringify(emparr));
      });
  } else if (pathname == "/employees/delete") {
    let ind = emparr.findIndex((e) => Number(e.id) == Number(id));
    emparr.splice(ind, 1);
    res.end(JSON.stringify(emparr));
  }
});

server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port: 3000");
  }
});
