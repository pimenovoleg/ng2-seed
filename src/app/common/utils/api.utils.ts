import { Md5 } from 'ts-md5/dist/md5';

function timestamp() {
    return Date.now();
}

function createHash(ts, privkey, pubkey) {
    const preHash = ts + privkey + pubkey;

    return Md5.hashStr(preHash);
}

function formatResponse(body) {
    const res = {
        data: body.data.results,
        meta: {
            offset: body.data.offset,
            limit: body.data.limit,
            total: body.data.total,
            count: body.data.count
        }
    };

    return res;
}

export { timestamp, createHash, formatResponse };
