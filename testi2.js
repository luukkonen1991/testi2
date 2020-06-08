let nr_invites = parseInt(process.argv[2]);
let depth = parseInt(process.argv[3]);

let users = [];
let hasInvited = [];


if (process.argv[2] && process.argv[3]) {
  let newUser = {
    ID: Math.floor(Math.random() * 1000)
  };
  users.push(newUser);
  console.log(`#${newUser.ID} created`);
  for (let i = 1; i < depth; i++) {
    users.forEach((invitor) => {
      if (hasInvited.includes(invitor)) return;
      console.log(`#${invitor.ID} is inviting friends`);
      for (let i = 0; i < nr_invites; i++) {
        let invitedUser = {
          ID: i + Math.floor(Math.random() * 1000)
        };
        users.push(invitedUser);
        hasInvited.push(invitor);
        console.log(`#${invitedUser.ID} created, which was invited by #${invitor.ID}`);
      }
    });
  }
} else {
  console.log(`Plese submit the following parameters 'nr_invites' and 'depth'`);
}
console.log('All users.amount', users.length);
