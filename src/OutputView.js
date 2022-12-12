const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  showUpgrade(upgrade) {
    Console.print(`현재 강화 등급: +${upgrade}`);
  },
};

module.exports = OutputView;
