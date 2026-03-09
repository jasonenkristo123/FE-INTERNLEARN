

type props = {
    params: {
        id: string
    }
}

const dataProduk = [
    {
        id: '1',
        name: 'Product 1',
        price: 100,
    },
    {
        id: '2',
        name: 'Product 2',
        price: 200,
    },
    {
        id: '3',
        name: 'Product 3',
        price: 300,
    },
]

export default async function GET(request: Request, { params }: props) {
    const { id } = params;

    try {
        if (request === null) {
            throw new Error('Request is null');
        }

        const product = dataProduk.find((item) => item.id === id);
        
        if (!product) {
            return new Response('Product not found', { status: 404 });
        }

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
    } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
    }
}
