//封装
window.jQuery = function () { }

window.jQuery.ajax = function (url, method, body, sucess, fail) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.send(body)
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                sucess.call(undefined, request.responseText)
            }
            else if (request.status > 400) {
                fail.call(undefined, request)
            }
        }
    }
}


//调用
button.addEventListener('click', function () {
    jQuery.ajax(
        '/xxx',
        'get',
        undefined,
        function (e) { console.log(e) },
        function (e) { console.log(e) }, )
})