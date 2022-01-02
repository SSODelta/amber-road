var GATEWAY = 'http://localhost:8081/ipfs/';

export async function downloadFile(cid: string): Promise<unknown | null> {
    return fetch(GATEWAY+cid)
           .then(function(response){return response.json();});
}