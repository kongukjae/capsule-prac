let d = 456
a = 123;

const itsMe = {
  name: "leejaekwon",
  age: 27,
  home: "oracle",
  hosil: "305ho",
  sentence: "저는" + this.name + "입니다",
  test: `저는 ${this.name}입니다`,

  adult: function() {
    if(this.age >= 20) {
      console.log("나는 성인이야");
    } else {
      console.log("나는 아직 성인이 아니야");
    }
  },
  nickName: function () {
    this.name = "이재권"
  }
  
};