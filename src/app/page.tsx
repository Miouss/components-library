export default async function Home() {
  return (
    <main className="flex gap-4">
      <Button route="google-map">Google Map</Button>
      <Button route="burger-menu">Burger Menu</Button>
      <Button route="carrousel">Carrousel</Button>
    </main>
  );
}

interface Props {
  route: string;
  children: React.ReactNode;
}

function Button({ route, children }: Props) {
  return (
    <button className="border-2 border-black p-4 rounded-full">
      <a href={`/${route}`}>{children}</a>
    </button>
  );
}
