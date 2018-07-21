//js实现
/*button.addEventListener('click',function(){
    let request=new XMLHttpRequest()
    request.open('get','/xxx')
    request.send()
    request.onreadystatechange=function () {
        if(request.readyState===4){
            console.log(request.status)
            console.log(request.responseText)
            console.log(request.getAllResponseHeaders())
            let s=request.responseText
            let o=window.JSON.parse(s)
            console.log(o.note.to)
        }
        
    }
})*/



//封装
/*window.jQuery = function () { }

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
                fail.call(undefined, request.responseText)
            }
        }
    }
}


//调用
button.addEventListener('click', function () {
    jQuery.ajax(
        '/xx',
        'post',
        58585,
        function (e) { console.log(e) },
        function (e) { console.log(e) }, )
})*/



//promise封装
window.jQuery = function () { }

window.jQuery.ajax = function ({url, method, body}) {
return new Promise(function(resolve,reject){
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
        url:'/xxx',
        method:'post',
        body:'hello'
    }).then(function (text) { console.log(text) },function (request) { console.log(request) })
     
})