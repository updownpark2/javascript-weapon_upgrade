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
      }
    });
  }

  #checkChallenge(challenge) {
    try {
      this.#validation.checkChallenge(challenge);
    } catch (error) {
      this.#ValidationFailAndShowError(error);
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
    OutputView.showResult(upgrade);
  }

  #getMiniGameInput() {
    InputView.readMiniGameInput((miniGameInput) => {
      this.#checkMinigameInput(miniGameInput);
    });
  }

  #checkMinigameInput(miniGameInput) {
    try {
      this.#validation.checkMinigameInput(miniGameInput);
    } catch (error) {
      this.#ValidationFailAndShowError(error);
      this.#getMiniGameInput();

      return false;
    }
  }

  #ValidationFailAndShowError(error) {
    OutputView.showError(error);
  }
}

module.exports = Controller;
