function bubleSort(arr, comparator) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (comparator(arr[j], arr[j + 1])) {
        const x = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = x
      }
    }
  }
}

const foo = [-2, 45, -9, 0, 10, 34]

bubleSort(foo, (x, y) => x > y)

// console.log(foo)
foo.forEach(e => console.log(e))