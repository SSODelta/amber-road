export async function downloadFile(cid: string): Promise<unknown | null> {
    // Fake download time
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
    if (fakeData.has(cid)) {
        return fakeData.get(cid);
    } else {
        return null;
    }
}

// Data is of type 'unknown' because typings will not be known when downloading
// files from the real IPFS.
//
const fakeData: Map<string, unknown> = new Map<string, unknown>([
    [
        'asdf',
        {
            name: 'my first feed',
            items: ['asdf2', 'asdf3', 'idontexist'] // Contains test listing
        },
    ],
    [
        'asdf2',
        {
            uid: '123',
            title: 'hotdog',
            category: 'food_and_drinks',
            description: 'Yummy hotdog',
            pictures: [],
            price: 123,
            shipping: {
                countries:['Slovakia'],
                methods:['Sled'],
            },
        },
    ],
    [
        'asdf3',
        {
            uid: '123',
            title: 'borger',
            category: 'food_and_drinks',
            description: 'Great borger',
            pictures: [],
            price: 6969,
            shipping: {
                countries:['Slovakia'],
                methods:['Sled Plus'],
            },
        },
    ]
]);
