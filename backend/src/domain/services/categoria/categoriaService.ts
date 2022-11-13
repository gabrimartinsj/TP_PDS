import CategoriaRepository from "../../../repositories/categoria/categoriaRepository";
import Categoria from "../../entities/Categoria";
import ICategoriaService from "./icategoriaService";

export class CategoriaService implements ICategoriaService {
  categoriaRepository: CategoriaRepository;

  constructor() {
    this.categoriaRepository = new CategoriaRepository();
  }

  async getCategoria(id: number): Promise<Categoria> {
    return this.categoriaRepository.getCategoria(id);
  }
}
