import { expect } from 'chai'
import { buildTransactionOffline } from './tx-builder'
import moment from 'moment'

describe('eos account', () => {
  it('should create offline signed newaccount transaction', async () => {
    const res = await buildTransactionOffline(
      'myaccount',
      '5JLiZAmXhWWhTAab3YEXRSsJm4mybgFmE4DHb6Eqf9KZk9UbBci',
      '8be32650b763690b95b7d7e32d7637757a0a7392ad04f1c393872e525a2ce82b',
      1055,
      4035814219,
      moment('2019-12-31'),
    )
    expect(res.signatures).to.deep.eq(['SIG_K1_JuvQcG7e97RJtdi2j9VL1pJBpt2cw92SMTgnPgFEswM3E6nf3BTPRUx9ZkCvySBeAtejmVfyA99EzeGZBfPMT1D8zZ6FE4'], JSON.stringify(res))
    expect(res.serializedTransaction).to.eq('88960a5e1f044ba38df000000000010000000000ea305500b0cafe4873bd3e010000c85353848c9700000000a8ed3232140000c85353848c970000c85353848c970020000000', JSON.stringify(res))
  })
})
