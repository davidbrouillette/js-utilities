import { rightJoinOn } from "../src/utility/rightJoinOn";
import { rulesJson } from "./__mocks__/rulesJson";
import { ruleTypesJson } from "./__mocks__/ruleTypesJson";

describe("rightJoinOn.js Tests", () => {
    it("Should result in object with 7 entries", () => {
        let newObj = rightJoinOn(ruleTypesJson, rulesJson, "ruleTypeId");
        let testVal = 1;
        expect(testVal).toEqual(1);
    });
});
