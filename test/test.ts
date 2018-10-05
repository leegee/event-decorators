import 'mocha';
import { expect } from 'chai';
import * as Testing from '../src/';
import { Listen } from '../src/';

let spyRan = false;
const eventName = 'test-event-name';
const documentQuerySelector = 'document';

class TestSubject {
    @Listen(eventName, documentQuerySelector)
    listeningMember(){
        spyRan = true;
    }
}

describe('Init', () => {
    it('loads and exports', () => {
        expect(Testing.Listen).to.be.a('function');
    });
});

describe('Listen', () => {
    it('receives an event', () => {
        expect(spyRan).to.be.false;
        const event = new CustomEvent(eventName);
        const notCancelled = document.dispatchEvent(event);
        expect(notCancelled).to.be.true;
        expect(spyRan).to.be.true;
    });
});
