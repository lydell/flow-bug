// @flow

import * as React from "react";

declare module "foobar" {
  declare export default function foobar(): React.DoesNotExist;
}
