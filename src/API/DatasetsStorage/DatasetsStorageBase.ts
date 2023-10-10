import { UploadDataModel } from "./UploadDataModel";
import { RequestExecutorBase } from "../RequestExecutorBase";

export class DatasetsStorageBase extends RequestExecutorBase{
    protected static BaseRoute = "";

    protected static GenerateUploadRequestBody(
        referenceNumber: string,
        compressedData: string,
        isFinal: boolean,
        isEncrypted: boolean,
        realIp: string)
        : UploadDataModel
    {
        let requestBody = new UploadDataModel();
        requestBody.referenceNumber = referenceNumber;
        requestBody.isEncrypted = isEncrypted;
        requestBody.data = compressedData;
        requestBody.isFinal = isFinal;
        requestBody.realIp = realIp;
        return requestBody;
    }
}