import Colecao from "../../entities/Colecao";

interface IColecaoService {
  getColecao(id:number): Promise<Colecao>;

  getColecaoDeLoja(id:number): Promise<Colecao[]>;
}

export default IColecaoService;
