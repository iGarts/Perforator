import { RequestNames } from "../../Helpers/RequestNames";
import { PlatformType } from "../../Helpers/PlatformType";
import { DatasetsStorageBase } from "./DatasetsStorageBase";

export class DatasetsStorageAPI extends DatasetsStorageBase
{
    public static Verify(
        accessToken: string,
        referenceNumber: string,
        platformType: PlatformType)
    {
        let platform = platformType == PlatformType.Web
            ? "web/"
            : "mobile/";

        this.Get(
            `${this.BaseRoute}/verify/${platform}?referenceNumber=${referenceNumber}`,
            this.GenerateRequestParameters(accessToken, RequestNames.VerifyRecordNumber));
    }

    public static Upload(
        accessToken: string,
        referenceNumber: string,
        compressedData: string,
        isFinal: boolean = true,
        realIp: string = "0.0.0.0",
        isEncrypted: boolean = false)
        : string
    {
        this.Post(
            `${this.BaseRoute}/upload`,
            this.GenerateUploadRequestBody(referenceNumber, compressedData, isFinal, isEncrypted, realIp),
            this.GenerateRequestParameters(accessToken, RequestNames.Dataset_Upload));
        return referenceNumber;
    }

    public static GetDataset(
        accessToken: string,
        subscriptionId: string,
        referenceNumber: string)
        : object
    {
        let response =  this.Get(
            `${this.BaseRoute}/details/${subscriptionId}/${referenceNumber}`,
            this.GenerateRequestParameters(accessToken, RequestNames.GetDataset));
        return response;
    }

    public static GetDatasetChunk(
        accessToken: string,
        subscriptionId: number,
        referenceNumber: string,
        chunkId: string)
        : object
    {
        let response = this.Get(
            `${this.BaseRoute}/details/${subscriptionId}/${referenceNumber}/${chunkId}`,
            this.GenerateRequestParameters(accessToken, RequestNames.GetDatasetChunk));
        return response;
    }
}