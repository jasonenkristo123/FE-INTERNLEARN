const getProducts = async (url: string) => {
  try {
    const res = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    })

    if (!res.ok) {
      throw new Error('Fetch Failed!')
    }

    return res.json()
  } catch (error) {
    console.log('Error', error)
  }
}

export default getProducts
