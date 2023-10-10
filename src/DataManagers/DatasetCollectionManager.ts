import { SharedArray } from "k6/data";
import { Randomizer } from "../Utils/Randomizer";

export class DatasetCollectionManager {

    public static GenerateDatasetsCollection(folderPath: string, datasetsCount: number = 100): any {
        let datasetsPathArray: Array<string> = [];
        for (let i = 0; i < datasetsCount; i++) {
            datasetsPathArray[i] = folderPath + "dataset_" + i;
        }
        const datasetsCollection = new SharedArray('datasetsCollection', function () {
            let datasetsDataArray: any = [];
            for (let i = 0; i < datasetsPathArray.length; i++) {
                datasetsDataArray[i] = open(datasetsPathArray[i]);
            }
            return datasetsDataArray;
        })
        return datasetsCollection;
    }

    public static GetRandomIndex(arraySize: number = 100): number {
        return Randomizer.RandomIntBetween(0, arraySize - 1);
    }

    public static GenerateReferenceNumberCollection(size: number, charLength: number = 100): Array<string> {
        let ReferenceNumbersCollection: Array<string> = [];
        for (let i = 0; i < size; i++) {
            ReferenceNumbersCollection[i] = Randomizer.GenerateReferenceNumber(charLength);
        }
        return ReferenceNumbersCollection;
    }
}