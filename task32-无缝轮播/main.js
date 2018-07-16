let lastCurrent = 1
let current = 1
initialization()

$('.buttons').on('click', 'span', function (e) {
  current = $(e.currentTarget).index() + 1
  goSlide(current)
})

setTimer()

$('.window').on('mouseenter', function () {
  window.clearInterval(timeId)
})
$('.window').on('mouseleave', function () {
  timeId = setTimer()
})









  $('#pre').on('click', function () {
    goSlide(lastCurrent - 1)
    current=lastCurrent+1
  })
  $('#next').on('click', function () {
    goSlide(lastCurrent + 1)
    current=lastCurrent+1
  })




document.addEventListener('visibilitychange',function(){
  if(document.hidden){
    window.clearInterval(timeId)
  }else{
    timeId = setTimer()
  }
})















function initialization() {
  let $fake1 = $('.images').children().eq(0).clone(true)
  let $fake2 = $('.images').children().last().eq(0).clone(true)
  console.log($('.images').children().last())
  $('.images').prepend($fake2)
  $('.images').append($fake1)
  $('.images').hide().offset()
  $('#slide').css({ transform: 'translateX(-960px)' }).show()
  $('.buttons').eq(0).children().eq(0).addClass('active')
}


function goSlide(current) {
  if (current > $('.buttons').children().length) {
    current = 1
  } else if (current < 1) {
    current = $('.buttons').children().length
  }
  if (lastCurrent === $('.buttons').children().length && current === 1) {
    $('.images').css({ transform: `translateX(${(lastCurrent + 1) * -960}px)` }).one('transitionend', function () {
      $('.images').hide().offset()
      $('.images').css({ transform: 'translateX(-960px)' }).show()
    })
  }
  else if (current === $('.buttons').children().length && lastCurrent === 1) {
    $('.images').css({ transform: 'translateX(0px)' }).one('transitionend', function () {
      $('.images').hide().offset()
      $('.images').css({ transform: `translateX(${(current) * -960}px)` }).show()
    })
  }
  else {
    $('.images').css({ transform: `translateX(${(current) * -960}px)` })
  }
  $('.buttons').eq(0).children().eq(current - 1).siblings().removeClass()
  $('.buttons').eq(0).children().eq(current - 1).addClass('active')
  lastCurrent = current
}


function setTimer() {
  return timeId = setInterval(function () {
    goSlide(current)
    current++
    if (current > $('.buttons').children().length) {
      current = 1
    }
  }
    , 2500)
}