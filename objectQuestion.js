/*
 * Question: Write a function that takes 3 args -> object,
 * keyPath and value.
 * The function has to set the value of keyPath on the
 * object and return the object.
 */
// the object arg
const a = {
  c: {
    d: {
      e: {
        weight: "120",
        unit: "KG",
      },
      name: "_name_",
    },
  },
};
// the keyPath arg
const keyPath = "c.d.e.unit";
// the value arg
const value = "LB";
// the return value
/*
{
    c: {
        d: {
            e: {
                weight: '120',
                unit: 'LB'
            },
            name: '_name_'
        }
    }
}
*/

function key(a, keyPath, value) {
  const keys = keyPath.split(".");
  let currentObj = a;
  for (let i = 0; i < keys.length - 1; i++) {
    currentObj = currentObj[keys[i]];
  }
  currentObj[keys[keys.length - 1]] = value;
  return a;
}

key(a, keyPath, value);
