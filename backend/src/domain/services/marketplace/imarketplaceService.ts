import Loja from "../../entities/Loja";

interface IMarketplaceService {
  getLojas(): Promise<Loja[]>;
}

export default IMarketplaceService;
