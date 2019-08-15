export interface PublicKey {
  toString: () => string
}

export interface PrivateKey {
  toString: () => string
  toPublic: () => PublicKey
}
