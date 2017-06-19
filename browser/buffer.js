export const bufferToString = (buffer) => {
  const utf8Decoder = new TextDecoder('utf-8');
  return utf8Decoder.decode(new Uint8Array(buffer));
}
