document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = 'my JS';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

document.querySelector('html').setAttribute('lang', 'en');



let div1 = document.createElement('h1');
div1.classList.add('h1__top');
div1.innerHTML = 'Choose Your Option';
document.body.appendChild(div1);

let div2 = document.createElement('p');
div2.classList.add('p__button');
div2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
document.body.appendChild(div2);

let div3 = document.createElement('div');
div3.classList.add('block__one');
document.body.appendChild(div3);
div3.appendChild(div1);
div3.appendChild(div2);




let div4 = document.createElement('p');
div4.classList.add('p__frc');
div4.innerHTML = 'freelancer';
document.body.appendChild(div4);

let div5 = document.createElement('h2');
div5.classList.add('h2__top');
div5.innerHTML = 'Initially designed to';
document.body.appendChild(div5);

let div6 = document.createElement('p');
div6.classList.add('p__but');
div6.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(div6);

let div7 = document.createElement('button');
div7.classList.add('btn');
div7.innerHTML = 'start here';
document.body.appendChild(div7);

let div8 = document.createElement('div');
div8.classList.add('block__left');
document.body.appendChild(div8);
div8.appendChild(div4);
div8.appendChild(div5);
div8.appendChild(div6);
div8.appendChild(div7);



let div9 = document.createElement('p');
div9.classList.add('p__std');
div9.innerHTML = 'studio';
document.body.appendChild(div9);

let div10 = document.createElement('h2');
div10.classList.add('h2__top__r');
div10.innerHTML = 'Initially designed to';
document.body.appendChild(div10);

let div11 = document.createElement('p');
div11.classList.add('p__but__r');
div11.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(div11);

let div12 = document.createElement('button');
div12.classList.add('btn__r');
div12.innerHTML = 'start here';
document.body.appendChild(div12);

let div13 = document.createElement('div');
div13.classList.add('block__right');
document.body.appendChild(div13);
div13.appendChild(div9);
div13.appendChild(div10);
div13.appendChild(div11);
div13.appendChild(div12);



let div14 = document.createElement('div');
div14.classList.add('block__full');
document.body.appendChild(div14);
div14.appendChild(div8);
div14.appendChild(div13);


let style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
    * {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    .block__one {
        margin-top: 80px;
        text-align: center;
    }
    .h1__top {
        font-size: 36px;
        margin-bottom: 10px;
    }
    .p__button {
        font-size: 14px;
        color: #9FA3A7;
    }
    .block__full {
        display: flex;
        justify-content: center;
    }
    .block__left {
        margin-top: 50px;
        padding-top: 70px;
        text-align: center;
        border: 2px solid #E8E9ED;
        border-radius: 5px 0 0 5px;
        width: 320px;
        height: 340px;
    }
    .p__frc {
        font-size: 12px;
        color: #9FA3A7;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 20px;
    }
    .h2__top {
        font-size: 36px;
        margin: 0px 50px 0 50px;
    }
    .p__but {
        font-size: 12px;
        line-height: 22px; 
        font-weight: bold;
        color: #9FA3A7;
        margin: 30px 30px 0 30px; 
    }
    .btn {
        margin-top: 40px;
        padding: 3%;
        border: 2px solid #FFC80A;
        cursor: pointer;
        text-transform: uppercase;
        border-radius: 30px;
        background-color: white;
        font-weight: bold;
        letter-spacing: 2px;
    }

    .block__right {
        margin-top: 50px;
        padding-top: 70px;
        text-align: center;
        border-left: 0px;
        border-radius: 0px 5px 5px 0px;
        width: 320px;
        height: 344px;
        background-color: #8F75BE;
    }
    .p__std {
        color: #FFC80A;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 20px;
    }
    .h2__top__r {
        font-size: 36px;
        color: #fff;
        margin: 0px 50px 0 50px;
    }
    .p__but__r {
        margin: 30px 30px 0 30px; 
        font-size: 12px;
        line-height: 22px; 
        font-weight: bold;
        color: #fff;
    }
    .btn__r {
        margin-top: 40px;
        padding: 3%;
        border: 2px solid #FFC80A;
        cursor: pointer;
        text-transform: uppercase;
        border-radius: 30px;
        background-color: #8F75BE;
        font-weight: bold;
        letter-spacing: 2px;
        color: #fff;
    }
`;