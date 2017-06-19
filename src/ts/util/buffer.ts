export const bufferToString = (buffer: ArrayBuffer) => {
  return Buffer.from(buffer).toString('utf8');
}
