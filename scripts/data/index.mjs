const {log} = console

await $`node scripts/data/proc.js some-command`

let res = await $`~/.cargo/bin/fd .yaml` //.pipe($`node scripts/data/proc.js`)


res = await $`git branch --show-current`

log(`Current branch ${res}`)
