import { RequestNames } from "../../Helpers/RequestNames";
import { RequestExecutorBase } from "../RequestExecutorBase";

export class AuthorizationBase extends RequestExecutorBase
{
    protected static RouteUser: string = "account/login";
    protected static RouteCredoApp: string = "account/CredoAppLogin";

    protected static extractToken(response: object): string
    {
        return response.json('access_token');
    }

    protected static GenerateMobileRequestBody(authKey: string): object
    {
        let mobileCredentials =
        {
            "authKey": authKey
        };
        return mobileCredentials;
    }

    protected static GenerateRequestParameters(requestName: RequestNames): object
    {
        let params =
        {
            tags: { request_name: requestName }
        };
        return params;
    }
}