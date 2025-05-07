import fetchMenu from "./api.js";

import { elements, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  // sayfa yüklendiğinde api isteğini at ve gelen veriyi dataya aktar
  const data = await fetchMenu();

  // card elemanlarını render et
  renderCards(data);

  elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      // inputun id sine eriş
      const selected = input.id;

      // eğer seçili kategori all ise tüm ürünleri render et ama başka bir kategori seçiliyse bu kategorideki ürünleri render et
      if (selected == "all") {
        renderCards(data);
      } else {
        const filtred = data.filter((item) => item.category == selected);

        renderCards(filtred);
      }
    });
  });
});

