function validate() {
    const idInput = document.getElementById('userId');
    const pwdInput = document.getElementById('userPw');
    const chPwdInput = document.getElementById('checkPw');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    // 아이디
    // 첫글자는 반드시 영문자하고 영문자, 숫자 포함 총 4~12자로 입력
    let reg = /^[a-z][a-z\d]{3,11}$/i;
    if(!reg.test(idInput.value)) {
        alert("아이디를 다시 입력하세요");
        idInput.value = "";
        idInput.focus();
        return false;
    }

    // 비밀번호
    // 영문자, 숫자, 특수문자(!@#$%^&*)로 총 8~15자로 입력
    let pwReg = /^[a-z\d!@#$%^&*]{8,15}$/i;
    if(pwReg.test(pwdInput.value)!=true) {
        alert("비밀번호를 다시 입력하세요");
        pwdInput.value = "";
        pwdInput.focus();
        return false;

    }
    
    // 비밀번호 일치여부
    if(pwdInput.value != chPwdInput.value) {
        alert('비밀번호가 일치하지 않습니다');
        chPwdInput.value = "";
        chPwdInput.focus();
        return false;
    }

    // 이름
    let nameReg = /^[가-힣]{2,}$/;
    
    if(nameReg.test(nameInput.value)!=true) {
        alert('이름을 다시 입력하세요');
        nameInput.value = "";
        nameInput.focus();
        return false;
    }

    // 이메일
    let emailReg = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)?/;
    emailReg = /^\w+@\w+\.\w+(\.\w+)?/;
    emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?/;
    if(!emailReg.test(emailInput.value)) {
        alert('이메일을 다시 입력하세요');
        emailInput.value = "";
        emailInput.focus();
        return false;
    }
    frm.submit();
}