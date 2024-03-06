import handleProfileSignup from './6-final-user';

async function test() {
  const res = await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg");
  console.log(res);
}

test()
