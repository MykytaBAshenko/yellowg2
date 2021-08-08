
let body = document.getElementById("body")
let videoBody = document.getElementById("video-body")
let videopopup = document.getElementById("videopopup")
let videoBodyClose = document.getElementById("video-body-close")
const videofn = function () {
  if (videoBody.classList.contains("display-none")) {
    videoBody.classList.remove("display-none")
    body.classList.add("overflow-hidden")

  } else {
    videoBody.classList.add("display-none")
    body.classList.remove("overflow-hidden")

  }
}
videoBodyClose.onclick = videofn
if (videopopup)
  videopopup.onclick = videofn


// element1.addEventListener('click',doSomething2,false)

let bbbb2 = document.getElementById("body")
let popup = document.getElementById("btn-popup")
let mob_btn = document.getElementById("click-btn-mobile")
let closebtn = document.getElementById("popup-menu-body-head-click")
const ccc = () => {
  if (document.getElementById("popup-menu").classList.contains("active")) {
    document.getElementById("popup-menu").classList.remove("active");
    popup.classList.remove("display-none")
    bbbb2.classList.remove("overflow-hidden-mobile")

  }
  else {
    popup.classList.add("display-none")
    bbbb2.classList.add("overflow-hidden-mobile")

    document.getElementById("popup-menu").classList.add("active");
  }
}
mob_btn.onclick = ccc
popup.onclick = ccc
closebtn.onclick = ccc
let popup_window = document.getElementById("popup-menu")
var popup_links = popup_window.getElementsByTagName('a');

for (let i = 0; i < popup_links.length; ++i) {
  popup_links[i].onclick = ccc
}



let slider = document.getElementById('slider')
let selector = document.getElementById('selector')
let selectValue = document.getElementById('selectValue')
let progressBar = document.getElementById('progressBar')
let calcOut = document.getElementById('calculator-body-content-inner-calccount-number')

selectValue.innerHTML = slider.value

slider.oninput = function () {
  selectValue.innerHTML = this.value
  selector.style.left = this.value + '%'
  progressBar.style.width = this.value + '%'
  calcOut.innerHTML = `${this.value * 800} $`
}



  $('#reasons_for_work_form2').submit(function (e) {
    e.preventDefault()
    let countError = 0;

    var data_json = {
      "Имя": $('#submit-form-input-name2').val(),
      "Город": $('#submit-form-input-citi2').val(),
      "Почта": $('#submit-form-input-email2').val(),
      "Телефон": $('#submit-form-input-phone2').val(),
      "Цель": "Создать франшизу",

    }
    if (!countError) {
      $.ajax({
        url: '/post_contact.php',
        type: 'post',
        data: {
          subject: 'Форма заявки',
          data_json: JSON.stringify(data_json)
        },
        success: function () {
          $('#easons_for_work_form input').val('')

          $('.success').addClass("display-block")

          setTimeout(function () {
            $('.success').removeClass("display-block")

          }, 3000)
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      });
    }

  })

  $('#reasons_for_work_form').submit(function (e) {
    e.preventDefault()
    let countError = 0;

    var data_json = {
      "Имя": $('#submit-form-input-name').val(),
      "Город": $('#submit-form-input-citi').val(),
      "Почта": $('#submit-form-input-email').val(),
      "Телефон": $('#submit-form-input-phone').val(),
      "Цель": "Создать франшизу",

    }
    console.log(data_json)
    if (!countError) {
      $.ajax({
        url: '/post_contact.php',
        type: 'post',
        data: {
          subject: 'Форма заявки',
          data_json: JSON.stringify(data_json)
        },
        success: function () {
          $('#easons_for_work_form input').val('')

          $('.success').addClass("display-block")

          setTimeout(function () {
            $('.success').removeClass("display-block")

          }, 3000)
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
      });
    }

  })

