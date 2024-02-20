import { KMSClient, SignCommandInput } from '@aws-sdk/client-kms'
import Common, { CommonOpts } from '@ethereumjs/common'

export type SignParams = {
  keyId: SignCommandInput['KeyId']
  message: Buffer
  kmsInstance: KMSClient
}

export type GetPublicKeyParams = {
  keyId: SignCommandInput['KeyId']
  kmsInstance: KMSClient
}

export type GetEthAddressFromKMSparams = {
  keyId: SignCommandInput['KeyId']
  kmsInstance: KMSClient
}

export type CreateSignatureParams = SignParams & {
  address: string
  txOpts?: Common
}

export type ChainSettings = Omit<CommonOpts, 'chain'> & {
  chain?: CommonOpts['chain']
}

export type KMSProviderConstructor = {
  keyId: string
  providerOrUrl: string
  shareNonce?: boolean
  pollingInterval?: number
  chainSettings?: ChainSettings
}
