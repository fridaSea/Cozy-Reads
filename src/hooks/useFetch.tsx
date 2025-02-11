//  CUSTOM HOOKS -> they don´t return jsx. they return variabels. Whatever variable you want(string, array, object)

import { useEffect, useState } from "react"

type HookReturnType<T> = {
    data: T | null
}


function useFetch<T>(url:string):HookReturnType<T> {
    const [data, setData] = useState<T | null >(null)

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const result = await response.json() as T;
        //   console.log('result:>>', result)
          setData(result)
        };
        fetchData();
    }, [url])
    

  return {
    data : data,
  }
}

export default useFetch
