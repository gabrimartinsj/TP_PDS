import SegmentoRepository from "../../../repositories/segmento/segmentoRepository";
import Segmento from "../../entities/Segmento";
import ISegmentoService from "./isegmentoService";

export class SegmentoService implements ISegmentoService {
  segmentoRepository: SegmentoRepository;

  constructor() {
    this.segmentoRepository = new SegmentoRepository();
  }

  async getSegmento(id: number): Promise<Segmento> {
    return this.segmentoRepository.getSegmento(id);
  }
}
