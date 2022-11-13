import ColecaoRepository from "../../../repositories/colecao/colecaoRepository";
import Colecao from "../../entities/Colecao";
import IColecaoService from "./icolecaoService";

export class ColecaoService implements IColecaoService {
  colecaoRepository: ColecaoRepository;

  constructor() {
    this.colecaoRepository = new ColecaoRepository();
  }

  async getColecao(id: number): Promise<Colecao> {
    return this.colecaoRepository.getColecao(id);
  }

  async getColecaoDeLoja(id: number): Promise<Colecao[]> {
    return this.colecaoRepository.getColecaoDeLoja(id);
  }
}
