$(function(){
    $("#js-navButton").on('click', function(){
        $("#js-navButton").toggleClass("open")
        // 開閉時に別々のアニメーションを設定するために、openとcloseクラスをつける
        if($(".header__nav").hasClass("open")) {
            $(".header__nav").removeClass("open")
            $(".header__nav").addClass("close")
        }else{
            $(".header__nav").removeClass("close")
            $(".header__nav").addClass("open")
        }
    })

    // アンケーリンクのスムーススクロール
    $('a[href^="#"]').click(function(){
        // メニューを閉じる
        $("#js-navButton").removeClass("open")
        $(".header__nav").removeClass("open")
        $(".header__nav").addClass("close")
        // 指定箇所までスクロール
        var speed = 500
        var href= $(this).attr("href")
        var target = $(href == "#" || href == "" ? 'html' : href)
        var position = target.offset().top
        $("html, body").delay(400).animate({scrollTop:position}, speed, "swing")
        return false
      });

    $('#mapButton').click(function() {
        alert('架空のサイトなので、マップはありません。ごめんなさい！')
        return false
    })
})