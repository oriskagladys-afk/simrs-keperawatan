# 🔗 Panduan Menghubungkan Form ke Google Sheets

---

## Cara Kerja

```
Perawat isi form → klik "Simpan" → data terkirim otomatis → masuk ke Google Sheets
```

Setiap form punya sheet-nya sendiri di dalam 1 file Google Sheets:
- Sheet **Asesmen_IGD**
- Sheet **Form_Trauma**
- Sheet **Risiko_Jatuh_Morse**
- Sheet **Skrining_Nutrisi_MST**
- Sheet **Discharge_Planning**

---

## LANGKAH 1 — Buat Google Sheets Baru

1. Buka **https://sheets.google.com**
2. Klik **+** untuk buat spreadsheet baru
3. Beri nama: `Database SIMRS Keperawatan IGD`

---

## LANGKAH 2 — Buka Google Apps Script

1. Di Google Sheets, klik menu **Extensions** (Ekstensi)
2. Klik **Apps Script**
3. Akan terbuka tab baru — hapus semua kode yang ada
4. **Copy-paste** seluruh isi file `google-apps-script.js`
5. Klik ikon 💾 **Save** (atau Ctrl+S)
6. Beri nama project: `SIMRS API`

---

## LANGKAH 3 — Deploy sebagai Web App

1. Klik tombol **Deploy** (pojok kanan atas)
2. Pilih **New deployment**
3. Klik ikon ⚙️ di sebelah "Select type" → pilih **Web app**
4. Isi pengaturan:
   - **Description**: `SIMRS API v1`
   - **Execute as**: `Me`
   - **Who has access**: **Anyone** ← *wajib ini*
5. Klik **Deploy**
6. Klik **Authorize access** → pilih akun Google Anda → klik **Allow**
7. Akan muncul **URL** seperti ini:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```
8. **Copy URL tersebut** — ini yang akan dipaste ke form

---

## LANGKAH 4 — Masukkan URL ke Setiap Form

1. Buka salah satu form di browser (misal `asesmen-igd.html`)
2. Di kotak **kuning** di bagian atas form, paste URL Apps Script
3. Klik tombol **Simpan URL**
4. Lakukan hal yang sama di setiap form (URL-nya sama untuk semua form)

> **Catatan:** URL tersimpan di browser. Jika ganti perangkat/browser, perlu paste ulang.

---

## LANGKAH 5 — Uji Coba

1. Isi form asesmen IGD dengan data percobaan
2. Klik **Simpan ke Google Sheets**
3. Muncul notifikasi hijau: **"✅ Data berhasil disimpan"**
4. Buka Google Sheets → cek sheet **Asesmen_IGD** → data sudah masuk!

---

## ✅ Checklist

- [ ] Google Sheets sudah dibuat
- [ ] Apps Script sudah di-paste dan di-save
- [ ] Sudah di-deploy sebagai Web App dengan akses **Anyone**
- [ ] URL sudah di-copy
- [ ] URL sudah di-paste ke kotak kuning di setiap form
- [ ] Uji coba simpan berhasil

---

## ⚠️ Masalah Umum

| Masalah | Solusi |
|---|---|
| Muncul "Gagal menyimpan" | Pastikan URL Apps Script benar & akses = **Anyone** |
| Data tidak muncul di Sheets | Cek tab sheet — nama sheet harus sesuai (Asesmen_IGD, dll.) |
| URL hilang saat buka form baru | Paste ulang URL di kotak kuning, lalu klik Simpan URL |
| Perlu update script | Deploy ulang → **New deployment** (bukan edit existing) |

---

*Panduan ini bagian dari SIMRS Asuhan Keperawatan IGD berbasis Google Sites + GitHub Pages*
