const { Random, Console } = require("@woowacourse/mission-utils");

const InputView = {
  startMent() {
    Console.print(`무기 강화 게임을 시작합니다.`);
  },

  // 강화 도전 여부
  readChallengeCommand(callback) {
    Console.readLine(
      `강화 도전 여부를 입력해주세요.(도전: Y, 중단: N)`,
      callback
    );
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput() {},
};

module.exports = InputView;
