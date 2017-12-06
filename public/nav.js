// nav.js

// reactRate
window.onload = function () {
  let nav = document.getElementById('nav')
  let box = document.getElementsByClassName('myContact')[0]
  let article = document.querySelector('.article')
  let fanhui = document.querySelector('.return')
  let w = window.innerWidth
  let h = window.innerHeight
  let pr = window.devicePixelRatio || 1
  // resState
  if (window.screen.width > 1030) {
    nav.style.width = `${w / 2}px`
    nav.style.height = `${h}px`
  } else {
    nav.style.width = `${w}px`
    nav.style.height = `${h / 1.6}px`
    box.style.width = `${w}px`
    box.style.height = `${h / 11}px`
  }
  var rendererMD = new marked.Renderer()
  marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: true,
    sanitize: false,
    smartLists: false,
    smartypants: true
  })
  var futur = marked('I am using __markdown__.')
  var btn = document.querySelectorAll('.myContact li a')
  console.log(btn)
  var datas = ['server-data/skill.txt', 'server-data/exp.txt', 'server-data/planning.txt', 'server-data/value.txt', 'server-data/basic.txt']

  // step1: create XMLHttpRequest object

  //    var XHR_obj= new XMLHttpRequest()//usually
  // compatible with IE6 and below
  var XHR_obj
  if (window.XMLHttpRequest) {
    XHR_obj = new XMLHttpRequest()
  } else {
    XHR_obj = new ActiveXObject('Microsoft.XMLHTTP')
  }

  XHR_obj.onreadystatechange = function () {

    if (XHR_obj.readyState === 4 && XHR_obj.status === 200) {
      let articleText

      articleText = marked(XHR_obj.responseText)

      article.innerHTML = articleText
    }

  }
  //step3:define and send requests of XHR_obj

  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      XHR_obj.open('GET', datas[i], true)
      XHR_obj.send()
    }
  }
  fanhui.onclick = function () {
    XHR_obj.open('GET', datas[4], true)
    XHR_obj.send()
  }
  XHR_obj.open('GET', datas[4], true)
  XHR_obj.send()

  function isJSON (str) {
    if (typeof str == 'string') {
      try {
        JSON.parse(str)
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    }
    console.log('It is not a string!')
  }
}

// vue
// const Article = { template: '<div class='article '>黄英！！！</div>' }

// var rendererMD = new marked.Renderer()
//     marked.setOptions({
//       renderer: rendererMD,
//       gfm: true,
//       tables: true,
//       breaks: false,
//       pedantic: false,
//       sanitize: false,
//       smartLists: true,
//       smartypants: false
//     })
//   var futur=marked('I am using __markdown__.')

// const router = new VueRouter({
//   routes :[
//   {path:`/user/:id`,component:Article}
//   ]
// })

//  var app = new Vue({
//  		el:'#nav',
//         data: {
//           message: 'Hello Vue!',
//    		  future:'I am using __markdown__.',
//           language:true,
//           ch:['推荐',`新浪微博`,`知乎`,`知识`,`思考`,`娱乐`,`生活`],
//           en:['recommend',``,``,``,``,``]
//         },
//         methods: {
//         // save() {
//         //     var data = {
//         //       text: this.text,
//         //       createTime: this.getTime()
//         //     }
//         //     this.$http.post('/saveNote', data).then(function(res) {
//         //       //vue.resourse的api
//         //       alert(res.body.msg)
//         //       console.log(res)
//         //       this.text = ''  
//         //       this.getNotes()
//         //     }).catch(function() {
//         //       alert('网络连接失败！')
//         //     })
//         //   }
//         },

//         router
//       })
//  app.future=futur

// }
