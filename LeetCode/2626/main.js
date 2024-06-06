function arrayReduce(num, fn, init) {
    let val = init;
    for (let i = 0; i < num.length; i++) {
        val = fn(val, num[i]);
      }
      return val;
}