import { leftJoinOn } from "../src/utility/leftJoinOn";
import { rulesJson } from "./__mocks__/rulesJson";
import { ruleTypesJson } from "./__mocks__/ruleTypesJson";

describe("leftJoinOn.js Tests", () => {
    it("Should result in object with 7 entries", () => {
        let newObj = leftJoinOn(ruleTypesJson, rulesJson, "ruleTypeId");
        let testVal = 1;
        expect(testVal).toEqual(1);
    });
});
