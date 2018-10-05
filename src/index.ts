// export function Listen(arg: string) {
//     function f(target) {
//         function ff(msg: string) {
//             return new target(arg + ":" + msg)
//         }
//         return <typeof A><any>ff
//     }
//     return f
// }

export function Listen(eventName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('called ',eventName, target, propertyKey, descriptor    );
        document.addEventListener(eventName, descriptor.value);
        return descriptor;
    };
}