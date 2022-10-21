// Menu data structure
let menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

const mainEl = document.querySelector('main');
// console.log(mainEl);
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks</h1>';
mainEl.classList.add("flex-ctr");
// console.log(mainEl);

const topMenuEl = document.querySelector('#top-menu');
// console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// let i = 0;
// menuLinks.forEach((arg) => {
//     let aEl = document.createElement('a');
//     aEl.setAttribute('href', arg.href);
//     aEl.innerHTML = arg.text;
//     console.log(i);
//     i++;
//     topMenuEl.append(aEl);
// })

// menuLinks.forEach(function(str) {
//  const a = document.createElement('a')
// a.setAttribute ('href', str.href)
// a.textContent = str.text    
// topMenuEl.append(a)
//  console.log(str.text)


// for(let i = 0; i < menuLinks.length; i++){
//     let aEl = document.createElement('a');
//     aEl.setAttribute('href', menuLinks[i].href);
//     aEl.innerHTML = menuLinks[i].text;
//     topMenuEl.append(aEl);
// }

let i = 0;
for (let arg of menuLinks) {
  let aEl = document.createElement('a');
  aEl.setAttribute('href', arg.href);
  aEl.innerHTML = arg.text;
  console.log(i);
  i++;
  topMenuEl.append(aEl);
};

subMenuEl.style.height = ('100%');
subMenuEl.style.backgroundColor = ('var(--sub-menu-bg)');
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = ('absolute');
subMenuEl.style.top = ('0');


//  TASKS 5
// 5.1
let topMenuLinks = topMenuEl.querySelectorAll('a');                            
let showingSubMenu = false;                                                    

// 5.2
function handleClick(evt) {                                                    
  evt.preventDefault();                                                        

  let clickedLink = evt.target;
  if (clickedLink.tagName !== "A") {                                           
    return;
  } else {
    console.log(clickedLink);                                                  

// 5.3
    if (clickedLink.classList.contains('active')) {
      clickedLink.classList.remove('active');                                  
      showingSubMenu = false;                                                  
      subMenuEl.style.top = '0';                                               
      return;                                                                  
    }

// 5.4
    topMenuLinks.forEach(function (aLink) {                                    
      aLink.classList.remove('active')
    });

// 5.5
    clickedLink.classList.add('active');                                       


// 5.7
    function buildSubMenu(linkObject) {                                        
      subMenuEl.innerHTML = '';     
// 5.8                                           
      linkObject.subLinks.forEach(function (subLinkObj) {                      
        let link = document.createElement('a');                                
        link.setAttribute('href', subLinkObj.href);                            
        link.textContent = subLinkObj.text;                                    
        subMenuEl.append(link);                                               
      });
    }

// 6.0
    subMenuEl.addEventListener('click', function (subLinkEvt) {             
      subLinkEvt.preventDefault();                                             
      let subMenuClickedLink = subLinkEvt.target;
      if (subMenuClickedLink.tagName !== "A") {                             
        return;
      } else {
        console.log(subMenuClickedLink);                              

// 6.1
        showingSubMenu = false;                                               
        subMenuEl.style.top = '0';                                            

// 6.2
        topMenuLinks.forEach(function (aLink) {                                
          aLink.classList.remove('active')
        });

// 6.3
        mainEl.innerHTML = `<h1>${subMenuClickedLink.textContent}</h1>`   
      } 
        return
    });

// 5.6 cont
    let linkObj = menuLinks.find(function (aLinkObj) {                  
      return aLinkObj.text === clickedLink.textContent;
    });
    console.log(linkObj);

    if (clickedLink.getAttribute('href') === "#") {                       
      showingSubMenu = true;
      console.log(showingSubMenu);
// 5.7     
      buildSubMenu(linkObj);                                                  
      subMenuEl.style.top = '100%';                                           
    } else {
      showingSubMenu = false;
      console.log(showingSubMenu);
      subMenuEl.style.top = '0';                                               
    }

  }

// 6.4
  mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;                 
}

// 5.2 cont
topMenuEl.addEventListener('click', handleClick);             






// subLinkArray = []
// for (let i = 0; i < menuLinks.length ;i++){
//     console.log(menuLinks[i].hasOwnProperty('subLinks'))
//      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
//     if(menuLinks[i].hasOwnProperty('subLinks')){
//         subLinkArray.push(menuLinks[i].subLinks)
//     }
//  }
// console.log(subLinkArray)