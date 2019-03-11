import { foo } from "@d4kmor/foo";
import { nom } from "@d4kmor/nom";

let msg = "";

// with JSDoc
msg += foo("foo");
msg += foo();

msg += "-----------------\n";

// with declaration file nom.d.ts
msg += nom("nom");
msg += nom();

document.body.innerText = msg;
