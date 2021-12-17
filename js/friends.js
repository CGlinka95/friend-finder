(function(){
    const friend = JSON.parse(localStorage.getItem('friend'))
    const friendItem = friendDisplay(friend)

    document.querySelector('main').append(friendItem)

    function friendDisplay(friend) {
        const {firstName, lastName, avatar, email, homeTown, bio} = friend
        const template = `
            <div class="friend">
                <div class="identity">
                    <img src="img/${firstName.toLowerCase()}_${lastName.toLowerCase()}" class="photo" alt="${avatar}" />
                    <h2 class="name">${firstName} ${lastName}</h2>
                    <ul>
                        <li><span class="label">email:</span> ${email}</li>
                        <li><span class="label">hometown:</span> ${homeTown}</li>
                    </ul>
                </div>
                <p class="bio">${bio}</p>
            </div>
        `
        return document.createRange().createContextualFragment(template).children[0]
    }
}
)()