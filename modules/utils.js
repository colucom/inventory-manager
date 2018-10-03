const contract = require('truffle-contract')
const BigNumber = require('bignumber.js')

const getCurrencyFromToken = (token, community) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = {}
      if (token === this.osseus.config.cln_address) {
        this.osseus.logger.silly(`getCurrencyFromToken --> CLN: ${token}`)
        const provider = await this.osseus.lib.Community.getProvider(community)
        const CLN = contract({abi: this.osseus.config.cln_abi})
        CLN.setProvider(provider)
        result.contract = await CLN.at(token)
        result.web3 = CLN.web3
      } else {
        this.osseus.logger.silly(`getCurrencyFromToken --> CC: ${token}`)
        const communityWithContracts = await this.osseus.lib.Community.get(community.id, community)
        if (communityWithContracts.currencyContracts.cc.address !== token) {
          return reject(new Error(`Unrecognized token: ${token} for community: ${community.id}`))
        }
        result.contract = communityWithContracts.currencyContracts.cc
        result.web3 = communityWithContracts.currencyContracts.web3
      }
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

const getBlockchainBalance = (address, token, bignum) => {
  return new Promise(async (resolve, reject) => {
    try {
      let balance = 0
      const community = await this.osseus.db_models.community.getByWalletAddress(address)
      if (token === 'ETH') {
        balance = this.osseus.web3.eth.getBalance(address)
        balance = this.osseus.web3.toDecimal(balance)
        balance = bignum ? new BigNumber(balance) : balance
      } else {
        const currency = await getCurrencyFromToken(token, community)
        balance = await currency.contract.balanceOf(address)
        balance = bignum ? balance : balance.toNumber()
      }
      resolve(balance)
    } catch (err) {
      reject(err)
    }
  })
}

const validateBlockchainBalance = (address, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bcBalance = await getBlockchainBalance(address, token)
      const currency = await this.osseus.db_models.currency.getByCurrencyAddress(token)
      const bcBalanceInDB = await this.osseus.db_models.wallet.getBlockchainBalance(address, currency.id)

      if (typeof bcBalance === 'undefined') {
        return reject(new Error(`Could not get blockchain balance - address: ${address}, token: ${token}`))
      }
      if (typeof bcBalanceInDB === 'undefined') {
        return reject(new Error(`Could not get blockchain balance (DB) - address: ${address}, token: ${token}`))
      }
      const result = bcBalance === bcBalanceInDB
      this.osseus.logger.debug(`validateBlockchainBalance --> address: ${address}, token: ${token}, bcBalance: ${bcBalance}, bcBalanceInDB: ${bcBalanceInDB}, result: ${result}`)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

const validateAggregatedBalances = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const currency = token ? await this.osseus.db_models.currency.getByCurrencyAddress(token) : {}
      const aggregatedBalances = await this.osseus.db_models.wallet.aggregateBalancesPerCurrency(currency.id)
      const results = aggregatedBalances.map(balance => {
        balance.totalBlockchainAmount = balance.totalBlockchainAmount.toNumber()
        balance.totalOffchainAmount = balance.totalOffchainAmount.toNumber()
        balance.valid = balance.totalBlockchainAmount >= balance.totalOffchainAmount
        return balance
      })
      this.osseus.logger.debug(`validateAggregatedBalances --> token: ${token}, results: ${JSON.stringify(results)}`)
      resolve(results)
    } catch (err) {
      reject(err)
    }
  })
}

const updateBlockchainBalance = (address, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const latestBlock = await this.osseus.web3.eth.getBlock('latest')
      const balance = await getBlockchainBalance(address, token, true)
      const currency = await this.osseus.db_models.currency.getByCurrencyAddress(token)
      if (typeof balance === 'undefined') {
        return reject(new Error(`Could not get blockchain balance - address: ${address}, token: ${token}`))
      }
      const result = await this.osseus.db_models.wallet.updateBlockchainBalance(address, currency.id, latestBlock.number, balance)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

const getUnknownBlockchainTransactions = (filters, projection, limit, sort) => {
  return new Promise(async (resolve, reject) => {
    try {
      filters = filters || {}
      filters.known = false
      this.osseus.logger.debug(`filters: ${JSON.stringify(filters)}, projection: ${JSON.stringify(projection)}, limit: ${limit}, sort: ${JSON.stringify(sort)}`)
      const transactions = await this.osseus.db_models.bctx.get(filters, projection, limit, sort)
      this.osseus.logger.debug(`got ${transactions.length} unknown transactions`)
      // TODO here probably need to notify someone/somehow
      resolve(transactions)
    } catch (err) {
      reject(err)
    }
  })
}

const init = (osseus) => {
  this.osseus = osseus
  return new Promise((resolve, reject) => {
    osseus.utils = {
      getCurrencyFromToken: getCurrencyFromToken,
      getBlockchainBalance: getBlockchainBalance,
      validateBlockchainBalance: validateBlockchainBalance,
      validateAggregatedBalances: validateAggregatedBalances,
      updateBlockchainBalance: updateBlockchainBalance,
      getUnknownBlockchainTransactions: getUnknownBlockchainTransactions
    }
    osseus.logger.info(`Utils ready`)
    return resolve()
  })
}

module.exports = {
  init: init
}
