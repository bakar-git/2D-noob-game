$(document).ready(function () {
    $("#clk").click(function () {
        $("#welcome").hide(500);
        $("#game").show(100, function () {
            $("body").attr("id", "body2");
            //////////////////GAME START////////////////////
            var enemy_all = {
                position_ver: -50,
                right_look: "matrix(1, 0, 0, 1, 0, 0)",
                left_look: "matrix(-1, 0, 0, 1, 0, 0)"
            };
            ////////////////////////////////////////player coding////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var enemy1_death = false;
            var enemy1_hurt = false;
            var player_death = false;
            var key_restricter = 0;
            var roar_control = true;
            var roar_control2_1 = true;
            var roar_control2_2 = true;
            var roar_control3 = true;
            var enemy2_1_death = false;
            var enemy2_1_hurt = false;
            var enemy2_2_death = false;
            var enemy2_2_hurt = false;
            var enemy3_hurt = false;
            var enemy3_death = false;
            /////cursor hiding
            $("body").css("cursor", "none");
            ///background audio start
            $(".aud:nth(0)").get(0).play();
            $(".aud:nth(0)").get(0).volume = 0.7;
            $(".aud:nth(0)").get(0).currentTime = 12;
            ///backgground img and div#game size adjustment
            $("#game").css("height", window.innerHeight+"px");
            $("#body2").css("height", window.innerHeight).css("background-size", window.innerWidth + "px " + window.innerHeight + "px");
            /////character initial properties
            var character = {
                player_score: 0,
                initial_position_ver: 0, //Position where player is verticaly standing
                initial_position_hor: 0, //Position where player is horizantaly standing
                position_hor: function () {
                    var p = $("#character").css("left");
                    p = p.replace("px", "");
                    p = parseInt(p);
                    return p;
                }, //Position where player is horizantaly standing
                right_look: "matrix(1, 0, 0, 1, 0, 0)", //character transformation (character is looking to right)
                left_look: "matrix(-1, 0, 0, 1, 0, 0)", //character transformation (character is looking to left)
                run_speed: 12, //character movement speed
                total_bullets: 22, //total number of bullets
                bullet_speed: 10, //velocity of bullet
                bullet_range: window.innerWidth //How much far bullet will go
            };
            $("#score").text("Score:" + character.player_score);
            $("#bullet-remaining").text("Ammo:" + character.total_bullets);
            var bullet_array = [];
            ////character initial adjustments
            $("#character").css("bottom", character.initial_position_ver).css("left", character.initial_position_hor).css("transform", character.right_look);
            ////character idle_animation
            var idle_anim_inc = 0; //it is incrementer that changes src of image during idle animation
            var run_anim_inc = 0; //it is incrementer that changes src of image during run animation
            var attack_anim_inc = 0; //it is incrementer that changes src of image during attack animation
            var death_anim_inc = 0; //it is incrementer that changes src of image during death animation
            var animation = true; //If it is true attack animation will run
            var bullet_counter = 0; //It switch control to next bullet
            var pos = character.position_hor();
            var width_checker = window.innerWidth;

            function char_idle() {
                $("#character").attr("src", idle_anim[idle_anim_inc]);
                idle_anim_inc++;
                if (idle_anim_inc == 7) idle_anim_inc = 0;
            }
            var idle_anim_handler = setInterval(char_idle, 100);

            function idle_anim_remover() {
                clearInterval(idle_anim_handler);
            }
            var idle_form = function () {
                $("#character").attr("src", idle_anim[0]);
                idle_anim_remover();
                idle_anim_handler = setInterval(char_idle, 100);
            };
            ////keypress detection
            $(window).on("keydown", function (e) {
                //////right movement

                if (e.which == 39) {
                    ///Footstep audio
                    run_stepAudio();
                    //movement
                    $("#character").css("transform", character.right_look);
                    clearInterval(idle_anim_handler);
                    idle_anim_remover();
                    $("#character").attr("src", run_anim[run_anim_inc]);
                    run_anim_inc++;
                    if (run_anim_inc == 18) run_anim_inc = 0;
                    $("#character").css("left", pos + "px");
                    pos += character.run_speed;
                    $(document).on("keyup", idle_form);
                    if (pos >= width_checker) {
                        var tmp_width = window.innerWidth;
                        window.scrollBy(tmp_width, 0);
                        width_checker = width_checker + tmp_width;
                        character.bullet_range = width_checker;
                    }
                }
                //////left movement
                if (e.which == 37) {
                    ///Footstep audio
                    run_stepAudio();
                    //movement
                    if ($("#character").css("left") == "0px") {
                        $("#character").css("transform", character.left_look).attr("src", idle_anim[0]);
                    } else {
                        $("#character").css("transform", character.left_look);
                        clearInterval(idle_anim_handler);
                        idle_anim_remover();
                        $("#character").attr("src", run_anim[run_anim_inc]);
                        run_anim_inc++;
                        if (run_anim_inc == 18) run_anim_inc = 0;
                        $("#character").css("left", pos + "px");
                        pos -= character.run_speed;
                        $(document).on("keyup", idle_form);
                    }
                }
            });
            $(window).on("keyup", function shoot_key(e) {

                /////Attack
                if (e.which == 83) {
                    //restricting shoot for ____milli seconds
                    $(window).off("keyup");
                    var restricter = setTimeout(function () {
                        $(window).on("keyup", shoot_key);
                    }, 400);
                    $(document).off("keyup", idle_form);
                    if (character.total_bullets == 0) {
                        //reload audio
                        var reload_audio = $("<audio id=\"shot-audio\" src=\"../audio/reload.mp3\">");
                        $("#game").append(reload_audio);
                        reload_audio.get(0).play();
                        animation = false;
                    }
                    if (character.total_bullets > 0) {
                        //bullet creation
                        var bullet = $("<img id=\"bullet\" src=\"../images/bullet.png\">");
                        bullet_array.push(bullet);
                        $("#game").append(bullet_array[bullet_counter]);
                        character.total_bullets--;
                        $("#bullet-remaining").text("Ammo:" + character.total_bullets);
                        // bullet sound
                        var bullet_audio = $("<audio id=\"shot-audio\" src=\"../audio/shot2.mp3\">");
                        $("#game").append(bullet_audio);
                        bullet_audio.get(0).play();
                        //bullet smoke
                        var bullet_smoke = $("<img id=\"bullet-smoke\" src=\"../images/smoke0.png\">");
                        $("#game").append(bullet_smoke);
                        //right shoot
                        if ($("#character").css("transform") == character.right_look) {
                            var bullet_initial_position = pos + $("#character").get(0).getBoundingClientRect().width - 30;
                            bullet_array[bullet_counter].css("left", bullet_initial_position).css("transform", "rotateY(0deg)");
                            //bullet smoke for right
                            var bullet_smoke_position = pos + $("#character").get(0).getBoundingClientRect().width - 30;
                            bullet_smoke.css("left", bullet_smoke_position).css("transform", "rotateY(0deg)");
                            var smoke_width = bullet_smoke.css("width");
                            smoke_width = smoke_width.replace("px", "");
                            smoke_width = parseInt(smoke_width);
                            var smoke_height = bullet_smoke.css("width");
                            smoke_height = smoke_height.replace("px", "");
                            smoke_height = parseInt(smoke_height);

                            function smoke_animation() {
                                bullet_smoke.css("width", smoke_width).css("height", smoke_height);
                                smoke_width++;
                                smoke_height++;
                                if (smoke_width >= 30 && smoke_height >= 20) {
                                    bullet_smoke.remove();
                                    clearInterval(interval_smoke);
                                }
                            }
                            var interval_smoke = setInterval(smoke_animation, 1000 / 60);
                            var tmp = bullet_array[bullet_counter];
                            var mover = bullet_initial_position;
                            var single_effect_bool = true;
                            var single_effect_bool_2_1 = true;
                            var single_effect_bool_2_2 = true;
                            var single_effect_bool_3 = true;

                            function bullet_update() {
                                tmp.css("left", mover);
                                mover += character.bullet_speed;
                                if(enemy1_death == false){
                                var enemy_position_1 = $("#enemy1").css("left");
                                enemy_position_1 = enemy_position_1.replace("px", "");
                                enemy_position_1 = parseInt(enemy_position_1);
                                    }
                                //enemy and bullet collision
                                if (mover >= enemy_position_1) {
                                    //execute function one time
                                    if (single_effect_bool) {
                                        //increasing score
                                        character.player_score++;
                                        $("#score").text("Score:" + character.player_score);
                                        //decreasing life of enemy
                                        enemy_1.life--;
                                        //bullet removal and blood creator
                                        setTimeout(function () {
                                            var blood = $("<img id=\"blood\" src=\"../images/bloodsplat/0.png\">");
                                            $("#game").append(blood);
                                            tmp.remove();
                                            clearInterval(interval);
                                            blood_splash_inc = 0;
                                            single_effect_bool = false;
                                            blood.css("left", mover);
                                            var blood_audio = $("<audio id=\"shot-audio\" src=\"../audio/blood1.mp3\">");
                                            $("#game").append(blood_audio);
                                            blood_audio.get(0).play();
                                            //blood animation
                                            var blood_animation = setInterval(function () {
                                                var blood_position = $("#enemy1").css("left");
                                                blood_position = blood_position.replace("px", "");
                                                blood_position = parseInt(blood_position);
                                                blood_position = blood_position + 30;
                                                blood.css("left", blood_position);
                                                blood.attr("src", blood_splash[blood_splash_inc]);
                                                blood_splash_inc++;
                                                if (blood_splash_inc == 8) {
                                                    blood.remove();
                                                    clearInterval(blood_animation);
                                                }
                                            }, 50);
                                            enemy1_hurt = true;
                                            if (enemy_1.life >= 0) {
                                                var orc_hurt_audio = $("<audio id=\"shot-audio\" src=\"../audio/hurt.mp3\">");
                                                $("#game").append(orc_hurt_audio);
                                                orc_hurt_audio.get(0).play();
                                                //enemmy hurt animation
                                                var enmy_hurt_intervl = setInterval(function () {
                                                    $("#enemy1").attr("src", first_enemy_hurt_anim[enemy_1_hurt_inc]);
                                                    enemy_1_hurt_inc++;
                                                    if (enemy_1_hurt_inc == 12) {
                                                        clearInterval(enmy_hurt_intervl);
                                                        enemy_1_hurt_inc = 0;
                                                        enemy1_hurt = false;
                                                        detect_for1();
                                                    }
                                                }, 20);
                                            }
                                            if (enemy_1.life == 0) {
                                                
                                                 var orc_dth_audio = $("<audio id=\"shot-audio\" src=\"../audio/death_orc1.mp3\">");
                                                $("#game").append(orc_dth_audio);
                                                orc_dth_audio.get(0).play();
                                                enemy1_death = true;
                                                window.clearInterval(enmy_hurt_intervl);
                                                var enmy_death_intervl = setInterval(function () {
                                                    $("#enemy1").attr("src", first_enemy_death_anim[enemy_1_death_inc]);
                                                    enemy_1_death_inc++;
                                                    if (enemy_1_death_inc >= 15) {
                                                        window.clearInterval(blood_animation);
                                                        window.clearInterval(enmy_death_intervl);
                                                        $("#enemy1").remove();
                                                        blood.remove();
                                                    }
                                                }, 50);
                                            }
                                        }, 150);

                                    }
                                    single_effect_bool = false;
                                }
                                //enemy2_1 and collision
                                if(enemy2_1_death == false){
                                var enemy_position_2_1 = $("#enemy2-1").css("left");
                                enemy_position_2_1 = enemy_position_2_1.replace("px", "");
                                enemy_position_2_1 = parseInt(enemy_position_2_1);
                                    }
                                //enemy and bullet collision
                                if (mover >= enemy_position_2_1) {
                                    
                                    //execute function one time
                                    if (single_effect_bool_2_1) {
                                        //increasing score
                                        character.player_score++;
                                        $("#score").text("Score:" + character.player_score);
                                        //decreasing life of enemy
                                        enemy_2_1.life--;
                                        //bullet removal and blood creator
                                        setTimeout(function () {
                                            var blood = $("<img id=\"blood\" src=\"../images/bloodsplat/0.png\">");
                                            $("#game").append(blood);
                                            tmp.remove();
                                            clearInterval(interval);
                                            blood_splash_inc = 0;
                                            single_effect_bool_2_1 = false;
                                            blood.css("left", mover);
                                            var blood_audio = $("<audio id=\"shot-audio\" src=\"../audio/blood1.mp3\">");
                                            $("#game").append(blood_audio);
                                            blood_audio.get(0).play();
                                            //blood animation
                                            var blood_animation = setInterval(function () {
                                                var blood_position = $("#enemy2-1").css("left");
                                                blood_position = blood_position.replace("px", "");
                                                blood_position = parseInt(blood_position);
                                                blood_position = blood_position + 30;
                                                blood.css("left", blood_position);
                                                blood.attr("src", blood_splash[blood_splash_inc]);
                                                blood_splash_inc++;
                                                if (blood_splash_inc == 8) {
                                                    blood.remove();
                                                    clearInterval(blood_animation);
                                                }
                                            }, 50);
                                            enemy2_1_hurt = true;
                                            if (enemy_2_1.life >= 0) {
                                                var orc_hurt_audio = $("<audio id=\"shot-audio\" src=\"../audio/hurt2.m4a\">");
                                                $("#game").append(orc_hurt_audio);
                                                orc_hurt_audio.get(0).play();
                                                //enemmy hurt animation
                                                var enmy_hurt_intervl = setInterval(function () {
                                                    $("#enemy2-1").attr("src", second_enemy_hurt_anim[enemy_2_1_hurt_inc]);
                                                    enemy_2_1_hurt_inc++;
                                                    if (enemy_2_1_hurt_inc == 12) {
                                                        clearInterval(enmy_hurt_intervl);
                                                        enemy_2_1_hurt_inc = 0;
                                                        enemy2_1_hurt = false;
                                                        detect_for2_1();
                                                    }
                                                }, 20);
                                            }
                                            if (enemy_2_1.life == 0) {
                                                 var orc_dth_audio = $("<audio id=\"shot-audio\" src=\"../audio/goblin-death.mp3\">");
                                                $("#game").append(orc_dth_audio);
                                                orc_dth_audio.get(0).play();
                                                enemy2_1_death = true;
                                                window.clearInterval(enmy_hurt_intervl);
                                                var enmy_death_intervl = setInterval(function () {
                                                    $("#enemy2-1").attr("src", second_enemy_death_anim[enemy_2_1_death_inc]);
                                                    enemy_2_1_death_inc++;
                                                    if (enemy_2_1_death_inc >= 15) {
                                                        window.clearInterval(blood_animation);
                                                        window.clearInterval(enmy_death_intervl);
                                                        $("#enemy2-1").remove();
                                                        blood.remove();
                                                    }
                                                }, 50);
                                            }
                                        }, 150);

                                    }
                                    single_effect_bool_2_1 = false;
                                }
                                //enemy2_2 collision with bullet
                                if(enemy2_2_death == false){
                                var enemy_position_2_2 = $("#enemy2-2").css("left");
                                enemy_position_2_2 = enemy_position_2_2.replace("px", "");
                                enemy_position_2_2 = parseInt(enemy_position_2_2);
                                    }
                                //enemy and bullet collision
                                if (mover >= enemy_position_2_2) {
                                    //execute function one time
                                    if (single_effect_bool_2_2) {
                                        //increasing score
                                        character.player_score++;
                                        $("#score").text("Score:" + character.player_score);
                                        //decreasing life of enemy
                                        enemy_2_2.life--;
                                        //bullet removal and blood creator
                                        setTimeout(function () {
                                            var blood = $("<img id=\"blood\" src=\"../images/bloodsplat/0.png\">");
                                            $("#game").append(blood);
                                            tmp.remove();
                                            clearInterval(interval);
                                            blood_splash_inc = 0;
                                            single_effect_bool_2_2 = false;
                                            blood.css("left", mover);
                                            var blood_audio = $("<audio id=\"shot-audio\" src=\"../audio/blood1.mp3\">");
                                            $("#game").append(blood_audio);
                                            blood_audio.get(0).play();
                                            //blood animation
                                            var blood_animation = setInterval(function () {
                                                var blood_position = $("#enemy2-2").css("left");
                                                blood_position = blood_position.replace("px", "");
                                                blood_position = parseInt(blood_position);
                                                blood_position = blood_position + 30;
                                                blood.css("left", blood_position);
                                                blood.attr("src", blood_splash[blood_splash_inc]);
                                                blood_splash_inc++;
                                                if (blood_splash_inc == 8) {
                                                    blood.remove();
                                                    clearInterval(blood_animation);
                                                }
                                            }, 50);
                                            enemy2_2_hurt = true;
                                            if (enemy_2_2.life >= 0) {
                                                var orc_hurt_audio = $("<audio id=\"shot-audio\" src=\"../audio/hurt2.m4a\">");
                                                $("#game").append(orc_hurt_audio);
                                                orc_hurt_audio.get(0).play();
                                                //enemmy hurt animation
                                                var enmy_hurt_intervl = setInterval(function () {
                                                    $("#enemy2-2").attr("src", third_enemy_hurt_anim[enemy_2_2_hurt_inc]);
                                                    enemy_2_2_hurt_inc++;
                                                    if (enemy_2_2_hurt_inc == 12) {
                                                        clearInterval(enmy_hurt_intervl);
                                                        enemy_2_2_hurt_inc = 0;
                                                        enemy2_2_hurt = false;
                                                        detect_for2_2();
                                                    }
                                                }, 20);
                                            }
                                            if (enemy_2_2.life == 0) {
                                                 var orc_dth_audio = $("<audio id=\"shot-audio\" src=\"../audio/goblin-death.mp3\">");
                                                $("#game").append(orc_dth_audio);
                                                orc_dth_audio.get(0).play();
                                                enemy2_2_death = true;
                                                window.clearInterval(enmy_hurt_intervl);
                                                var enmy_death_intervl = setInterval(function () {
                                                    $("#enemy2-2").attr("src", third_enemy_death_anim[enemy_2_2_death_inc]);
                                                    enemy_2_2_death_inc++;
                                                    if (enemy_2_2_death_inc >= 15) {
                                                        window.clearInterval(blood_animation);
                                                        window.clearInterval(enmy_death_intervl);
                                                        $("#enemy2-2").remove();
                                                        blood.remove();
                                                    }
                                                }, 50);
                                            }
                                        }, 150);

                                    }
                                    single_effect_bool_2_2 = false;
                                }
                                /////////////////////enemy 3 and bullet
                                if(enemy3_death == false){
                                var enemy_position_3 = $("#enemy3").css("left");
                                enemy_position_3 = enemy_position_3.replace("px", "");
                                enemy_position_3 = parseInt(enemy_position_3);
                                    }
                                if (mover >= enemy_position_3) {
                                    
                                    //execute function one time
                                    if (single_effect_bool_3) {
                                        //increasing score
                                        character.player_score++;
                                        $("#score").text("Score:" + character.player_score);
                                        //decreasing life of enemy
                                        enemy_3.life--;
                                        //bullet removal and blood creator
                                        setTimeout(function () {
                                            var blood = $("<img id=\"blood\" src=\"../images/bloodsplat/0.png\">");
                                            $("#game").append(blood);
                                            tmp.remove();
                                            clearInterval(interval);
                                            blood_splash_inc = 0;
                                            single_effect_bool_3 = false;
                                            blood.css("left", mover);
                                            var blood_audio = $("<audio id=\"shot-audio\" src=\"../audio/blood1.mp3\">");
                                            $("#game").append(blood_audio);
                                            blood_audio.get(0).play();
                                            //blood animation
                                            var blood_animation = setInterval(function () {
                                                var blood_position = $("#enemy3").css("left");
                                                blood_position = blood_position.replace("px", "");
                                                blood_position = parseInt(blood_position);
                                                blood_position = blood_position + 30;
                                                blood.css("left", blood_position);
                                                blood.attr("src", blood_splash[blood_splash_inc]);
                                                blood_splash_inc++;
                                                if (blood_splash_inc == 8) {
                                                    blood.remove();
                                                    clearInterval(blood_animation);
                                                }
                                            }, 50);
                                            enemy3_hurt = true;
                                            if (enemy_3.life >= 0) {
                                                var orc_hurt_audio = $("<audio id=\"shot-audio\" src=\"../audio/hurt.mp3\">");
                                                $("#game").append(orc_hurt_audio);
                                                orc_hurt_audio.get(0).play();
                                                //enemmy hurt animation
                                                var enmy_hurt_intervl = setInterval(function () {
                                                    $("#enemy3").attr("src", fourth_enemy_hurt_anim[enemy_3_hurt_inc]);
                                                    enemy_3_hurt_inc++;
                                                    if (enemy_3_hurt_inc == 12) {
                                                        clearInterval(enmy_hurt_intervl);
                                                        enemy_3_hurt_inc = 0;
                                                        enemy3_hurt = false;
                                                        detect_for3();
                                                    }
                                                }, 20);
                                            }
                                            if (enemy_3.life == 0) {
                                                
                                                 var orc_dth_audio = $("<audio id=\"shot-audio\" src=\"../audio/death4.mp3\">");
                                                $("#game").append(orc_dth_audio);
                                                orc_dth_audio.get(0).play();
                                                enemy3_death = true;
                                                window.clearInterval(enmy_hurt_intervl);
                                                var enmy_death_intervl = setInterval(function () {
                                                    $("#enemy3").attr("src", fourth_enemy_death_anim[enemy_3_death_inc]);
                                                    enemy_3_death_inc++;
                                                    if (enemy_3_death_inc >= 15) {
                                                        window.clearInterval(blood_animation);
                                                        window.clearInterval(enmy_death_intervl);
                                                        $("#enemy3").remove();
                                                        blood.remove();
                                                    }
                                                }, 50);
                                            }
                                        }, 150);

                                    }
                                    single_effect_bool_3 = false;
                                }
                                //removing bullet
                                if (mover >= character.bullet_range) {
                                    tmp.remove();
                                    clearInterval(interval);
                                }
                            }
                            var interval = setInterval(bullet_update, 1000 / 60);
                            ////changing the range of bullet aftre reaching first screen width
                        }
                        //left shoot
                        if ($("#character").css("transform") == character.left_look) {
                            var bullet_initial_position = pos + 5;

                            bullet_array[bullet_counter].css("left", bullet_initial_position).css("transform", "rotateY(180deg)");
                            //bullet smoke for left
                            var bullet_smoke_position = pos + 5;
                            bullet_smoke.css("left", bullet_smoke_position).css("transform", "rotateY(180deg)");
                            var smoke_width = bullet_smoke.css("width");
                            smoke_width = smoke_width.replace("px", "");
                            smoke_width = parseInt(smoke_width);
                            var smoke_height = bullet_smoke.css("width");
                            smoke_height = smoke_height.replace("px", "");
                            smoke_height = parseInt(smoke_height);

                            function smoke_animation() {
                                bullet_smoke.css("width", smoke_width).css("height", smoke_height);
                                smoke_width++;
                                smoke_height++;
                                if (smoke_width >= 30 && smoke_height >= 20) {
                                    bullet_smoke.remove();
                                    clearInterval(interval_smoke);
                                }
                            }
                            var interval_smoke = setInterval(smoke_animation, 1000 / 60);
                            var tmp = bullet_array[bullet_counter];
                            var mover = bullet_initial_position;

                            function bullet_update() {
                                tmp.css("left", mover);
                                mover -= character.bullet_speed;
                                //removing bullets
                                if (mover <= -20) {
                                    tmp.remove();
                                    clearInterval(interval);
                                }
                            }
                            var interval = setInterval(bullet_update, 1000 / 60);
                        }
                        bullet_counter++;
                    }
                    //animation for attack
                    if (animation) {
                        function char_attack() {
                            $("#character").attr("src", attack_anim[attack_anim_inc]);
                            attack_anim_inc++;
                            if (attack_anim_inc == 6) attack_anim_inc = 0;
                        }
                        idle_anim_remover();
                        var attack_anim_handler = setInterval(char_attack, 100);

                        function attack_anim_remover() {
                            clearInterval(attack_anim_handler);
                        }

                        setTimeout(attack_anim_remover, 600);
                    }
                }
            });
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////enemy1 coding////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
            var enemy_1 = {
                position_hor: 2*window.innerWidth-283,
                run_speed: 16,
                life: 6
            };
            $("#enemy1").css("left", enemy_1.position_hor + "px").css("bottom", enemy_all.position_ver + "px").css("transform", enemy_all.left_look);
            var enemy_1_idle_inc = 0;
            var enemy_1_run_inc = 0;
            var enemy_1_slash_inc = 0;
            var enemy_1_blink_inc = 0;
            var enemy_1_hurt_inc = 0;
            var enemy_1_death_inc = 0;

            function enemy_idle_animation() {
                $("#enemy1").attr("src", first_enemy_idle_anim[enemy_1_idle_inc]);
                enemy_1_idle_inc++;
                if (enemy_1_idle_inc == 18) enemy_1_idle_inc = 0;
            }
            var enmy_idle_intervl = setInterval(enemy_idle_animation, 50);

            //enemy working
            function working_for1() {
                clearInterval(enmy_idle_intervl);
                //enemy1 run
                var enmy_run_intervl = setInterval(function () {
                    //sound for running
                    orc_run_sound();
                    //stoppping everything if enemy is dead
                    if (enemy1_hurt) {
                        window.clearInterval(enmy_run_intervl);
                    }
                    if (enemy1_death) {
                        window.clearInterval(enmy_run_intervl);
                    }
                    var player_position = $("#character").css("left");
                    player_position = player_position.replace("px", "");
                    player_position = parseInt(player_position);
                    $("#enemy1").attr("src", first_enemy_run_anim[enemy_1_run_inc]);
                    enemy_1_run_inc++;
                    $("#enemy1").css("left", enemy_1.position_hor + "px");
                    enemy_1.position_hor -= enemy_1.run_speed;
                    if (enemy_1_run_inc == 12) enemy_1_run_inc = 0;
                    //collision detection with enemy 1 of character
                    if (player_position >= enemy_1.position_hor) {
                        $(window).off();
                        $(document).off();
                        //enemy strike
                        var enmy_slash_intervl = setInterval(function () {
                            $(window).off();
                            $(document).off();
                            $("#enemy1").attr("src", first_enemy_slash_anim[enemy_1_slash_inc]);
                            enemy_1_slash_inc++;
                            if (enemy_1_slash_inc == 12) {
                                clearInterval(enmy_slash_intervl);
                                $("#enemy1").attr("src", first_enemy_idle_anim[enemy_1_idle_inc]);
                                //blinking enemy animation
                                var enmy_blink_intervl = setInterval(function () {
                                    $("#enemy1").attr("src", first_enemy_blink_anim[enemy_1_blink_inc]);
                                    enemy_1_blink_inc++;
                                    if (enemy_1_blink_inc == 18) enemy_1_blink_inc = 0;
                                }, 100);
                            }
                            if (enemy_1_slash_inc == 4) {
                                var orc_strike = $("<audio id=\"shot-audio\" src=\"../audio/strike-enemy1.mp3\">");
                                $("#game").append(orc_strike);
                                orc_strike.get(0).play();
                                //player idle animation clearrer
                                idle_anim_remover();
                                //player death animation
                                var death_anim_handler = setInterval(function () {
                                    if ($("#character").css("transform") == character.left_look) $("#character").css("transform", character.left_look);
                                    if ($("#character").css("transform") == character.right_look) $("#character").css("transform", character.right_look);
                                    $("#character").attr("src", death_anim[death_anim_inc]);
                                    death_anim_inc++;
                                    if (death_anim_inc == 9) {
                                        var death_scream = $("<audio id=\"shot-audio\" src=\"../audio/scream-death.mp3\">");
                                        $("#game").append(death_scream);
                                        death_scream.get(0).volume = 1;
                                        death_scream.get(0).play();
                                        clearInterval(death_anim_handler);
                                        if ($("#character").css("transform") == character.left_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateX(180deg) rotateZ(-90deg)").css("bottom", -35 + "px");
                                        if ($("#character").css("transform") == character.right_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateZ(90deg)").css("bottom", -35 + "px");
                                        $(window).off();
                                        $(document).off();
                                        $("#character").attr("id","character-death");
                                        setTimeout(function () {
                                            $(".aud:nth(0)").get(0).volume = 0.3;
                                            var orc_win = $("<audio id=\"shot-audio\" src=\"../audio/orc-win.m4a\" loop>");
                                            $("#game").append(orc_win);
                                            orc_win.get(0).play();
                                            game_over();
                                        }, 1000)

                                    }
                                }, 70);
                            }
                        }, 60);
                        clearInterval(enmy_run_intervl);
                    }
                }, 100);
                return enmy_run_intervl;
            }
            //character detection
            function detect_for1() {
                var player_position1 = $("#character").css("left");
                player_position1 = player_position1.replace("px", "");
                player_position1 = parseInt(player_position1);
                var enemy_range1 = $("#enemy1").css("left");
                enemy_range1 = enemy_range1.replace("px","");
                enemy_range1 = parseInt(enemy_range1)-window.innerWidth+283;
                if (player_position1 >=enemy_range1) {
                    if (roar_control) {
                        var orc_roar = $("<audio id=\"shot-audio\" src=\"../audio/roar1.mp3\">");
                        $("#game").append(orc_roar);
                        orc_roar.get(0).play();
                        roar_control = false;
                    }
                    window.cancelAnimationFrame(detector1);
                    working_for1();
                } else var detector1 = requestAnimationFrame(detect_for1);
            }
            detect_for1();
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////enemy2-1 coding//////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var enemy_2_1 = {
                position_hor: 3*window.innerWidth-window.innerWidth/6,
                run_speed: 20,
                life: 4
            };
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////enemy2-2 coding//////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var enemy_2_2 = {
                position_hor: 3*window.innerWidth-window.innerWidth/3,
                run_speed: 24,
                life: 5
            };
            $("#enemy2-1").css("left", enemy_2_1.position_hor + "px").css("bottom", enemy_all.position_ver + "px").css("transform", enemy_all.left_look);
            $("#enemy2-2").css("left", enemy_2_2.position_hor + "px").css("bottom", enemy_all.position_ver + "px").css("transform", enemy_all.left_look);
            var enemy_2_1_idle_inc = 0;
            var enemy_2_1_run_inc = 0;
            var enemy_2_1_slash_inc = 0;
            var enemy_2_1_blink_inc = 0;
            var enemy_2_1_hurt_inc = 0;
            var enemy_2_1_death_inc = 0;

            function enemy_2_1_idle_animation() {
                $("#enemy2-1").attr("src", second_enemy_idle_anim[enemy_2_1_idle_inc]);
                enemy_2_1_idle_inc++;
                if (enemy_2_1_idle_inc == 18) enemy_2_1_idle_inc = 0;
            }
            var enmy_2_1_idle_intervl = setInterval(enemy_2_1_idle_animation, 50);
            /////////////////////////
            var enemy_2_2_idle_inc = 0;
            var enemy_2_2_run_inc = 0;
            var enemy_2_2_slash_inc = 0;
            var enemy_2_2_blink_inc = 0;
            var enemy_2_2_hurt_inc = 0;
            var enemy_2_2_death_inc = 0;

            function enemy_2_2_idle_animation() {
                $("#enemy2-2").attr("src", third_enemy_idle_anim[enemy_2_2_idle_inc]);
                enemy_2_2_idle_inc++;
                if (enemy_2_2_idle_inc== 18) enemy_2_2_idle_inc = 0;
            }
            var enmy_2_2_idle_intervl = setInterval(enemy_2_2_idle_animation, 50);
            /////////////////////////////////////////////////////////////////////////////////
            
            /////////////////////////////////////////////////////////////////////////////////
            function working_for2_1(){
                clearInterval(enmy_2_1_idle_intervl);
                //enemy1 run
                var enmy_2_1_run_intervl = setInterval(function () {
                    //sound for running
                    orc_run_sound2_1();
                    //stoppping everything if enemy is dead
                    if (enemy2_1_hurt) {
                        window.clearInterval(enmy_2_1_run_intervl);
                    }
                    if (enemy2_1_death) {
                        window.clearInterval(enmy_2_1_run_intervl);
                    }
                    var player_position = $("#character").css("left");
                    player_position = player_position.replace("px", "");
                    player_position = parseInt(player_position);
                    $("#enemy2-1").attr("src", second_enemy_run_anim[enemy_2_1_run_inc]);
                    enemy_2_1_run_inc++;
                    $("#enemy2-1").css("left", enemy_2_1.position_hor + "px");
                    enemy_2_1.position_hor -= enemy_2_1.run_speed;
                    if (enemy_2_1_run_inc == 12) enemy_2_1_run_inc = 0;
                    //collision detection with enemy 1 of character
                    if (player_position >= enemy_2_1.position_hor) {
                        $(window).off();
                        $(document).off();
                        //enemy strike
                        var enmy_2_1_slash_intervl = setInterval(function () {
                            $(window).off();
                            $(document).off();
                            $("#enemy2-1").attr("src", second_enemy_slash_anim[enemy_2_1_slash_inc]);
                            enemy_2_1_slash_inc++;
                            if (enemy_2_1_slash_inc == 12) {
                                clearInterval(enmy_2_1_slash_intervl);
                                $("#enemy2-1").attr("src", second_enemy_idle_anim[enemy_2_1_idle_inc]);
                                //blinking enemy animation
                                var enmy_2_1_blink_intervl = setInterval(function () {
                                    $("#enemy2-1").attr("src", second_enemy_blink_anim[enemy_2_1_blink_inc]);
                                    enemy_2_1_blink_inc++;
                                    if (enemy_2_1_blink_inc == 18) enemy_2_1_blink_inc = 0;
                                }, 100);
                            }
                            if (enemy_2_1_slash_inc == 4) {
                                var orc_strike = $("<audio id=\"shot-audio\" src=\"../audio/strike-enemy2.mp3\">");
                                $("#game").append(orc_strike);
                                orc_strike.get(0).play();
                                //player idle animation clearrer
                                idle_anim_remover();
                                //player death animation
                                var death_anim_handler = setInterval(function () {
                                    if ($("#character").css("transform") == character.left_look) $("#character").css("transform", character.left_look);
                                    if ($("#character").css("transform") == character.right_look) $("#character").css("transform", character.right_look);
                                    $("#character").attr("src", death_anim[death_anim_inc]);
                                    death_anim_inc++;
                                    if (death_anim_inc == 9) {
                                        var death_scream = $("<audio id=\"shot-audio\" src=\"../audio/scream-death.mp3\">");
                                        $("#game").append(death_scream);
                                        death_scream.get(0).volume = 1;
                                        death_scream.get(0).play();
                                        clearInterval(death_anim_handler);
                                        if ($("#character").css("transform") == character.left_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateX(180deg) rotateZ(-90deg)").css("bottom", -35 + "px");
                                        if ($("#character").css("transform") == character.right_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateZ(90deg)").css("bottom", -35 + "px");
                                        $(window).off();
                                        $(document).off();
                                        $("#character").attr("id","character-death");
                                        setTimeout(function () {
                                            $(".aud:nth(0)").get(0).volume = 0.3;
                                            var orc_win = $("<audio id=\"shot-audio\" src=\"../audio/orc-win.m4a\" loop>");
                                            $("#game").append(orc_win);
                                            orc_win.get(0).play();
                                            game_over();
                                        }, 1000)

                                    }
                                }, 70);
                            }
                        }, 60);
                        clearInterval(enmy_2_1_run_intervl);
                    }
                }, 100);
                return enmy_2_1_run_intervl;
            }
            /////////////////////////////////////////////////////////////////////////////////
            function detect_for2_1() {
                var player_position2 = $("#character").css("left");
                player_position2 = player_position2.replace("px", "");
                player_position2 = parseInt(player_position2);
                var enemy_range2 = $("#enemy2-1").css("left");
                enemy_range2 = enemy_range2.replace("px","");
                enemy_range2 = parseInt(enemy_range2)-window.innerWidth+283;
                if (player_position2 >= enemy_range2) {
                    if (roar_control2_1) {
                        var orc_roar = $("<audio id=\"shot-audio\" src=\"../audio/roar2.mp3\">");
                        $("#game").append(orc_roar);
                        orc_roar.get(0).play();
                        roar_control2_1 = false;
                    }
                    window.cancelAnimationFrame(detector2);
                    working_for2_1();
                } else var detector2 = requestAnimationFrame(detect_for2_1);
            }
            detect_for2_1();
            //////////////////////////////////////////////////////////////////////////
            
            //////////////////////////////////////////////////////////////////////////
            function working_for2_2(){
                clearInterval(enmy_2_2_idle_intervl);
                //enemy1 run
                var enmy_2_2_run_intervl = setInterval(function () {
                    //sound for running
                    orc_run_sound2_2();
                    //stoppping everything if enemy is dead
                    if (enemy2_2_hurt) {
                        window.clearInterval(enmy_2_2_run_intervl);
                    }
                    if (enemy2_2_death) {
                        window.clearInterval(enmy_2_2_run_intervl);
                    }
                    var player_position = $("#character").css("left");
                    player_position = player_position.replace("px", "");
                    player_position = parseInt(player_position);
                    $("#enemy2-2").attr("src", third_enemy_run_anim[enemy_2_2_run_inc]);
                    enemy_2_2_run_inc++;
                    $("#enemy2-2").css("left", enemy_2_2.position_hor + "px");
                    enemy_2_2.position_hor -= enemy_2_2.run_speed;
                    if (enemy_2_2_run_inc == 12) enemy_2_2_run_inc = 0;
                    //collision detection with enemy 1 of character
                    if (player_position >= enemy_2_2.position_hor) {
                        $(window).off();
                        $(document).off();
                        //enemy strike
                        var enmy_2_2_slash_intervl = setInterval(function () {
                            $(window).off();
                            $(document).off();
                            $("#enemy2-2").attr("src", third_enemy_slash_anim[enemy_2_2_slash_inc]);
                            enemy_2_2_slash_inc++;
                            if (enemy_2_2_slash_inc == 12) {
                                clearInterval(enmy_2_2_slash_intervl);
                                $("#enemy2-2").attr("src", third_enemy_idle_anim[enemy_2_2_idle_inc]);
                                //blinking enemy animation
                                var enmy_2_2_blink_intervl = setInterval(function () {
                                    $("#enemy2-2").attr("src", third_enemy_blink_anim[enemy_2_2_blink_inc]);
                                    enemy_2_2_blink_inc++;
                                    if (enemy_2_2_blink_inc == 18) enemy_2_2_blink_inc = 0;
                                }, 100);
                            }
                            if (enemy_2_2_slash_inc == 4) {
                                var orc_strike = $("<audio id=\"shot-audio\" src=\"../audio/strike-enemy2.mp3\">");
                                $("#game").append(orc_strike);
                                orc_strike.get(0).play();
                                //player idle animation clearrer
                                idle_anim_remover();
                                //player death animation
                                var death_anim_handler = setInterval(function () {
                                    if ($("#character").css("transform") == character.left_look) $("#character").css("transform", character.left_look);
                                    if ($("#character").css("transform") == character.right_look) $("#character").css("transform", character.right_look);
                                    $("#character").attr("src", death_anim[death_anim_inc]);
                                    death_anim_inc++;
                                    if (death_anim_inc == 9) {
                                        var death_scream = $("<audio id=\"shot-audio\" src=\"../audio/scream-death.mp3\">");
                                        $("#game").append(death_scream);
                                        death_scream.get(0).volume = 1;
                                        death_scream.get(0).play();
                                        clearInterval(death_anim_handler);
                                        if ($("#character").css("transform") == character.left_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateX(180deg) rotateZ(-90deg)").css("bottom", -35 + "px");
                                        if ($("#character").css("transform") == character.right_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateZ(90deg)").css("bottom", -35 + "px");
                                        $(window).off();
                                        $(document).off();
                                        $("#character").attr("id","character-death");
                                        setTimeout(function () {
                                            $(".aud:nth(0)").get(0).volume = 0.3;
                                            var orc_win = $("<audio id=\"shot-audio\" src=\"../audio/orc-win.m4a\" loop>");
                                            $("#game").append(orc_win);
                                            orc_win.get(0).play();
                                            game_over();
                                        }, 1000)

                                    }
                                }, 70);
                            }
                        }, 60);
                        clearInterval(enmy_2_2_run_intervl);
                    }
                }, 100);
                return enmy_2_2_run_intervl;
            }
            
            ///////////////////////////////////////////////////////////////////////////
            function detect_for2_2() {
                var player_position2 = $("#character").css("left");
                player_position2 = player_position2.replace("px", "");
                player_position2 = parseInt(player_position2);
                var enemy_range2 = $("#enemy2-2").css("left");
                enemy_range2 = enemy_range2.replace("px","");
                enemy_range2 = parseInt(enemy_range2)-window.innerWidth+183;
                if (player_position2 >= enemy_range2) {
                    if (roar_control2_2) {
                        var orc_roar = $("<audio id=\"shot-audio\" src=\"../audio/roar3.m4a\">");
                        $("#game").append(orc_roar);
                        orc_roar.get(0).play();
                        roar_control2_2 = false;
                    }
                    window.cancelAnimationFrame(detector3);
                    working_for2_2();
                } else var detector3 = requestAnimationFrame(detect_for2_2);
            }
            detect_for2_2();
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////enemy_3 coding//////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            var enemy_3 = {
                position_hor: 4*window.innerWidth-window.innerWidth/6,
                run_speed: 20,
                life: 5
            };
            $("#enemy3").css("left", enemy_3.position_hor + "px").css("bottom", enemy_all.position_ver + "px").css("transform", enemy_all.left_look);
            var enemy_3_idle_inc = 0;
            var enemy_3_run_inc = 0;
            var enemy_3_slash_inc = 0;
            var enemy_3_blink_inc = 0;
            var enemy_3_hurt_inc = 0;
            var enemy_3_death_inc = 0;

            function enemy_3_idle_animation() {
                $("#enemy3").attr("src", fourth_enemy_idle_anim[enemy_3_idle_inc]);
                enemy_3_idle_inc++;
                if (enemy_3_idle_inc == 18) enemy_3_idle_inc = 0;
            }
            var enmy_3_idle_intervl = setInterval(enemy_3_idle_animation, 50);

            //enemy working
            function working_for3() {
                clearInterval(enmy_3_idle_intervl);
                //enemy1 run
                var enmy_run_intervl = setInterval(function () {
                    //sound for running
                    orc_run_sound3();
                    //stoppping everything if enemy is dead
                    if (enemy3_hurt) {
                        window.clearInterval(enmy_run_intervl);
                    }
                    if (enemy3_death) {
                        window.clearInterval(enmy_run_intervl);
                    }
                    var player_position = $("#character").css("left");
                    player_position = player_position.replace("px", "");
                    player_position = parseInt(player_position);
                    $("#enemy3").attr("src", fourth_enemy_run_anim[enemy_3_run_inc]);
                    enemy_3_run_inc++;
                    $("#enemy3").css("left", enemy_3.position_hor + "px");
                    enemy_3.position_hor -= enemy_3.run_speed;
                    if (enemy_3_run_inc == 12) enemy_3_run_inc = 0;
                    //collision detection with enemy 1 of character
                    if (player_position >= enemy_3.position_hor) {
                        $(window).off();
                        $(document).off();
                        //enemy strike
                        var enmy_slash_intervl = setInterval(function () {
                            $(window).off();
                            $(document).off();
                            $("#enemy3").attr("src", fourth_enemy_slash_anim[enemy_3_slash_inc]);
                            enemy_3_slash_inc++;
                            if (enemy_3_slash_inc == 12) {
                                clearInterval(enmy_slash_intervl);
                                $("#enemy3").attr("src", fourth_enemy_idle_anim[enemy_3_idle_inc]);
                                //blinking enemy animation
                                var enmy_blink_intervl = setInterval(function () {
                                    $("#enemy3").attr("src", fourth_enemy_blink_anim[enemy_3_blink_inc]);
                                    enemy_3_blink_inc++;
                                    if (enemy_3_blink_inc == 18) enemy_3_blink_inc = 0;
                                }, 100);
                            }
                            if (enemy_3_slash_inc == 4) {
                                var orc_strike = $("<audio id=\"shot-audio\" src=\"../audio/strike-enemy2.mp3\">");
                                $("#game").append(orc_strike);
                                orc_strike.get(0).play();
                                //player idle animation clearrer
                                idle_anim_remover();
                                //player death animation
                                var death_anim_handler = setInterval(function () {
                                    if ($("#character").css("transform") == character.left_look) $("#character").css("transform", character.left_look);
                                    if ($("#character").css("transform") == character.right_look) $("#character").css("transform", character.right_look);
                                    $("#character").attr("src", death_anim[death_anim_inc]);
                                    death_anim_inc++;
                                    if (death_anim_inc == 9) {
                                        var death_scream = $("<audio id=\"shot-audio\" src=\"../audio/scream-death.mp3\">");
                                        $("#game").append(death_scream);
                                        death_scream.get(0).volume = 1;
                                        death_scream.get(0).play();
                                        clearInterval(death_anim_handler);
                                        if ($("#character").css("transform") == character.left_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateX(180deg) rotateZ(-90deg)").css("bottom", -35 + "px");
                                        if ($("#character").css("transform") == character.right_look) $("#character").attr("src", death_anim[9]).css("transform", "rotateZ(90deg)").css("bottom", -35 + "px");
                                        $(window).off();
                                        $(document).off();
                                        $("#character").attr("id","character-death");
                                        setTimeout(function () {
                                            $(".aud:nth(0)").get(0).volume = 0.3;
                                            var orc_win = $("<audio id=\"shot-audio\" src=\"../audio/orc-win.m4a\" loop>");
                                            $("#game").append(orc_win);
                                            orc_win.get(0).play();
                                            game_over();
                                        }, 1000)

                                    }
                                }, 70);
                            }
                        }, 60);
                        clearInterval(enmy_run_intervl);
                    }
                }, 100);
                return enmy_run_intervl;
            }
            //character detection
            function detect_for3() {
                var player_position3 = $("#character").css("left");
                player_position3 = player_position3.replace("px", "");
                player_position3 = parseInt(player_position3);
                var enemy_range3 = $("#enemy3").css("left");
                enemy_range3 = enemy_range3.replace("px","");
                enemy_range3 = parseInt(enemy_range3)-window.innerWidth+283;
                if (player_position3 >=enemy_range3) {
                    if (roar_control3) {
                        var orc_roar = $("<audio id=\"shot-audio\" src=\"../audio/roar4.mp3\">");
                        $("#game").append(orc_roar);
                        orc_roar.get(0).play();
                        roar_control3 = false;
                    }
                    window.cancelAnimationFrame(detector3);
                    working_for3();
                } else var detector3 = requestAnimationFrame(detect_for3);
            }
            detect_for3();
        });
    });
});