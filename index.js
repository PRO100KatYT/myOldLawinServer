const Express = require("express");
const express = Express();
const fs = require("fs");
const bodyparser = require("body-parser");
const worldstw = require("./responses/worldstw.json");
const friendslist = require("./responses/friendslist.json");
const friendslist2 = require("./responses/friendslist2.json");
const Keychain = require("./responses/keychain.json");
const contentpages = require("./responses/contentpages.json");
express.use(bodyparser.json());
express.use(bodyparser.urlencoded({extended:true}));
express.use(Express.static('public'));

const port = process.env.PORT || 5595;
express.listen(port, console.log("Started listening on port", port));

express.get("/", async (req, res) => {
	res.sendFile('index.html');
})

express.get("/fortnite/api/storefront/v2/catalog", async (req, res) => {
	res.json(
{
    "refreshIntervalHrs": 1,
    "dailyPurchaseHrs": 24,
    "expiration": "2021-06-21T17:00:00.000Z",
    "storefronts": [
        {
            "name": "CardPackStorePreroll",
            "catalogEntries": [
                {
                    "offerId": "4D64CBE3618D41FBB5CAD0E472F4610A",
                    "devName": "Always.UpgradePack.01",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:currency_xrayllama",
                            "regularPrice": 50,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 50,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 50
                        },
                        {
                            "currencyType": "MtxCurrency",
                            "currencySubType": "",
                            "regularPrice": 50,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 50,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 50
                        }
                    ],
                    "categories": [],
                    "dailyLimit": 50,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "RequireFulfillment",
                            "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [
                        {
                            "key": "SharedDisplayPriority",
                            "value": "1"
                        },
                        {
                            "key": "bUseUpgradeDisplay",
                            "value": "True"
                        },
                        {
                            "key": "ProfileId",
                            "value": "campaign"
                        },
                        {
                            "key": "Preroll",
                            "value": "True"
                        },
                        {
                            "key": "MaxConcurrentPurchases",
                            "value": "1"
                        },
                        {
                            "key": "LinkedPrerollOffer",
                            "value": "OfferId:D2E08EFA731D437B85B7340EB51A5E1D"
                        }
                    ],
                    "catalogGroup": "Upgrade",
                    "catalogGroupPriority": 1,
                    "sortPriority": 0,
                    "title": "Upgrade Llama",
                    "shortDescription": "",
                    "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_bronze",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "offerId": "B9B0CE758A5049F898773C1A47A69ED4",
                    "devName": "Always.UpgradePack.03",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:currency_xrayllama",
                            "regularPrice": 50,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleType": "Strikethrough",
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        },
                        {
                            "currencyType": "MtxCurrency",
                            "currencySubType": "",
                            "regularPrice": 50,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleType": "Strikethrough",
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": 1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [
                        {
                            "key": "ProfileId",
                            "value": "campaign"
                        },
                        {
                            "key": "Preroll",
                            "value": "True"
                        },
                        {
                            "key": "MaxConcurrentPurchases",
                            "value": "1"
                        }
                    ],
                    "catalogGroup": "Upgrade",
                    "catalogGroupPriority": 999,
                    "sortPriority": 0,
                    "title": "Upgrade Llama",
                    "shortDescription": "",
                    "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_bronze",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "offerId": "D2E08EFA731D437B85B7340EB51A5E1D",
                    "devName": "Always.UpgradePack.02",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:voucher_cardpack_bronze",
                            "regularPrice": 1,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 1,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "RequireFulfillment",
                            "requiredId": "63BE689248CAF1251C84B4B3574F90EF",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [
                        {
                            "key": "SharedDisplayPriority",
                            "value": "2"
                        },
                        {
                            "key": "bUseUpgradeDisplay",
                            "value": "True"
                        },
                        {
                            "key": "ProfileId",
                            "value": "campaign"
                        },
                        {
                            "key": "Preroll",
                            "value": "True"
                        },
                        {
                            "key": "MaxConcurrentPurchases",
                            "value": "1"
                        },
                        {
                            "key": "LinkedPrerollOffer",
                            "value": "OfferId:4D64CBE3618D41FBB5CAD0E472F4610A"
                        }
                    ],
                    "catalogGroup": "Upgrade",
                    "catalogGroupPriority": 2,
                    "sortPriority": 0,
                    "title": "Upgrade Llama",
                    "shortDescription": "",
                    "description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_bronze",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "devName": "[VIRTUAL]1 x Super Melee Llama for 1000 GameItem : AccountResource:currency_xrayllama1000 MtxCurrency",
                    "offerId": "5B90AF29591344E8B74C34A134318FC5",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:currency_xrayllama",
                            "regularPrice": 1000,
                            "dynamicRegularPrice": 1000,
                            "finalPrice": 1000,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1000
                        },
                        {
                            "currencyType": "MtxCurrency",
                            "currencySubType": "",
                            "regularPrice": 1000,
                            "dynamicRegularPrice": 1000,
                            "finalPrice": 1000,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1000
                        }
                    ],
                    "meta": {
                        "MaxConcurrentPurchases": "1",
                        "Preroll": "True",
                        "ProfileId": "campaign",
                        "EventLimit": "2",
                        "PurchaseLimitingEventId": "00doaskr45l28gvgs2ljbpv6fp_R20191021[0]87"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "MaxConcurrentPurchases",
                            "value": "1"
                        },
                        {
                            "key": "Preroll",
                            "value": "True"
                        },
                        {
                            "key": "ProfileId",
                            "value": "campaign"
                        },
                        {
                            "key": "EventLimit",
                            "value": "2"
                        },
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "00doaskr45l28gvgs2ljbpv6fp_R20191021[0]87"
                        }
                    ],
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Rare_Melee.CardPack_Rare_Melee",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_rare_melee",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroup": "Shared",
                    "catalogGroupPriority": 3,
                    "fulfillmentClass": "com.epicgames.fortnite.core.game.fulfillments.PrerollFulfillment"
                }
            ]
        },
        {
            "name": "CardPackStoreGameplay",
            "catalogEntries": [
                {
                    "offerId": "5366E22A41C8428682737CF99513DC5F",
                    "devName": "Always.Gameplay.JackpotVoucher.01",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:voucher_cardpack_jackpot",
                            "regularPrice": 1,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 1,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [],
                    "metaInfo": [
                        {
                            "key": "bUseSharedDisplay",
                            "value": "True"
                        },
                        {
                            "key": "SharedDisplayPriority",
                            "value": "100"
                        },
                        {
                            "key": "Preroll",
                            "value": "False"
                        }
                    ],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 0,
                    "title": "Legendary Troll Stash Llama",
                    "shortDescription": "",
                    "description": "An entire suite of goodies, direct from your local troll's stash! Contains at least 8 definitely-not-stolen items.",
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Jackpot.CardPack_Jackpot",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_jackpot",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "offerId": "30A676BCF19B4D179F11D59079C69B6D",
                    "devName": "Always.Gameplay.DailyLoginPack.01",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:voucher_custom_firecracker_r",
                            "regularPrice": 1,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 1,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [],
                    "metaInfo": [
                        {
                            "key": "bUseSharedDisplay",
                            "value": "True"
                        },
                        {
                            "key": "SharedDisplayPriority",
                            "value": "101"
                        },
                        {
                            "key": "Preroll",
                            "value": "False"
                        }
                    ],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 0,
                    "title": "Rare Firecracker Pistol",
                    "shortDescription": "",
                    "description": "One random Firecracker schematic.",
                    "displayAssetPath": "/Game/Items/CardPacks/SpecificRewards/CardPack_Custom_Firecracker_R.CardPack_Custom_Firecracker_R",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_custom_firecracker_r",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "offerId": "1F6B613D4B7BAD47D8A93CAEED2C4996",
                    "devName": "Mini Llama Manual Tutorial - high SharedDisplayPriority",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:voucher_basicpack",
                            "regularPrice": 1,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 1,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1
                        }
                    ],
                    "categories": [],
                    "dailyLimit": 1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [
                        {
                            "key": "bUseSharedDisplay",
                            "value": "true"
                        },
                        {
                            "key": "SharedDisplayPriority",
                            "value": "999999"
                        }
                    ],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 0,
                    "title": "Mini Reward Llama",
                    "shortDescription": "",
                    "description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains at least 3 items.\r\n",
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_basic",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "offerId": "73216346454B1B2892DDA381C75E1BCB",
                    "devName": "Mini Llama Manual Default - Low SharedDisplayPriority",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:voucher_basicpack",
                            "regularPrice": 1,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 1,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "RequireFulfillment",
                            "requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [
                        {
                            "key": "bUseSharedDisplay",
                            "value": "true"
                        },
                        {
                            "key": "SharedDisplayPriority",
                            "value": "1"
                        }
                    ],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 0,
                    "title": "Mini Reward Llama",
                    "shortDescription": "",
                    "description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains at least 3 items.\r\n",
                    "displayAssetPath": "/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_basic",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "offerId": "4CD94C62287D4A94BC87F436E3CA4463",
                    "devName": "Event.Event.Persistent.Rad.01",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_roadtrip",
                            "regularPrice": 500,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 500,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 500
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "requirements": [],
                    "metaInfo": [
                        {
                            "key": "Preroll",
                            "value": "False"
                        }
                    ],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 0,
                    "title": "Rad Llama",
                    "shortDescription": "",
                    "description": "Guarantees at least one Epic or better limited time Boombox weapon or Rad hero!",
                    "displayAssetPath": "/Game/Items/CardPacks/Events/Release/CardPack_Event_Persistent_Rad.CardPack_Event_Persistent_Rad",
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_event_persistent_rad",
                            "quantity": 1
                        }
                    ]
                }
            ]
        },
        {
            "name": "STWRotationalEventStorefront",
            "catalogEntries": [
                {
                    "devName": "[VIRTUAL]1 x did_defenderpistol_basic_sr_t01 for 1680 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/15aa234a3bb9260e738bd2bf95e711dcfe66ab7cf92ba75356b1bcee9ce9d1c6",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1680,
                            "dynamicRegularPrice": 1680,
                            "finalPrice": 1680,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1680
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "Defender:did_defenderpistol_basic_sr_t01",
                            "quantity": 1,
                            "attributes": {
                                "Alteration": {
                                    "LootTierGroup": "AlterationTG.Defender.Pistol.SR",
                                    "Tier": 0
                                }
                            }
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Copper Two Step for 600 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/6116c0ba6f4ec41390eebd78d7453fddbb51afa00bedd15fad5ccae50a374e11",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 600,
                            "dynamicRegularPrice": 600,
                            "finalPrice": 600,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 600
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "Schematic:sid_shotgun_ratrod_vr_ore_t01",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 20,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Pure Drop of Rain for 50 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/e7b0736943d5fb68d7ec927a082941c81deedba9bc78c6795278de67fa8a2da0",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 40,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 50,
                            "dynamicRegularPrice": 50,
                            "finalPrice": 50,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 50
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_c_t01",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Pure Drop of Rain for 50 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/83ac0269acedb2d5634a031f55b643b852272903e74d9fa1bb49256a0c06abef",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 8,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 50,
                            "dynamicRegularPrice": 50,
                            "finalPrice": 50,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 50
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_c_t01",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]200 x RE-PERK! for 100 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/9b91076467e61cf01a3c16e39a18331d2e23d754cdafc860aac0fdd7155615ae",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 10,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 100,
                            "dynamicRegularPrice": 100,
                            "finalPrice": 100,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 100
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_alteration_generic",
                            "quantity": 200
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Lightning in a Bottle for 100 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/aacc97a394a9feaa106ad275caad4e4f22b987d8ceb42d64991024bf6d8a5404",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 4,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 100,
                            "dynamicRegularPrice": 100,
                            "finalPrice": 100,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 100
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_c_t02",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]90 x Rare PERK-UP! for 200 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/4f1c82dc8fb66fef5a0046fb2163344069b65b6ba64e496939d2fc8e8f779157",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 5,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 200,
                            "dynamicRegularPrice": 200,
                            "finalPrice": 200,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 200
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_alteration_upgrade_r",
                            "quantity": 90
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Rare Flux for 30 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/d9fe40e917bf98babee1c239153990efe3e1a568dd0e985c663dbba228eef03f",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 20,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 30,
                            "dynamicRegularPrice": 30,
                            "finalPrice": 30,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 30
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_evolverarity_r",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Copper Masters Driver for 600 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/b1b61acc5985125b1a76a2ca4868d7f238453c1d9a585d538dc7093b7307402e",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 600,
                            "dynamicRegularPrice": 600,
                            "finalPrice": 600,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 600
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "Schematic:sid_blunt_club_light_vr_ore_t01",
                            "quantity": 1,
                            "attributes": {
                                "Alteration": {
                                    "LootTierGroup": "AlterationTG.Melee.VR",
                                    "Tier": 0
                                }
                            }
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x workerbasic_vr_t01 for 250 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/fd2b5edc1839496be18a0cb1ef1bc74c07f391b4448de53d07bb63f695f1763b",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 2,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 250,
                            "dynamicRegularPrice": 250,
                            "finalPrice": 250,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 250
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "Worker:workerbasic_vr_t01",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Epic Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/bfd337ddb7380a663929ae0ad03f6cdbff5b562d1639c8c813cb8316b37f83bb",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 10,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 75,
                            "dynamicRegularPrice": 75,
                            "finalPrice": 75,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 75
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_evolverarity_vr",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]60 x Uncommon PERK-UP! for 125 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/d8c8f59ca26294a0192676567f75ee6c3631f96eea201fd14f8cac0c47acfb5c",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 5,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 125,
                            "dynamicRegularPrice": 125,
                            "finalPrice": 125,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 125
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_alteration_upgrade_uc",
                            "quantity": 60
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Storm Shard for 200 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/cb671813542b9346ea26bfb3a53624fee2b73c4d2280c21b37c0bb0759c67574",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 200,
                            "dynamicRegularPrice": 200,
                            "finalPrice": 200,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 200
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_c_t04",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]5 x Legendary Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/9af32d7a9a16f864eae99d17542ec08763d118f3ce9c72ad05d5fc5f44586dc1",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 10,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 75,
                            "dynamicRegularPrice": 75,
                            "finalPrice": 75,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 75
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_evolverarity_sr",
                            "quantity": 5
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Support Specialist Hawk for 1000 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/93e3f574fdf1dd90f3e780af15bd234ab96004cf94ec17191492f6679d9abb6e",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1000,
                            "dynamicRegularPrice": 1000,
                            "finalPrice": 1000,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1000
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "Hero:hid_commando_007_vr_t01",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]10 x Eye of the Storm for 150 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/8ab132beb750c221f51a79c6b29d10abf9cf7e6a82868226d98abea8add01ac5",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": 2,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 150,
                            "dynamicRegularPrice": 150,
                            "finalPrice": 150,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 150
                        }
                    ],
                    "meta": {},
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "itemGrants": [
                        {
                            "templateId": "AccountResource:reagent_c_t03",
                            "quantity": 10
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 0,
                    "catalogGroupPriority": 0
                }
            ]
        },
        {
            "name": "STWSpecialEventStorefront",
            "catalogEntries": [
                {
                    "devName": "[VIRTUAL]1 x Copper Walloper for 1680 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/85b7ed13625f1d6642d8ec3410d2a1c6751b75bd886b56e0db5ce93ebb8be3bf",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1680,
                            "dynamicRegularPrice": 1680,
                            "finalPrice": 1680,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1680
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "1ppf77sv91utv9racavk6fivmk[0]1",
                        "EventLimit": "1"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": true,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "1ppf77sv91utv9racavk6fivmk[0]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "1"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "AthenaCharacter:CID_527_Athena_Commando_F_StreetFashionRed",
                            "quantity": 1
                        },
                        {
                            "templateId": "AthenaCharacter:CID_527_Athena_Commando_F_StreetFashionRed",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 20,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Copper Walloper for 1680 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/85b7ed13625f1d6642d8ec3410d2a1c6751b75bd886bf",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1680,
                            "dynamicRegularPrice": 1680,
                            "finalPrice": 1680,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1680
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "1ppf77sv91utv9racavk6fivmk[0]1",
                        "EventLimit": "1"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": true,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "1ppf77sv91utv9racavk6fivmk[0]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "1"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "AthenaCharacter:CID_286_Athena_Commando_F_NeonCat",
                            "quantity": 1
                        },
                        {
                            "templateId": "AthenaCharacter:CID_286_Athena_Commando_F_NeonCat",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 20,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x workerbasic_sr_t01 for 700 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/222374fc7ea9f6ef8eb0b3c20f3a5d7f64f612e9f3435c74e3d51d785739bf9f",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 700,
                            "dynamicRegularPrice": 700,
                            "finalPrice": 700,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 700
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "69coo7hcgmsfptsm7j5pd2r92p[0]1",
                        "EventLimit": "1"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "69coo7hcgmsfptsm7j5pd2r92p[0]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "1"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "Worker:workerbasic_sr_t01",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 12,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Copper Razorblade    for 1680 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/fb8b96167461673432cd25f473e6c4a2644d4afacd1fcad76e3c4933aa07d07c",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1680,
                            "dynamicRegularPrice": 1680,
                            "finalPrice": 1680,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1680
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "69coo7hcgmsfptsm7j5pd2r92p[0]1",
                        "EventLimit": "1"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "69coo7hcgmsfptsm7j5pd2r92p[0]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "1"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "Schematic:sid_assault_burst_sr_ore_t01",
                            "quantity": 1,
                            "attributes": {
                                "Alteration": {
                                    "LootTierGroup": "AlterationTG.Ranged.SR",
                                    "Tier": 0
                                }
                            }
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 15,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Copper Vacuum Tube Revolver for 1680 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/b096b2ebdd907e45c56daa93d3bdaf84abce84cb40600b3e4197aa6369431efd",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1680,
                            "dynamicRegularPrice": 1680,
                            "finalPrice": 1680,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1680
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "69coo7hcgmsfptsm7j5pd2r92p[0]1",
                        "EventLimit": "1"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "69coo7hcgmsfptsm7j5pd2r92p[0]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "1"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "Schematic:sid_pistol_vacuumtube_revolver_sr_ore_t01",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 16,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Rare Schematic for 400 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/570ff3bed6fc8a1f7006610dbb6ce9e4bcd244a32caa435a60392460da356c88",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 400,
                            "dynamicRegularPrice": 400,
                            "finalPrice": 400,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 400
                        }
                    ],
                    "meta": {
                        "open_cardpacks": "true"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "open_cardpacks",
                            "value": "true"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_schematic_r",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 10,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Epic Schematic for 1000 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/6633ab8087f2a2e80bdf7a90d06351e7a03b82790cc2e286f4b6851020532ed4",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 1000,
                            "dynamicRegularPrice": 1000,
                            "finalPrice": 1000,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 1000
                        }
                    ],
                    "meta": {
                        "open_cardpacks": "true"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "open_cardpacks",
                            "value": "true"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "CardPack:cardpack_schematic_vr",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 9,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Armory Slot for 25 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/83c2c7dd1240222394ed9c7415fbce183d8504842eebc30039ce96c929d365e6",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 25,
                            "dynamicRegularPrice": 25,
                            "finalPrice": 25,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 25
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "69coo7hcgmsfptsm7j5pd2r92p[1]1",
                        "EventLimit": "100"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "69coo7hcgmsfptsm7j5pd2r92p[1]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "100"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "Token:accountinventorybonus",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 19,
                    "catalogGroupPriority": 0
                },
                {
                    "devName": "[VIRTUAL]1 x Recon Scout Eagle Eye for 2800 GameItem : AccountResource:eventcurrency_scaling",
                    "offerId": "v2:/449cfff41ca9817f18454193b1f1082b4381007becb51dcf4f6bd6eb6649e0b0",
                    "fulfillmentIds": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "categories": [],
                    "prices": [
                        {
                            "currencyType": "GameItem",
                            "currencySubType": "AccountResource:eventcurrency_scaling",
                            "regularPrice": 2800,
                            "dynamicRegularPrice": 2800,
                            "finalPrice": 2800,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 2800
                        }
                    ],
                    "meta": {
                        "PurchaseLimitingEventId": "69coo7hcgmsfptsm7j5pd2r92p[0]1",
                        "EventLimit": "1"
                    },
                    "matchFilter": "",
                    "filterWeight": 0.0,
                    "appStoreId": [],
                    "requirements": [],
                    "offerType": "StaticPrice",
                    "refundable": false,
                    "metaInfo": [
                        {
                            "key": "PurchaseLimitingEventId",
                            "value": "69coo7hcgmsfptsm7j5pd2r92p[0]1"
                        },
                        {
                            "key": "EventLimit",
                            "value": "1"
                        }
                    ],
                    "itemGrants": [
                        {
                            "templateId": "Hero:hid_outlander_008_sr_t01",
                            "quantity": 1
                        }
                    ],
                    "additionalGrants": [],
                    "sortPriority": 14,
                    "catalogGroupPriority": 0
                }
            ]
        },
        {
            "name": "FoundersPack",
            "catalogEntries": [
                {
                    "offerId": "295CC29541839D33661FA691B3DE95FB",
                    "devName": "FoundersUpgrade_1_3",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "f5c0e8ab6c9a4530999041e89e9b6934",
                        "",
                        "",
                        "",
                        "",
                        "FNDR130000000000",
                        "f3fa9d49-0efa-4189-9ed5-a72b8af8caa4",
                        "",
                        "",
                        "BQQGTHMP8KZV",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_3",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_2",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 4,
                    "title": "Super Deluxe",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_3.DA_FoundersPack_1_3",
                    "itemGrants": []
                },
                {
                    "offerId": "EBF511584B4405C031087C99148BB2D8",
                    "devName": "FoundersUpgrade_1_2",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "9aa9f44cd8c24652953a1b204755b193",
                        "",
                        "",
                        "",
                        "",
                        "FNDR120000000000",
                        "c4f3c99f-b7e0-4e21-ab01-131d4b20d720",
                        "",
                        "",
                        "C19S7QTMVWTQ",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_2",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Deluxe Upgrade",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_2.DA_FoundersPack_1_2",
                    "itemGrants": []
                },
                {
                    "offerId": "97A4A52C4762E8C87F85F391D3A7AB7A",
                    "devName": "StW_ASL_ST6",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "3c552303884b4d69b9bcd4c410ee0130",
                        "",
                        "",
                        "",
                        "",
                        "STWASL0000000000",
                        "57354e39-5244-3031-c05a-3248345a3c00",
                        "",
                        "",
                        "9N5WDR1Z2H4Z",
                        "STWASL0000000000"
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "14E1838F4DD7AB817DA5DD87C7381B73",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Lok-Bot",
                    "shortDescription": "",
                    "description": "Imagine, if you will, an oven bot and the places he will go.",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_AssembleL_Bundle.DA_Featured_AssembleL_Bundle",
                    "itemGrants": []
                },
                {
                    "offerId": "48DC9478462A5DCD3D93EBB81D4488AB",
                    "devName": "FoundersPack_1",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "e2f25dae43604a839dd6f2c21b675d5e",
                        "",
                        "",
                        "",
                        "",
                        "FNDR010000000001",
                        "b0e02cfe-8d1e-4aa0-a02b-e64fa7263617",
                        "",
                        "",
                        "BXWNX8ST04JS",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Standard Founder's Pack",
                    "shortDescription": "",
                    "description": "Purchase the Standard Founder's Pack",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1.DA_FoundersPack_1",
                    "itemGrants": []
                },
                {
                    "offerId": "F46E931F4851F1CFB0E50C805957205A",
                    "devName": "FoundersUpgrade_2_4",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "d2da86026c71429a9cf5e76dfd89a1d3",
                        "",
                        "",
                        "",
                        "",
                        "FNDR240000000000",
                        "6ba13aad-2515-4e51-b8d8-72540863a8bc",
                        "",
                        "",
                        "C4DP169TMQK7",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_4",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_2",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_3",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 4,
                    "title": "Limited Upgrade",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_4.DA_FoundersPack_2_4",
                    "itemGrants": []
                },
                {
                    "offerId": "AD38CA234B2FA67C83BFD888EA1D2E8D",
                    "devName": "FoundersUpgrade_4_5",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "e852b1940299435884365cec7dc3a608",
                        "",
                        "",
                        "",
                        "",
                        "FNDR450000000000",
                        "b4e5f231-418f-4937-b3e5-f0e014d42ffe",
                        "",
                        "",
                        "BZ0D9FZH5WH3",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_5",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_4",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Ultimate Upgrade",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4_5.DA_FoundersPack_4_5",
                    "itemGrants": []
                },
                {
                    "offerId": "141F04624351F025DC67E1929B282B50",
                    "devName": "FoundersUpgrade_2_3",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "35759d71512b47e5b2825669f1d9166a",
                        "",
                        "",
                        "",
                        "",
                        "FNDR230000000000",
                        "46c22707-e058-45dd-8d83-fc45b82d65cd",
                        "",
                        "",
                        "C50KV04716HT",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_3",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_2",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Super Deluxe Upgrade",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_3.DA_FoundersPack_2_3",
                    "itemGrants": []
                },
                {
                    "offerId": "E86A50A14891B241DBA126BE8FCD0C42",
                    "devName": "FoundersPack_3",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "c8319a037f9840e8b7549de480efb9c7",
                        "",
                        "",
                        "",
                        "",
                        "FNDR030000000001",
                        "8b2e873d-4dba-4367-9bb9-0c2b0951918a",
                        "",
                        "",
                        "BWWG58N9HFKF",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 3,
                    "title": "Super Deluxe Founder's Pack",
                    "shortDescription": "",
                    "description": "Purchase the Super Deluxe Founder's Pack",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3.DA_FoundersPack_3",
                    "itemGrants": []
                },
                {
                    "offerId": "906D1C4D4F79D2ECE314E8AA70CDAFE4",
                    "devName": "FoundersUpgrade_3_4",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "f05c43f7c1d24f5fbb1a6fa5a5a60edb",
                        "",
                        "",
                        "",
                        "",
                        "FNDR340000000000",
                        "489759a7-8a97-49bf-90e1-e8a338fdfaf5",
                        "",
                        "",
                        "BS949M2S2S75",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_4",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_3",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Limited Upgrade",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3_4.DA_FoundersPack_3_4",
                    "itemGrants": []
                },
                {
                    "offerId": "B8ACCCB94D87EC3B4979858FFC3A09E6",
                    "devName": "StW_SHK_ST3",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "eb7332137e56427ea8847ee46a0562ce",
                        "",
                        "",
                        "",
                        "",
                        "STWSHK0000000000",
                        "50355039-3236-3030-c030-44364b4ce700",
                        "",
                        "",
                        "9P5P6200D6KL",
                        "STWSHK0000000000"
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "2FDB26FD40468AC1FAF4718D2E6B8EED",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Powerhouse Pack",
                    "shortDescription": "",
                    "description": "Charge up and shock your enemies with the Powerhouse Pack",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_VindertechSoldierPack.DA_Featured_VindertechSoldierPack",
                    "itemGrants": []
                },
                {
                    "offerId": "2A26520F414EC95C944F80A596A284B0",
                    "devName": "FoundersUpgrade_1_4",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "57f0419c4e4a4ea4858b2f37a98d5315",
                        "",
                        "",
                        "",
                        "",
                        "FNDR140000000000",
                        "65691cca-42bb-4528-9065-3926c0057cac",
                        "",
                        "",
                        "C3K7QVDRT2XV",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_4",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "RequireItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_2",
                            "minQuantity": 1
                        },
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_3",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 3,
                    "title": "Limited Upgrade",
                    "shortDescription": "",
                    "description": "",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_4.DA_FoundersPack_1_4",
                    "itemGrants": []
                },
                {
                    "offerId": "8F9E54194FBF331A9CCC4BB6FDFB8FC2",
                    "devName": "FoundersPack_2",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "41134f4ff35a45a4923604cbb15e487d",
                        "",
                        "",
                        "",
                        "",
                        "FNDR020000000001",
                        "369267a1-3e63-4b6e-82be-286d741d7370",
                        "",
                        "",
                        "BRD01SWKX9WS",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 4,
                    "title": "Deluxe Founder's Pack",
                    "shortDescription": "",
                    "description": "Purchase the Deluxe Founder's Pack",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2.DA_FoundersPack_2",
                    "itemGrants": []
                },
                {
                    "offerId": "A847C3744EA4243E629A12AC4027FFA6",
                    "devName": "StW_MCH_ST4",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "992ba7f52f3b40d49a4411fbade69b33",
                        "",
                        "",
                        "",
                        "",
                        "STWMCH0000000000",
                        "47445039-3534-3057-c042-513343351200",
                        "",
                        "",
                        "9PDG45WBQ3C5",
                        "STWMCH0000000000"
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "EC0B6E6A4C7E05C3CC66C69DC4B24F57",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Machinist Mina",
                    "shortDescription": "",
                    "description": "Build enemies up to tear them down with the Machinist Mina Pack!",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MechaConstructorBundle.DA_Featured_MechaConstructorBundle",
                    "itemGrants": []
                },
                {
                    "offerId": "E2994D164ACA01D4EB9ED585EB1CE5BD",
                    "devName": "StW_MTL_ST1",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "ae230025ab0f4b578d605569746233e5",
                        "",
                        "",
                        "",
                        "",
                        "STWBEA0000000000",
                        "514e5039-5147-3046-c04e-4a3452385c00",
                        "",
                        "",
                        "9PNQGQFNJ4R8",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "67E05F60412ADCCBE49B50918CFEABDD",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Metal Team Leader Pack",
                    "shortDescription": "",
                    "description": "Cold steel, warm heart!",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_FuzzyBearTeddyBundle.DA_Featured_FuzzyBearTeddyBundle",
                    "itemGrants": []
                },
                {
                    "offerId": "102C71DF437A25006C2EEF8ABAB75485",
                    "devName": "StW_ASR_ST5",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "b587eca883944eda861a4542e1d4fb6a",
                        "",
                        "",
                        "",
                        "",
                        "STWASR0000000000",
                        "53335039-4a5a-3043-c032-385844423e00",
                        "",
                        "",
                        "9P3SZJC28XDB",
                        "STWASR0000000000"
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "569CCD6549EF24CBBC7B809EA4365FDF",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Robo-Ray",
                    "shortDescription": "",
                    "description": "Everything's fine, she has a plan, and she's gonna fix this!",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Assembler_Bundle.DA_Featured_Assembler_Bundle",
                    "itemGrants": []
                },
                {
                    "offerId": "BA4237DE44B7C83B55BEC8A8D9C2241C",
                    "devName": "StW_JNK_ST2",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "6d28ba7c952b412d82120efcdcc9c233",
                        "",
                        "",
                        "",
                        "",
                        "STWSAM0000000000",
                        "34514e39-445a-3056-c042-385a584a7600",
                        "",
                        "",
                        "9NQ4ZDVB8ZXJ",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnFulfillment",
                            "requiredId": "18CCCDF24D751CF4E7B834A08B6D9CE9",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 5,
                    "title": "Samurai Scrapper Pack",
                    "shortDescription": "",
                    "description": "One person's trash is another person's armor!",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_JunkSamuraiBundle.DA_Featured_JunkSamuraiBundle",
                    "itemGrants": []
                },
                {
                    "offerId": "17B3F0D54574684E0B9185A10910E324",
                    "devName": "FoundersPack_4",
                    "offerType": "StaticPrice",
                    "prices": [
                        {
                            "currencyType": "RealMoney",
                            "currencySubType": "",
                            "regularPrice": 0,
                            "dynamicRegularPrice": -1,
                            "finalPrice": 0,
                            "saleExpiration": "9999-12-31T23:59:59.999Z",
                            "basePrice": 0
                        }
                    ],
                    "categories": [],
                    "dailyLimit": -1,
                    "weeklyLimit": -1,
                    "monthlyLimit": -1,
                    "refundable": false,
                    "appStoreId": [
                        "",
                        "85125898f3914946a9443bcce4667660",
                        "",
                        "",
                        "",
                        "",
                        "FNDR040000000001",
                        "e3c292c9-9337-41e8-ba90-e96b85002f68",
                        "",
                        "",
                        "BTC5H6VZBHPF",
                        ""
                    ],
                    "requirements": [
                        {
                            "requirementType": "DenyOnItemOwnership",
                            "requiredId": "Token:founderspack_1",
                            "minQuantity": 1
                        }
                    ],
                    "metaInfo": [],
                    "catalogGroup": "",
                    "catalogGroupPriority": 0,
                    "sortPriority": 2,
                    "title": "Limited Founder's Pack",
                    "shortDescription": "",
                    "description": "Purchase the Limited Founder's Pack",
                    "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4.DA_FoundersPack_4",
                    "itemGrants": []
						}
					]
				}
			]
		}
	);
	res.status(200);
	res.end();
});

express.get("/purchase", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.post("/fortnite/api/feedback/Bug", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.get("/launcher/api/public/distributionpoints/", async (req, res) => {
	res.json(
		{
			"distributions": [
				"https://download.epicgames.com/",
				"https://download2.epicgames.com/",
				"https://download3.epicgames.com/",
				"https://download4.epicgames.com/",
				"https://epicgames-download1.akamaized.net/"
			]
		}
		);
		res.status(200);
		res.end();
})

express.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/*", async (req, res) => {
	res.setHeader("Content-Type", "text/plain");
	res.send(true);
	res.end();
})

express.post("/fortnite/api/game/v2/grant_access/*", async (req, res) => {
	res.json({});
	res.status(204);
	res.end();
})

express.post("/api/v1/user/setting", async (req, res) => {
	res.json([]);
	res.status(200);
	res.end();
})

express.get("/waitingroom/api/waitingroom", async (req, res) => {
	res.status(204);
	res.end();
})

express.get("/socialban/api/public/v1/*", async (req, res) => {
	res.json(
			{
				"bans": [],
				"warnings": []
			}
		);
	res.status(200);
	res.end();
})

express.get("/affiliate/api/public/affiliates/slug/:slug", async (req, res) => {
	if (req.params.slug.toLowerCase() == "lawin")
	{
		return res.status(200).json(
			{
				"id": "Lawin",
				"slug": "lawin",
				"displayName": "Lawin",
				"status": "ACTIVE",
				"verified": false
			});
	}
	res.status(404);
	res.json({});
})

express.get("/party/api/v1/Fortnite/user/*", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.post("/party/api/v1/Fortnite/user/*/pings/*", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/events/tournamentandhistory/*/EU/WindowsClient", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.get("/catalog/api/shared/bulk/offers", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/events/tournamentandhistory/*/EU/WindowsClient", async (req, res) => {
	res.json({});
	res.status(200);
	res.end();
})

express.get("/fortnite/api/matchmaking/session/findPlayer/*", async (req, res) => {
	res.json();
	res.status(200);
	res.end();
})

express.get("/fortnite/api/statsv2/account/*", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/enabled_features", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/api/v1/events/Fortnite/download/*", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/lightswitch/api/service/bulk/status", async (req, res) => {
	res.json(
			[
				{
				  "serviceInstanceId": "fortnite",
				  "status": "UP",
				  "message": "fortnite is up.",
				  "maintenanceUri": null,
				  "overrideCatalogIds": [
					"a7f138b2e51945ffbfdacc1af0541053"
				  ],
				  "allowedActions": [
					"PLAY",
					"DOWNLOAD"
				  ],
				  "banned": false,
				  "launcherInfoDTO": {
					"appName": "Fortnite",
					"catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
					"namespace": "fn"
				  }
				}
			]
		)
	res.status(200);
	res.end();
})

express.get("/account/api/public/account", async (req, res) => {
	res.json(
			[
			{
			  "id": req.query.accountId,
			  "displayName": req.query.accountId,
			  "externalAuths": {}
			},
			{
			  "id": "SubtoLawin_LOL123",
			  "displayName": "Subscribe to Lawin on YouTube!",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "SubtoLawin_LOL123",
				  "externalDisplayName": "YouTube-Lawin",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "SubtoLawin_LOL123",
				  "externalDisplayName": "YouTube-Lawin",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
			{
			  "id": "Followlawin_LOL123",
			  "displayName": "Follow @lawin_010 on twitter!",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "Followlawin_LOL123",
				  "externalDisplayName": "Twitter-lawin_010",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "Followlawin_LOL123",
				  "externalDisplayName": "Twitter-lawin_010",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
			{
			  "id": "NINJALOL_1238",
			  "displayName": "Ninja",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "NINJALOL_1238",
				  "externalDisplayName": "Ninja",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "NINJALOL_1238",
				  "externalDisplayName": "Ninja",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
			{
			  "id": "TFUELOL_1238",
			  "displayName": "Tfue",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "TFUELOL_1238",
				  "externalDisplayName": "Tfue",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "TFUELOL_1238",
				  "externalDisplayName": "Tfue",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
			{
			  "id": "ALIALOL_1238",
			  "displayName": "Ali-A",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "ALIALOL_1238",
				  "externalDisplayName": "Ali-A",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "ALIALOL_1238",
				  "externalDisplayName": "Ali-A",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
			{
			  "id": "DAKOTAZLOL_1238",
			  "displayName": "Dark",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "DAKOTAZLOL_1238",
				  "externalDisplayName": "Dark",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "DAKOTAZLOL_1238",
				  "externalDisplayName": "Dark",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
			{
			  "id": "SYPHERPKLOL_1238",
			  "displayName": "SypherPK",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "SYPHERPKLOL_1238",
				  "externalDisplayName": "SypherPK",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "SYPHERPKLOL_1238",
				  "externalDisplayName": "SypherPK",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			},
		    {
			  "id": "NICKEH30LOLL_2897669",
			  "displayName": "Nick Eh 30",
			  "externalAuths": {
				"xbl": {
				  "type": "xbl",
				  "externalAuthIdType": "xuid",
				  "accountId": "NICKEH30LOLL_2897669",
				  "externalDisplayName": "Nick Eh 30",
				  "authIds": [
					{
					  "id": "0",
					  "type": "xuid"
					}
				  ]
				},
				"psn": {
				  "type": "psn",
				  "externalAuthId": "0",
				  "externalAuthIdType": "psn_user_id",
				  "accountId": "NICKEH30LOLL_2897669",
				  "externalDisplayName": "Nick Eh 30",
				  "authIds": [
					{
					  "id": "0",
					  "type": "psn_user_id"
					}
				  ]
				}
			  }
			}
		    ]
		)
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/privacy/account/*", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/account/api/public/account/:accountId", async (req, res) => {
	res.json(
	{
		"id": req.params.accountId,
		"displayName": req.params.accountId,
		"name": "Lawin",
		"email": req.params.accountId + "@lawin.com",
		"failedLoginAttempts": 0,
		"lastLogin": new Date().toISOString(),
		"numberOfDisplayNameChanges": 0,
		"ageGroup": "UNKNOWN",
		"headless": false,
		"country": "US",
		"lastName": "Server",
		"preferredLanguage": "en",
		"canUpdateDisplayName": false,
		"tfaEnabled": false,
		"emailVerified": true,
		"minorVerified": false,
		"minorExpected": false,
		"minorStatus": "UNKNOWN"
	}
)
	res.status(200);
	res.end();
	console.log("User logged in.")
})

express.get("/fortnite/api/v2/versioncheck/*", async (req, res) => {
	res.json(
		{
			"type": "NO_UPDATE"
		}
	)
	res.status(200);
	res.end();
})

express.get("/fortnite/api/v2/versioncheck*", async (req, res) => {
	res.json(
		{
			"type": "NO_UPDATE"
		}
	)
	res.status(200);
	res.end();
})

express.get("/fortnite/api/versioncheck*", async (req, res) => {
	res.json(
		{
			"type": "NO_UPDATE"
		}
	)
	res.status(200);
	res.end();
})

express.get("/eulatracking/api/shared/agreements/fn*", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/friendcodes/*/epic", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/account/api/epicdomains/ssodomains", async (req, res) => {
	res.json({})
	res.status(204);
	res.end();
})

express.get("/fortnite/api/game/v2/matchmakingservice/ticket/player/*", async (req, res) => {
	res.json(
		{
			"serviceUrl": "wss://lawinserverfinal.herokuapp.com",
			"ticketType": "mms-player",
			"payload": "69=",
			"signature": "420="
		}
	)
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/matchmaking/account/:accountId/session/:sessionId", async (req, res) => {
	res.json(
			{
				"accountId": req.params.accountId,
				"sessionId": req.params.sessionId,
				"key": "AOJEv8uTFmUh7XM2328kq9rlAzeQ5xzWzPIiyKn2s7s="
			}
	)
	res.status(200);
	res.end();
})

express.post("/fortnite/api/matchmaking/session/matchMakingRequest", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/account/api/public/account/*/externalAuths", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/fortnite/api/game/v2/twitch/*", async (req, res) => {
	res.json();
	res.status(200);
	res.end();
})

express.get("/fortnite/api/stats/accountId/*/bulk/window/alltime", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.delete("/account/api/oauth/sessions/kill", async (req, res) => {
	res.status(204);
	res.end();
})

express.delete("/account/api/oauth/sessions/kill/*", async (req, res) => {
	res.status(204);
	res.end();
})

express.post("/fortnite/api/game/v2/chat/*/recommendGeneralChatRooms/pc", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/friends/api/v1/*/settings", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/friends/api/v1/*/blocklist", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/presence/api/v1/_/*/last-online", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/fortnite/api/receipts/v1/account/*/receipts", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/fortnite/api/cloudstorage/system", async (req, res) => {
		// patch 9.40
		if (req.headers["user-agent"].includes("7315705")) {
			return res
			.status(404)
			.json()
		}
		// patch 9.41
		if (req.headers["user-agent"].includes("7463579")) {
			return res
			.status(404)
			.json()
		}
		// patch 9.41 (2)
		if (req.headers["user-agent"].includes("7609292")) {
			return res
			.status(404)
			.json()
		}
		const seasonchecker = require("./seasonchecker.js");
		const seasondata = require("./season.json");
		seasonchecker(req, seasondata);
		if (seasondata.season > 9)
		{
			return res.status(404).json();
		}
	res.json([])
	res.status(200);
	res.end();
})

express.get("/fortnite/api/cloudstorage/user/*", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/fortnite/api/cloudstorage/user/*/*", async (req, res) => {
	res.json([])
	res.status(204);
	res.end();
})

express.get("/fortnite/api/game/v2/leaderboards/cohort/*", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.get("/friends/api/public/list/fortnite/*/recentPlayers", async (req, res) => {
	res.json([])
	res.status(200);
	res.end();
})

express.get("/friends/api/public/friends/*", async (req, res) => {
	res.json(friendslist)
	res.status(200);
	res.end();
})

express.get("/friends/api/v1/*/summary", async (req, res) => {
	res.json(friendslist2)
	res.status(200);
	res.end();
})

express.get("/fortnite/api/calendar/v1/timeline", async (req, res) => {
	const seasonchecker = require("./seasonchecker.js")
	const seasondata = require("./season.json");
	seasonchecker(req, seasondata);
	res.json(
			{
				"channels": {
				  "client-matchmaking": {
					"states": [
					  {
						"validFrom": "2020-01-01T20:28:47.830Z",
						"activeEvents": [],
						"state": {
						  "region": {
							"OCE": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"CN": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"NAE": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"NAW": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"EU": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"BR": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"ASIA": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							},
							"NA": {
							  "eventFlagsForcedOn": [
								"Playlist_DefaultDuo"
							  ]
							}
						  }
						}
					  }
					],
					"cacheExpire": "9999-01-01T22:28:47.830Z"
				  },
				  "client-events": {
					"states": [
					  {
						"validFrom": "2020-01-01T20:28:47.830Z",
						"activeEvents": [
						  {
							"eventType": `EventFlag.Season${seasondata.season}`,
							"activeUntil": "9999-01-01T00:00:00.000Z",
							"activeSince": "2020-01-01T00:00:00.000Z"
						  },
						  {
							"eventType": `EventFlag.${seasondata.lobby}`,
							"activeUntil": "9999-01-01T14:00:00.000Z",
							"activeSince": "2020-01-01T13:00:00.000Z"
						  }
						],
						"state": {
						  "activeStorefronts": [],
						  "eventNamedWeights": {},
						  "seasonNumber": seasondata.season,
						  "seasonTemplateId": `AthenaSeason:athenaseason${seasondata.season}`,
						  "matchXpBonusPoints": 0,
						  "seasonBegin": "2020-01-01T13:00:00Z",
						  "seasonEnd": "9999-01-01T14:00:00Z",
						  "seasonDisplayedEnd": "9999-01-01T07:30:00Z",
						  "weeklyStoreEnd": "9999-01-01T00:00:00Z",
						  "stwEventStoreEnd": "9999-01-01T00:00:00.000Z",
						  "stwWeeklyStoreEnd": "9999-01-01T00:00:00.000Z",
						  "dailyStoreEnd": "9999-01-01T00:00:00Z"
						}
					  }
					],
					"cacheExpire": "9999-01-01T22:28:47.830Z"
				  }
				},
				"eventsTimeOffsetHrs": 0,
				"cacheIntervalMins": 10,
				"currentTime": "2020-01-01T18:13:41.770Z"
			  }
		);
	res.status(200);
	res.end();
})

express.get("/friends/api/public/blocklist/*", async (req, res) => {
	res.json(
		{
			"blockedUsers": []
		}
	)
	res.status(200);
	res.end();
})

express.get("/content/api/pages/fortnite-game", async (req, res) => {
	const seasonchecker = require("./seasonchecker.js");
	const seasondata = require("./season.json");
	seasonchecker(req, seasondata);
	if (seasondata.season == 9)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season9"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season9"
	}
	if (seasondata.season == 10)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "seasonx"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "seasonx"
	}
	if (seasondata.season == 11)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season11"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season11"
	}
	if (seasondata.season == 12)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season12"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season12"
	}
	if (seasondata.season == 13)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season13"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season13"
	}
	if (seasondata.season == 14)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season14"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season14"
	}
	if (seasondata.season == 15)
	{
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season15"
		contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season15"
	}
	res.json(contentpages)
	res.status(200);
	res.end();
})

express.put("/fortnite/api/cloudstorage/user/*/*", async (req, res) => {
	res.status(204);
	res.end();
})

express.get("/fortnite/api/game/v2/world/info", async (req, res) => {
	res.json(worldstw)
	res.status(200);
	res.end();
})

express.get("/fortnite/api/storefront/v2/keychain", async (req, res) => {
	res.json(Keychain)
	res.status(200);
	res.end();
})

express.get("/account/api/oauth/verify", async (req, res) => {
	res.json({})
	res.status(200);
	res.end();
})

express.post("/datarouter/api/v1/public/data", async (req, res) => {
	res.json();
	res.status(204);
	res.end();
})

express.post("/account/api/oauth/token", async (req, res) => {
	res.json(
			{
				"access_token": "lawinstokenlol",
				"expires_in": 28800,
				"expires_at": "9999-12-02T01:12:01.100Z",
				"token_type": "bearer",
				"refresh_token": "lawinstokenlol",
				"refresh_expires": 86400,
				"refresh_expires_at": "9999-12-02T01:12:01.100Z",
				"account_id": req.body.username || "Invalid",
				"client_id": "lawinsclientidlol",
				"internal_client": true,
				"client_service": "fortnite",
				"displayName": req.body.username || "Invalid",
				"app": "fortnite",
				"in_app_id": req.body.username || "Invalid",
				"device_id": "lawinsdeviceidlol"
			}
		)
	res.status(200);
	res.end();
})

		// MCP BELOW

		express.post("/fortnite/api/game/v2/profile/*/client/SetAffiliateName", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			const profile = require(`./profiles/${req.query.profileId || "common_core"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			if (req.body.affiliateName.toLowerCase() == "lawin" && profile.profileId == "common_core")
			{
				profile.stats.attributes.mtx_affiliate_set_time = new Date().toISOString();
				profile.stats.attributes.mtx_affiliate = req.body.affiliateName || "";
				profile.rvn += 1;
				profile.commandRevision += 1;
				fs.writeFile(`./profiles/${req.query.profileId || "common_core"}.json`, JSON.stringify(profile, null, 2), function(err) {
					if (err) 
					{ 
						console.log('error:', err) 
					};
				  });
			}
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "common_core",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

		express.post("/fortnite/api/game/v2/profile/*/client/SetHomebaseBanner", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			const profile = require(`./profiles/${req.query.profileId || "profile0"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			if (req.query.profileId == "profile0") 
			{
				profile.stats.attributes.homebase.bannerIconId = req.body.homebaseBannerIconId || "";
				profile.stats.attributes.homebase.bannerColorId = req.body.homebaseBannerColorId || "";
				profile.rvn += 1;
				profile.commandRevision += 1;
				fs.writeFile(`./profiles/${req.query.profileId || "profile0"}.json`, JSON.stringify(profile, null, 2), function(err) {
					if (err) 
					{ 
						console.log('error:', err) 
					};
				  });
			}
			if (req.query.profileId == "common_public") 
			{
				profile.stats.attributes.banner_icon = req.body.homebaseBannerIconId || "";
				profile.stats.attributes.banner_color = req.body.homebaseBannerColorId || "";
				profile.rvn += 1;
				profile.commandRevision += 1;
				fs.writeFile(`./profiles/${req.query.profileId || "profile0"}.json`, JSON.stringify(profile, null, 2), function(err) {
					if (err) 
					{ 
						console.log('error:', err) 
					};
				  });
			}
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "profile0",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

		express.post("/fortnite/api/game/v2/profile/*/client/PurchaseHomebaseNode", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			function makeid(length) {
				var result           = '';
				var characters       = '0123456789abcdefghiklmnopqrstuvwxyz';
				var charactersLength = characters.length;
				for ( var i = 0; i < length; i++ ) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
				}
				return result;
			}
			const profile = require(`./profiles/${req.query.profileId || "profile0"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			profile.items[makeid(5) + "-" + makeid(4) + "-" + makeid(6) + "-" + makeid(4)] = {"templateId":`HomebaseNode:${req.body.nodeId || "no"}`,"attributes":{"item_seen":true},"quantity":1};
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "profile0"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "profile0",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

		express.post("/fortnite/api/game/v2/profile/*/client/SetPinnedQuests", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			const profile = require(`./profiles/${req.query.profileId || "campaign"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			profile.stats.attributes.client_settings.pinnedQuestInstances = req.body.pinnedQuestIds || [];
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "campaign"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "campaign",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

		express.post("/fortnite/api/game/v2/profile/*/client/ClaimLoginReward", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			const profile = require(`./profiles/${req.query.profileId || "campaign"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			profile.stats.attributes.daily_rewards.nextDefaultReward += 1;
			profile.stats.attributes.daily_rewards.totalDaysLoggedIn += 1;
			profile.stats.attributes.daily_rewards.lastClaimDate = new Date().toISOString();
			profile.stats.attributes.daily_rewards.additionalSchedules.founderspackdailyrewardtoken.rewardsClaimed += 1;
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "campaign"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "campaign",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});
	
	express.post("/fortnite/api/game/v2/profile/*/client/AssignTeamPerkToLoadout", async (req, res) => {
		if (req.headers["user-agent"].includes("Mozilla")) {
			return res
			.status(405)
			.json(
				{
					"errorCode":"errors.com.epicgames.common.method_not_allowed",
					"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
					"numericErrorCode":1009,
					"originatingService":"fortnite",
					"intent":"prod-live"
				})
			}
			const profile = require(`./profiles/${req.query.profileId || "campaign"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			profile.items[req.body.loadoutId].attributes.team_perk = req.body.teamPerkId || "";
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "campaign"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "campaign",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

		express.post("/fortnite/api/game/v2/profile/*/client/AssignGadgetToLoadout", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			const profile = require(`./profiles/${req.query.profileId || "campaign"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			if (req.body.slotIndex == 0)
			{
				profile.items[req.body.loadoutId].attributes.gadgets = [{"gadget":req.body.gadgetId || "","slot_index":0},profile.items[req.body.loadoutId].attributes.gadgets[1]];
				profile.rvn += 1;
				profile.commandRevision += 1;
				fs.writeFile(`./profiles/${req.query.profileId || "campaign"}.json`, JSON.stringify(profile, null, 2), function(err) {
					if (err) 
					{ 
						console.log('error:', err) 
					};
				  });
			}
			if (req.body.slotIndex == 1)
			{
				profile.items[req.body.loadoutId].attributes.gadgets = [profile.items[req.body.loadoutId].attributes.gadgets[0],{"gadget":req.body.gadgetId || "","slot_index":1}];
				profile.rvn += 1;
				profile.commandRevision += 1;
				fs.writeFile(`./profiles/${req.query.profileId || "campaign"}.json`, JSON.stringify(profile, null, 2), function(err) {
					if (err) 
					{ 
						console.log('error:', err) 
					};
				  });
			}
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "campaign",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

		express.post("/fortnite/api/game/v2/profile/*/client/AssignWorkerToSquad", async (req, res) => {
			if (req.headers["user-agent"].includes("Mozilla")) {
				return res
				.status(405)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.method_not_allowed",
						"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
				}
			const profile = require(`./profiles/${req.query.profileId || "profile0"}.json`);
			if (profile.profileId == "athena") {
				const seasonchecker = require("./seasonchecker.js");
				const seasondata = require("./season.json");
				seasonchecker(req, seasondata);
				profile.stats.attributes.season_num = seasondata.season;
			}
			profile.items[req.body.characterId].attributes.squad_id = req.body.squadId || "";
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "profile0"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
			res.json(
				{
					"profileRevision": profile.rvn || 1,
					"profileId": req.query.profileId || "profile0",
					"profileChangesBaseRevision": profile.rvn || 1,
					"profileChanges": [
						{
							"changeType": "fullProfileUpdate",
							"profile": profile
						}
					],
					"profileCommandRevision": profile.commandRevision || 0,
					"serverTime": new Date().toISOString(),
					"responseVersion": 1
				}
			)
			res.status(200);
			res.end();
		});

	express.post("/fortnite/api/game/v2/profile/*/client/ClaimQuestReward", async (req, res) => {
		if (req.headers["user-agent"].includes("Mozilla")) {
			return res
			.status(405)
			.json(
				{
					"errorCode":"errors.com.epicgames.common.method_not_allowed",
					"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
					"numericErrorCode":1009,
					"originatingService":"fortnite",
					"intent":"prod-live"
				})
			}
		const profile = require(`./profiles/${req.query.profileId || "campaign"}.json`);
		if (profile.profileId == "athena") {
			const seasonchecker = require("./seasonchecker.js");
			const seasondata = require("./season.json");
			seasonchecker(req, seasondata);
			profile.stats.attributes.season_num = seasondata.season;
		}
		profile.items[req.body.questId].attributes.quest_state = "Claimed";
		profile.items[req.body.questId].attributes.last_state_change_time = new Date().toISOString();
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(`./profiles/${req.query.profileId || "campaign"}.json`, JSON.stringify(profile, null, 2), function(err) {
			if (err) 
			{ 
				console.log('error:', err) 
			};
		  });
		res.json(
			{
				"profileRevision": profile.rvn || 1,
				"profileId": req.query.profileId || "campaign",
				"profileChangesBaseRevision": profile.rvn || 1,
				"profileChanges": [
					{
						"changeType": "fullProfileUpdate",
						"profile": profile
					}
				],
				"profileCommandRevision": profile.commandRevision || 0,
				"serverTime": new Date().toISOString(),
				"responseVersion": 1
			}
		)
		res.status(200);
		res.end();
	});

	express.post("/fortnite/api/game/v2/profile/*/client/EquipBattleRoyaleCustomization", async (req, res) => {
		if (req.headers["user-agent"].includes("Mozilla")) {
			return res
			.status(405)
			.json(
				{
					"errorCode":"errors.com.epicgames.common.method_not_allowed",
					"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
					"numericErrorCode":1009,
					"originatingService":"fortnite",
					"intent":"prod-live"
				})
			}
			if (req.query.profileId != "athena") 
			{
				return res
				.status(403)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.wrong_profile",
						"errorMessage":"Sorry, this endpoint requires the athena profile.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
			}
		const profile = require(`./profiles/${req.query.profileId || "athena"}.json`);
		if (profile.profileId == "athena") {
			const seasonchecker = require("./seasonchecker.js");
			const seasondata = require("./season.json");
			seasonchecker(req, seasondata);
			profile.stats.attributes.season_num = seasondata.season;
		}
		if (req.body.slotName == "Character")
		{
			profile.stats.attributes.favorite_character = req.body.itemToSlot || "";
			console.log(`Character changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenacharacter:cid_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "Backpack")
		{
			profile.stats.attributes.favorite_backpack = req.body.itemToSlot || "";
			console.log(`Backpack changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenabackpack:bid_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "Pickaxe")
		{
			profile.stats.attributes.favorite_pickaxe = req.body.itemToSlot || "";
			console.log(`Pickaxe changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenapickaxe:pickaxe_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "Glider")
		{
			profile.stats.attributes.favorite_glider = req.body.itemToSlot || "";
			console.log(`Glider changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaglider:glider_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "SkyDiveContrail")
		{
			profile.stats.attributes.favorite_skydivecontrail = req.body.itemToSlot || "";
			console.log(`SkyDiveContrail changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaskydivecontrail:trails_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "MusicPack")
		{
			profile.stats.attributes.favorite_musicpack = req.body.itemToSlot || "";
			console.log(`MusicPack changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenamusicpack:musicpack_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "LoadingScreen")
		{
			profile.stats.attributes.favorite_loadingscreen = req.body.itemToSlot || "";
			console.log(`LoadingScreen changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaloadingscreen:lsid_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "Dance")
		{
			var indexwithinslot = req.body.indexWithinSlot || 0;

			if (indexwithinslot == 0)
			{
				profile.stats.attributes.favorite_dance[0] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 1)
			{
				profile.stats.attributes.favorite_dance[1] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 2)
			{
				profile.stats.attributes.favorite_dance[2] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 3)
			{
				profile.stats.attributes.favorite_dance[3] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 4)
			{
				profile.stats.attributes.favorite_dance[4] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 5)
			{
				profile.stats.attributes.favorite_dance[5] = req.body.itemToSlot || "";
			}

			console.log(`Dance slot ${indexwithinslot} changed to: ${req.body.itemToSlot || ""}`);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.slotName == "ItemWrap")
		{
			var indexwithinslot = req.body.indexWithinSlot || 0;

			if (indexwithinslot == 0)
			{
				profile.stats.attributes.favorite_itemwraps[0] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 1)
			{
				profile.stats.attributes.favorite_itemwraps[1] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 2)
			{
				profile.stats.attributes.favorite_itemwraps[2] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 3)
			{
				profile.stats.attributes.favorite_itemwraps[3] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 4)
			{
				profile.stats.attributes.favorite_itemwraps[4] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 5)
			{
				profile.stats.attributes.favorite_itemwraps[5] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 6)
			{
				profile.stats.attributes.favorite_itemwraps[6] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == -1)
			{
				profile.stats.attributes.favorite_itemwraps[0] = req.body.itemToSlot || "";
				profile.stats.attributes.favorite_itemwraps[1] = req.body.itemToSlot || "";
				profile.stats.attributes.favorite_itemwraps[2] = req.body.itemToSlot || "";
				profile.stats.attributes.favorite_itemwraps[3] = req.body.itemToSlot || "";
				profile.stats.attributes.favorite_itemwraps[4] = req.body.itemToSlot || "";
				profile.stats.attributes.favorite_itemwraps[5] = req.body.itemToSlot || "";
				profile.stats.attributes.favorite_itemwraps[6] = req.body.itemToSlot || "";
			}

			var poggers = `ItemWrap slot ${indexwithinslot} changed to: ${req.body.itemToSlot || ""}`
			if (indexwithinslot == -1)
			{
				poggers = `All ItemWrap slots changed to: ${req.body.itemToSlot || ""}`;
			}
			console.log(poggers);
			if (req.body.variantUpdates)
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaitemwrap:wrap_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		res.json(
			{
				"profileRevision": profile.rvn || 1,
				"profileId": req.query.profileId || "athena",
				"profileChangesBaseRevision": profile.rvn || 1,
				"profileChanges": [
					{
						"changeType": "fullProfileUpdate",
						"profile": profile
					}
				],
				"profileCommandRevision": profile.commandRevision || 0,
				"serverTime": new Date().toISOString(),
				"responseVersion": 1
			}
		)
		res.status(200);
		res.end();
	});

	express.post("/fortnite/api/game/v2/profile/*/client/SetBattleRoyaleBanner", async (req, res) => {
		if (req.headers["user-agent"].includes("Mozilla")) {
			return res
			.status(405)
			.json(
				{
					"errorCode":"errors.com.epicgames.common.method_not_allowed",
					"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
					"numericErrorCode":1009,
					"originatingService":"fortnite",
					"intent":"prod-live"
				})
			}
			if (req.query.profileId != "athena") 
			{
				return res
				.status(403)
				.json(
					{
						"errorCode":"errors.com.epicgames.common.wrong_profile",
						"errorMessage":"Sorry, this endpoint requires the athena profile.",
						"numericErrorCode":1009,
						"originatingService":"fortnite",
						"intent":"prod-live"
					})
			}
		const profile = require(`./profiles/${req.query.profileId || "athena"}.json`);
		if (profile.profileId == "athena") {
			const seasonchecker = require("./seasonchecker.js");
			const seasondata = require("./season.json");
			seasonchecker(req, seasondata);
			profile.stats.attributes.season_num = seasondata.season;
		}
		profile.stats.attributes.banner_icon = req.body.homebaseBannerIconId || "BRSeason01";
		profile.stats.attributes.banner_color = req.body.homebaseBannerColorId || "DefaultColor1";
		profile.rvn += 1;
		profile.commandRevision += 1;
		fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
			if (err) 
			{ 
				console.log('error:', err) 
			};
		  });
		res.json(
			{
				"profileRevision": profile.rvn || 1,
				"profileId": req.query.profileId || "athena",
				"profileChangesBaseRevision": profile.rvn || 1,
				"profileChanges": [
					{
						"changeType": "fullProfileUpdate",
						"profile": profile
					}
				],
				"profileCommandRevision": profile.commandRevision || 0,
				"serverTime": new Date().toISOString(),
				"responseVersion": 1
			}
		)
		res.status(200);
		res.end();
	});

	express.post("/fortnite/api/game/v2/profile/*/client/SetCosmeticLockerSlot", async (req, res) => {
		if (req.headers["user-agent"].includes("Mozilla")) {
			return res
			.status(405)
			.json(
				{
					"errorCode":"errors.com.epicgames.common.method_not_allowed",
					"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
					"numericErrorCode":1009,
					"originatingService":"fortnite",
					"intent":"prod-live"
				})
			}
		const profile = require(`./profiles/${req.query.profileId || "athena"}.json`);
		if (profile.profileId == "athena") {
			const seasonchecker = require("./seasonchecker.js");
			const seasondata = require("./season.json");
			seasonchecker(req, seasondata);
			profile.stats.attributes.season_num = seasondata.season;
		}
		if (req.body.category == "Character")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Character.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenacharacter:cid_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "Backpack")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Backpack.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenabackpack:bid_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "Pickaxe")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Pickaxe.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenapickaxe:pickaxe_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "Glider")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Glider.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaglider:glider_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "SkyDiveContrail")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.SkyDiveContrail.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaskydivecontrail:trails_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "MusicPack")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.MusicPack.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenamusicpack:musicpack_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "LoadingScreen")
		{
			profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.LoadingScreen.items = [req.body.itemToSlot || ""];
			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaloadingscreen:lsid_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}
			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "Dance")
		{
			var indexwithinslot = req.body.slotIndex || 0;

			if (indexwithinslot == 0)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Dance.items[0] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 1)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Dance.items[1] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 2)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Dance.items[2] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 3)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Dance.items[3] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 4)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Dance.items[4] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 5)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.Dance.items[5] = req.body.itemToSlot || "";
			}

			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}

			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		if (req.body.category == "ItemWrap")
		{
			var indexwithinslot = req.body.slotIndex || 0;

			if (indexwithinslot == 0)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[0] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 1)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[1] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 2)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[2] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 3)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[3] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 4)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[4] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 5)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[5] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == 6)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[6] = req.body.itemToSlot || "";
			}
			if (indexwithinslot == -1)
			{
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[0] = req.body.itemToSlot || "";
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[1] = req.body.itemToSlot || "";
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[2] = req.body.itemToSlot || "";
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[3] = req.body.itemToSlot || "";
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[4] = req.body.itemToSlot || "";
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[5] = req.body.itemToSlot || "";
				profile.items[req.body.lockerItem].attributes.locker_slots_data.slots.ItemWrap.items[6] = req.body.itemToSlot || "";
			}

			if (req.body.variantUpdates && profile.profileId != "campaign")
			{
				if (req.body.itemToSlot != "" && req.body.itemToSlot.toLowerCase() != "athenaitemwrap:wrap_random")
				{
					profile.items[req.body.itemToSlot].attributes.variants = req.body.variantUpdates || [];
				}
			}

			profile.rvn += 1;
			profile.commandRevision += 1;
			fs.writeFile(`./profiles/${req.query.profileId || "athena"}.json`, JSON.stringify(profile, null, 2), function(err) {
				if (err) 
				{ 
					console.log('error:', err) 
				};
			  });
		}
		res.json(
			{
				"profileRevision": profile.rvn || 1,
				"profileId": req.query.profileId || "athena",
				"profileChangesBaseRevision": profile.rvn || 1,
				"profileChanges": [
					{
						"changeType": "fullProfileUpdate",
						"profile": profile
					}
				],
				"profileCommandRevision": profile.commandRevision || 0,
				"serverTime": new Date().toISOString(),
				"responseVersion": 1
			}
		)
		res.status(200);
		res.end();
	});

	express.post("/fortnite/api/game/v2/profile/*/client/*", async (req, res) => {
		if (req.headers["user-agent"].includes("Mozilla")) {
			return res
			.status(405)
			.json(
				{
					"errorCode":"errors.com.epicgames.common.method_not_allowed",
					"errorMessage":"Sorry the resource you were trying to access cannot be accessed with the HTTP method you used.",
					"numericErrorCode":1009,
					"originatingService":"fortnite",
					"intent":"prod-live"
				})
			}
		const profile = require(`./profiles/${req.query.profileId || "athena"}.json`);
		if (profile.profileId == "athena") {
			const seasonchecker = require("./seasonchecker.js");
			const seasondata = require("./season.json");
			seasonchecker(req, seasondata);
			profile.stats.attributes.season_num = seasondata.season;
		}
		if (req.headers["user-agent"].includes("3724489")) {
			if (req.query.profileId == "profile0") {
				return res
				.status(200)
				.json({})
			}
		}
		res.json(
			{
				"profileRevision": profile.rvn || 1,
				"profileId": req.query.profileId || "athena",
				"profileChangesBaseRevision": profile.rvn || 1,
				"profileChanges": [
					{
						"changeType": "fullProfileUpdate",
						"profile": profile
					}
				],
				"profileCommandRevision": profile.commandRevision || 0,
				"serverTime": new Date().toISOString(),
				"responseVersion": 1
			}
		)
		res.status(200);
		res.end();
	});