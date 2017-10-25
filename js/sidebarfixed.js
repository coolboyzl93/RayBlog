//  使用JS创建一个css类，首先创建一个style标签，然后设定type值为'text/css'，然后创建文本节点，其文本就是符合css语法的字符串，然后
//  把这个文本节点加入到css标签中去（appendChild()）,然后把style元素加入到head标签中去。
(function () {
  window.onload = function () {
    function addCSS (cssText) {
      let style = document.createElement('style') //  创建一个style元素
      let head = document.head || document.getElementsByTagName('head')[0] // 获取head元素
      style.type = 'text/css' // 这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
      if (style.styleSheet) { // IE
        let func = function () {
          try { // 防止IE中stylesheet数量超过限制而发生错误
            style.styleSheet.cssText = cssText
          } catch (e) {}
        }
        // 如果当前styleSheet还不能用，则放到异步中则行
        if (style.styleSheet.disabled) {
          setTimeout(func, 10)
        } else {
          func()
        }
      } else { // w3c
        // w3c浏览器中只要创建文本节点插入到style元素中就行了
        let textNode = document.createTextNode(cssText)
        style.appendChild(textNode)
      }
      head.appendChild(style)
    } // 把创建的style元素插入到head中  .zlzlzlzlzlz{
    let actualWidth = $('.doc-sidebar').width()
    console.log(actualWidth)
    if (window.screen.width > 762) {
      let scrolledTop = $('.doc-sidebar').offset().top - 20
      let outerWidth = $('.doc-sidebar').outerWidth()
      let extraLeft = (outerWidth - actualWidth) / 2
      let scrolledLeft = $('.doc-sidebar').offset().left + extraLeft
      // 使用
      addCSS(`.zlzlzlzlzlz{ position: fixed; top: 20px;  left: ${scrolledLeft}px; width: ${actualWidth}px`)

      // 添加空元素占位
      let emptyEle = document.createElement('div')
      let origClass = $('.doc-sidebar').attr('class')
      $('.doc-sidebar').before(emptyEle)
      $(window).scroll(function () {
        let dist = this.pageYOffset
        if (dist > scrolledTop) {
          $('.doc-sidebar').attr('class', 'doc-sidebar zlzlzlzlzlz')
          $(emptyEle).attr('class', origClass)
        } else {
          $('.doc-sidebar').attr('class', origClass)
          $(emptyEle).removeClass()
        }
      })
    } else {
      let sidebarController = document.createElement('div')
      let innerController = document.createElement('div')
      document.body.appendChild(sidebarController)
      sidebarController.appendChild(innerController)

      $(innerController).css({
        'transform': 'rotate(45deg)',
        'height': '20px',
        'width': '20px',
        'border-left': '5px solid white',
        'border-bottom': '5px solid white',
        'position': 'absolute',
        'left': '20px',
        'top': '15px'
      })

      $(sidebarController).css({
        'height': '50px',
        'width': '50px',
        'position': 'fixed',
        'top': '65%',
        'right': '0',
        'background': '#3367D6',
        'z-index': '999',
        'opacity': '0.25'
      })
      let sidebarToggle = 0
      $('.doc-sidebar').css({
        'position': 'fixed',
        'bottom': '30%',
        'right': `-${actualWidth}px`,
        'background': 'rgba(51,103,214,0.5)',
        'z-index': '99'
      })
      $(sidebarController).click(function () {
        if (sidebarToggle == 0) {

          $('.doc-sidebar').animate({
            'right': '0'
          })

          sidebarToggle = 1
        } else {
          $('.doc-sidebar').animate({
            'right': `-${actualWidth}px`
          })
          sidebarToggle = 0
        }
      })
    }
  }
  // 添加空元素占位
})()
