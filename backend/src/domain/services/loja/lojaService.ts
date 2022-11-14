import LojaRepository from "../../../repositories/loja/lojaRepository";
import Loja from "../../entities/Loja";
import ILojaService from "./ilojaService";

export class LojaService implements ILojaService {
  lojaRepository: LojaRepository;

  constructor() {
    this.lojaRepository = new LojaRepository();
  }

  async getLoja(id: number): Promise<Loja> {
    return this.lojaRepository.getLoja(id);
  }
}
