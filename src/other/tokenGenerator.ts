export function tokenGen(len: number) {
    const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
    let str = '';
    for (let i = 0; i < len; i++) {
        let pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    return str;
}
