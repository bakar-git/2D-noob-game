var first_enemy_idle_anim = [
  "../images/enemy2/Idle/0.png",
  "../images/enemy2/Idle/1.png",
  "../images/enemy2/Idle/2.png",
  "../images/enemy2/Idle/3.png",
  "../images/enemy2/Idle/4.png",
  "../images/enemy2/Idle/5.png",
  "../images/enemy2/Idle/6.png",
  "../images/enemy2/Idle/7.png",
  "../images/enemy2/Idle/8.png",
  "../images/enemy2/Idle/9.png",
  "../images/enemy2/Idle/10.png",
  "../images/enemy2/Idle/11.png",
  "../images/enemy2/Idle/12.png",
  "../images/enemy2/Idle/13.png",
  "../images/enemy2/Idle/14.png",
  "../images/enemy2/Idle/15.png",
  "../images/enemy2/Idle/16.png",
  "../images/enemy2/Idle/17.png"
];
var first_enemy_run_anim = [
    "../images/enemy2/Running/0.png",
    "../images/enemy2/Running/1.png",
    "../images/enemy2/Running/2.png",
    "../images/enemy2/Running/3.png",
    "../images/enemy2/Running/4.png",
    "../images/enemy2/Running/5.png",
    "../images/enemy2/Running/6.png",
    "../images/enemy2/Running/7.png",
    "../images/enemy2/Running/8.png",
    "../images/enemy2/Running/9.png",
    "../images/enemy2/Running/10.png",
    "../images/enemy2/Running/11.png"
];
var first_enemy_slash_anim = [
    "../images/enemy2/Slashing/0.png",
    "../images/enemy2/Slashing/1.png",
    "../images/enemy2/Slashing/2.png",
    "../images/enemy2/Slashing/3.png",
    "../images/enemy2/Slashing/4.png",
    "../images/enemy2/Slashing/5.png",
    "../images/enemy2/Slashing/6.png",
    "../images/enemy2/Slashing/7.png",
    "../images/enemy2/Slashing/8.png",
    "../images/enemy2/Slashing/9.png",
    "../images/enemy2/Slashing/10.png",
    "../images/enemy2/Slashing/11.png",
];
var first_enemy_blink_anim = [
    "../images/enemy2/Blinking/0.png",
    "../images/enemy2/Blinking/1.png",
    "../images/enemy2/Blinking/2.png",
    "../images/enemy2/Blinking/3.png",
    "../images/enemy2/Blinking/4.png",
    "../images/enemy2/Blinking/5.png",
    "../images/enemy2/Blinking/6.png",
    "../images/enemy2/Blinking/7.png",
    "../images/enemy2/Blinking/8.png",
    "../images/enemy2/Blinking/9.png",
    "../images/enemy2/Blinking/10.png",
    "../images/enemy2/Blinking/11.png",
    "../images/enemy2/Blinking/12.png",
    "../images/enemy2/Blinking/13.png",
    "../images/enemy2/Blinking/14.png",
    "../images/enemy2/Blinking/15.png",
    "../images/enemy2/Blinking/16.png",
    "../images/enemy2/Blinking/17.png"
];
var blood_splash = [
    "../images/Bloodsplat/0.png",
    "../images/Bloodsplat/1.png",
    "../images/Bloodsplat/2.png",
    "../images/Bloodsplat/3.png",
    "../images/Bloodsplat/4.png",
    "../images/Bloodsplat/5.png",
    "../images/Bloodsplat/6.png",
    "../images/Bloodsplat/7.png"
];
var first_enemy_hurt_anim = [
    "../images/enemy2/Hurt/0.png",
    "../images/enemy2/Hurt/1.png",
    "../images/enemy2/Hurt/2.png",
    "../images/enemy2/Hurt/3.png",
    "../images/enemy2/Hurt/4.png",
    "../images/enemy2/Hurt/5.png",
    "../images/enemy2/Hurt/6.png",
    "../images/enemy2/Hurt/7.png",
    "../images/enemy2/Hurt/8.png",
    "../images/enemy2/Hurt/9.png",
    "../images/enemy2/Hurt/10.png",
    "../images/enemy2/Hurt/11.png"
];
var first_enemy_death_anim = [
    "../images/enemy2/Dying/0.png",
    "../images/enemy2/Dying/1.png",
    "../images/enemy2/Dying/2.png",
    "../images/enemy2/Dying/3.png",
    "../images/enemy2/Dying/4.png",
    "../images/enemy2/Dying/5.png",
    "../images/enemy2/Dying/6.png",
    "../images/enemy2/Dying/7.png",
    "../images/enemy2/Dying/8.png",
    "../images/enemy2/Dying/9.png",
    "../images/enemy2/Dying/10.png",
    "../images/enemy2/Dying/11.png",
    "../images/enemy2/Dying/12.png",
    "../images/enemy2/Dying/13.png",
    "../images/enemy2/Dying/14.png"
];
var orc_f0 = true;
var orc_f1 = false;
var orc_f2 = false;
var orc_f3 = false;
var orc_f4 = false;
var orc_f5 = false;
var orc_f6 = false;
var orc_f7 = false;
var orc_f8 = false;
var orc_f9 = false;
var orc_f10 = false;

function orc_run_sound() {
    if (orc_f0) {
        if (orc_f1) {
            if (orc_f2) {
                if (orc_f3) {
                    if (orc_f4) {
                        if (orc_f5) {
                            if (orc_f6) {
                                var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
                                $("#game").append(orc_step_audio);
                                orc_step_audio.get(0).play();
                                orc_f1 = false;
                                orc_f2 = false;
                                orc_f3 = false;
                                orc_f4 = false;
                                orc_f5 = false;
                                orc_f6 = false;
                            } else orc_f6 = true;
                        } else orc_f5 = true;
                    } else orc_f4 = true;
                } else orc_f3 = true;
            } else orc_f2 = true;
        } else {
            orc_f1 = true;
            var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
            $("#game").append(orc_step_audio);
            orc_step_audio.get(0).play();
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var second_enemy_idle_anim = [
  "../images/enemy1/Idle/0.png",
  "../images/enemy1/Idle/1.png",
  "../images/enemy1/Idle/2.png",
  "../images/enemy1/Idle/3.png",
  "../images/enemy1/Idle/4.png",
  "../images/enemy1/Idle/5.png",
  "../images/enemy1/Idle/6.png",
  "../images/enemy1/Idle/7.png",
  "../images/enemy1/Idle/8.png",
  "../images/enemy1/Idle/9.png",
  "../images/enemy1/Idle/10.png",
  "../images/enemy1/Idle/11.png",
  "../images/enemy1/Idle/12.png",
  "../images/enemy1/Idle/13.png",
  "../images/enemy1/Idle/14.png",
  "../images/enemy1/Idle/15.png",
  "../images/enemy1/Idle/16.png",
  "../images/enemy1/Idle/17.png"
];
var second_enemy_run_anim = [
    "../images/enemy1/Running/0.png",
    "../images/enemy1/Running/1.png",
    "../images/enemy1/Running/2.png",
    "../images/enemy1/Running/3.png",
    "../images/enemy1/Running/4.png",
    "../images/enemy1/Running/5.png",
    "../images/enemy1/Running/6.png",
    "../images/enemy1/Running/7.png",
    "../images/enemy1/Running/8.png",
    "../images/enemy1/Running/9.png",
    "../images/enemy1/Running/10.png",
    "../images/enemy1/Running/11.png"
];
var second_enemy_slash_anim = [
    "../images/enemy1/Slashing/0.png",
    "../images/enemy1/Slashing/1.png",
    "../images/enemy1/Slashing/2.png",
    "../images/enemy1/Slashing/3.png",
    "../images/enemy1/Slashing/4.png",
    "../images/enemy1/Slashing/5.png",
    "../images/enemy1/Slashing/6.png",
    "../images/enemy1/Slashing/7.png",
    "../images/enemy1/Slashing/8.png",
    "../images/enemy1/Slashing/9.png",
    "../images/enemy1/Slashing/10.png",
    "../images/enemy1/Slashing/11.png",
];
var second_enemy_blink_anim = [
    "../images/enemy1/Blinking/0.png",
    "../images/enemy1/Blinking/1.png",
    "../images/enemy1/Blinking/2.png",
    "../images/enemy1/Blinking/3.png",
    "../images/enemy1/Blinking/4.png",
    "../images/enemy1/Blinking/5.png",
    "../images/enemy1/Blinking/6.png",
    "../images/enemy1/Blinking/7.png",
    "../images/enemy1/Blinking/8.png",
    "../images/enemy1/Blinking/9.png",
    "../images/enemy1/Blinking/10.png",
    "../images/enemy1/Blinking/11.png",
    "../images/enemy1/Blinking/12.png",
    "../images/enemy1/Blinking/13.png",
    "../images/enemy1/Blinking/14.png",
    "../images/enemy1/Blinking/15.png",
    "../images/enemy1/Blinking/16.png",
    "../images/enemy1/Blinking/17.png"
];
var orc_2_1_f0 = true;
var orc_2_1_f1 = false;
var orc_2_1_f2 = false;
var orc_2_1_f3 = false;
var orc_2_1_f4 = false;
var orc_2_1_f5 = false;
var orc_2_1_f6 = false;
var orc_2_1_f7 = false;
var orc_2_1_f8 = false;
var orc_2_1_f9 = false;
var orc_2_1_f10 = false;

function orc_run_sound2_1() {
    if (orc_2_1_f0) {
        if (orc_2_1_f1) {
            if (orc_2_1_f2) {
                if (orc_2_1_f3) {
                    if (orc_2_1_f4) {
                        if (orc_2_1_f5) {
                            if (orc_2_1_f6) {
                                var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
                                $("#game").append(orc_step_audio);
                                orc_step_audio.get(0).play();
                                orc_2_1_f1 = false;
                                orc_2_1_f2 = false;
                                orc_2_1_f3 = false;
                                orc_2_1_f4 = false;
                                orc_2_1_f5 = false;
                                orc_2_1_f6 = false;
                            } else orc_2_1_f6 = true;
                        } else orc_2_1_f5 = true;
                    } else orc_2_1_f4 = true;
                } else orc_2_1_f3 = true;
            } else orc_2_1_f2 = true;
        } else {
            orc_2_1_f1 = true;
            var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
            $("#game").append(orc_step_audio);
            orc_step_audio.get(0).play();
        }
    }
}
var second_enemy_hurt_anim = [
    "../images/enemy1/Hurt/0.png",
    "../images/enemy1/Hurt/1.png",
    "../images/enemy1/Hurt/2.png",
    "../images/enemy1/Hurt/3.png",
    "../images/enemy1/Hurt/4.png",
    "../images/enemy1/Hurt/5.png",
    "../images/enemy1/Hurt/6.png",
    "../images/enemy1/Hurt/7.png",
    "../images/enemy1/Hurt/8.png",
    "../images/enemy1/Hurt/9.png",
    "../images/enemy1/Hurt/10.png",
    "../images/enemy1/Hurt/11.png"
];
var second_enemy_death_anim = [
    "../images/enemy1/Dying/0.png",
    "../images/enemy1/Dying/1.png",
    "../images/enemy1/Dying/2.png",
    "../images/enemy1/Dying/3.png",
    "../images/enemy1/Dying/4.png",
    "../images/enemy1/Dying/5.png",
    "../images/enemy1/Dying/6.png",
    "../images/enemy1/Dying/7.png",
    "../images/enemy1/Dying/8.png",
    "../images/enemy1/Dying/9.png",
    "../images/enemy1/Dying/10.png",
    "../images/enemy1/Dying/11.png",
    "../images/enemy1/Dying/12.png",
    "../images/enemy1/Dying/13.png",
    "../images/enemy1/Dying/14.png"
];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var third_enemy_idle_anim = [
  "../images/enemy3/Idle/0.png",
  "../images/enemy3/Idle/1.png",
  "../images/enemy3/Idle/2.png",
  "../images/enemy3/Idle/3.png",
  "../images/enemy3/Idle/4.png",
  "../images/enemy3/Idle/5.png",
  "../images/enemy3/Idle/6.png",
  "../images/enemy3/Idle/7.png",
  "../images/enemy3/Idle/8.png",
  "../images/enemy3/Idle/9.png",
  "../images/enemy3/Idle/10.png",
  "../images/enemy3/Idle/11.png",
  "../images/enemy3/Idle/12.png",
  "../images/enemy3/Idle/13.png",
  "../images/enemy3/Idle/14.png",
  "../images/enemy3/Idle/15.png",
  "../images/enemy3/Idle/16.png",
  "../images/enemy3/Idle/17.png"
];
var third_enemy_run_anim = [
    "../images/enemy3/Running/0.png",
    "../images/enemy3/Running/1.png",
    "../images/enemy3/Running/2.png",
    "../images/enemy3/Running/3.png",
    "../images/enemy3/Running/4.png",
    "../images/enemy3/Running/5.png",
    "../images/enemy3/Running/6.png",
    "../images/enemy3/Running/7.png",
    "../images/enemy3/Running/8.png",
    "../images/enemy3/Running/9.png",
    "../images/enemy3/Running/10.png",
    "../images/enemy3/Running/11.png"
];
var third_enemy_slash_anim = [
    "../images/enemy3/Slashing/0.png",
    "../images/enemy3/Slashing/1.png",
    "../images/enemy3/Slashing/2.png",
    "../images/enemy3/Slashing/3.png",
    "../images/enemy3/Slashing/4.png",
    "../images/enemy3/Slashing/5.png",
    "../images/enemy3/Slashing/6.png",
    "../images/enemy3/Slashing/7.png",
    "../images/enemy3/Slashing/8.png",
    "../images/enemy3/Slashing/9.png",
    "../images/enemy3/Slashing/10.png",
    "../images/enemy3/Slashing/11.png",
];
var third_enemy_blink_anim = [
    "../images/enemy3/Blinking/0.png",
    "../images/enemy3/Blinking/1.png",
    "../images/enemy3/Blinking/2.png",
    "../images/enemy3/Blinking/3.png",
    "../images/enemy3/Blinking/4.png",
    "../images/enemy3/Blinking/5.png",
    "../images/enemy3/Blinking/6.png",
    "../images/enemy3/Blinking/7.png",
    "../images/enemy3/Blinking/8.png",
    "../images/enemy3/Blinking/9.png",
    "../images/enemy3/Blinking/10.png",
    "../images/enemy3/Blinking/11.png",
    "../images/enemy3/Blinking/12.png",
    "../images/enemy3/Blinking/13.png",
    "../images/enemy3/Blinking/14.png",
    "../images/enemy3/Blinking/15.png",
    "../images/enemy3/Blinking/16.png",
    "../images/enemy3/Blinking/17.png"
];
var orc_2_2_f0 = true;
var orc_2_2_f1 = false;
var orc_2_2_f2 = false;
var orc_2_2_f3 = false;
var orc_2_2_f4 = false;
var orc_2_2_f5 = false;
var orc_2_2_f6 = false;
var orc_2_2_f7 = false;
var orc_2_2_f8 = false;
var orc_2_2_f9 = false;
var orc_2_2_f10 = false;

function orc_run_sound2_2() {
    if (orc_2_2_f0) {
        if (orc_2_2_f1) {
            if (orc_2_2_f2) {
                if (orc_2_2_f3) {
                    if (orc_2_2_f4) {
                        if (orc_2_2_f5) {
                            if (orc_2_2_f6) {
                                var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
                                $("#game").append(orc_step_audio);
                                orc_step_audio.get(0).play();
                                orc_2_2_f1 = false;
                                orc_2_2_f2 = false;
                                orc_2_2_f3 = false;
                                orc_2_2_f4 = false;
                                orc_2_2_f5 = false;
                                orc_2_2_f6 = false;
                            } else orc_2_2_f6 = true;
                        } else orc_2_2_f5 = true;
                    } else orc_2_2_f4 = true;
                } else orc_2_2_f3 = true;
            } else orc_2_2_f2 = true;
        } else {
            orc_2_2_f1 = true;
            var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
            $("#game").append(orc_step_audio);
            orc_step_audio.get(0).play();
        }
    }
}
var third_enemy_hurt_anim = [
    "../images/enemy3/Hurt/0.png",
    "../images/enemy3/Hurt/1.png",
    "../images/enemy3/Hurt/2.png",
    "../images/enemy3/Hurt/3.png",
    "../images/enemy3/Hurt/4.png",
    "../images/enemy3/Hurt/5.png",
    "../images/enemy3/Hurt/6.png",
    "../images/enemy3/Hurt/7.png",
    "../images/enemy3/Hurt/8.png",
    "../images/enemy3/Hurt/9.png",
    "../images/enemy3/Hurt/10.png",
    "../images/enemy3/Hurt/11.png"
];
var third_enemy_death_anim = [
    "../images/enemy3/Dying/0.png",
    "../images/enemy3/Dying/1.png",
    "../images/enemy3/Dying/2.png",
    "../images/enemy3/Dying/3.png",
    "../images/enemy3/Dying/4.png",
    "../images/enemy3/Dying/5.png",
    "../images/enemy3/Dying/6.png",
    "../images/enemy3/Dying/7.png",
    "../images/enemy3/Dying/8.png",
    "../images/enemy3/Dying/9.png",
    "../images/enemy3/Dying/10.png",
    "../images/enemy3/Dying/11.png",
    "../images/enemy3/Dying/12.png",
    "../images/enemy3/Dying/13.png",
    "../images/enemy3/Dying/14.png"
];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var fourth_enemy_idle_anim = [
  "../images/enemy4/Idle/0.png",
  "../images/enemy4/Idle/1.png",
  "../images/enemy4/Idle/2.png",
  "../images/enemy4/Idle/3.png",
  "../images/enemy4/Idle/4.png",
  "../images/enemy4/Idle/5.png",
  "../images/enemy4/Idle/6.png",
  "../images/enemy4/Idle/7.png",
  "../images/enemy4/Idle/8.png",
  "../images/enemy4/Idle/9.png",
  "../images/enemy4/Idle/10.png",
  "../images/enemy4/Idle/11.png",
  "../images/enemy4/Idle/12.png",
  "../images/enemy4/Idle/13.png",
  "../images/enemy4/Idle/14.png",
  "../images/enemy4/Idle/15.png",
  "../images/enemy4/Idle/16.png",
  "../images/enemy4/Idle/17.png"
];
var fourth_enemy_run_anim = [
    "../images/enemy4/Running/0.png",
    "../images/enemy4/Running/1.png",
    "../images/enemy4/Running/2.png",
    "../images/enemy4/Running/3.png",
    "../images/enemy4/Running/4.png",
    "../images/enemy4/Running/5.png",
    "../images/enemy4/Running/6.png",
    "../images/enemy4/Running/7.png",
    "../images/enemy4/Running/8.png",
    "../images/enemy4/Running/9.png",
    "../images/enemy4/Running/10.png",
    "../images/enemy4/Running/11.png"
];
var fourth_enemy_slash_anim = [
    "../images/enemy4/Slashing/0.png",
    "../images/enemy4/Slashing/1.png",
    "../images/enemy4/Slashing/2.png",
    "../images/enemy4/Slashing/3.png",
    "../images/enemy4/Slashing/4.png",
    "../images/enemy4/Slashing/5.png",
    "../images/enemy4/Slashing/6.png",
    "../images/enemy4/Slashing/7.png",
    "../images/enemy4/Slashing/8.png",
    "../images/enemy4/Slashing/9.png",
    "../images/enemy4/Slashing/10.png",
    "../images/enemy4/Slashing/11.png",
];
var fourth_enemy_blink_anim = [
    "../images/enemy4/Blinking/0.png",
    "../images/enemy4/Blinking/1.png",
    "../images/enemy4/Blinking/2.png",
    "../images/enemy4/Blinking/3.png",
    "../images/enemy4/Blinking/4.png",
    "../images/enemy4/Blinking/5.png",
    "../images/enemy4/Blinking/6.png",
    "../images/enemy4/Blinking/7.png",
    "../images/enemy4/Blinking/8.png",
    "../images/enemy4/Blinking/9.png",
    "../images/enemy4/Blinking/10.png",
    "../images/enemy4/Blinking/11.png",
    "../images/enemy4/Blinking/12.png",
    "../images/enemy4/Blinking/13.png",
    "../images/enemy4/Blinking/14.png",
    "../images/enemy4/Blinking/15.png",
    "../images/enemy4/Blinking/16.png",
    "../images/enemy4/Blinking/17.png"
];
var orc_3_f0 = true;
var orc_3_f1 = false;
var orc_3_f2 = false;
var orc_3_f3 = false;
var orc_3_f4 = false;
var orc_3_f5 = false;
var orc_3_f6 = false;
var orc_3_f7 = false;
var orc_3_f8 = false;
var orc_3_f9 = false;
var orc_3_f10 = false;

function orc_run_sound3() {
    if (orc_3_f0) {
        if (orc_3_f1) {
            if (orc_3_f2) {
                if (orc_3_f3) {
                    if (orc_3_f4) {
                        if (orc_3_f5) {
                            if (orc_3_f6) {
                                var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
                                $("#game").append(orc_step_audio);
                                orc_step_audio.get(0).play();
                                orc_3_f1 = false;
                                orc_3_f2 = false;
                                orc_3_f3 = false;
                                orc_3_f4 = false;
                                orc_3_f5 = false;
                                orc_3_f6 = false;
                            } else orc_3_f6 = true;
                        } else orc_3_f5 = true;
                    } else orc_3_f4 = true;
                } else orc_3_f3 = true;
            } else orc_3_f2 = true;
        } else {
            orc_3_f1 = true;
            var orc_step_audio = $("<audio id=\"shot-audio\" src=\"../audio/step3.m4a\">");
            $("#game").append(orc_step_audio);
            orc_step_audio.get(0).play();
        }
    }
}
var fourth_enemy_hurt_anim = [
    "../images/enemy4/Hurt/0.png",
    "../images/enemy4/Hurt/1.png",
    "../images/enemy4/Hurt/2.png",
    "../images/enemy4/Hurt/3.png",
    "../images/enemy4/Hurt/4.png",
    "../images/enemy4/Hurt/5.png",
    "../images/enemy4/Hurt/6.png",
    "../images/enemy4/Hurt/7.png",
    "../images/enemy4/Hurt/8.png",
    "../images/enemy4/Hurt/9.png",
    "../images/enemy4/Hurt/10.png",
    "../images/enemy4/Hurt/11.png"
];
var fourth_enemy_death_anim = [
    "../images/enemy4/Dying/0.png",
    "../images/enemy4/Dying/1.png",
    "../images/enemy4/Dying/2.png",
    "../images/enemy4/Dying/3.png",
    "../images/enemy4/Dying/4.png",
    "../images/enemy4/Dying/5.png",
    "../images/enemy4/Dying/6.png",
    "../images/enemy4/Dying/7.png",
    "../images/enemy4/Dying/8.png",
    "../images/enemy4/Dying/9.png",
    "../images/enemy4/Dying/10.png",
    "../images/enemy4/Dying/11.png",
    "../images/enemy4/Dying/12.png",
    "../images/enemy4/Dying/13.png",
    "../images/enemy4/Dying/14.png"
];