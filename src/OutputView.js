const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  showUpgrade(upgrade) {
    Console.print(`현재 강화 등급: +${upgrade}`);
  },

  showError(error) {
    Console.print(error);
  },

  showResultOfUpgradeCount(upgradeCount) {
    Console.print(`최종 강화 결과: ${upgradeCount}`);
  },

  showResultOfUpgrade(successOrFail, probability) {
    Console.print(`강화 ${successOrFail}! (강화 확률 ${probability}%)`);
  },
};

module.exports = OutputView;
