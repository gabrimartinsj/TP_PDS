import Colecao from "../../domain/entities/Colecao";

interface IColecaoRepository {
  getColecao(id: number): Promise<Colecao>;
}

export default IColecaoRepository;
