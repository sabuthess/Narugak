export const CreateProductForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input type="text" placeholder="Ingrese el nombre del producto " />
      <input type="number" placeholder="Ingrese el nombre del producto " />
      <button>Enviar</button>
    </form>
  );
};
