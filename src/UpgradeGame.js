class UpgradeGame {
  #upgrade = 0;

  getUpgrage() {
    return this.#upgrade;
  }

  isChallenge(challenge) {
    if (challenge === "Y") {
      return true;
    }
    return false;
  }
}

module.exports = UpgradeGame;
