# 📘 Panduan Deploy SIMRS ke GitHub Pages & Google Sites

---

## 🗂️ File yang Perlu Di-upload

```
simrs-keperawatan/
├── index.html          ← Halaman utama / portal
├── style.css           ← Stylesheet bersama
├── asesmen-igd.html    ← Asesmen awal keperawatan IGD
├── trauma.html         ← Form khusus trauma
├── morse.html          ← Asesmen risiko jatuh (Morse)
├── nutrisi.html        ← Skrining nutrisi (MST)
└── discharge.html      ← Discharge planning
```

---

## LANGKAH 1 — Buat Akun GitHub (jika belum punya)

1. Buka **https://github.com**
2. Klik **Sign up** → masukkan email, password, username
3. Verifikasi email Anda

---

## LANGKAH 2 — Buat Repository Baru

1. Setelah login, klik tombol **+** di pojok kanan atas → **New repository**
2. Isi nama repository: `simrs-keperawatan`
3. Pilih **Public** (wajib agar GitHub Pages bisa diakses)
4. Centang **Add a README file**
5. Klik **Create repository**

---

## LANGKAH 3 — Upload Semua File

1. Di halaman repository, klik **Add file** → **Upload files**
2. Drag & drop semua file berikut sekaligus:
   - `index.html`
   - `style.css`
   - `asesmen-igd.html`
   - `trauma.html`
   - `morse.html`
   - `nutrisi.html`
   - `discharge.html`
3. Di bagian bawah, tulis commit message: `Upload form SIMRS keperawatan`
4. Klik **Commit changes**

---

## LANGKAH 4 — Aktifkan GitHub Pages

1. Di halaman repository, klik **Settings** (tab paling kanan)
2. Di menu kiri, klik **Pages**
3. Di bagian **Source**, pilih:
   - Branch: **main**
   - Folder: **/ (root)**
4. Klik **Save**
5. Tunggu 1–3 menit, lalu akan muncul notifikasi:

   > ✅ Your site is live at:
   > **https://username-anda.github.io/simrs-keperawatan/**

6. Catat URL tersebut — ini yang akan di-embed ke Google Sites

---

## LANGKAH 5 — Buat Google Sites

1. Buka **https://sites.google.com**
2. Klik **Blank** atau **+** untuk membuat site baru
3. Beri nama site: misal `SIMRS Asuhan Keperawatan IGD`

### Tambahkan halaman untuk setiap form:
- Di panel kiri, klik **Pages** → **+** → **New page**
- Buat halaman:
  - `Beranda`
  - `Asesmen IGD`
  - `Form Trauma`
  - `Risiko Jatuh`
  - `Skrining Nutrisi`
  - `Discharge Planning`

---

## LANGKAH 6 — Embed Form ke Setiap Halaman Google Sites

Untuk **setiap halaman**, lakukan langkah berikut:

1. Klik halaman yang ingin diisi (misal: **Asesmen IGD**)
2. Di panel kanan, klik **Insert** → **Embed**
3. Pilih tab **By URL**
4. Masukkan URL GitHub Pages sesuai halaman:

| Halaman Google Sites | URL yang di-embed |
|---|---|
| Beranda | `https://username.github.io/simrs-keperawatan/` |
| Asesmen IGD | `https://username.github.io/simrs-keperawatan/asesmen-igd.html` |
| Form Trauma | `https://username.github.io/simrs-keperawatan/trauma.html` |
| Risiko Jatuh | `https://username.github.io/simrs-keperawatan/morse.html` |
| Skrining Nutrisi | `https://username.github.io/simrs-keperawatan/nutrisi.html` |
| Discharge Planning | `https://username.github.io/simrs-keperawatan/discharge.html` |

5. Klik **Insert**
6. Resize kotak embed agar memenuhi layar (seret sudut bawah ke bawah)

---

## LANGKAH 7 — Publish Google Sites

1. Klik tombol **Publish** di pojok kanan atas
2. Masukkan nama URL: misal `simrs-igdku`
3. Klik **Publish**
4. Site Anda live di: `https://sites.google.com/view/simrs-igdku`

---

## ✅ Checklist Sebelum Presentasi ke Penguji

- [ ] Semua file berhasil di-upload ke GitHub
- [ ] GitHub Pages aktif dan semua halaman bisa dibuka
- [ ] Kalkulasi GCS, Morse, ISS, BMI berfungsi otomatis
- [ ] Semua halaman ter-embed di Google Sites
- [ ] Google Sites sudah di-publish
- [ ] Uji coba di HP dan laptop

---

## 🔧 Troubleshooting Umum

| Masalah | Solusi |
|---|---|
| Form tidak muncul di Google Sites | Pastikan repository GitHub **Public**, bukan Private |
| Tampilan terpotong | Resize kotak embed lebih besar, atau scroll di dalam embed |
| Perubahan tidak muncul | GitHub Pages butuh 1–5 menit untuk update, coba Ctrl+Shift+R |
| CSS tidak terbaca | Pastikan `style.css` terupload bersama file HTML lainnya |

---

*Dibuat untuk keperluan sidang SIMRS berbasis Google Sites — Asuhan Keperawatan IGD*
