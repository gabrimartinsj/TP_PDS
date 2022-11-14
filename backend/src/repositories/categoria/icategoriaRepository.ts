import Categoria from "../../domain/entities/Categoria";

interface ICategoriaRepository {
  getCategoria(id: number): Promise<Categoria>;
}

export default ICategoriaRepository;
