  $(document).ready(function(){

      $("#jquery_jplayer_2").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Backstroke-video 1",
            m4p: "",
            ogv: "myvideos/crawl/frontCrawl-1.ogv",
            poster: "img/rsz_crawl1.jpg"
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
            height: "265px"
        }
      });

      $("#jquery_jplayer_3").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Backstroke-video 1",
            m4p: "",
            ogv: "myvideos/crawl/frontCrawl-2.ogv",
            poster: "img/rsz_crawl2.jpg"
          });
        },
        cssSelectorAncestor: "#jp_container_3",
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
            height: "265px"
        }
      });

});