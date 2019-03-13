import { foo } from "@d4kmor/foo";
import { nom } from "@d4kmor/nom";
import { bar } from "./bar";

let msg = "";

// with JSDoc from node_modules
msg += foo("foo");
msg += foo();

// with JSDoc from within the project
msg += bar("bar");
msg += bar();

// with declaration file nom.d.ts from node_modules
msg += nom("nom");
msg += nom();

document.body.innerText = msg;
