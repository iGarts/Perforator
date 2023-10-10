import http from "k6/http";
import { Checker } from "../Utils/Checker";
import { appsettings } from "../../appsettings";
import { RequestNames } from "../Helpers/RequestNames";

export class RequestExecutorBase
{
    protected static Get(route: string, params?: object): object
    {
        let response = http.get(`${appsettings.baseURL}${route}`, params);
        Checker.checkResponse(response, params.tags.request_name);
        return response;
    }

    protected static Post(route: string, body: object, params?: object): object
    {
        let response = http.post(`${appsettings.baseURL}${route}`, JSON.stringify(body), params);
        Checker.checkResponse(response, params.tags.request_name);
        return response;
    }

    protected static Put(route: string, body: object, params?: object): object
    {
        let response = http.put(`${appsettings.baseURL}${route}`, JSON.stringify(body), params);
        Checker.checkResponse(response, params.tags.request_name);
        return response;
    }

    protected static GenerateRequestParameters(accessToken: string, requestName: RequestNames): object
    {
        let params =
        {
            headers:
            {
                'Authorization': "Bearer " + accessToken,
                'Content-Type': "application/json"
            },
            tags: { request_name: requestName }
        }
        return params;
    }
}