import React from 'react'
import { Skeleton } from './ui/skeleton'

const Loader = () => {
  return (
    <div className="lg:w-[65%] w-full">
    {/* {[1, 2, 3].map((i) => ( */}
      <div
        // key={i}
        className="flex items-center space-x-4 w-[100%] bg-blue-100/10 p-4 my-3"
      >
        <Skeleton className="h-[120px] w-[120px] rounded-md" />
        <div className="space-y-2 w-[calc(100% - 150px)]">
          <Skeleton className="h-[50px] w-[300px]" />
          <Skeleton className="h-[30px] w-[200px]" />
        </div>
      </div>
    {/* ))} */}
  </div>
  )
}

export default Loader