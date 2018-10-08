const _any2node = (documentQuerySelector: string | HTMLElement | Document, eventName: string) => {
    let node;
    
    if (documentQuerySelector instanceof Document) {
        node = documentQuerySelector;
    } 
    else if (documentQuerySelector === 'document') {
        node = document;
    } 
    else if (documentQuerySelector instanceof HTMLElement) {
        node = documentQuerySelector;
    } else {
        node = document.querySelector(documentQuerySelector);
    }
    
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
