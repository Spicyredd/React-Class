import React from 'react'
import { useParams } from 'react-router-dom'

// useParams() // to get dynamic route parameter
// useSearchParams() to get query parameter
// useNavigate() to chang epath onClick event

const GetDynamicRouteParameter = () => {
    const params = useParams();
  return (
    <div>
      GetDynamicRouteParameter
      <br></br>
      {params.id1}
      <br></br>
      {params.id2}
    </div>
  )
}

export default GetDynamicRouteParameter