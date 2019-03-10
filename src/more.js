import { foo } from "@foo/foo";
import { foo2 } from "@foo/foo/foo2.js";
import { bar } from "bar";
import { nom } from "nom";

// import via index which rexports (from scoped package)
foo("foo");

// import directly
foo2("foo2");

// import via index which rexports (unscoped packge)
bar("bar");

// import via index which rexports with declartion file
nom("nom");
