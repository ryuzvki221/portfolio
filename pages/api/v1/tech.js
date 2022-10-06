import fs from "fs";
import path from "path";
import { getOrSetCache } from "../../../lib/redis";

const filePath = path.join(process.cwd(), "server", "technologies.json");
const fileData = fs.readFileSync(filePath);
const data = JSON.parse(fileData);

export default async function handler(req, res) {
  const tech = await getOrSetCache("technologies", data);
  res.status(200).json(tech);
}
