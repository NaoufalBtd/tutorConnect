
export function AutoSetters() {
  return <T extends object>(target: T) => {
    const proto = target.prototype;
    const properties = Object.keys(proto).filter(
      (prop) => typeof proto[prop] === 'function',
    ); // Filter out existing methods

    for (const property of properties) {
      const methodName = `set${
        property.charAt(0).toUpperCase() + property.slice(1)
      }`;
      const originalDescriptor = Object.getOwnPropertyDescriptor(
        proto,
        property,
      );

      if (originalDescriptor?.writable) {
        // Create a setter if the property is writable
        Object.defineProperty(proto, methodName, {
          value: function (this: T, value: T[keyof T]) {
            this[property] = value;
          },
          writable: true,
          configurable: true,
        });
      }
    }
  };
}
