module.exports = {
  DEBUG: false,
  OSSEUS_LOGGER_LOG_LEVEL: 'debug',
  OSSEUS_LOGGER_NO_CONSOLE_OVERRIDE: true,
  OSSEUS_SERVER_DEPENDENCIES: ['logger', 'mongo'],
  OSSEUS_SERVER_PORT: '8080',
  OSSEUS_SERVER_MORGAN_FORMAT: ':date[iso] method=":method", url=":url", statusCode=":status", route=":route", host=":host", client-ip=":client-ip", user-agent=":user-agent", httpVersion=":http-version", responseTime=":response-time"',
  OSSEUS_SERVER_ADD_HEALTHCHECK: true,
  OSSEUS_SERVER_ADD_IS_RUNNING: true,
  OSSEUS_ROUTER_DEPENDENCIES: ['logger', 'server'],
  OSSEUS_ROUTER_ROUTES_PATH: '/app/routes',
  OSSEUS_ROUTER_CONTROLLERS_PATH: '/app/controllers',
  OSSEUS_ROUTER_POLICY_PATH: '/app/middlewares',
  OSSEUS_ROUTER_URL_PREFIX: '/api',
  OSSEUS_ROUTER_JWT_SECRET: 'kfeeT6AO3NWHh44uaNuJ8lTZ09pdiY1GW69PR61tBM',
  OSSEUS_MONGO_DEPENDENCIES: ['logger'],
  OSSEUS_MONGO_URI: 'mongodb://localhost/inventory-manager',
  WEB3_PROVIDER: 'https://ropsten.infura.io',
  SECRET: 'e4365c30-ec9f-459a-8a8e-55d3818c6134kNJYzFQ1jB97WXAn',
  BLOCKS_TO_CONFIRM_BCTX: 20,
  ABI: {
    CLN: JSON.stringify(require('./abi/ColuLocalNetwork')),
    CommunityCurrency: JSON.stringify(require('./abi/ColuLocalCurrency')),
    MarketMaker: JSON.stringify(require('./abi/EllipseMarketMaker'))
  }
}
