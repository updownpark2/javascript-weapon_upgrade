const InputView = require(`./InputView`);
const OutputView = require(`./OutputView`);
const UpgradeGame = require(`./UpgradeGame`);
const Validation = require("./Validation");

class Controller {
  #upgradeGame = new UpgradeGame();
  #validation = new Validation();

  start() {
    this.#startMent();
    this.#getAndShowUpgrade();
    this.#getChallenge();
  }

  #startMent() {
    InputView.startMent();
  }

  #getAndShowUpgrade() {
    const upgrade = this.#upgradeGame.getUpgrade();
    OutputView.showUpgrade(upgrade);
  }

  #getChallenge() {
    InputView.readChallengeCommand((challenge) => {
      if (this.#checkChallenge(challenge) !== false) {
        this.#challengeOrStop(challenge);
        return;
      }
    });
  }

  #checkChallenge(challenge) {
    try {
      this.#validation.checkChallenge(challenge);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.#getChallenge();

      return false;
    }
  }

  #challengeOrStop(challenge) {
    if (this.#upgradeGame.isChallenge(challenge) === true) {
      this.#getMiniGameInput();
      return;
    }
    this.#getAndshowResult();
  }

  #getAndshowResult() {
    const upgrade = this.#upgradeGame.getUpgrade();
    OutputView.showUpgrade(upgrade);
  }

  #getMiniGameInput() {
    InputView.readMiniGameInput((miniGameInput) => {
      if (this.#checkMinigameInput(miniGameInput) !== false) {
        this.#upgradeSuccessOrFail(miniGameInput);
      }
    });
  }

  #checkMinigameInput(miniGameInput) {
    try {
      this.#validation.checkMinigameInput(miniGameInput);
    } catch (error) {
      this.#validationFailAndShowError(error);
      this.#getMiniGameInput();

      return false;
    }
  }

  #validationFailAndShowError(error) {
    OutputView.showError(error);
  }

  #getResultOfUpgrade(miniGameInput) {
    return this.#upgradeGame.isSuccess(miniGameInput);
  }

  #upgradeSuccess() {
    this.#upgradeGame.successAndreset();
    this.#getChallenge();
  }
  #upgradeFail() {
    const upgradeCount = this.#upgradeGame.getUpgradeCount();
    const upgradeProbability = this.#upgradeGame.getUpgradeProbability();
    OutputView.showResultOfUpgradeCount(upgradeCount);
    OutputView.showResultOfUpgrade("실패", upgradeProbability);
  }

  #upgradeSuccessOrFail(miniGameInput) {
    if (this.#getResultOfUpgrade(miniGameInput) === true) {
      this.#upgradeSuccess();
      return;
    }
    this.#upgradeFail();
  }
}

module.exports = Controller;
