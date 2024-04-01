import { exec } from "child_process";

let files = ["test/main.py", "test/otherScript.py", "test/moreScripts.py"];

let command = (path: string) => {
  return `npx carbon-now ${path} --save-as ${path.replaceAll(
    "/",
    "-"
  )} --save-to .\\exports --open-in-browser`;
};

for (let file of files) {
  exec(command(file), (error) => {
    if (error) {
      console.error(`Error while converting ${file}: ${error}`);
    } else {
      console.log(`Converted ${file}`);
    }
  });
}
