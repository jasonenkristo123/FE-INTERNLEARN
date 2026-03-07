import Modal from "@/app/components/core/modal";
import getProducts from "@/app/fetch/product";

type detailProps = {
    params: Promise<{ id: string }>
}

export default async function DetailProductPage(props: detailProps) {
    const { id } = await props.params;

    const produk = await getProducts(`https://fakestoreapi.com/products/${id}`);
    console.log(produk);

    return (
        <Modal>
            <img src={produk.image} alt={produk.title} className="object-cover w-full aspect-square p-35" />
            <div className="bg-white p-4 px-6">
                <h1 className="text-2xl font-bold text-heading">{produk.title}</h1>
                <p className="text-lg font-semibold text-brand-primary">${produk.price}</p>
                <p className="text-gray-600 mt-4">{produk.description}</p>
            </div>
        </Modal>
    )
}
        