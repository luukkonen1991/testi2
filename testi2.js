let nr_invites = parseInt(process.argv[2]);
let depth = parseInt(process.argv[3]);

let users = [];

if (process.argv[2] && process.argv[3]) {
  let newUser = {
    ID: Math.floor(Math.random() * 1000)
  };
  users.push(newUser);
  console.log(`#${newUser.ID} created`);
  for (let i = 0; i < depth; i++) {
    let invitor = users[i].ID;
    console.log(`#${invitor} is inviting friends`);
    for (let i = 0; i < nr_invites; i++) {
      let invitedUser = {
        ID: i + Math.floor(Math.random() * 1000)
      };
      users.push(invitedUser);
      console.log(`#${invitedUser.ID} created, which was invited by #${invitor}`);
    }
  }
} else {
  console.log(`Plese submit the following parameters 'nr_invites' and 'depth'`);
}