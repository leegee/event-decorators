export function Listen (Class) {
    return (...args) => {
        console.log(args);
        return new Class(args);
    };
}