define({ "api": [  {    "type": "put",    "url": "/api/community/id/:id",    "title": "Edit",    "name": "EditCommunity",    "group": "Community",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>community id.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>community name.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "externalId",            "description": "<p>external id of the community on the requester system.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>community unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>community creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>community last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>community name.</p>"          },          {            "group": "Success 200",            "type": "Wallet[]",            "optional": false,            "field": "wallets",            "description": "<p>array of community wallet unique ids.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "defaultCurrency",            "description": "<p>default community currency id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the community (defined by who ever created it).</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "   HTTP/1.1 200 OK\n   {\n   \"id\": \"5bb9e8014350ec77ce164b2e\",\n   \"createdAt\": \"2018-10-07T11:03:29.194Z\",\n   \"updatedAt\": \"2018-10-07T11:03:29.194Z\",\n   \"name\": \"Community #1\",\n   \"wallets\": [\n       \"5bb9e8014350ec77ce164b2f\",\n       \"5bb9e8014350ec77ce164b31\",\n       \"5bb9e8014350ec77ce164b33\"\n   ],\n   \"defaultCurrency\": \"5bb9bff7e50dea460c5f8eac\"\n}",          "type": "json"        }      ]    },    "filename": "app/controllers/CommunityController.js",    "groupTitle": "Community",    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/api/community/id/:id",    "title": "Get by id",    "name": "GetCommunity",    "group": "Community",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>community id.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>community unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>community creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>community last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>community name.</p>"          },          {            "group": "Success 200",            "type": "Wallet[]",            "optional": false,            "field": "wallets",            "description": "<p>array of community wallet unique ids.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "defaultCurrency",            "description": "<p>default community currency id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the community (defined by who ever created it).</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "   HTTP/1.1 200 OK\n   {\n   \"id\": \"5bb9e8014350ec77ce164b2e\",\n   \"createdAt\": \"2018-10-07T11:03:29.194Z\",\n   \"updatedAt\": \"2018-10-07T11:03:29.194Z\",\n   \"name\": \"Community #1\",\n   \"wallets\": [\n       \"5bb9e8014350ec77ce164b2f\",\n       \"5bb9e8014350ec77ce164b31\",\n       \"5bb9e8014350ec77ce164b33\"\n   ],\n   \"defaultCurrency\": \"5bb9bff7e50dea460c5f8eac\"\n}",          "type": "json"        }      ]    },    "filename": "app/controllers/CommunityController.js",    "groupTitle": "Community",    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/api/community/",    "title": "Create",    "name": "PostCommunity",    "group": "Community",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>community name.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "defaultCurrency",            "description": "<p>default community currency id.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "externalId",            "description": "<p>external id of the community on the requester system.</p>"          },          {            "group": "Parameter",            "type": "Object[]",            "optional": true,            "field": "wallets",            "description": "<p>array of wallets for the community, if not defined a default of three wallets is created (&quot;manager&quot;, &quot;users&quot;, &quot;merchants&quot;).</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "wallet.type",            "description": "<p>type of the wallet (a &quot;manager&quot; wallet must exist in the array, other types are up to the requester).</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "wallet.exid",            "description": "<p>external id of the wallet on the requester system.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>community unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>community creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>community last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>community name.</p>"          },          {            "group": "Success 200",            "type": "Wallet[]",            "optional": false,            "field": "wallets",            "description": "<p>array of community wallets.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "wallet.id",            "description": "<p>wallet unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "wallet.createdAt",            "description": "<p>wallet creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "wallet.updatedAt",            "description": "<p>wallet last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "wallet.type",            "description": "<p>wallet type (one of the defaults - &quot;manager&quot;, &quot;users&quot;, &quot;merchants&quot; or custome defined).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "wallet.exid",            "description": "<p>wallet external id (defined by the creator).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "wallet.address",            "description": "<p>wallet account address on the blockchain.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "wallet.index",            "description": "<p>wallet index the wallet is managed at by the provider.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "defaultCurrency",            "description": "<p>default community currency id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the community (defined by who ever created it).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "mnemonic",            "description": "<p>generated mnemonic for the community</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "uuid",            "description": "<p>generated uuid for the community</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "   HTTP/1.1 200 OK\n   {\n   \"id\": \"5bb9e8014350ec77ce164b2e\",\n   \"createdAt\": \"2018-10-07T11:03:29.194Z\",\n   \"updatedAt\": \"2018-10-07T11:03:29.194Z\",\n   \"name\": \"Community #1\",\n   \"wallets\": [\n       {\n           \"id\": \"5bb9e8014350ec77ce164b2f\",\n           \"createdAt\": \"2018-10-07T11:03:29.216Z\",\n           \"updatedAt\": \"2018-10-07T11:03:29.216Z\",\n           \"type\": \"manager\",\n           \"address\": \"0xe48bd0616ede00b700470faaf7f84262cebbee05\",\n           \"index\": 0\n       },\n       {\n           \"id\": \"5bb9e8014350ec77ce164b31\",\n           \"createdAt\": \"2018-10-07T11:03:29.222Z\",\n           \"updatedAt\": \"2018-10-07T11:03:29.222Z\",\n           \"type\": \"users\",\n           \"address\": \"0x089cd4348742ba3445d2bb8243470feebbac6a40\",\n           \"index\": 1\n       },\n       {\n           \"id\": \"5bb9e8014350ec77ce164b33\",\n           \"createdAt\": \"2018-10-07T11:03:29.226Z\",\n           \"updatedAt\": \"2018-10-07T11:03:29.226Z\",\n           \"type\": \"merchants\",\n           \"address\": \"0x99d0a5d79cdc761525ed3cd7187f305df0559ccb\",\n           \"index\": 2\n       }\n   ],\n   \"defaultCurrency\": \"5bb9bff7e50dea460c5f8eac\",\n   \"mnemonic\": \"very fruit feel scissors innocent holiday asthma expect despair exchange apple blanket\",\n   \"uuid\": \"6e98343f-1c60-4d52-8f06-e68a7cdef023\"\n}",          "type": "json"        }      ]    },    "filename": "app/controllers/CommunityController.js",    "groupTitle": "Community",    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "put",    "url": "/api/currency/address/:address",    "title": "Edit by address",    "name": "EditCurrencyByAddress",    "group": "Currency",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "address",            "description": "<p>currency contract address.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (Mandatory if creating a CC).</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "creationTransactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "creationBlockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "creationBlockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "externalId",            "description": "<p>external id of the currency on the requester system.</p>"          }        ]      }    },    "filename": "app/controllers/CurrencyController.js",    "groupTitle": "Currency",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>currency creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>currency last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyType",            "description": "<p>type of currency - CLN or CC.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (only if currencyType is CC).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the currency (defined by who ever created it).</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "currencyBlockchainInfo",            "description": "<p>see below.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.blockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "currencyBlockchainInfo.blockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.transactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "HTTP/1.1 200 OK\n\"id\": \"5bb9d9ab565e2f63d5f0263c\",\n\"createdAt\": \"2018-10-07T10:02:19.305Z\",\n\"updatedAt\": \"2018-10-07T10:02:19.305Z\",\n\"currencyType\": \"CC\",\n\"currencyAddress\": \"0x245cf01fecaa32ab0566c318d1f28df91caf7865\",\n\"marketMakerAddress\": \"0xcb222bc0b05527772e0fc2173e00cde8b4a14879\",\n\"exid\": \"123abc456def\",\n\"currencyBlockchainInfo\": {\n   \"blockHash\": \"0x66fc96b1cbf1de29ba0eea72492048f7c823bb7701d290229a2934fff5d59df1\",\n   \"blockNumber\": 3280283,\n   \"transactionHash\": \"0x21f3a02b07def2acddef6ebc9b2fdc40e7f138d662c64cb004e55f1dfde06859\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "put",    "url": "/api/currency/id/:id",    "title": "Edit by id",    "name": "EditCurrencyById",    "group": "Currency",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency id.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (Mandatory if creating a CC).</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "creationTransactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "creationBlockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "creationBlockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "externalId",            "description": "<p>external id of the currency on the requester system.</p>"          }        ]      }    },    "filename": "app/controllers/CurrencyController.js",    "groupTitle": "Currency",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>currency creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>currency last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyType",            "description": "<p>type of currency - CLN or CC.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (only if currencyType is CC).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the currency (defined by who ever created it).</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "currencyBlockchainInfo",            "description": "<p>see below.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.blockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "currencyBlockchainInfo.blockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.transactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "HTTP/1.1 200 OK\n\"id\": \"5bb9d9ab565e2f63d5f0263c\",\n\"createdAt\": \"2018-10-07T10:02:19.305Z\",\n\"updatedAt\": \"2018-10-07T10:02:19.305Z\",\n\"currencyType\": \"CC\",\n\"currencyAddress\": \"0x245cf01fecaa32ab0566c318d1f28df91caf7865\",\n\"marketMakerAddress\": \"0xcb222bc0b05527772e0fc2173e00cde8b4a14879\",\n\"exid\": \"123abc456def\",\n\"currencyBlockchainInfo\": {\n   \"blockHash\": \"0x66fc96b1cbf1de29ba0eea72492048f7c823bb7701d290229a2934fff5d59df1\",\n   \"blockNumber\": 3280283,\n   \"transactionHash\": \"0x21f3a02b07def2acddef6ebc9b2fdc40e7f138d662c64cb004e55f1dfde06859\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/api/currency/address/:address",    "title": "Get by address",    "name": "GetCurrencyByAddress",    "group": "Currency",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "address",            "description": "<p>currency contract address.</p>"          }        ]      }    },    "filename": "app/controllers/CurrencyController.js",    "groupTitle": "Currency",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>currency creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>currency last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyType",            "description": "<p>type of currency - CLN or CC.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (only if currencyType is CC).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the currency (defined by who ever created it).</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "currencyBlockchainInfo",            "description": "<p>see below.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.blockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "currencyBlockchainInfo.blockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.transactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "HTTP/1.1 200 OK\n\"id\": \"5bb9d9ab565e2f63d5f0263c\",\n\"createdAt\": \"2018-10-07T10:02:19.305Z\",\n\"updatedAt\": \"2018-10-07T10:02:19.305Z\",\n\"currencyType\": \"CC\",\n\"currencyAddress\": \"0x245cf01fecaa32ab0566c318d1f28df91caf7865\",\n\"marketMakerAddress\": \"0xcb222bc0b05527772e0fc2173e00cde8b4a14879\",\n\"exid\": \"123abc456def\",\n\"currencyBlockchainInfo\": {\n   \"blockHash\": \"0x66fc96b1cbf1de29ba0eea72492048f7c823bb7701d290229a2934fff5d59df1\",\n   \"blockNumber\": 3280283,\n   \"transactionHash\": \"0x21f3a02b07def2acddef6ebc9b2fdc40e7f138d662c64cb004e55f1dfde06859\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/api/currency/id/:id",    "title": "Get by id",    "name": "GetCurrencyById",    "group": "Currency",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency id.</p>"          }        ]      }    },    "filename": "app/controllers/CurrencyController.js",    "groupTitle": "Currency",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>currency creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>currency last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyType",            "description": "<p>type of currency - CLN or CC.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (only if currencyType is CC).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the currency (defined by who ever created it).</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "currencyBlockchainInfo",            "description": "<p>see below.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.blockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "currencyBlockchainInfo.blockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.transactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "HTTP/1.1 200 OK\n\"id\": \"5bb9d9ab565e2f63d5f0263c\",\n\"createdAt\": \"2018-10-07T10:02:19.305Z\",\n\"updatedAt\": \"2018-10-07T10:02:19.305Z\",\n\"currencyType\": \"CC\",\n\"currencyAddress\": \"0x245cf01fecaa32ab0566c318d1f28df91caf7865\",\n\"marketMakerAddress\": \"0xcb222bc0b05527772e0fc2173e00cde8b4a14879\",\n\"exid\": \"123abc456def\",\n\"currencyBlockchainInfo\": {\n   \"blockHash\": \"0x66fc96b1cbf1de29ba0eea72492048f7c823bb7701d290229a2934fff5d59df1\",\n   \"blockNumber\": 3280283,\n   \"transactionHash\": \"0x21f3a02b07def2acddef6ebc9b2fdc40e7f138d662c64cb004e55f1dfde06859\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  },  {    "type": "post",    "url": "/api/currency/",    "title": "Create",    "name": "PostCurrency",    "group": "Currency",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Boolean",            "optional": true,            "field": "cln",            "description": "<p>indicator whether creating a CLN currency.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (Mandatory if creating a CC).</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "creationTransactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "creationBlockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "creationBlockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "externalId",            "description": "<p>external id of the currency on the requester system.</p>"          }        ]      }    },    "filename": "app/controllers/CurrencyController.js",    "groupTitle": "Currency",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>currency unique id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "createdAt",            "description": "<p>currency creation time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "updatedAt",            "description": "<p>currency last update time.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyType",            "description": "<p>type of currency - CLN or CC.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyAddress",            "description": "<p>currency contract address.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "marketMakerAddress",            "description": "<p>market maker contract address (only if currencyType is CC).</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "exid",            "description": "<p>external id of the currency (defined by who ever created it).</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "currencyBlockchainInfo",            "description": "<p>see below.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.blockHash",            "description": "<p>block hash of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "currencyBlockchainInfo.blockNumber",            "description": "<p>block number of currency contract creation.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "currencyBlockchainInfo.transactionHash",            "description": "<p>transaction hash of currency contract creation.</p>"          }        ]      },      "examples": [        {          "title": "Success Example",          "content": "HTTP/1.1 200 OK\n\"id\": \"5bb9d9ab565e2f63d5f0263c\",\n\"createdAt\": \"2018-10-07T10:02:19.305Z\",\n\"updatedAt\": \"2018-10-07T10:02:19.305Z\",\n\"currencyType\": \"CC\",\n\"currencyAddress\": \"0x245cf01fecaa32ab0566c318d1f28df91caf7865\",\n\"marketMakerAddress\": \"0xcb222bc0b05527772e0fc2173e00cde8b4a14879\",\n\"exid\": \"123abc456def\",\n\"currencyBlockchainInfo\": {\n   \"blockHash\": \"0x66fc96b1cbf1de29ba0eea72492048f7c823bb7701d290229a2934fff5d59df1\",\n   \"blockNumber\": 3280283,\n   \"transactionHash\": \"0x21f3a02b07def2acddef6ebc9b2fdc40e7f138d662c64cb004e55f1dfde06859\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error Example",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"The error description\"\n}",          "type": "json"        }      ]    }  }] });
