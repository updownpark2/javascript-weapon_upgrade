const { Random, Console } = require("@woowacourse/mission-utils");

const InputView = {
  startMent() {
    Console.print(`무기 강화 게임을 시작합니다.`);
  },

  // 강화 도전 여부
  readChallengeCommand() {},

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput() {},
};

module.exports = InputView;
