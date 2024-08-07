import * as crypto from 'crypto';

export function encrypt(text: string, secretKey: string): string {
  const cipher = crypto.createCipheriv(
    this.algorithm,
    Buffer.from(secretKey, 'hex'),
    Buffer.from(this.iv, 'hex'),
  );
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return encrypted.toString('hex');
}

export function decrypt(encryptedText: string): string {
  const encryptedTextBuffer = Buffer.from(encryptedText, 'hex');
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(
      'b41f7562df6b9a41d8dc1803d24cf4e3213d49cbf62317d1c674930dcaa02b0e',
      'hex',
    ),
    Buffer.from('ff2f0a87a95e57eaaab63b7772d94d2a', 'hex'),
  );
  const decrypted = Buffer.concat([
    decipher.update(encryptedTextBuffer),
    decipher.final(),
  ]);
  return decrypted.toString();
}
