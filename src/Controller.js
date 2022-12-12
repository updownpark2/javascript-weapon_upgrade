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
    const upgrade = this.#upgradeGame.getUpgrage();
    OutputView.showUpgrade(upgrade);
  }
  #getChallenge() {
    InputView.readChallengeCommand((challenge) => {
      if (this.#checkChallenge(challenge) !== false) {
        console.log(challenge);
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

  #ValidationFailAndShowError(error) {
    OutputView.showError(error);
  }
}

module.exports = Controller;
