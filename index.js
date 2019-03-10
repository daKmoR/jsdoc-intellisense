import { foo } from "@foo/foo";
import { nom } from "nom";

let msg = "";

// with JSDoc
msg += foo("foo");
msg += foo();

msg += "-----------------\n";

// with declaration file nom.d.ts
msg += nom("nom");
msg += nom();

document.body.innerText = msg;
