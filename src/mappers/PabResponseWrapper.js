class PabResponseWrapper {
  mapStatusBody(body){
    return {
      "contractState": body.cicCurrentState?.observableState?.vidbidState,
      ...body
    }
  }
  mapWalletCreationResponse(body){
    return {
      platformPkh: body.wiPubKeyHash.getPubKeyHash,
      platformWalletId: body.wiWallet.getWalletId
    }
  }

}

module.exports = new PabResponseWrapper();
