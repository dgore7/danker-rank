module.exports = class State {
  constructor(prevState) {
    if (!prevState) {
      this.memeOne = {'memeID' : 1, 'score' : 0};
      this.memeTwo = {'memeID' : 2, 'score' : 0};
    } else {
      this.memeOne = {'memeID' : prevState.memeOne.memeID + 2, 'score' : 0};
      this.memeTwo = {'memeID' : prevState.memeTwo.memeID + 2, 'score' : 0};
    }
  }
};
