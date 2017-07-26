import * as SparkMD5 from 'spark-md5';

export const bufferToString = (buffer: ArrayBuffer): string => {
  return new TextDecoder('utf-8').decode(new Uint8Array(buffer));
};

export const base64MD5FromBuffer = (buffer: ArrayBuffer) => {
  return window.btoa(SparkMD5.ArrayBuffer.hash(buffer, true));
};

export const concatToBuffer = (...items: any[]) => {
  return new Blob(items);
};
