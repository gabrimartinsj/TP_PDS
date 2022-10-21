import { ServerConfigType } from "./apiTypes";

export const serverConfig: ServerConfigType = {
  quasarServer: {
    app: "Marketplace",
  },
  path: {
    authentication: "",
  },

  pathUseCases: {
    marketplace: {},
    user: {},
  },
  proxy: "",
  desenv: {
    host: "",
    url: "localhost:8080",
  },
  production: {
    host: "",
    url: "",
  },
};
