import Loja from "../../entities/Loja";

interface ILojaService {
  getLoja(id: number): Promise<Loja>;

}

export default ILojaService;
