getS = selector =>document.querySelector(selector);
let forma1 = document.forms.forma1;
getS('#butt').addEventListener('click', function() {
    if(forma1.qa.value !==''){
        forma1.qq.value = forma1.qa.value
        forma1.qa.value = ''
    }
})
getS('#placeholder').addEventListener('blur', function () {
    if(this.placeholder == '' || this.placeholder != ''){
        this.placeholder = this.value
        this.value = ''
    }
})