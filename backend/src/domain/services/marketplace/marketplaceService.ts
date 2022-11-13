import MarketplaceRepository from "../../../repositories/marketplace/marketplaceRepository";
import Loja from "../../entities/Loja";
import IMarketplaceService from "./imarketplaceService";

export class MarketplaceService implements IMarketplaceService {
  marketPlaceRepository: MarketplaceRepository;

  constructor() {
    this.marketPlaceRepository = new MarketplaceRepository();
  }

  async getLojas(): Promise<Loja[]> {
    return this.marketPlaceRepository.getLojas();
  }
}
