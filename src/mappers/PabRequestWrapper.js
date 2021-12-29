class PabRequestWrapper {
  vidBidInstanceCreationBody({ walletId }) {
    return  {
      "caID": "VidBidContract",
      "caWallet":{
        "getWalletId": walletId
      }
    }
  }

  lookupBody({ vidId }){
    return {
      "vidId": vidId,
    }
  }

  initBody({ vidId },platformPkh){
    return {
      "vidId":  vidId,
      "platformPkh": {
        "getPubKeyHash": platformPkh
      }
    }
  }
  mintBody({ vidId }){
    return {
      "vidId": vidId,
    }
  }
  openBody({ vidId, minPrice}) {
    return {
      "vidId":  vidId,
      "minPrice":  minPrice
    }
  }
  bidBody({ vidId, bidPrice }) {
    return {
      "vidId":  vidId,
      "bidPrice":  bidPrice
    }
  }
  paydayBody({ vidId, adaValue }) {
    return {
      "vidId":  vidId,
      "adaValue":  adaValue
    }
  }
  grabBody({ vidId }) {
    return {
      "vidId":  vidId
    }
  }
  destroyBody({ vidId }) {
    return {
      "vidId":  vidId
    }
  }


}

module.exports = new PabRequestWrapper();
