const generateMiniGameNumber = require(`./generateMiniGameNumber`);
const UpgradeUtils = require(`./UpgradeUtils`);

class UpgradeGame {
  #upgradeCount = 0;
  #upgradeProbability = [80, 70, 60, 50, 45, 40, 35, 30, 20, 10];
  #probability = 0;

  getUpgrade() {
    return this.#upgradeCount;
  }

  isChallenge(challenge) {
    if (challenge === `Y`) {
      return true;
    }
    return false;
  }

  #isNumber(miniGameInput) {
    const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numArr.includes(miniGameInput)) {
      return true;
    }
  }
  #isOddEven(miniGameInput) {
    if (miniGameInput === "O" || miniGameInput === "E") {
      return true;
    }
  }

  #plusProbability(miniGameInput) {
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
      this.#probability = this.#upgradeProbability[this.#upgradeCount] + 50;
      return;
    }
    this.#probability = this.#upgradeProbability[this.#upgradeCount];
  }

  #judgementOddEven(miniGameInput) {
    const randomOddEvenNum = generateMiniGameNumber();
    const miniGameInputNum = this.#translateToNum(miniGameInput);

    if (randomOddEvenNum === miniGameInputNum) {
      this.#probability = this.#upgradeProbability[this.#upgradeCount] + 10;
      return;
    }
    this.#probability = this.#upgradeProbability[this.#upgradeCount];
  }

  #translateToNum(miniGameInput) {
    if (miniGameInput === "O") {
      return 1;
    }
    return 0;
  }

  isSuccessUpgrade(miniGameInput) {
    this.#plusProbability(miniGameInput);
    const probability = this.#probability;
    return UpgradeUtils.isUpgraded(probability);
  }

  #upgradeCountUp() {
    this.#upgradeCount = this.#upgradeCount + 1;
  }

  #resetProbability() {
    this.#probability = 0;
  }

  sucessAndReset() {
    this.#upgradeCountUp();
    this.#resetProbability();
  }

  getUpgradeCount() {
    return this.#upgradeCount;
  }

  getUpgradeProbability() {
    if (this.#probability >= 100) {
      return 100;
    }
    return this.#probability;
  }
}

module.exports = UpgradeGame;
