import Categoria from "../../entities/Categoria";

interface ICategoriaService {
  getCategoria(id: number): Promise<Categoria>;

}

export default ICategoriaService;
