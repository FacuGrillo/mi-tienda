const [,, method, route, ...args] = process.argv;
const BASE_URL = "https://dummyjson.com";

const [resource, id] = route.split("/");

const show = (data) => console.log(JSON.stringify(data, null, 2));

async function getProducts() {
  if (id) {
    if (isNaN(Number(id))) {
      console.log("❌ Error: El ID debe ser un número válido.");
      return;
    }
    const res = await fetch(`${BASE_URL}/products/${id}`);
    show(await res.json());
  } else {
    const res = await fetch(`${BASE_URL}/products`);
    show(await res.json());
  }
}

async function createProduct() {
  const [title, price, category] = args;
  if (!title || !price || !category) {
    console.log("❌ Error: faltan argumentos. Uso: POST products <title> <price> <category>");
    return;
  }
  if (isNaN(Number(price))) {
    console.log("❌ Error: el precio debe ser un número válido.");
    return;
  }
  const res = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    body: JSON.stringify({ title, price: Number(price), category }),
    headers: { "Content-Type": "application/json" }
  });
  show(await res.json());
}

async function deleteProduct() {
  if (!id) {
    console.log("❌ Error: Debes indicar un ID para eliminar. Ejemplo: DELETE products/7");
    return;
  }
  if (isNaN(Number(id))) {
    console.log("❌ Error: El ID debe ser un número válido.");
    return;
  }
  const res = await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });
  show(await res.json());
}

async function main() {
  try {
    if (method === "GET" && resource === "products") {
      await getProducts();
    } else if (method === "POST" && resource === "products") {
      await createProduct();
    } else if (method === "DELETE" && resource === "products") {
      await deleteProduct();
    } else {
      console.log("❌ Comando no reconocido. Usa GET, POST o DELETE.");
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
