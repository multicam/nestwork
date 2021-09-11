const {log} = console
import {resolve,basename,dirname,join} from 'path'
import {existsSync,unlinkSync} from 'fs'

log(new Date().toDateString())
const res = await $`cd static/property && fd -e png -e jpg .`
const files = res.stdout.split('\n').filter(i => i!=='')
for(let i of files) {
    const src = join('static/property',i), dst = join(dirname(src),basename(src).split('.').shift()+'-thumb.jpg')
    log('==',src, '|', dst)
    if(existsSync(dst)) {
        unlinkSync(dst)
    }
    await $`convert ${src} -resize 350x350 -gravity center ${dst}`

}