const profileImageElement  = document.getElementById("profile-image");
const userNameElement = document.getElementById("user-name");
const InfoButtons = document.querySelectorAll(".additional-info-buttons");
const additionalInfoElement = document.getElementById("additional-info");
const getUserButton = document.getElementById("getUser");

const fetchUser = ()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        const {
            email,
            phone,
            name: {title, first, last},
            dob: {age},
            picture: {large},
           } = data.results[0];
        const additionalInfo = {age: age, email: email, phone: phone};

        profileImageElement.setAttribute("src", large);
        userNameElement.textContent = `${title} ${first} ${last}`

        InfoButtons.forEach((button)=>{
            button.addEventListener('click', (ev)=>{
                console.log(ev.target.dataset.attr2);
                additionalInfoElement.textContent = additionalInfo[ev.target.dataset.attr]
            });
        });

    })
}

fetchUser();
getUserButton.addEventListener('click', fetchUser);