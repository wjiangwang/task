//封装
window.jQuery = function () { }

window.jQuery.ajax = function ({ url, method, body }) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url)
        request.send(body)
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                }
                else if (request.status > 400) {
                    reject.call(undefined, request.responseText)
                }
            }
        }
    })

}


//调用
button.addEventListener('click', function () {
    jQuery.ajax({
        url: '/xxx',
        method: 'post',
        body: 'hello'
    }).then(function (text) { console.log(text) }, function (request) { console.log(request) })

})