# @sulake-nft/eth-signer-kms

This is a fork from https://github.com/rumblefishdev/eth-signer-kms in order to work with ImmutableX and the new version of the Ethereum chains.

The fork also include an utility to get the EC public key from the KMSProvider.

Web3 provider that derives address and signs transactions using [AWS KMS](https://aws.amazon.com/kms/).

## Install

```
$ npm i @sulake-nft/eth-signer-kms
```

## Requirements

```
aws-sdk
```

In order to work properly AWS KMS managed key must be:

- asymmetric
- able to sign and verify
- ECC_SECG_P256K1 specified

## Usage

#### \* Before use, make sure that AWS SDK is properly configured! Find out how to do it [here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/configuring-the-jssdk.html).

KMSProvider can be used as a standalone Web3 provider and within Truffle config. It's based on [@truffle/hdwallet-provider](https://www.npmjs.com/package/@truffle/hdwallet-provider) so wallet non-related params (`providerOrUrl`, `shareNonce` and `poolingInterval` and `chainId`) remain the same. In addition, it uses [@ethereumjs/tx](https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/tx) under the hood which offers [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) support.

`keyId` can be obtained via `KMS` package of `aws-sdk` or directly via AWS console.
https://github.com/ethereumjs/ethereumjs-monorepo

### Parameters:

| Parameter         | Type            | Default | Required | Description                                                                                                                                                                                                                                                                          |
| ----------------- | --------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `keyId`           | `string`        | `null`  | [x]      | Key ID of AWS KMS managed private key                                                                                                                                                                                                                                                |
| `providerOrUrl`   | `string/object` | `null`  | [x]      | [Official doc](https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md#instantiation)                                                                                                                                                              |
| `chainSettings`   | `Common`        | `{}`    | [ ]      | Common object used to configure tx options. If chainId is not passed, it will be obtained automatically via `eth_chainId`. For details instructions please refer to [Common](https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/common) and [Tx]() official docs |
| `shareNonce`      | `boolean`       | `true`  | [ ]      | [Official doc](https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md#instantiation)                                                                                                                                                              |
| `pollingInterval` | `number`        | `4000`  | [ ]      | [Official doc](https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md#instantiation)                                                                                                                                                              |

## Examples

[Truffle usage example](https://github.com/Sulake-Corporation-Oy/eth-signer-kms/tree/master/examples/truffle)

[Nodejs + ethersjs usage example ](https://github.com/Sulake-Corporation-Oy/eth-signer-kms/tree/master/examples/ethers)

## Credits:

[@lucashenning](https://github.com/lucashenning/aws-kms-ethereum-signing)
[@truffle team](https://github.com/trufflesuite/truffle/tree/develop/packages/hdwallet-provider)
