const _any2node = (documentQuerySelector: string | HTMLElement | Document, eventName: string) => {
    const node = documentQuerySelector === document ? document :
        documentQuerySelector instanceof HTMLElement ? documentQuerySelector :
            documentQuerySelector === 'document' ? document :
                document.querySelector(documentQuerySelector as string);
    if (node === null) {
        throw new Error('Could not find ' + documentQuerySelector + ' to attach listener for ' + eventName);
    }
    return node;
};

export function Listen(eventName: string, documentQuerySelector: string | HTMLElement | Document) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const node = _any2node(documentQuerySelector, eventName);
        node.addEventListener(eventName, descriptor.value);
        return descriptor;
    };
}


export function Handle(eventName: string, documentQuerySelector: string | HTMLElement | Document) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const node = _any2node(documentQuerySelector, eventName);
        node.addEventListener(eventName, descriptor.value);
        return descriptor;
    };
}
