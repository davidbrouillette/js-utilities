import { arrayToObject } from "../src/utility/arrayToObject";
import { mockJson } from "./__mocks__/mockJson";

describe("arrayToObject.js Tests", () => {
    it('Should output object with "id" as keys', () => {
        let keyToCheckfor = mockJson[0]._id;
        let newObj = arrayToObject(mockJson, "_id");
        expect(newObj).toHaveProperty(keyToCheckfor);
    });
    it("Should output object 10 keys", () => {
        let newObj = arrayToObject(mockJson, "_id");
        let count = Object.keys(newObj).length;
        expect(count).toEqual(10);
    });
});
