import Loja from "../../domain/entities/Loja";

interface ILojaRepository {
  getLoja(id: number): Promise<Loja>;
}

export default ILojaRepository;
