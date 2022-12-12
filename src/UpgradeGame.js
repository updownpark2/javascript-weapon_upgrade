const generateMiniGameNumber = require(`./generateMiniGameNumber`);

class UpgradeGame {
  #upgradeCount = 0;
  #upgradeProbability = 80;

  getUpgrade() {
    return this.#upgradeCount;
  }
  upgradePro;

  isChallenge(challenge) {
    if (challenge === `Y`) {
      return true;
    }
    return false;
  }

  #isNumber(miniGameInput) {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (numArr.includes(miniGameInput)) {
      return true;
    }
  }
  #isOddEven(miniGameInput) {
    if (miniGameInput === "O" || miniGameInput === "E") {
      return true;
    }
  }

  plusProbability(miniGameInput) {
    if (this.#isNumber(miniGameInput) === true) {
      this.#judgementNumber(miniGameInput);
    }
    if (this.#isOddEven(miniGameInput) === true) {
      this.#judgementOddEven(miniGameInput);
    }
  }

  #judgementNumber(miniGameInput) {
    const randomNum = generateMiniGameNumber();
    if (miniGameInput === randomNum) {
      this.#upgradeProbability = this.#upgradeProbability + 50;
    }
  }

  #judgementOddEven(miniGameInput) {
    const randomOddEvenNum = generateMiniGameNumber();
    const miniGameInputNum = this.#translateToNum(miniGameInput);

    if (randomOddEvenNum === miniGameInputNum) {
      this.#upgradeProbability = this.#upgradeProbability + 10;
    }
  }

  #translateToNum(miniGameInput) {
    if (miniGameInput === "O") {
      return 1;
    }
    return 0;
  }

  #upgradeCountUp() {
    this.#upgradeCount = this.#upgradeCount + 1;
  }

  #resetProbability() {
    this.#upgradeProbability = 90 - this.#upgradeCount * 10;
  }
}

module.exports = UpgradeGame;
