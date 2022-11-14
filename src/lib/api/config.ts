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
        urlService: "/marketplace/getLojas",
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
    colecao: {
      getColecao: {
        method: "get",
        urlService: (id: number | string) => `/colecao/${id}`,
      },
      getColecaoDeLojaStart: {
        method: "get",
        urlService: `/colecao/getColecaoDeLoja`,
      },
      getProdutosDeColecao: {
        method: "get",
        urlService: `/produto/getProdutosDeColecao`,
      },
    },
    produto: {
      getProduto: {
        method: "get",
        urlService: `/produto/getProduto`,
      },
      getProdutos: {
        method: "get",
        urlService: `/produto/getProdutos`,
      },
    },
  },
  proxy: "https://82fe-2804-d45-b92c-db00-20e6-e74d-eb5b-d344.sa.ngrok.io",
  desenv: {
    host: "",
    url: "/api/v1",
  },
  production: {
    host: "",
    url: "",
  },
};
