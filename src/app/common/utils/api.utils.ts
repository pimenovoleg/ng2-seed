import md5 from 'md5';

function timestamp() {
    return Math.floor(Date.now() / 1000);
}

function createHash(ts, privkey, pubkey) {
    const preHash = ts + privkey + pubkey;

    return md5(preHash);
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
