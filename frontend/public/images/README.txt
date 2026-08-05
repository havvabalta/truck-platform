GALERİ GÖRSELLERİNİZİ BURAYA EKLEYİN
=====================================

Bu klasör (frontend/public/images) galeri ve hizmet görsellerinizin tutulacağı yerdir.

Create React App'te "public" klasörü içindeki her dosya, uygulamanın kök adresinden
doğrudan erişilebilir. Yani bu klasöre "gallery-1.jpg" koyarsanız, uygulamada
aşağıdaki adresle görüntülenebilir:

    /images/gallery-1.jpg

GÖRSEL EKLEME ADIMLARI
----------------------
1. Görsellerinizi bu klasöre (frontend/public/images) kopyalayın/yapıştırın.
   Önerilen boyut: 1280x720 (16:9) veya 1280x800, max ~500KB.
2. frontend/src/data/cityDelivery.js dosyasını açın.
3. media > gallery dizisine görsel ekleyin:

   gallery: [
     { src: "/images/gallery-1.jpg", title: "Başlık 1" },
     { src: "/images/gallery-2.jpg", title: "Başlık 2" },
   ]

4. Kaydedin. Tarayıcıda otomatik güncellenir.

NOT: Görsel adları /images/ ile başlamalıdır (ör. /images/gallery-1.jpg).
Görsel dosya adı ile src değeri birebir aynı olmalıdır.
