import { check } from "k6";

export class Checker {
    public static checkResponse(response: object, name: string): boolean {
        check(response, { [name + ' - status code is 200']: (r) => r.status === 200 });
        if (response.status !== 200) {
            console.log(
                `${name} Status code is: ${response.status}\n`,
                `${name} Response body is: ${response.body}\n`)
            return false;
        }
        return true;
    }
}