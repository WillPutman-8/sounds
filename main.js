function noise(s) {
  switch (s) {
    case "bruh":
      let b_sound = new Audio("sounds/bruh2.mp3");
      b_sound.play();
      break;
    case "kirby":
      let k_sound = new Audio("sounds/chickenStrip.mp3");
      k_sound.play();
      break;
    case "vine":
      let v_sound = new Audio("sounds/vineBoom.mp3");
      v_sound.play();
      break;
    case "android":
        let a_sound = new Audio("sounds/android.mp3");
        a_sound.play();
        break;
    case "bass":
        let bass_sound = new Audio("sounds/bassDrop.mp3");
        bass_sound.play();
        break;
    case "waluigi":
        let w_sound = new Audio("sounds/waluigi.mp3");
        w_sound.play();
        break;
    case "fail":
        let fail_sound = new Audio("sounds/fail.mp3");
        fail_sound.play();
        break;
    case "popeyes":
        let popeye_sound = new Audio("sounds/popeyes.mp3");
        popeye_sound.play();
        break;
    case "rahhh":
        let rahh_sound = new Audio("sounds/rahh.mp3");
        rahh_sound.play();
        break;
    case "ah":
        let ah_sound = new Audio("sounds/reverbAhhh.mp3");
        ah_sound.play();
        break;
    case "fart":
        let fart_sound = new Audio("sounds/reverbFart.mp3");
        fart_sound.play();
        break;
    case "rizz":
        let rizz_sound = new Audio("sounds/rizz.mp3");
        rizz_sound.play();
        break;
    case "slam":
        let slam_sound = new Audio("sounds/slam.mp3");
        slam_sound.play();
        break;
    case "what":
        let what_sound = new Audio("sounds/what.mp3");
        what_sound.play();
        break;
    case "xp":
        let xp_sound = new Audio("sounds/xpcrash.mp3");
        xp_sound.play();
        break;
    case "xxx":
        let x_sound = new Audio("sounds/xxxAh.mp3");
        x_sound.play();
        break;
    case "gang":
        let gang_sound = new Audio("sounds/obama.mp3");
        gang_sound.play();
        break;
    case "wow":
        let wow_sound = new Audio("sounds/wow.mp3");
        wow_sound.play();
        break;
    default:
      break;
  };
};


$(".btn").on("click", function(){
    let sounds = this.id;
    noise(sounds);
    console.log(sounds);
});

