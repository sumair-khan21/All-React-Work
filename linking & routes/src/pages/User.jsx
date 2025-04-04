import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

function User() {
  const  params = useParams()
console.log(params)
let [SearchParams, SetSearchParams] = useSearchParams ();
console.log(SearchParams.get("name"))
  return (
    <h1>User</h1>
  )
}

export default User