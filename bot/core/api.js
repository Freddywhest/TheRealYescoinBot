function _0x2c10() {
  const _0x5676bd = [
    "getaddrinfo",
    "2360534kYZdgB",
    "reference",
    "defaults",
    "/v2/tasks/claimAdsgramAdReward",
    "2690758GVSEsH",
    "ENOTFOUND",
    "20219604paXYkx",
    "/v2/tasks/getDailyReward",
    "apiUrl",
    "\x20|\x20Error\x20while\x20<b>trying\x20your\x20luck\x20on\x20doubling\x20coins:</b>\x20",
    "application/json",
    "random",
    "lodash",
    "append",
    "get_boost_data",
    "session_name",
    "12fjbqCq",
    "stringify",
    "\x20|\x20Error\x20while\x20<b>sending\x20taps:</b>\x20",
    "unknown\x20address",
    "post",
    "content-type",
    "\x20|\x20Error\x20while\x20<b>getting\x20daily\x20reward:</b>\x20",
    "../utils/sleep",
    "/v2/tasks/claimDailyReward",
    "/v2/boosts/get",
    "260470OTmkwf",
    "response",
    "\x20|\x20Error\x20while\x20<b>upgrading\x20Boost:</b>:\x20",
    "get_daily_reward",
    "9823932toFBTW",
    "/v2/boosts/buy",
    "claim_ads",
    "\x20|\x20Error\x20while\x20getting\x20User\x20Data:\x20",
    "error",
    "4NFDPfy",
    "match",
    "16Aqlutv",
    "viewCompletedAt",
    "147268dOyyXv",
    "70TQWOlt",
    "\x20|\x20Error\x20while\x20getting\x20Boost\x20Data:\x20",
    "\x20|\x20Error\x20while\x20<b>claiming\x20ads:</b>\x20",
    "/v2/user/getScore",
    "form-data",
    "exports",
    "data",
    "message",
    "headers",
    "includes",
    "144gtEUho",
    "1360752NivwcF",
    "../config/app",
    "_boundary",
  ];
  _0x2c10 = function () {
    return _0x5676bd;
  };
  return _0x2c10();
}
const _0xbd7281 = _0x46ba;
(function (_0x7dce0, _0x466543) {
  const _0x45bddf = _0x46ba,
    _0x51adef = _0x7dce0();
  while (!![]) {
    try {
      const _0x381501 =
        (-parseInt(_0x45bddf(0x84)) / 0x1) * (parseInt(_0x45bddf(0x9b)) / 0x2) +
        (-parseInt(_0x45bddf(0x70)) / 0x3) * (parseInt(_0x45bddf(0x97)) / 0x4) +
        (-parseInt(_0x45bddf(0x8e)) / 0x5) * (parseInt(_0x45bddf(0x6f)) / 0x6) +
        (-parseInt(_0x45bddf(0x78)) / 0x7) * (parseInt(_0x45bddf(0x99)) / 0x8) +
        parseInt(_0x45bddf(0x92)) / 0x9 +
        (-parseInt(_0x45bddf(0x9c)) / 0xa) *
          (-parseInt(_0x45bddf(0x74)) / 0xb) +
        parseInt(_0x45bddf(0x7a)) / 0xc;
      if (_0x381501 === _0x466543) break;
      else _0x51adef["push"](_0x51adef["shift"]());
    } catch (_0x1f225a) {
      _0x51adef["push"](_0x51adef["shift"]());
    }
  }
})(_0x2c10, 0xe1345);
const FormData = require(_0xbd7281(0xa0)),
  app = require(_0xbd7281(0x71)),
  logger = require("../utils/logger"),
  sleep = require(_0xbd7281(0x8b));
var _ = require(_0xbd7281(0x80));
function _0x46ba(_0x5973a, _0x542ba2) {
  const _0x2c10f0 = _0x2c10();
  return (
    (_0x46ba = function (_0x46ba3d, _0x13969e) {
      _0x46ba3d = _0x46ba3d - 0x6a;
      let _0x5e4cca = _0x2c10f0[_0x46ba3d];
      return _0x5e4cca;
    }),
    _0x46ba(_0x5973a, _0x542ba2)
  );
}
class ApiRequest {
  constructor(_0x1a5149) {
    const _0x19ae96 = _0xbd7281;
    this[_0x19ae96(0x83)] = _0x1a5149;
  }
  async ["get_user_data"](_0x64729e) {
    const _0x29d938 = _0xbd7281;
    try {
      _0x64729e[_0x29d938(0x76)][_0x29d938(0x6d)][_0x29d938(0x89)] =
        _0x29d938(0x7e);
      const _0x1ca8ed = await _0x64729e[_0x29d938(0x88)](
        app[_0x29d938(0x7c)] + _0x29d938(0x9f),
        JSON[_0x29d938(0x85)]({})
      );
      return _0x1ca8ed["data"];
    } catch (_0x3112a4) {
      const _0x3e0f31 = /ENOTFOUND\s([^\s]+)/,
        _0x4c898f = _0x3112a4[_0x29d938(0x6c)][_0x29d938(0x98)](_0x3e0f31);
      logger[_0x29d938(0x96)](
        this[_0x29d938(0x83)] +
          _0x29d938(0x95) +
          (_0x3112a4[_0x29d938(0x6c)][_0x29d938(0x6e)](_0x29d938(0x79)) ||
          _0x3112a4[_0x29d938(0x6c)]["includes"](_0x29d938(0x73)) ||
          _0x3112a4["message"][_0x29d938(0x6e)]("ECONNREFUSED")
            ? "The\x20proxy\x20server\x20at\x20" +
              (_0x4c898f && _0x4c898f[0x1] ? _0x4c898f[0x1] : _0x29d938(0x87)) +
              "\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection"
            : _0x3112a4[_0x29d938(0x6c)])
      ),
        await sleep(0x3);
    }
  }
  async [_0xbd7281(0x82)](_0x2b318e) {
    const _0x206814 = _0xbd7281;
    try {
      _0x2b318e["defaults"][_0x206814(0x6d)][_0x206814(0x89)] = _0x206814(0x7e);
      const _0x1e6854 = await _0x2b318e[_0x206814(0x88)](
        app[_0x206814(0x7c)] + _0x206814(0x8d),
        JSON[_0x206814(0x85)]({})
      );
      return _0x1e6854[_0x206814(0x6b)];
    } catch (_0x4693b) {
      _0x4693b?.["response"]?.[_0x206814(0x6b)]?.["message"]
        ? logger["error"](
            this[_0x206814(0x83)] +
              _0x206814(0x9d) +
              _0x4693b?.[_0x206814(0x8f)]?.["data"]?.["message"]
          )
        : logger[_0x206814(0x96)](
            this[_0x206814(0x83)] + _0x206814(0x9d) + _0x4693b[_0x206814(0x6c)]
          );
    }
  }
  async ["upgrade_boost"](_0x1d67ce, _0x21f85c) {
    const _0x476206 = _0xbd7281;
    try {
      _0x1d67ce[_0x476206(0x76)][_0x476206(0x6d)]["content-type"] =
        _0x476206(0x7e);
      const _0xff71f = await _0x1d67ce[_0x476206(0x88)](
        app[_0x476206(0x7c)] + _0x476206(0x93),
        JSON["stringify"](_0x21f85c)
      );
      return _0xff71f[_0x476206(0x6b)];
    } catch (_0x4dd41c) {
      _0x4dd41c?.["response"]?.[_0x476206(0x6b)]?.["message"] &&
        (logger["error"](
          this[_0x476206(0x83)] +
            _0x476206(0x90) +
            _0x4dd41c?.[_0x476206(0x8f)]?.[_0x476206(0x6b)]?.[_0x476206(0x6c)]
        ),
        logger[_0x476206(0x96)](
          this[_0x476206(0x83)] + _0x476206(0x90) + _0x4dd41c[_0x476206(0x6c)]
        ));
    }
  }
  async ["send_taps"](_0x3c006a, _0x7947bf) {
    const _0x1edaf6 = _0xbd7281;
    try {
      _0x3c006a["defaults"][_0x1edaf6(0x6d)][_0x1edaf6(0x89)] =
        "application/json";
      const _0x43c131 = await _0x3c006a[_0x1edaf6(0x88)](
        app["apiUrl"] + "/v2/click/clickEvent",
        JSON[_0x1edaf6(0x85)](_0x7947bf)
      );
      return _0x43c131[_0x1edaf6(0x6b)];
    } catch (_0x3a50) {
      _0x3a50?.[_0x1edaf6(0x8f)]?.[_0x1edaf6(0x6b)]?.[_0x1edaf6(0x6c)]
        ? logger[_0x1edaf6(0x96)](
            this["session_name"] +
              _0x1edaf6(0x86) +
              _0x3a50?.[_0x1edaf6(0x8f)]?.[_0x1edaf6(0x6b)]?.[_0x1edaf6(0x6c)]
          )
        : logger[_0x1edaf6(0x96)](
            this["session_name"] + _0x1edaf6(0x86) + _0x3a50[_0x1edaf6(0x6c)]
          );
    }
  }
  async [_0xbd7281(0x91)](_0x28d42f) {
    const _0x1a20b1 = _0xbd7281;
    try {
      _0x28d42f[_0x1a20b1(0x76)][_0x1a20b1(0x6d)][_0x1a20b1(0x89)] =
        "application/json";
      const _0x235769 = await _0x28d42f[_0x1a20b1(0x88)](
        app[_0x1a20b1(0x7c)] + _0x1a20b1(0x7b),
        JSON[_0x1a20b1(0x85)]({})
      );
      return _0x235769[_0x1a20b1(0x6b)];
    } catch (_0x41a69d) {
      _0x41a69d?.[_0x1a20b1(0x8f)]?.[_0x1a20b1(0x6b)]?.[_0x1a20b1(0x6c)]
        ? logger[_0x1a20b1(0x96)](
            this[_0x1a20b1(0x83)] +
              _0x1a20b1(0x8a) +
              _0x41a69d?.[_0x1a20b1(0x8f)]?.[_0x1a20b1(0x6b)]?.[_0x1a20b1(0x6c)]
          )
        : logger[_0x1a20b1(0x96)](
            this[_0x1a20b1(0x83)] + _0x1a20b1(0x8a) + _0x41a69d[_0x1a20b1(0x6c)]
          );
    }
  }
  async ["claim_daily_reward"](_0x5d026a) {
    const _0x4419ad = _0xbd7281;
    try {
      _0x5d026a["defaults"][_0x4419ad(0x6d)]["content-type"] = _0x4419ad(0x7e);
      const _0x595647 = await _0x5d026a["post"](
        app[_0x4419ad(0x7c)] + _0x4419ad(0x8c),
        JSON[_0x4419ad(0x85)]({})
      );
      return _0x595647[_0x4419ad(0x6b)];
    } catch (_0x527e7e) {
      _0x527e7e?.[_0x4419ad(0x8f)]?.[_0x4419ad(0x6b)]?.[_0x4419ad(0x6c)]
        ? logger[_0x4419ad(0x96)](
            this["session_name"] +
              "\x20|\x20Error\x20while\x20<b>trying\x20your\x20luck\x20on\x20doubling\x20coins:</b>\x20" +
              _0x527e7e?.[_0x4419ad(0x8f)]?.[_0x4419ad(0x6b)]?.["message"]
          )
        : logger[_0x4419ad(0x96)](
            this["session_name"] + _0x4419ad(0x7d) + _0x527e7e["message"]
          );
    }
  }
  async [_0xbd7281(0x94)](_0x50b685) {
    const _0x4440d3 = _0xbd7281;
    try {
      const _0x1fe1e8 = new FormData();
      _0x1fe1e8[_0x4440d3(0x81)](_0x4440d3(0x9a), new Date()["getTime"]()),
        _0x1fe1e8[_0x4440d3(0x81)](
          _0x4440d3(0x75),
          _[_0x4440d3(0x7f)](0x1, 0x64)
        ),
        (_0x50b685[_0x4440d3(0x76)][_0x4440d3(0x6d)][_0x4440d3(0x89)] =
          "boundary=" + _0x1fe1e8[_0x4440d3(0x72)]);
      const _0x2f2050 = await _0x50b685[_0x4440d3(0x88)](
        app["apiUrl"] + _0x4440d3(0x77),
        _0x1fe1e8
      );
      return _0x2f2050[_0x4440d3(0x6b)];
    } catch (_0x5a8013) {
      _0x5a8013?.[_0x4440d3(0x8f)]?.[_0x4440d3(0x6b)]?.[_0x4440d3(0x6c)]
        ? logger["error"](
            this["session_name"] +
              _0x4440d3(0x9e) +
              _0x5a8013?.["response"]?.[_0x4440d3(0x6b)]?.["message"]
          )
        : logger[_0x4440d3(0x96)](
            this[_0x4440d3(0x83)] +
              "\x20|\x20Error\x20while\x20<b>claiming\x20ads:</b>\x20" +
              _0x5a8013[_0x4440d3(0x6c)]
          );
    }
  }
}
module[_0xbd7281(0x6a)] = ApiRequest;
