import 'mocha';
import { expect } from 'chai';

import * as Testing from '../src/';

describe('Init', () => {
    it('loads and exports', () => {
        expect(Testing.Listen).to.be.a('function');
    });
});
