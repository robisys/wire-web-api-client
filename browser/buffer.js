module.exports = function bufferToString(buffer) {
  var utf8Decoder = new TextDecoder('utf-8');
  return utf8Decoder.decode(new Uint8Array(buffer));
}
