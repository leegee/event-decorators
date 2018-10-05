import 'mocha';
import { expect } from 'chai';
import * as Testing from '../src/';
import { Listen, Handle } from '../src/';

let spyListeningRan = false;
let spyHandlingRan = false;
const listenForEventName = 'test-event-name';
const handleEventName = 'test-event-name-2';
const documentQuerySelectorForListen = 'document';
const documentQuerySelectorForHandle = 'document';

describe('Init', () => {
    it('loads and exports', () => {
        expect(Testing.Listen).to.be.a('function');
    });
});

describe('Listen', () => {

    class TestSubject {
        @Listen(listenForEventName, documentQuerySelectorForListen)
        listeningMember() {
            spyListeningRan = true;
        }
    }

    it('receives an event', () => {
        expect(spyListeningRan).to.be.false;
        const event = new CustomEvent(listenForEventName);
        const notCancelled = document.dispatchEvent(event);
        expect(notCancelled).to.be.true;
        expect(spyListeningRan).to.be.true;
    });
});

describe('Handle', () => {
    class TestSubject {
        @Handle(handleEventName, documentQuerySelectorForListen)
        handlingMember() {
            spyHandlingRan = true;
        }
    }

    it('handles an event', () => {
        expect(spyHandlingRan).to.be.false;
        const event = new CustomEvent(handleEventName);
        const notCancelled = document.dispatchEvent(event);
        expect(notCancelled).to.be.true;
        expect(spyHandlingRan).to.be.true;
    });
});
