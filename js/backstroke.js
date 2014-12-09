  $(document).ready(function(){

      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Backstroke-video 1",
            m4p: "",
            ogv: "myvideos/backstroke/backstroke-1.ogv",
            poster: "img/rsz_backstroke2.jpg"
          });
        },
        cssSelectorAncestor: "#jp_container_1",
        swfPath: "/js",
        supplied: "m4p, ogv",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        size: {
            width: "480px",
            height: "auto"
        }
      });

      $("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Backstroke-video 2",
            m4p: "",
            ogv: "myvideos/backstroke/backstroke-2.ogv",
            poster: "img/rsz_backstroke3.jpg"
          });
        },
        cssSelectorAncestor: "#jp_container_2",
        swfPath: "/js",
        supplied: "m4p, ogv",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        size: {
            width: "480px",
            height: "auto"
        }
      });

});