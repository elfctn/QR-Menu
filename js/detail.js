import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";

/* çok sayfalı projelerde eğer pek çok eleman için bir sayfayı render edeceksek bu noktoda
sayfa içeriği dinamik şekilde render ederiz. bunu yaparken herbir eleman için url e bir 
parametre geçirilir. devamında bu parametreye sahip ürün verileriyle sayfa renderlanır
*/

// js içerisindeki URLSearchParams clası parametrelerini alıp kullanılması
// noktasında bize klolaylık sağlar
const params = new URLSearchParams(window.location.search);

// Url den gelen gelen id parametresini number a çevir
const id = +params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // sayfa yüklendiğinde api a istek at
  const data = await fetchMenu("../db.json");
  // Url den alınan id ye sahip ürünü bul
  const product = data.find((item) => item.id === id);

  if (!product) {
    // ürün bulunmadıysa not founded içeriğini render et
    renderNotFound(elements.detailContainer)
  } else {
    // detay verisi bilinen ürün ile arayüzü renderla
  renderDetailPage(product, elements.detailContainer);
  }

  
});
