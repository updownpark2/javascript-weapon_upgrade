class Validation {
  #checkChallengeRange(challenge) {
    if (/^[Y|N]/g.test(challenge) === false) {
      throw new Error(`[ERROR Y 또는 N 만 입력이 가능합니다.]`);
    }
  }

  #checkChallengeLength(challenge) {
    if (challenge.length !== 1) {
      throw new Error(`[ERROR] Y 또는 N 한 글자만 입력기 가능합니다.`);
    }
  }

  checkChallenge(challenge) {
    this.#checkChallengeRange(challenge);
    this.#checkChallengeLength(challenge);
  }
}

module.exports = Validation;
