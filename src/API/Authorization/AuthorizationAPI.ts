import { appsettings } from "../../../appsettings";
import { ApiVersion } from "../../Helpers/ApiVersion";
import { AuthorizationBase } from "./AuthorizationBase";
import { RequestNames } from "../../Helpers/RequestNames";

export class AuthorizationAPI extends AuthorizationBase
{
    public static CredoAppLogin(authKey: string, apiVersion: ApiVersion = ApiVersion.v6)
        : string
    {
        let response = this.Post(
            `${apiVersion}/${this.RouteCredoApp}`,
            this.GenerateMobileRequestBody(authKey),
            this.GenerateRequestParameters(RequestNames.Login_SubscriptionAuthKey));
        return this.extractToken(response);
    }

    public static SuperAdminLogin(apiVersion: ApiVersion = ApiVersion.v6)
        : string
    {
        let response = this.Post(
            `${apiVersion}/${this.RouteUser}`,
            appsettings.superAdminCredentials,
            this.GenerateRequestParameters(RequestNames.Login_SuperAdmin));
        return this.extractToken(response);
    }

    public static UserLogin(userEmail: string, password = "Test12!", apiVersion = ApiVersion.v6)
        : string
    {
        let response = this.Post(
            `${apiVersion}/${this.RouteUser}`,
            {
                "userEmail": userEmail,
                "password": password
            },
            this.GenerateRequestParameters(RequestNames.Login_SubscriptionUser));
        return this.extractToken(response);
    }
}