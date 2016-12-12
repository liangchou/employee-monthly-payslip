/* global describe, it */

import Record from "../../src/Record";
import { expect } from "chai";

describe("Record", () => {
    it ("should get default value for empty record", () => {
        const data = [];
        const record = new Record(data);

        expect(record.getResult()).deep.equal([
            ' ',
            '',
            0,
            0,
            0,
            0
        ]);
    });

    it ("should get correct result for record ['David', 'Rudd', '60050', '9%', '01 March – 31 March']", () => {
        const data = ['David', 'Rudd', '60050', '9%', '01 March – 31 March'];
        const record = new Record(data);

        expect(record.getResult()).deep.equal([
            'Rudd David',
            '01 March – 31 March',
            5004,
            922,
            4082,
            450
        ]);
    });

    it ("should get correct result for record [ 'Ryan', 'Chen', '120000', '10%', '01 March – 31 March' ]", () => {
        const data = [ 'Ryan', 'Chen', '120000', '10%', '01 March – 31 March' ];
        const record = new Record(data);

        expect(record.getResult()).deep.equal([
            'Chen Ryan',
            '01 March – 31 March',
            10000,
            2696,
            7304,
            1000
        ]);
    });
});
