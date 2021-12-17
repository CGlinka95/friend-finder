(function(){
    let findFriends;
    
    fetch('./friends/friends.json')
    .then(res => res.json())
    .then(data => {
        findFriends = [...data]
        localStorage.setItem('friends', JSON.stringify(findFriends))
        const friendElements = renderFriends(data)
        const friends = addFriendActions(friendElements)
        const main = document.createElement('main')
        friends.forEach(product => {
            main.append(product)
        })

        document.querySelector('.content').after(main)
    })
    .catch(error => console.log(error))

    function renderFriends(friends){
        const elements = friends.map((friend) => {
            const {id, firstName, lastName} = friend
            const template = `
                <div class="pure-menu custom-restricted-width">
                    <span class="pure-menu-heading">Friends</span>
        
                    <ul class="pure-menu-list">
                        <li class="pure-menu-item"><a href="#" class="pure-menu-link" data-key=${id}>${firstName} ${lastName}</a></li>
                        <li class="pure-menu-item"><a href="#" class="pure-menu-link" data-key=${id}>${firstName} ${lastName}</a></li>
                        <li class="pure-menu-item"><a href="#" class="pure-menu-link" data-key=${id}>${firstName} ${lastName}</a></li>
                        <li class="pure-menu-item"><a href="#" class="pure-menu-link" data-key=${id}>${firstName} ${lastName}</a></li>
                    </ul>
                </div>
            `
            return document.createRange().createContextualFragment(template).children[0]
        })
        return elements
    }

    function onRequestForInfo(e) {
        const key = Number(e.currentTarget.dataset.key);
        const selected = findFriends.find(product => product.id === key)
        localStorage.setItem('product', JSON.stringify(selected))
        window.location.assign('friends.html')
    }
    window.addEventListener('beforeunload', (e) => e.preventDefault())

    function addFriendActions(friends) {
        const elements = friends.map(friend => {
            friend.addEventListener('click', onRequestForInfo)
            return product
        })
        return elements
    }
}
)()