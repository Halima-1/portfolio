function display(){
    
    // home
    let display= document.getElementById('sideNav')
    if(display.classList.contains('showing')){
        display.classList.remove('showing');
        display.classList.add('hidden');
    }else{
        display.classList.remove('hidden');
        display.classList.add('showing');
    }
}

// more about me

function moreAbout(){
    let aboutMe = document.getElementById('moreAbout')
    let btnn = document.getElementById('btn');
    if(aboutMe.classList.contains('showing')){
        aboutMe.classList.remove('showing');
        aboutMe.classList.add('hide');
        btnn.classList.add('showing');
        btnn.classList.remove('hide');
    }
    else{
        aboutMe.classList.remove('hide');
        aboutMe.classList.add('showing');
        btnn.classList.add('hide');
        btnn.classList.remove('showing');
    }
}

// more project

function moreProject(){
    let btn2 = document.getElementById('btn2');
    let moreProject= document.getElementById('moreProject')
    if(moreProject.classList.contains('showing')){
        moreProject.classList.remove('showing');
        moreProject.classList.add('hide');
        btn2.classList.add('showing');
        btn2.classList.remove('hide');
    }
    else{
        moreProject.classList.remove('hide');
        moreProject.classList.add('showing');
        btn2.classList.add('hide');
        btn2.classList.remove('showing');
    }
}