const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  showUpgrade(upgrade) {
    Console.print(`현재 강화 등급: +${upgrade}`);
    Console.close();
  },

  showError(error) {
    Console.print(error);
  },

  showResult(upgrade) {
    Console.print(`최종 강화 결과: ${upgrade}`);
    Console.close();
  },
};

module.exports = OutputView;
