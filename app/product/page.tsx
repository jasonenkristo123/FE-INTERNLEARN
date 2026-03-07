import Link from 'next/link'
import getProducts from '../fetch/product'
type ProductPageProps = {
  params: {
    id: string[]
  }
}

type ProductsProps = {
  id: number
  image: string
  price: number
  description: string
  category: string
  rating: {
    rate: number
    count: number
  }
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props
  const product = await getProducts('https://fakestoreapi.com/products')

  console.log(product)

  return (
    <section className="grid grid-cols-4 gap-5 p-10">
      {product.length > 0 &&
        product.map((product: ProductsProps) => (
          <Link href={`/product/detail/${product.id}`} key={product.id}>
            <div
              key={product.id}
              className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs"
            >
              <img
                className="rounded-base mb-6 w-full h-64 object-cover"
                src={product.image}
                alt="product image"
              />
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                    {product.rating.rate}
                  </span>
                </div>
                <h5 className="text-xl text-heading font-semibold tracking-tight">
                  {product.description && product.description.length > 50
                    ? `${product.description.substring(0, 50)}...`
                    : product.description}
                </h5>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-extrabold text-heading">
                    {product.price}$
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </section>
  )
}
