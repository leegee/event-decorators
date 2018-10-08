import 'mocha';
import { expect } from 'chai';
import * as Testing from '../src/';
import { Listen } from '../src/';

describe('Init', () => {
    it('loads and exports', () => {
        expect(Testing.Listen).to.be.a('function');
    });
});

describe('Event from object "document"', () => {
    const eventName = 'handle-event-document-object';
    let spyHandlingRan = false;

    class TestSubject {
        @Listen(eventName, document)
        handlingMember() {
            spyHandlingRan = true;
        }
    }

    it('handled', () => {
        const notCancelled = document.dispatchEvent(new CustomEvent(eventName));
        expect(notCancelled).to.be.true;
        expect(spyHandlingRan).to.be.true;
    });
});

describe('Event from string "document"', () => {
    const eventName = 'handle-event-document-string';
    let spyHandlingRan = false;

    class TestSubject {
        @Listen(eventName, 'document')
        handlingMember() {
            spyHandlingRan = true;
        }
    }

    it('handled', () => {
        const notCancelled = document.dispatchEvent(new CustomEvent(eventName));
        expect(notCancelled).to.be.true;
        expect(spyHandlingRan).to.be.true;
    });
});

describe('Event from object node', () => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    const eventName = 'handle-event-node-object';
    let spyHandlingRan = false;

    class TestSubject {
        @Listen(eventName, node)
        handlingMember() {
            spyHandlingRan = true;
        }
    }

    it('handled', () => {
        const notCancelled = node.dispatchEvent(new CustomEvent(eventName));
        expect(notCancelled).to.be.true;
        expect(spyHandlingRan).to.be.true;
    });
});

describe('Event from object node did not fire doc', () => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    const eventName = 'handle-event-node-object';
    let spyHandlingRan = false;

    class TestSubject {
        @Listen(eventName, node)
        handlingMember() {
            spyHandlingRan = true;
        }
    }

    it('handled', () => {
        const notCancelled = document.dispatchEvent(new CustomEvent(eventName));
        expect(notCancelled).to.be.true;
        expect(spyHandlingRan).to.be.false;
    });
});

describe('Event from string node', () => {
    const node = document.createElement('div');
    const nodeId = 'aNodeId';
    node.setAttribute('id', nodeId);
    document.body.appendChild(node);
    const eventName = 'handle-event-node-string';
    let spyHandlingRan = false;

    class TestSubject {
        @Listen(eventName, '#' + nodeId)
        handlingMember() {
            spyHandlingRan = true;
        }
    }

    it('handled', () => {
        const notCancelled = node.dispatchEvent(new CustomEvent(eventName));
        expect(notCancelled).to.be.true;
        expect(spyHandlingRan).to.be.true;
    });
});

