// 回顶的JS小插件；

(function () {
  window.onload = function () {
    var backTop = document.createElement('a')
    document.body.appendChild(backTop)
    var linkto = document.createAttribute('href')
    linkto.value = '#'
    backTop.setAttributeNode(linkto)

    var backTopArrow = document.createElement('div')
    backTop.appendChild(backTopArrow)

    $(backTopArrow).css({
      'transform': 'rotate(45deg)',
      'height': '20px',
      'width': '20px',
      'border-left': '5px solid white',
      'border-top': '5px solid white',
      'position': 'absolute',
      'left': '15px',
      'top': '20px'
    })

    $(backTop).css({
      'height': '50px',
      'width': '50px',
      'position': 'fixed',
      'bottom': '55px',
      'right': '55px',
      'background': 'mediumpurple',
      'z-index': '999',
      'opacity': '0.25',
      'display': 'none'
    })

    $(backTop).click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500)
      return false
    })

    if (window.screen.width < 762) {
      $(backTop).css({
        'top': '50%',
        'right': '0'
      })
    }

    $(window).scroll(function () {
      var dist = this.pageYOffset
      if (dist > 300) {
        $(backTop).css('display', 'block')
      } else {
        $(backTop).css('display', 'none')

      }
    })
  }
})()