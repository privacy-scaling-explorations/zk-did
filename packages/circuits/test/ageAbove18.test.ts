const circom_tester = require("circom_tester/wasm/tester");
import { describe, it } from "mocha";
import path from "path";

describe("AadhaarVerifier", function () {
  this.timeout(0);

  let circuit: any;

  this.beforeAll(async () => {
    const pathToCircuit = path.join(__dirname, "../src", "main.circom");
    circuit = await circom_tester(pathToCircuit, {
      recompile: true,
      // output: path.join(__dirname, '../build'),
      include: [
        path.join(__dirname, "../node_modules"),
        path.join(__dirname, "../../../node_modules"),
      ],
    });
  });

  it("Generate a proof", async () => {
    const witness: any[] = await circuit.calculateWitness({
      dobMonth: 6,
      dobYear: 1994,
      currentDateMonth: 9,
      currentDateYear: 2024,
    });

    console.log(witness);
  });
});
