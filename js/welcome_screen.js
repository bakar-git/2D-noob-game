$(document).ready(function(){
    ///////Loading_complete dialogue appearance////////
    function complete_dialogue(){
        $("#loading-dialogue").text("Loading complete");
    }
    setTimeout(complete_dialogue, 4000);
    ///////Clk_to_cont dialogue appearence/////////
    function click_dialogue(){
        $("#click-dialogue").text("Click to continue");
    }
    setTimeout(click_dialogue , 4500);
    ///////On-clk welcome screen appearence////////
    $("#click-dialogue").click(function(){
        $("#loader").hide("fast");
        $("#form").show("fast", function(){
            $("#submit").click(function(){
                var name = $("#name").val();
                if(name == "" || name == null){
                    alert("name is required");
                }
                else{
                    $("#form").hide("fast");
                    $("#sign-div").show();
                    $("#nme").text(name);
                    localStorage.setItem("player_name", name);
                    /////video display and play
        $("#bg-vid").css("display", "inherit");
            $("#bg-vid").get(0).play();
            $("#bg-vid").get(0).playbackRate = 2.5;
        /////audio play
        $("#bg-aud").get(0).play();
        /////Visual contents display and audio on hover
        $("#contents-centre").show(500, function(){
            $(".centre-text").on("mouseover", function(){
                $("#hover-aud").get(0).play();
                $(".centre-text").on("mouseout", function(){
                    $("#hover-aud").get(0).pause();
                    $("#hover-aud").get(0).currentTime= 0;
                });
            });
            ////hyper refrence to start game
            $(".centre-text:nth(0)").click(function(){
                $("#clk-aud").get(0).play();
                $("#hover-aud").get(0).pause();
                function clk1(){
                    window.open("game/story_1.html", "_self");
                }
                setTimeout(clk1, 900);
                
            });
            ////hyper refrence to control page
            $(".centre-text:nth(1)").click(function(){
                var tim = $("#bg-aud").get(0).currentTime;
                localStorage.setItem("audiotime", tim);
                $("#clk-aud").get(0).play();
                $("#hover-aud").get(0).pause();
                function clk2(){
                    window.open("game/controls.html", "_self");
                }
                setTimeout(clk2, 900);
            });
            ////button to close page
            $(".centre-text:nth(2)").click(function(){
                $("#clk-aud").get(0).play();
                $("#hover-aud").get(0).pause();
                function clk3(){
                    window.open("game/closer.html", "_self");
                }
                setTimeout(clk3, 900);
                window.close();
            });
        });
                }
            });
            
        });
    });
});