import { bangs } from "./src/bang";

// go through all bangs and check for conflicts

const tags: string[] = [];

for (const bang of bangs) {
    if (tags.includes(bang.t)) {
        console.log(`Conflict: !${bang.t} -> ${bang.d}`);
    } else {
        tags.push(bang.t);
    }
}
