// destructuring
{
    const user = {
        id: 345,
        name: {
            firstName: 'Al Jannatul',
            lastName:'Maowa',
            preferName: 'Risa'
        },
        contactNumber: "017445723823",
        address: "Bangladesh"
    }
}
const {contactNumber, name: {preferName : nickName}} = user // here nickName is alias

// Array Destructions
const myFriends = ["Chanler", "Joey", "Ross", "Monica", "Rachael"];

// I want to set Ross as my bestFriend
const [,,bestFriend, ...rest] = myFriends
