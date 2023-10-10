import { Options } from "k6/options";
import { Randomizer } from "../../../src/Utils/Randomizer";
import { AuthorizationAPI } from "../../../src/API/Authorization/AuthorizationAPI";
import { DatasetsStorageAPI } from "../../../src/API/DatasetsStorage/DatasetsStorageAPI";
import { DatasetCollectionManager } from "../../../src/DataManagers/DatasetCollectionManager";

export let options: Options =
{
    vus: 3,
    iterations: 500,
    duration: '60m'
};

let collection = DatasetCollectionManager.GenerateDatasetsCollection("folder path", 20);

export default function () {
    let token = AuthorizationAPI.CredoAppLogin("qwerty");
    let android = Randomizer.GenerateReferenceNumber();

    DatasetsStorageAPI.Upload(token, android, collection[Randomizer.RandomIntBetween(1, 10)]);
}