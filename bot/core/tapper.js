const _0x2e5034 = _0x59d7;
(function (_0x2bc8e6, _0x3848a4) {
  const _0x2a2a0d = _0x59d7,
    _0x4a0a96 = _0x2bc8e6();
  while (!![]) {
    try {
      const _0x5298df =
        -parseInt(_0x2a2a0d(0x12d)) / 0x1 +
        parseInt(_0x2a2a0d(0xef)) / 0x2 +
        (-parseInt(_0x2a2a0d(0xfb)) / 0x3) *
          (-parseInt(_0x2a2a0d(0x130)) / 0x4) +
        (parseInt(_0x2a2a0d(0x10e)) / 0x5) *
          (-parseInt(_0x2a2a0d(0xf9)) / 0x6) +
        parseInt(_0x2a2a0d(0x144)) / 0x7 +
        (parseInt(_0x2a2a0d(0x158)) / 0x8) *
          (parseInt(_0x2a2a0d(0x101)) / 0x9) +
        -parseInt(_0x2a2a0d(0x13b)) / 0xa;
      if (_0x5298df === _0x3848a4) break;
      else _0x4a0a96["push"](_0x4a0a96["shift"]());
    } catch (_0x3221f4) {
      _0x4a0a96["push"](_0x4a0a96["shift"]());
    }
  }
})(_0x5e51, 0xf14f0);
const { default: axios } = require(_0x2e5034(0xfc)),
  logger = require(_0x2e5034(0x145)),
  headers = require("./header"),
  { Api } = require(_0x2e5034(0x10d)),
  { SocksProxyAgent } = require(_0x2e5034(0x135)),
  settings = require(_0x2e5034(0x13a)),
  app = require("../config/app"),
  user_agents = require(_0x2e5034(0xf7)),
  fs = require("fs"),
  sleep = require(_0x2e5034(0x111)),
  ApiRequest = require(_0x2e5034(0x13e));
var _ = require(_0x2e5034(0x122));
const parser = require("../utils/parser"),
  v4 = require(_0x2e5034(0x129));
function _0x59d7(_0x10c748, _0x282cd0) {
  const _0x5e5187 = _0x5e51();
  return (
    (_0x59d7 = function (_0x59d7da, _0x5e9de7) {
      _0x59d7da = _0x59d7da - 0xed;
      let _0x307842 = _0x5e5187[_0x59d7da];
      return _0x307842;
    }),
    _0x59d7(_0x10c748, _0x282cd0)
  );
}
class Tapper {
  constructor(_0x12efc1) {
    const _0x53a6d5 = _0x2e5034;
    (this[_0x53a6d5(0x12a)] = _0x12efc1[_0x53a6d5(0x12a)]),
      (this["tg_client"] = _0x12efc1[_0x53a6d5(0x14e)]),
      (this[_0x53a6d5(0x110)] = this.#load_session_data()),
      (this["headers"] = { ...headers, "user-agent": this.#get_user_agent() }),
      (this["api"] = new ApiRequest(this[_0x53a6d5(0x12a)]));
  }
  #load_session_data() {
    const _0x2387c2 = _0x2e5034;
    try {
      const _0x4913d0 = fs[_0x2387c2(0x149)](_0x2387c2(0xfe), _0x2387c2(0x124));
      return JSON[_0x2387c2(0xf5)](_0x4913d0);
    } catch (_0x222e76) {
      if (_0x222e76[_0x2387c2(0xf8)] === _0x2387c2(0x107)) return {};
      else throw _0x222e76;
    }
  }
  #clean_tg_web_data(_0x2adfce) {
    const _0xdbb1b6 = _0x2e5034;
    let _0x27934c = _0x2adfce[_0xdbb1b6(0x150)](/^tgWebAppData=/, "");
    return (
      (_0x27934c = _0x27934c[_0xdbb1b6(0x150)](
        /&tgWebAppVersion=7\.4&tgWebAppPlatform=ios$/,
        ""
      )
        [_0xdbb1b6(0x150)](
          /&tgWebAppVersion=7\.4&tgWebAppPlatform=android$/,
          ""
        )
        [_0xdbb1b6(0x150)](
          /&tgWebAppVersion=7\.4&tgWebAppPlatform=ios&tgWebAppBotInline=1$/,
          ""
        )
        ["replace"](
          /&tgWebAppVersion=7\.4&tgWebAppPlatform=android&tgWebAppBotInline=1$/,
          ""
        )),
      _0x27934c
    );
  }
  #get_random_user_agent() {
    const _0xa46017 = _0x2e5034,
      _0x30f57d = Math[_0xa46017(0x115)](
        Math[_0xa46017(0x154)]() * user_agents[_0xa46017(0x13f)]
      );
    return user_agents[_0x30f57d];
  }
  #get_user_agent() {
    const _0x1edbe8 = _0x2e5034;
    if (this[_0x1edbe8(0x110)][this["session_name"]])
      return this[_0x1edbe8(0x110)][this[_0x1edbe8(0x12a)]];
    logger[_0x1edbe8(0x11b)](
      this[_0x1edbe8(0x12a)] + "\x20|\x20Generating\x20new\x20user\x20agent..."
    );
    const _0x57ea7f = this.#get_random_user_agent();
    return (
      (this["session_user_agents"][this[_0x1edbe8(0x12a)]] = _0x57ea7f),
      this.#save_session_data(this[_0x1edbe8(0x110)]),
      _0x57ea7f
    );
  }
  #save_session_data(_0x949bac) {
    const _0x1427a4 = _0x2e5034;
    fs["writeFileSync"](
      _0x1427a4(0xfe),
      JSON[_0x1427a4(0x123)](_0x949bac, null, 0x2)
    );
  }
  #get_platform(_0xdef73b) {
    const _0x20099e = _0x2e5034,
      _0x114709 = [
        { pattern: /iPhone/i, platform: _0x20099e(0x113) },
        { pattern: /Android/i, platform: _0x20099e(0x10a) },
        { pattern: /iPad/i, platform: _0x20099e(0x113) },
      ];
    for (const { pattern: _0xb21fea, platform: _0x5ebc87 } of _0x114709) {
      if (_0xb21fea[_0x20099e(0x102)](_0xdef73b)) return _0x5ebc87;
    }
    return _0x20099e(0xf1);
  }
  #addSeconds(_0x1666c4) {
    const _0x3836d6 = _0x2e5034;
    let _0x3f00ef = new Date(),
      _0x18903e = new Date(_0x3f00ef[_0x3836d6(0xf6)]() + _0x1666c4 * 0x3e8);
    return _0x18903e;
  }
  #compareWithCurrentTime(_0x186ead) {
    let _0x339020 = new Date();
    if (_0x186ead > _0x339020) return !![];
    else return _0x186ead < _0x339020 ? ![] : ![];
  }
  #proxy_agent(_0x5343e3) {
    const _0x404359 = _0x2e5034;
    if (!_0x5343e3) return null;
    let _0x403957;
    return (
      !_0x5343e3[_0x404359(0x10c)] && !_0x5343e3[_0x404359(0x11e)]
        ? (_0x403957 =
            "socks" +
            _0x5343e3[_0x404359(0xfd)] +
            _0x404359(0x118) +
            _0x5343e3["ip"] +
            ":" +
            _0x5343e3[_0x404359(0x15d)])
        : (_0x403957 =
            "socks" +
            _0x5343e3[_0x404359(0xfd)] +
            "://" +
            _0x5343e3["username"] +
            ":" +
            _0x5343e3[_0x404359(0x10c)] +
            "@" +
            _0x5343e3["ip"] +
            ":" +
            _0x5343e3["port"]),
      new SocksProxyAgent(_0x403957)
    );
  }
  async #get_tg_web_data() {
    const _0x30ffa3 = _0x2e5034;
    try {
      await this[_0x30ffa3(0x14e)][_0x30ffa3(0x128)]();
      const _0x3ee480 = this.#get_platform(this.#get_user_agent()),
        _0xe511b7 = await this[_0x30ffa3(0x14e)][_0x30ffa3(0x134)](
          new Api[_0x30ffa3(0xee)][_0x30ffa3(0x116)]({
            peer: await this[_0x30ffa3(0x14e)]["getInputEntity"](
              app[_0x30ffa3(0x11c)]
            ),
            bot: await this["tg_client"][_0x30ffa3(0x14c)](
              app[_0x30ffa3(0x104)]
            ),
            platform: _0x3ee480,
            from_bot_menu: ![],
            url: app[_0x30ffa3(0x108)],
          })
        );
      await this[_0x30ffa3(0x14e)][_0x30ffa3(0x134)](
        new Api[_0x30ffa3(0x100)][_0x30ffa3(0x152)]({ channel: "freddy_bots" })
      );
      const _0x5706b0 = _0xe511b7[_0x30ffa3(0x15b)],
        _0x7aa34e = _0x5706b0["split"]("#", 0x2)[0x1],
        _0x31b3fa = parser[_0x30ffa3(0x126)](
          decodeURIComponent(this.#clean_tg_web_data(_0x7aa34e))
        );
      return parser[_0x30ffa3(0x139)](_0x31b3fa);
    } catch (_0x33c2a7) {
      logger[_0x30ffa3(0x127)](
        this[_0x30ffa3(0x12a)] + _0x30ffa3(0x117) + _0x33c2a7
      );
      throw _0x33c2a7;
    } finally {
      await sleep(0x1),
        logger[_0x30ffa3(0x11b)](this["session_name"] + _0x30ffa3(0x157));
    }
  }
  #getItemById(_0x12ab2f, _0xe66864) {
    const _0x51ee4d = _0x2e5034;
    return _0x12ab2f[_0x51ee4d(0x136)](
      (_0x19e3cd) => _0x19e3cd["id"] === _0xe66864
    );
  }
  async #check_proxy(_0x42cfd6, _0x4c68a9) {
    const _0x321144 = _0x2e5034;
    try {
      _0x42cfd6["defaults"][_0x321144(0x159)][_0x321144(0x132)] =
        _0x321144(0x114);
      const _0x4baa6b = await _0x42cfd6[_0x321144(0xf3)](_0x321144(0x156)),
        _0x43aecd = _0x4baa6b[_0x321144(0x14d)]["origin"];
      logger["info"](this[_0x321144(0x12a)] + _0x321144(0x146) + _0x43aecd);
    } catch (_0x4afb80) {
      return (
        _0x4afb80[_0x321144(0x15c)][_0x321144(0x155)](_0x321144(0xed)) ||
        _0x4afb80[_0x321144(0x15c)][_0x321144(0x155)](_0x321144(0xff)) ||
        _0x4afb80[_0x321144(0x15c)][_0x321144(0x155)](_0x321144(0x141))
          ? (logger[_0x321144(0x127)](
              this[_0x321144(0x12a)] +
                "\x20|\x20Error:\x20Unable\x20to\x20resolve\x20the\x20proxy\x20address.\x20The\x20proxy\x20server\x20at\x20" +
                _0x4c68a9["ip"] +
                ":" +
                _0x4c68a9[_0x321144(0x15d)] +
                "\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection."
            ),
            logger[_0x321144(0x127)](this["session_name"] + _0x321144(0x11d)))
          : logger["error"](
              this["session_name"] +
                _0x321144(0x131) +
                _0x4c68a9["ip"] +
                ":" +
                _0x4c68a9[_0x321144(0x15d)] +
                _0x321144(0x11a) +
                _0x4afb80["message"]
            ),
        ![]
      );
    }
  }
  async [_0x2e5034(0x103)](_0x5ae5be) {
    const _0x266cf7 = _0x2e5034;
    let _0xfd7d0c,
      _0x4604e1 = 0x0,
      _0x5dc3f8,
      _0x558deb,
      _0x1dc1b8,
      _0x5b7f2f = 0x0,
      _0x406964 = 0x0,
      _0x36da80 = 0x0,
      _0x4cc2c5 = 0x0;
    if (settings[_0x266cf7(0x153)] && _0x5ae5be) {
      _0xfd7d0c = axios[_0x266cf7(0x109)]({
        httpsAgent: this.#proxy_agent(_0x5ae5be),
        headers: this[_0x266cf7(0x159)],
        withCredentials: !![],
      });
      const _0x41a007 = await this.#check_proxy(_0xfd7d0c, _0x5ae5be);
      !_0x41a007 &&
        (_0xfd7d0c = axios[_0x266cf7(0x109)]({
          headers: this[_0x266cf7(0x159)],
          withCredentials: !![],
        }));
    } else
      _0xfd7d0c = axios[_0x266cf7(0x109)]({
        headers: this[_0x266cf7(0x159)],
        withCredentials: !![],
      });
    while (!![]) {
      try {
        const _0x4f2da5 = Date["now"]() / 0x3e8;
        if (_0x4f2da5 - _0x4604e1 >= 0xe10) {
          _0xfd7d0c[_0x266cf7(0x12c)][_0x266cf7(0x159)]["host"] =
            app[_0x266cf7(0x132)];
          const _0x4ba112 = await this.#get_tg_web_data();
          (_0xfd7d0c[_0x266cf7(0x12c)][_0x266cf7(0x159)][_0x266cf7(0x119)] =
            _0x4ba112),
            (_0x4604e1 = _0x4f2da5),
            await sleep(0x2);
        }
        (_0x5dc3f8 = await this[_0x266cf7(0x133)][_0x266cf7(0x14a)](_0xfd7d0c)),
          (_0x558deb = await this[_0x266cf7(0x133)][_0x266cf7(0x137)](
            _0xfd7d0c
          ));
        if (!_0x5dc3f8) continue;
        _0x4f2da5 - _0x4cc2c5 >= 0x12c &&
          ((_0x1dc1b8 = v4["v4"]()),
          (_0x5b7f2f = 0x0),
          (_0x4cc2c5 = _0x4f2da5));
        if (
          _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x10f)] > 0x0 &&
          !this.#compareWithCurrentTime(_0x36da80)
        ) {
          settings[_0x266cf7(0xf2)][0x0] > settings[_0x266cf7(0xf2)][0x1] &&
            (logger["error"](this[_0x266cf7(0x12a)] + _0x266cf7(0xf0)),
            process[_0x266cf7(0x14f)](0x1));
          (settings[_0x266cf7(0xf2)][0x0] > 0x3e8 ||
            settings[_0x266cf7(0xf2)][0x1] > 0x3e8) &&
            (logger[_0x266cf7(0x127)](
              this[_0x266cf7(0x12a)] + _0x266cf7(0x106)
            ),
            process[_0x266cf7(0x14f)](0x1));
          let _0x1885fb = _[_0x266cf7(0x154)](
            settings[_0x266cf7(0xf2)][0x0],
            settings[_0x266cf7(0xf2)][0x1]
          );
          const _0x466962 =
            _0x1885fb * _0x5dc3f8?.[_0x266cf7(0x112)]?.["goldPerClick"];
          _0x466962 > _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x10f)] &&
            (_0x1885fb = Math["floor"](
              _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x10f)] /
                _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x13c)]
            ));
          if (_0x1885fb >= 0x1) {
            const _0x422aff = {
                count: _0x1885fb,
                sessionId: _0x1dc1b8,
                lastSessionActivityMs: new Date()[_0x266cf7(0xf6)](),
                startSessionMs: _0x4f2da5 * 0x3e8,
                totalSessionClicks: _0x5b7f2f + _0x1885fb,
              },
              _0x1c8c3a = await this[_0x266cf7(0x133)][_0x266cf7(0x138)](
                _0xfd7d0c,
                _0x422aff
              );
            (_0x5dc3f8 = await this[_0x266cf7(0x133)][_0x266cf7(0x14a)](
              _0xfd7d0c
            )),
              (_0x5b7f2f += _0x1885fb),
              _0x1c8c3a?.[_0x266cf7(0x151)]?.["toLowerCase"]() == "ok"
                ? logger[_0x266cf7(0xf4)](
                    this["session_name"] +
                      "\x20|\x20✅\x20Successfully\x20sent\x20taps\x20|\x20(<gr>+" +
                      _0x1885fb * _0x5dc3f8?.["payload"]?.[_0x266cf7(0x13c)] +
                      _0x266cf7(0xfa) +
                      _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x10f)] +
                      _0x266cf7(0x148) +
                      _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x14b)] +
                      _0x266cf7(0x120)
                  )
                : logger[_0x266cf7(0x127)](
                    this[_0x266cf7(0x12a)] + _0x266cf7(0x142)
                  );
          } else
            (_0x36da80 = this.#addSeconds(0x6270)),
              logger["info"](
                this["session_name"] +
                  _0x266cf7(0x143) +
                  ("\x20|⚡Remaining\x20Energy:\x20<bl>" +
                    _0x5dc3f8?.["payload"]?.[_0x266cf7(0x10f)] +
                    _0x266cf7(0x148) +
                    _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x14b)] +
                    _0x266cf7(0x120))
              );
        }
        if (!this.#compareWithCurrentTime(_0x406964)) {
          const _0x3b2f0e = await this[_0x266cf7(0x133)][_0x266cf7(0x140)](
            _0xfd7d0c
          );
          _0x3b2f0e?.[_0x266cf7(0x151)]?.[_0x266cf7(0x12e)]() == "ok"
            ? logger[_0x266cf7(0xf4)](this[_0x266cf7(0x12a)] + _0x266cf7(0x11f))
            : logger[_0x266cf7(0x127)](
                this[_0x266cf7(0x12a)] + _0x266cf7(0x13d)
              ),
            (_0x5dc3f8 = await this[_0x266cf7(0x133)]["get_user_data"](
              _0xfd7d0c
            )),
            logger[_0x266cf7(0x11b)](
              this[_0x266cf7(0x12a)] +
                "\x20|\x20⏳\x20Next\x20Ads\x20claim\x20in\x2030\x20minutes.\x20|⚡Remaining\x20Energy:\x20<bl>" +
                _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x10f)] +
                _0x266cf7(0x148) +
                _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x14b)] +
                _0x266cf7(0x120)
            ),
            (_0x406964 = this.#addSeconds(0x708));
        }
        await sleep(0x5);
        let _0x574aad = this.#getItemById(
          _0x558deb?.[_0x266cf7(0x112)],
          _0x266cf7(0x12f)
        );
        if (
          settings[_0x266cf7(0x125)] &&
          _0x5dc3f8?.[_0x266cf7(0x112)]?.["goldPerClick"] <
            settings[_0x266cf7(0x121)]
        ) {
          if (
            _0x5dc3f8?.["payload"]?.[_0x266cf7(0x14b)] >=
            _0x574aad?.["updateCost"]
          ) {
            const _0x47f223 = { boost: _0x266cf7(0x12f) },
              _0x3ac039 = await this[_0x266cf7(0x133)][_0x266cf7(0x10b)](
                _0xfd7d0c,
                _0x47f223
              );
            (_0x5dc3f8 = await this["api"][_0x266cf7(0x14a)](_0xfd7d0c)),
              (_0x558deb = await this[_0x266cf7(0x133)]["get_boost_data"](
                _0xfd7d0c
              )),
              (_0x574aad = this.#getItemById(
                _0x558deb?.[_0x266cf7(0x112)],
                "multiclick"
              )),
              _0x3ac039?.[_0x266cf7(0x151)]?.[_0x266cf7(0x12e)]() == "ok" &&
                logger[_0x266cf7(0x11b)](
                  this[_0x266cf7(0x12a)] +
                    _0x266cf7(0x15a) +
                    _0x5dc3f8?.[_0x266cf7(0x112)]?.[_0x266cf7(0x13c)] +
                    "</lb>"
                );
          }
        }
        await sleep(0x3);
      } catch (_0x1d5e98) {
        logger[_0x266cf7(0x127)](
          this[_0x266cf7(0x12a)] +
            "\x20|\x20❗️Unknown\x20error:\x20" +
            _0x1d5e98
        );
      } finally {
        logger[_0x266cf7(0x11b)](
          this[_0x266cf7(0x12a)] +
            "\x20|\x20😴\x20sleeping\x20for\x20" +
            settings["SLEEP_BETWEEN_TAP"] +
            _0x266cf7(0x12b)
        ),
          await sleep(settings[_0x266cf7(0x147)]);
      }
    }
  }
}
module[_0x2e5034(0x105)] = Tapper;
function _0x5e51() {
  const _0x25e9e4 = [
    "stringify",
    "utf8",
    "AUTO_UPGRADE_MULTICLICKS",
    "toJson",
    "error",
    "start",
    "uuid",
    "session_name",
    "\x20seconds...",
    "defaults",
    "996884pmLptl",
    "toLowerCase",
    "multiclick",
    "76YBXfBN",
    "\x20|\x20Proxy:\x20",
    "host",
    "api",
    "invoke",
    "socks-proxy-agent",
    "find",
    "get_boost_data",
    "send_taps",
    "toQueryString",
    "../config/config",
    "3926980MVMEVw",
    "goldPerClick",
    "\x20|\x20❗️Failed\x20to\x20claim\x20ads",
    "./api",
    "length",
    "claim_ads",
    "ECONNREFUSED",
    "\x20|\x20❗️Failed\x20to\x20send\x20taps",
    "\x20|\x20⏳\x20Not\x20enough\x20energy.\x20We\x20will\x20try\x20to\x20tap\x20again\x20in\x207\x20hours\x20but\x20ads\x20claim\x20will\x20continue.",
    "1367814tJsOqb",
    "../utils/logger",
    "\x20|\x20Proxy\x20IP:\x20",
    "SLEEP_BETWEEN_TAP",
    "</bl>\x20|\x20💰Total\x20Balance:\x20<lb>",
    "readFileSync",
    "get_user_data",
    "gold",
    "getInputEntity",
    "data",
    "tg_client",
    "exit",
    "replace",
    "status",
    "JoinChannel",
    "USE_PROXY_FROM_FILE",
    "random",
    "includes",
    "https://httpbin.org/ip",
    "\x20|\x20🚀\x20Starting\x20session...",
    "164216nXNbaN",
    "headers",
    "\x20|\x20✅\x20Successfully\x20upgraded\x20multiclick\x20to\x20level\x20<lb>",
    "url",
    "message",
    "port",
    "ENOTFOUND",
    "messages",
    "1389110fkzeSm",
    "\x20|\x20❗️Invalid\x20Random\x20Taps\x20Count.\x20RANDOM_TAPS_COUNT\x20MIN\x20must\x20be\x20less\x20than\x20RANDOM_TAPS_COUNT\x20MAX.\x20Example:\x20RANDOM_TAPS_COUNT:\x20[10,\x2020]",
    "Unknown",
    "RANDOM_TAPS_COUNT",
    "get",
    "success",
    "parse",
    "getTime",
    "../config/userAgents",
    "code",
    "6XotHYA",
    "</gr>)\x20|⚡Remaining\x20Energy:\x20<bl>",
    "101121SXozyw",
    "axios",
    "socksType",
    "session_user_agents.json",
    "getaddrinfo",
    "channels",
    "522dUhUKZ",
    "test",
    "run",
    "bot",
    "exports",
    "\x20|\x20❗️Invalid\x20Random\x20Taps\x20Count.\x20RANDOM_TAPS_COUNT\x20MAX\x20must\x20be\x20less\x20than\x20or\x20equal\x20to\x201000.\x20Example:\x20RANDOM_TAPS_COUNT:\x20[10,\x201000]",
    "ENOENT",
    "webviewUrl",
    "create",
    "android",
    "upgrade_boost",
    "password",
    "telegram",
    "1714870airVEa",
    "energyLeft",
    "session_user_agents",
    "../utils/sleep",
    "payload",
    "ios",
    "httpbin.org",
    "floor",
    "RequestWebView",
    "\x20|\x20❗️Unknown\x20error\x20during\x20Authorization:\x20",
    "://",
    "launch-params",
    "\x20|\x20Error:\x20",
    "info",
    "peer",
    "\x20|\x20No\x20proxy\x20will\x20be\x20used.",
    "username",
    "\x20|\x20✅\x20Successfully\x20claimed\x20ads.",
    "</lb>",
    "MAX_MULTICLICKS_LEVEL",
    "lodash",
  ];
  _0x5e51 = function () {
    return _0x25e9e4;
  };
  return _0x5e51();
}
