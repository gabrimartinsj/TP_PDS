import { WsRestApiVersao } from "./httpClient";

export type SetUseCases = {
  [key: string]: UseCase;
};

export type UseCase = {
  [key: string]: WsRestApiVersao;
};

export type ServerConfigType = {
  quasarServer: {
    app: string;
  };
  desenv: {
    host: string;
    url: string;
  };
  production: {
    host: string;
    url: string;
  };
  path: {
    authentication: string;
  };
  pathUseCases: SetUseCases;
  proxy: string;
};
