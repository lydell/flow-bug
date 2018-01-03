// @flow

// Intentionally "forgotten".
// import * as React from "react";

import foobar from "foobar";

function test(): string {
  return foobar();
}

// Should complain about `React` not being defined.
function test2(): React.Node {}
