# Portofolio - Rafi Azmi Zafarani

Website portofolio pribadi yang saya buat untuk menampilkan proyek dan latar belakang di bidang Data Science, Machine Learning, dan Deep Learning.

## Tentang proyek ini

Website ini dibangun menggunakan Next.js dan di-deploy sebagai static site ke GitHub Pages. Tujuannya sederhana: punya satu tempat yang rapi untuk menampilkan proyek yang sudah dikerjakan selama kuliah, lengkap dengan informasi kontak dan riwayat pengalaman.

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

Tiga proyek yang ditampilkan:

- AlphaFold 2 Ligand Discovery: memanfaatkan AlphaFold 2 untuk identifikasi ligan baru dalam konteks pasca kemoterapi, menggabungkan prediksi struktur protein dengan pendekatan drug discovery komputasional
- Health Insurance Predictive Model: memprediksi frekuensi dan keparahan klaim asuransi kesehatan menggunakan feature engineering dan ensemble model berbasis XGBoost
- Tuberculosis Diagnostic AI: CNN berbasis TensorFlow untuk diagnosis tuberkulosis dari citra medis, disertai analisis performa dan persepsi sosial terhadap teknologi ini

## Cara menjalankan

Install dependensi:

```bash
npm install
```

Jalankan server pengembangan:

```bash
npm run dev
```

Buka `http://localhost:3000/portofolio` di browser.

Untuk build produksi:

```bash
npm run build
```

Output statis tersimpan di folder `out/`.

## Deployment

Setiap push ke branch `main` langsung memicu GitHub Actions yang build dan deploy ke GitHub Pages secara otomatis, tanpa langkah manual.

## Kontak

- Email: rafiazmizafarani@gmail.com
- GitHub: github.com/Azmisynth
- LinkedIn: linkedin.com/in/rafiazmizafarani
