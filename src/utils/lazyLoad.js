import { lazy } from "react";
import { wait } from "./";

const lazyLoad = (pathFromSrc, namedExport) => {
  return lazy(async () => {
    const path = "../" + pathFromSrc;
    const promise = wait().then(() =>
      import(
        /* @vite-ignore */
        path
      )
    );

    if (namedExport == null) {
      return promise;
    } else {
      const module = await promise;
      return { default: module[namedExport] };
    }
  });
};

export { lazyLoad };
