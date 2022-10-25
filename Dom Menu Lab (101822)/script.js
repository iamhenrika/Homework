// Menu data structure
var menuLinks = [
    { text: 'About', href: '/about' },
    {
        text: 'Catalog', href: '#', subLinks: [
            { text: 'All', href: '/catalog/all' },
            { text: 'Top Selling', href: '/catalog/top' },
            { text: 'Search', href: '/catalog/search' },
        ]
    },
    {
        text: 'Orders', href: '#', subLinks: [
            { text: 'New', href: '/orders/new' },
            { text: 'Pending', href: '/orders/pending' },
            { text: 'History', href: '/orders/history' },
        ]
    },
    {
        text: 'Account', href: '#', subLinks: [
            { text: 'Profile', href: '/account/profile' },
            { text: 'Sign Out', href: '/account/signout' },
        ]
    },
];

//Select and cache the <main> element in a variable named mainEl.
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Set the content of mainEl to <h1>SEI Rocks!</h1>.
//Add a class of flex-ctr to mainEl.
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
//Set the height topMenuEl element to be 100%
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
//Add a class of flex-around to topMenuEl

const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = ('var(--main-bg)')
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList.add('flex-ctr')
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add('flex-around')

//Iterate over the entire menuLinks array and for each "link" object:
//Create an <a> element.
//On the new element, add an href attribute with its value set to the href property of the "link" object.
//Set the new element's content to the value of the text property of the "link" object.
//Append the new element to the topMenuEl element.

for (i = 0; i < menuLinks.length; i++) {
    let aEL = document.createElement('a')
    aEL.setAttribute('href', menuLinks[i].href)
    aEL.textContent = menuLinks[i].text
    topMenuEl.append(aEL)
}

// let i = 0;
// menuLinks.forEach((arg) => {
//     let aEl = document.createElement('a');
//     aEl.setAttribute('href', arg.href);
//     aEl.innerHTML = arg.text;
//     console.log(i);
//     i++;
//     topMenuEl.append(aEl);
// })

//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl
//Set the height subMenuElelement to be 100%.
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
//Add the class of flex-around to the subMenuEl element.
//Set the CSS position property of subMenuEl to the value of absolute.
//Set the CSS top property of subMenuEl to the value of 0
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const subMenuEl = document.querySelector('#sub-menu')
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

const topMenuLinks = topMenuEl.querySelectorAll('a')
//Declare a global showingSubMenu variable and initialize it to false;

let showingSubMenu = false;
//Attach a delegated 'click' event listener to topMenuEl

//The first line of code of the event listener function should call the event object's preventDefault()method.
//The second line of code function should immediately return if the element clicked was not an <a>element.
//Next in the event listener, if the clicked <a>link has a class of active
//Remove the activeclass from the clicked <a> element
//Set the showingSubMenuto false.
//Set the CSS top property of subMenuElto 0

function handleClick(event) {
    event.preventDefault()
    if (event.target.matches('a')) {
        console.log(event.target.textContent)
    } else {
        return;
    }

    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }

    //Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the activeclass exists or not.
    //Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
    //Next, the event listener should add a class name of active to the <a>element that was clicked.
    topMenuLinks.forEach(function (evt) {
        evt.classList.remove('active');
        event.target.classList.add('active')
    })

    //Code the buildSubMenu function so that it:
    // Clears the contents of subMenuEl.
    // Iterates over the subLinksarray passed as an argument; and for each "link" object:
    // Create an <a>element.
    // On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
    // Set the new element's content to the value of the text property of the "link" object.
    // Append the new element to the subMenuElelement.
    function buildSubMenu() {
        subMenuEl.innerHTML = ''

        linkObj.subLinks.forEach(function (subLinkObj) {
            let link = document.createElement('a')
            link.setAttribute('href', subLinkObj.href)
            link.textContent = subLinkObj.text
            subMenuEl.append(link)
        }
        )

        //Attach a delegated 'click' event listener to subMenuEl.
        //The first line of code of the event listener function should call the event object's preventDefault()method.
        // The second line of code function should immediately return if the element clicked was not an <a>element.
        //console.log the content of the <a>to verify the handler is working.
        //Set showingSubMenu to false.
        //Set the CSS topproperty of subMenuElto 0
        //Remove the class name of active from each <a>element in topMenuLinks- whether the activeclass exists or not.
        //Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.
        subMenuEl.addEventListener('click', function (subLinkEvent) {
            subLinkEvent.preventDefault();
            let sub = subLinkEvent.target
            if (sub.matches('a')) {
                console.log(sub)
                showingSubMenu = false
                subMenuEl.style.top = '0'
                topMenuLinks.forEach(function (alink) {
                    alink.classList.remove('active')
                })
                mainEl.innerHTML = `<h1> ${sub.textContent}</h1>`
            }
            else {
                return
            }
        })
    }

    // Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.
    // Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7
    let linkObj = menuLinks.find(function (subLinkObj) {
        return subLinkObj.text === event.target.textContent
    })

    // If showingSubMenu is true:
    // Call a buildSubMenu function passing to it the subLinks array for the clicked <a>element.
    // Set the CSS top property of subMenuEl to 100%.
    // Otherwise (showingSubMenu is false):
    // Set the CSS top property of subMenuEl to 0.
    if (event.target.getAttribute('href') === '#') {
        showingSubMenu = true
        buildSubMenu(linkObj)
        subMenuEl.style.top = '100%'
        // console.log(showingSubMenu)
    } else {
        showingSubMenu = false
        // console.log(showingSubMenu)
        subMenuEl.style.top = '0';
    }
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`
}

topMenuEl.addEventListener('click', handleClick)
