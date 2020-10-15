import * as shell from "shelljs";

shell.rm("-rf", "dist/static");
shell.cp("-R", "static", "dist/static");
