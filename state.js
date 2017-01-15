module.exports = class State {
  constructor(prevState) {
    this.winner = false;
    if (!prevState) {
      this.memeOne = {'memeID' : 1372374, 'score' : 0};
      this.memeTwo = {'memeID' : 1000000, 'score' : 0};
    } else {
      this.memeOne = {'memeID' : prevState.memeOne.memeID + 2, 'score' : 0};
      this.memeTwo = {'memeID' : prevState.memeTwo.memeID + 2, 'score' : 0};
    }
  }
};
