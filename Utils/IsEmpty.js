export function isEmpty(obj) {
    let isEmpty = false;
    const type = typeof obj;
    isEmpty = isEmpty || !obj;
    isEmpty = isEmpty || type === "undefined"; // if it is undefined
    isEmpty = isEmpty || obj === null; // if it is null
    isEmpty = isEmpty || (type === "string" && obj.trim() === ""); // if the string is empty or only have spaces
    isEmpty = isEmpty || obj === false || obj === 0; // if boolean value returns false
    isEmpty = isEmpty || (Array.isArray(obj) && obj.length === 0); // if array is empty
    isEmpty = isEmpty || (type === "object" && Object.keys(obj).length === 0); // if object is empty
    return isEmpty;
  }