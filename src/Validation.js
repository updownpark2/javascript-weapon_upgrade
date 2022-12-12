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

  #checkMinigameInputNumRange(miniGameInput) {
    if (/^[0-9|O|X]*$/g.test(miniGameInput) === false) {
      throw new Error(`[ERROR] 0~9사이의 숫자만 입력해주세요.`);
    }
  }

  #checkMinigameInputNumLength(miniGameInput) {
    if (miniGameInput.length !== 1) {
      throw new Error(`[ERROR] 숫자는 1개만 입력이 가능합니다.`);
    }
  }

  checkMinigameInput(miniGameInput) {
    this.#checkMinigameInputNumRange(miniGameInput);
    this.#checkMinigameInputNumLength(miniGameInput);
  }
}

module.exports = Validation;
