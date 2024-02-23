import { lazy } from "react";
import { wait } from "./wait";

const lazyLoad = (path, namedExport) => {
  return lazy(() => {
    const promise = wait().then(() => import(`../${path}`));

    if (namedExport == null) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};

export { lazyLoad };
