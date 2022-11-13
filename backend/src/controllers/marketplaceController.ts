import { Request, Response } from "express";
import IMarketplaceService from "../domain/services/marketplace/imarketplaceService";
import { MarketplaceService } from "../domain/services/marketplace/marketplaceService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

class MaketplaceController {
  marketplaceService: IMarketplaceService;

  constructor() {
    this.marketplaceService = new MarketplaceService();
  }

  getLojas = catchAsync(async (req: Request, res: Response, _next) => {
    const lojas = await this.marketplaceService.getLojas();

    return sendResponse(res, 200, lojas);
  });
}

export default MaketplaceController;
