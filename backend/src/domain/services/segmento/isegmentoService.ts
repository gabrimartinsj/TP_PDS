import Segmento from "../../entities/Segmento";

interface ISegmentoService {
  getSegmento(id: number): Promise<Segmento>;

}

export default ISegmentoService;
