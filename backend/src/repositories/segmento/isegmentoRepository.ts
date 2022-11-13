import Segmento from "../../domain/entities/Segmento";

interface ISegmentoRepository {
  getSegmento(id: number): Promise<Segmento>;
}

export default ISegmentoRepository;
