import { Request, Response } from "express";
import { SegmentoService } from "../domain/services/segmento/segmentoService";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";
import ISegmentoService from "../domain/services/segmento/isegmentoService";

class SegmentoController {
    segmentoService: ISegmentoService;

  constructor() {
    this.segmentoService = new SegmentoService();
  }

  getSegmento = catchAsync(async (req: Request, res: Response, _next) => {
    const segmento = await this.segmentoService.getSegmento(parseInt(req.params.id));

    return sendResponse(res, 200, segmento);
  });
}

export default SegmentoController;
