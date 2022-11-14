import axios, { AxiosResponse } from "axios";
import { HttpRequest, HttpResponse } from "./httpClient";
import { Alert, Platform } from "react-native";
import { serverConfig } from "./config";

export class Api {
  BASE_URL: string;
  data: any;
  defaultHeader: object;

  constructor() {
    this.BASE_URL = serverConfig.proxy + serverConfig.desenv.url;

    this.defaultHeader = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    };
  }

  async Fetch(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    console.log("DATA : ", data);
    let bodyForm = "";

    console.log(
      "Calling service : " + data.url + " with method " + data.method
    );

    try {
      axiosResponse = await axios.request({
        url: this.BASE_URL + data.url,
        method: data.method,
        data: data.body,
        headers: data.headers ? data.headers : this.defaultHeader,
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
