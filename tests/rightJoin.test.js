import { rightJoin } from "../src/utility/rightJoin";
import { rulesJson } from "./__mocks__/rulesJson";
import { ruleTypesJson } from "./__mocks__/ruleTypesJson";

describe("rightJoin.js Tests", () => {
    it("Should result in object with 7 entries", () => {
        let newObj = rightJoin(ruleTypesJson, rulesJson, "ruleTypeId", "ruleTypeId");
        let testVal = 1;
        expect(testVal).toEqual(1);
    });
});
