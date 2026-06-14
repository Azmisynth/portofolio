# Portofolio - Rafi Azmi Zafarani - 18224082

https://azmisynth.github.io/portofolio

Website portofolio pribadi yang saya buat untuk menampilkan proyek dan latar belakang di bidang Data Science, Machine Learning, dan Deep Learning.

## Tentang proyek ini

Website ini dibangun menggunakan Next.js dan di-deploy sebagai static site ke GitHub Pages. Tujuannya sederhana: punya satu tempat yang rapi untuk menampilkan portofoilio, lengkap dengan informasi kontak dan riwayat pengalaman.

Konfigurasi `output: "export"` di Next.js membuat seluruh halaman di-render menjadi HTML statis saat build. Tidak ada server yang berjalan saat dibuka, jadi bisa di-hosting di mana saja termasuk GitHub Pages.

## Teknologi yang digunakan

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- GitHub Actions untuk deployment otomatis

## Struktur proyek

```
src/
├── app/
│   ├── layout.tsx      # Layout utama dan metadata halaman
│   ├── page.tsx        # Halaman utama, menyusun semua section
│   └── globals.css     # Styling global
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    └── Contact.tsx
```

## Isi halaman

Satu halaman penuh (single-page) yang terbagi menjadi beberapa section: Header (navigasi), Hero (tampilan utama), About (profil singkat), Experience (pengalaman), Projects (proyek), dan Contact (kontak).

## Deployment

Setiap push ke branch `main` langsung memicu GitHub Actions yang build dan deploy ke GitHub Pages secara otomatis, tanpa langkah manual.

# Video Penjelasan

https://youtu.be/7DJslnmYS6k
