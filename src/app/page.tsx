import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/42fee58c-1701-498c-af23-12651fb2335b-cfo5pc.jpg",
  "https://utfs.io/f/105e8b2e-cee9-4ff3-af9e-967e904fbecc-on1bbn.jpg",
  "https://utfs.io/f/f259e3f5-ecbf-484e-bb9c-8ab00f7a3170-rghkko.jpg",
  "https://utfs.io/f/bac26f10-aee0-466d-8f10-1a2ac7d059c6-rnavx.jpg",
  "https://utfs.io/f/51fca54d-f48a-4fbd-b3b2-d0de71e18154-mbup56.jpg",
  "https://utfs.io/f/37860a5c-8492-438b-9a6b-cc885ed5b6ab-fhcj2g.jpg",
  "https://utfs.io/f/f8443f3f-f7a6-4493-b71c-c76e519886a3-n86rk3.jpg",
  "https://utfs.io/f/7bbdb54a-dc60-4603-8532-931ea20309c3-x5fs6e.jpg",
  "https://utfs.io/f/24033238-f568-43dd-a2ba-148bb198345e-tdxe4z.jpg",
  "https://utfs.io/f/85f943ea-10c3-4122-88ce-2241331cad13-cb5egl.jpg",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
