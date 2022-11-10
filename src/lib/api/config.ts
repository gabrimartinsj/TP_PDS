import { ServerConfigType } from "./apiTypes";

export const serverConfig: ServerConfigType = {
  quasarServer: {
    app: "Marketplace",
  },
  path: {
    authentication: "",
  },

  pathUseCases: {
    marketplace: {
      getLojasStart: {
        method: "get",
        urlService: "/marketplace/lojas",
      },
    },
    user: {
      finalizarCompra: {
        method: "post",
        urlService: "/user/finalizarCompra",
      },
      recuperarCompras: {
        method: "get",
        urlService: "/user/recuperarCompras",
      },
      getInformacaoPessoal: {
        method: "get",
        urlService: "/user/finalizarCompra",
      },
    },
    loja: {
      getLojaStart: {
        method: "get",
        urlService: (id: number | string) => `/loja/${id}`,
      },
    },
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
