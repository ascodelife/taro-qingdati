export function promisify<T = any>(requestFn, options) {
  return new Promise<T>((resolve, reject) =>
    requestFn({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
      ...options,
    })
  );
}
