import getBillboard from '@/actions/get-billboards';
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboard('109c3b82-a275-4a39-80a3-7e09ee5b52d3');

  return (
    <div>
        <Container>
          <div className="space-y-10 pb-10">
            <Billboard
              data={billboard}
            />
          </div>
        </Container>

    </div>
  )
}

export default HomePage