import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "server", "social.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
  }
  //else if (req.method === "POST") {
  //     const filePath = path.join(process.cwd(), "server", "social.json");
  //     const fileData = fs.readFileSync(filePath);
  //     const data = JSON.parse(fileData);
  //     const newData = req.body;
  //     data.push(newData);
  //     fs.writeFileSync(filePath, JSON.stringify(data));
  //     res.status(200).json({ message: "Success" });
  //   }
  else {
    res.status(400).json({ message: "Invalid request" });
  }
}
