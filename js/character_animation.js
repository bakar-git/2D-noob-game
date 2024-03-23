var idle_anim = [
    "../images/char/idle/idle0.png",
    "../images/char/idle/idle1.png",
    "../images/char/idle/idle2.png",
    "../images/char/idle/idle3.png",
    "../images/char/idle/idle4.png",
    "../images/char/idle/idle5.png",
    "../images/char/idle/idle6.png",
    "../images/char/idle/idle7.png",
];
var run_anim = [
    "../images/char/run/run0.png",
    "../images/char/run/run0.png",
    "../images/char/run/run0.png",
    "../images/char/run/run1.png",
    "../images/char/run/run1.png",
    "../images/char/run/run1.png",
    "../images/char/run/run2.png",
    "../images/char/run/run2.png",
    "../images/char/run/run2.png",
    "../images/char/run/run3.png",
    "../images/char/run/run3.png",
    "../images/char/run/run3.png",
    "../images/char/run/run4.png",
    "../images/char/run/run4.png",
    "../images/char/run/run4.png",
    "../images/char/run/run5.png",
    "../images/char/run/run5.png",
    "../images/char/run/run5.png",
];
var frame1 = true;
var frame2 = false;
var frame3 = false;
var frame4 = false;
var frame5 = false;
var frame6 = false;
var frame7 = false;
var frame8 = false;
var frame9 = false;
var run_stepAudio = function () {
    if (frame1) {
        if (frame2) {
            if (frame3) {
                if (frame4) {
                    if (frame5) {
                        if (frame6) {
                            if (frame7) {
                                if (frame8) {
                                    if (frame9) {
                                        var step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step1.m4a\">");
                                        $("body").append(step_audio);
                                        step_audio.get(0).volume = 1;
                                        step_audio.get(0).play();
                                        setTimeout(function () {
                                            step_audio.remove();
                                        }, 500)
                                        frame2 = false;
                                        frame3 = false;
                                        frame4 = false;
                                        frame5 = false;
                                        frame6 = false;
                                        frame7 = false;
                                        frame8 = false;
                                        frame9 = false;
                                    } else frame9 = true;
                                } else frame8 = true;
                            } else frame7 = true;
                        } else frame6 = true;
                    } else frame5 = true;
                } else frame4 = true;
            } else frame3 = true;
        } else frame2 = true;
    }
}
var attack_anim = [
    "../images/char/pistol/pistol0.png",
    "../images/char/pistol/pistol1.png",
    "../images/char/pistol/pistol2.png",
    "../images/char/pistol/pistol3.png",
    "../images/char/pistol/pistol4.png",
    "../images/char/pistol/pistol5.png"
];
var death_anim = [
    "../images/char/hurt/0.png",
    "../images/char/hurt/1.png",
    "../images/char/hurt/2.png",
    "../images/char/hurt/3.png",
    "../images/char/hurt/4.png",
    "../images/char/hurt/5.png",
    "../images/char/hurt/6.png",
    "../images/char/hurt/7.png",
    "../images/char/hurt/8.png"
];
var jump_anim = [
    "../images/char/jump/0.png",
    "../images/char/jump/1.png",
    "../images/char/jump/2.png",
    "../images/char/jump/3.png",
    "../images/char/jump/4.png",
    "../images/char/jump/5.png",
    "../images/char/jump/6.png",
    "../images/char/jump/7.png"
];