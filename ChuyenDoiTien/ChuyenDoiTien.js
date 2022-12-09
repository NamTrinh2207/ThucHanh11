function MyFunction() {
let Amount = document.getElementById('Amount').value;
let From = document.getElementById('From').value;
let To = document.getElementById('To').value;
let MyShow;

if (From=='VND'&&To=='USD'){
    MyShow = 'Result = '+ (Amount/23000)+ '$';
}else if (From=='USD'&&To=='VND'){
    MyShow = 'Result = '+ (Amount*23000)+ 'Đồng';
}else if (From=='VND' && To=='VND'){
    MyShow = 'Result = '+Amount + 'Đồng';
    }else{
    MyShow = 'Result = '+Amount + '$';
    }
document.getElementById('MyShow').innerHTML=MyShow;
}