{
  "compilerOptions": {
    "moduleResolution": "node",
    "types": ["next", "node"]
  }
}

export default async function ({ params }: Props) {
  const { slug } = params; // removed `await`

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    // ...existing code...
  );
}
