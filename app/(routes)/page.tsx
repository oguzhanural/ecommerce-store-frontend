import getBillboard from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  
  const products = await getProducts( { isFeatured: true } );
  const billboard = await getBillboard('109c3b82-a275-4a39-80a3-7e09ee5b52d3');

  return (
    <div>
        <Container>
          <div className="space-y-10 pb-10">
            <Billboard
              data={billboard}
            />
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </Container>

    </div>
  )
}

export default HomePage