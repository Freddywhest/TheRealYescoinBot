> [<img src="https://img.shields.io/badge/Telegram-%40Me-orange">](https://t.me/roddyfred)

![img1](./.github/image/hero.png)

# Use Node.Js 18 or later

## Functionality

| Functional                                                    | Supported |
| ------------------------------------------------------------- | :-------: |
| Claiming daily reward                                         |    ✅     |
| Claiming Ads Reward                                           |    ✅     |
| Multithreading                                                |    ✅     |
| Binding a proxy to a session                                  |    ✅     |
| Auto-purchase of items if you have coins (multitap, attempts) |    ✅     |
| Random sleep time between clicks                              |    ✅     |
| Random number of clicks per request                           |    ✅     |

## [Settings](https://github.com/FreddyWhest/TheRealYescoinBot/blob/main/.env-example)

| Settings                     | Description                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| **API_ID / API_HASH**        | Platform data from which to launch a Telegram session (stock - Android)   |
| **AUTO_UPGRADE_MULTICLICKS** | Whether the bot should upgrade the multitap (True / False)                |
| **MAX_MULTICLICKS_LEVEL**    | Maximum level of multitap (eg 5)                                          |
| **SLEEP_BETWEEN_ADS**        | Delay between ads in seconds (eg. 70)                                     |
| **SLEEP_BETWEEN_TAP**        | Delay between taps in seconds (eg. 70)                                    |
| **USE_PROXY_FROM_FILE**      | Whether to use proxy from the `bot/config/proxies.js` file (True / False) |
| **RANDOM_TAPS_COUNT**        | Random number of taps (eg [50, 200]). MIN=1, MAX=1000                     |

## Installation

You can download [**Repository**](https://github.com/FreddyWhest/TheRealYescoinBot) by cloning it to your system and installing the necessary dependencies:

```shell
~ >>> git clone https://github.com/FreddyWhest/TheRealYescoinBot.git
~ >>> cd TheRealYescoinBot

#Linux and MocOS
~/TheRealYescoinBot >>> chmod +x check_node.sh
~/TheRealYescoinBot >>> ./check_node.sh

OR

~/TheRealYescoinBot >>> npm install
~/TheRealYescoinBot >>> cp .env-example .env
~/TheRealYescoinBot >>> nano .env # Here you must specify your API_ID and API_HASH , the rest is taken by default
~/TheRealYescoinBot >>> node index.js

#Windows
1. Double click on INSTALL.bat in TheRealYescoinBot directory to install the dependencies
2. Double click on START.bat in TheRealYescoinBot directory to start the bot

OR

~/TheRealYescoinBot >>> npm install
~/TheRealYescoinBot >>> cp .env-example .env
~/TheRealYescoinBot >>> # Specify your API_ID and API_HASH, the rest is taken by default
~/TheRealYescoinBot >>> node index.js
```

Also for quick launch you can use arguments, for example:

```shell
~/TheRealYescoinBot >>> node index.js --action=1

OR

~/TheRealYescoinBot >>> node index.js --action=2

#1 - Create session
#2 - Run clicker
```
