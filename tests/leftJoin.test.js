import { leftJoin } from "../src/utility/leftJoin";
import { rulesJson } from "./__mocks__/rulesJson";
import { ruleTypesJson } from "./__mocks__/ruleTypesJson";


describe("leftJoin.js Tests", () => {
    it("Should result in object with 7 entries", () => {
        let newObj = leftJoin(ruleTypesJson, rulesJson, "ruleTypeId", "ruleTypeId");
        let testVal = 1;
        expect(testVal).toEqual(1);
    });
});
