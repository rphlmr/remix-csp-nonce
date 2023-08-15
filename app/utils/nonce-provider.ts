import * as React from "react";

// Source:  https://github.com/remix-run/remix/issues/5162
// Why nonce is important: https://remix.run/docs/en/1.19.0/file-conventions/root, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources

const NonceContext = React.createContext<string>("");
export const NonceProvider = NonceContext.Provider;

export const useNonce = () => React.useContext(NonceContext);

export type Nonce = string;
