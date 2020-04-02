import Interpreters from './interpreters.js';

var interpreters = Array.from(Interpreters);

const parent = document.getElementById("container");
console.log('parent: ', parent);
interpreters.forEach((int) => {
    // const container = document.createElement("div")
    // container.className = "container";
        const wrapper = document.createElement("div");
        wrapper.className = "wrapper";
            const card = document.createElement("div");
                card.className = "card";
                const name = document.createElement("div");
                name.className = "name";
                name.textContent = int.name;
            card.appendChild(name);
            const image = document.createElement("div");
                image.className="image";
                    const imgsrc = document.createElement("img");
                    imgsrc.setAttribute("src", "./img/"+int.image);

                image.appendChild(imgsrc);
            card.appendChild(image);
            const profileBox = document.createElement("div");
                profileBox.className = "profileBox";
                const profile = document.createElement("profile");
                    profile.className = "profile";
                    profile.textContent = "Profile";
                profileBox.appendChild(profile);
            card.appendChild(profileBox);
            const details = document.createElement("div");
            details.className = "details";
            details.textContent = int.profile;
            card.appendChild(details);
            const link = document.createElement("div");
            link.className = "link";
                const ahref = document.createElement("a");
                ahref.setAttribute("href", int.link);
                ahref.setAttribute("target", "_blank");
                ahref.textContent = "More Info";
            link.appendChild(ahref);
            card.appendChild(link);



        wrapper.appendChild(card);
    // container.appendChild(wrapper);
    // console.log('container: ', parent);
    parent.appendChild(wrapper);
});

// console.log(interpreters);

// function addAcctCard(obj) {
//     let acctparent = document.getElementById('rightPanel');

//     let childNode = document.createElement("div");
//     childNode.className = 'divBox Card';

//     let childNode2 = document.createElement("div");
//     childNode2.className = 'leftCityCard';
    
//     let spanNode = document.createElement("span");
//     spanNode.textContent = obj.name;
//     childNode2.appendChild(spanNode);

//     let buttonNode = document.createElement("button");
//     // buttonNode.setAttribute("id", 'cityCardShow');
//     buttonNode.className = 'btn';
//     buttonNode.textContent = 'Show';
//     childNode2.appendChild(buttonNode);

//     childNode.appendChild(childNode2);
