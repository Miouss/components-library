export default async function GoogleMap() {
    return (
      <main>
        <div className="w-96 h-96">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed/v1/place?q=La+Ferme+Viticole+-Clandestino,Chemin+Monplaisir,Saint-Rémy-de-Provence,France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </main>
    );
}