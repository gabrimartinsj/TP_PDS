import Loja from "../../domain/entities/Loja";

interface IMarketplaceRepository {
  getLojas(): Promise<Loja[]>;
}

export default IMarketplaceRepository;
