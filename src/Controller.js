const InputView = require(`./InputView`);
const OutputView = require(`./OutputView`);
const UpgradeGame = require(`./UpgradeGame`);

class Controller {
  #upgradeGame = new UpgradeGame();

  start() {
    this.#startMent();
    this.#getAndShowUpgrade();
  }

  #startMent() {
    InputView.startMent();
  }

  #getAndShowUpgrade() {
    const upgrade = this.#upgradeGame.getUpgrage();
    OutputView.showUpgrade(upgrade);
  }
}

module.exports = Controller;
