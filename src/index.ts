export function Listen(eventName: string, documentQuerySelector: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('called ', eventName, target, propertyKey, descriptor);
        const node = documentQuerySelector === 'document' ? document : document.querySelector(documentQuerySelector);
        if (node === null) {
            throw new Error('Could not find ' + documentQuerySelector + ' to attach listener for ' + eventName);
        }
        node!.addEventListener(eventName, descriptor.value);
        return descriptor;
    };
}

