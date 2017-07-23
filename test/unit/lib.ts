import * as assert from 'assert';
import { Greeter } from '../../src';

describe('test', function () {
    it('should greet properly', function () {
        const g = new Greeter("Genius");

        assert(g.greet() === "Hello, Genius", `greeting was not as expected`);
    });
});